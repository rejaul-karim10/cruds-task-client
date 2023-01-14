import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import AddModalData from "./Modal/AddModalData";

const TableData = () => {
  const [hobbies, setHobbies] = useState([]);
  const [refresh, setRefresh]= useState(false)

  useEffect(() => {
    fetch("http://localhost:5000/hobbies")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setHobbies(data.data);
          setRefresh(!refresh)
        } else {
          toast.error(data.error);
        }
      })
      .catch((error) => toast.error(error.message));
  }, [refresh]);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/hobbies/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success(data.message);
          setRefresh(!refresh)
        } else {
          toast.error(data.error);
        }
      })
      .catch((error) => toast.error(error.message));
  };

  const navigate = useNavigate()
  const handleUpdate =(id)=>{
   navigate(`/table/update/${id}`)
  }
  return (
    <div className="h-[800px] max-w-[1200px] mx-auto overflow-x-auto w-full py-10">
      <table className="table table-compact w-full">
        <thead>
          <tr>
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
          {hobbies.map((hobby, i) => {
            return (
              <tr>
                <input type="checkbox" className="checkbox checkbox-sm mt-2" />
                <th>{i + 1}</th>
                <td>{hobby.name}</td>
                <td>{hobby.phoneNumber}</td>
                <td>{hobby.email}</td>
                <td>{hobby.hobbies}</td>
                <div className="dropdown">
                  <label tabIndex={0} className="btn btn-xs btn-gray-900">
                    Action
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu p-2 shadow bg-base-100 rounded-box"
                  >
                    <button
                    onClick={() => handleUpdate(hobby._id)}
                    className="btn btn-xs btn-secondary mt-2">
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(hobby._id)}
                      className="btn btn-xs btn-error mt-2"
                    >
                      Delete
                    </button>
                  </ul>
                </div>
              </tr>
            );
          })}
        </tbody>
      </table>
      <AddModalData />
      <div className="flex justify-between mt-10">
        <div>
          <button className="btn btn-sm btn-primary">Send to Email</button>
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
