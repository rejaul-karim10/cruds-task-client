import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import AddModalData from "./Modal/AddModalData";
import Spinner from "./Spinner/Spinner";

const TableData = () => {
  const [entries, setEntries] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [isLoading, setLoading] = useState(true);

  const [selectedRows, setSelectedRows] = useState([]);
  const [emailEnabled, setEmailEnabled] = useState(false);

  useEffect(() => {
    // loading data from database
    fetch("http://localhost:5000/entries")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setLoading(false);
          setEntries(data.data);
          setRefresh(!refresh);
        } else {
          toast.error(data.error);
        }
      })
      .catch((error) => {
        setLoading(false);
        toast.error(error.message);
      });
  }, [refresh]);

  // delete specific entry using this endpoint
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/entries/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success(data.message);
          setRefresh(!refresh);
        } else {
          toast.error(data.error);
        }
      })
      .catch((error) => toast.error(error.message));
  };

  const navigate = useNavigate();

  // update specific entry using this endpoint
  const handleUpdate = (id) => {
    navigate(`/table/update/${id}`);
  };

  if (isLoading) {
    return <Spinner />;
  }

  const handleSelect = (id) => {
    setSelectedRows([...selectedRows, id]);
    setEmailEnabled(true);
  };

  const handleSendEmail = () => {
    fetch("http://localhost:5000/send-email", {
      method: "POST",
      body: JSON.stringify({ selectedRows }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success(data.message);
        } else {
          toast.error(data.error);
        }
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <div className="h-screen max-w-[1200px] mx-auto overflow-x-auto w-full py-10">
      <table className="table-auto w-full">
        <thead>
          <tr className="bg-gray-800 text-white">
            <th></th>
            <th></th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Hobbies</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, i) => {
            return (
              <tr key={i}>
                <input
                  onClick={() => handleSelect(entry._id)}
                  type="checkbox"
                  className="checkbox checkbox-sm mt-4"
                />
                <th>{i + 1}</th>
                <td>{entry.name}</td>
                <td>{entry.phoneNumber}</td>
                <td>{entry.email}</td>
                <td>{entry.hobbies}</td>
                <td className="dropdown">
                  <label tabIndex={0} className="btn btn-xs btn-gray-900">
                    Action
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu p-2 shadow bg-base-100 rounded-box"
                  >
                    <button
                      onClick={() => handleUpdate(entry._id)}
                      className="btn btn-xs btn-secondary mt-2"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(entry._id)}
                      className="btn btn-xs btn-error mt-2"
                    >
                      Delete
                    </button>
                  </ul>
                </td>
              </tr>
              
            );
          })}
        </tbody>
      </table>
      <AddModalData />
      <div className="flex justify-between mt-10">
        <div>
          <button
            onClick={handleSendEmail}
            className="btn btn-xs btn-primary mt-2"
            disabled={!emailEnabled}
          >
            Send to Email
          </button>
        </div>
        <div>
          <label htmlFor="dataModal" className="btn btn-sm btn-primary">
            Add New
          </label>
        </div>
      </div>
    </div>
  );
};

export default TableData;
