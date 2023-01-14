import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" max-w-[1200px] mx-auto navbar bg-base-100">
      <div className="flex-1">
        <a href="/" className="font-bold text-2xl cursor-pointer">
          <span className="text-primary">CRUD'S</span> TASK
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/form" className="font-semibold mr-2">Add New</Link>
          </li>
          <li>
          <Link to="/table" className="font-semibold">All Entries</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
