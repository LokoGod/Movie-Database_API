import React from "react";
import { FaAlignLeft, FaRadiation, FaPlus } from "react-icons/fa6";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <FaAlignLeft />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Homepage</a>
              </li>
              <li>
                <a>Portfolio</a>
              </li>
              <li>
                <a>About</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a href="/dashboard" className="btn btn-ghost text-xl">
            Movie Library
          </a>
        </div>
        <div className="navbar-end">
          <a href="dashboard/addMovie" className="btn btn-ghost btn-circle">
            <FaPlus />
          </a>
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <FaRadiation />
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
