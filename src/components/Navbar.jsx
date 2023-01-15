import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="max-w-[1200px] mx-auto navbar bg-base-100">
      <div className="flex-1">
        <Link to="/" className="font-bold text-2xl text-primary mr-2">
          CRUD<span className="text-secondary">S</span>
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/entries" className="font-semibold mr-2">
              Add New
            </Link>
          </li>
          <li>
            <Link to="/table" className="font-semibold">
              All Entries
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
