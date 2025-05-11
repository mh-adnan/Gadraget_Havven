import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-purple-600 text-white shadow-sm mb-0">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white text-black rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/st">Statistics</NavLink></li>
            <li><NavLink to="/db">Dashboard</NavLink></li>
            <li><NavLink to="/ac">Accessories</NavLink></li>
          </ul>
        </div>
        <NavLink to="/" className="btn btn-ghost text-xl text-white">GadgetShop</NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/st">Statistics</NavLink></li>
          <li><NavLink to="/db">Dashboard</NavLink></li>
          <li><NavLink to="/ac">Accessories</NavLink></li>
        </ul>
      </div>
      <div className="navbar-end">
        <NavLink to="/cart" className="btn btn-outline btn-white text-white border-white hover:bg-white hover:text-purple-700">
          {/* Cart */}
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
