import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a href="/" className="font-bold text-2xl cursor-pointer">
          CRUD'S TASK
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="/">Table</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
