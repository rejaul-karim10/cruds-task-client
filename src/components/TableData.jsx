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
  console.log(selectedRows);

  // console.log(selectedRows);

  // handling checkbox select
  const handleSelect = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter((selectedId) => selectedId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  // sending email by using this endpoint
  const handleSendEmail = () => {
    fetch("https://cruds-task-server.vercel.app/send-email", {
      method: "POST",
      body: JSON.stringify({ selectedRows }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          toast.error("Something Went Wrong");
        } else {
          toast.success(data.message);
        }
      })
      .catch((error) => toast.error(error.message));
  };

  useEffect(() => {
    // loading data from database
    fetch("https://cruds-task-server.vercel.app/entries")
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
    fetch(`https://cruds-task-server.vercel.app/entries/${id}`, {
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

  return (
    <div className="h-screen max-w-[1200px] mx-auto overflow-x-auto w-full py-10">
      <table className="table-auto w-full">
        <thead>
          <tr className="bg-gray-900 text-white text-center">
            <th className="px-2 py-2"></th>
            <th className="px-2 py-2"></th>
            <th className="px-2 py-2">Name</th>
            <th className="px-2 py-2">Phone</th>
            <th className="px-2 py-2">Email</th>
            <th className="px-2 py-2">Hobbies</th>
            <th className="px-2 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, i) => {
            return (
              <tr key={i} className="text-center border">
                <input
                  onClick={() => handleSelect(entry._id)}
                  type="checkbox"
                  className="checkbox checkbox-sm mt-[10px]"
                />
                <th className="p-2">{i + 1}</th>
                <td className="border">{entry.name}</td>
                <td className="border">{entry.phoneNumber}</td>
                <td className="border">{entry.email}</td>
                <td className="border">{entry.hobbies}</td>
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
      <div className="flex justify-between mt-4">
        <button
          disabled={selectedRows.length === 0}
          onClick={handleSendEmail}
          className="btn btn-sm btn-primary mt-2 mr-4"
        >
          Send Email
        </button>
        <label htmlFor="dataModal" className="btn btn-sm btn-primary">
          Add New
        </label>
      </div>
    </div>
  );
};

export default TableData;
