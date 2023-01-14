import React from "react";
import AddModalData from "./Modal/AddModalData";

const TableData = () => {
  return (
    <div className="h-[800px] max-w-[1200px] mx-auto overflow-x-auto w-full">
      <table className="table table-compact w-full">
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th>Name</th>
            <th>Phone Nmber</th>
            <th>Email</th>
            <th>Hobbies</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <input type="checkbox" className="checkbox checkbox-sm mt-2" />
            <th>1</th>
            <td>Aryana Grande</td>
            <td>+60828373767</td>
            <td>ariyana@grande.com</td>
            <td>Littel, Schaden and Vandervort</td>
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-xs btn-gray-900">
                Action
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box"
              >
                <button className="btn btn-xs btn-secondary mt-2">
                  Update
                </button>
                <button className="btn btn-xs btn-error mt-2">Delete</button>
              </ul>
            </div>
          </tr>

          <tr>
            <input type="checkbox" className="checkbox checkbox-sm mt-2" />
            <th>1</th>
            <td>Aryana Grande</td>
            <td>+60828373767</td>
            <td>ariyana@grande.com</td>
            <td>Littel, Schaden and Vandervort</td>
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-xs btn-gray-900">
                Action
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box"
              >
                <button className="btn btn-xs btn-secondary mt-2">
                  Update
                </button>
                <button className="btn btn-xs btn-error mt-2">Delete</button>
              </ul>
            </div>
          </tr>

          <tr>
            <input type="checkbox" className="checkbox checkbox-sm mt-2" />
            <th>1</th>
            <td>Aryana Grande</td>
            <td>+60828373767</td>
            <td>ariyana@grande.com</td>
            <td>Littel, Schaden and Vandervort</td>
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-xs btn-gray-900">
                Action
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box"
              >
                <button className="btn btn-xs btn-secondary mt-2">
                  Update
                </button>
                <button className="btn btn-xs btn-error mt-2">Delete</button>
              </ul>
            </div>
          </tr>

          <tr>
            <input type="checkbox" className="checkbox checkbox-sm mt-2" />
            <th>1</th>
            <td>Aryana Grande</td>
            <td>+60828373767</td>
            <td>ariyana@grande.com</td>
            <td>Littel, Schaden and Vandervort</td>
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-xs btn-gray-900">
                Action
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box"
              >
                <button className="btn btn-xs btn-secondary mt-2">
                  Update
                </button>
                <button className="btn btn-xs btn-error mt-2">Delete</button>
              </ul>
            </div>
          </tr>

          <tr>
            <input type="checkbox" className="checkbox checkbox-sm mt-2" />
            <th>1</th>
            <td>Aryana Grande</td>
            <td>+60828373767</td>
            <td>ariyana@grande.com</td>
            <td>Littel, Schaden and Vandervort</td>
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-xs btn-gray-900">
                Action
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box"
              >
                <button className="btn btn-xs btn-secondary mt-2">
                  Update
                </button>
                <button className="btn btn-xs btn-error mt-2">Delete</button>
              </ul>
            </div>
          </tr>
        </tbody>
      </table>
      <AddModalData />
      <div className="flex justify-between mt-10">
        <div>
          <button className="btn btn-primary">Send</button>
        </div>
        <div>
          <label htmlFor="dataModal" className="btn btn-primary">
            Add
          </label>
        </div>
      </div>
    </div>
  );
};

export default TableData;
