import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-purple-600 to-indigo-600 bg-opacity-90 shadow-md backdrop-blur-lg border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* Brand */}
        <NavLink to="/" className="text-2xl font-bold text-white tracking-wide hover:text-yellow-300 transition duration-300">
          Gadget<span className="text-yellow-300">Haven</span>
        </NavLink>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex gap-6 text-white font-medium">
          <li><NavLink to="/" className="hover:text-yellow-300 transition duration-200">Home</NavLink></li>
          <li><NavLink to="/st" className="hover:text-yellow-300 transition duration-200">Statistics</NavLink></li>
          <li><NavLink to="/db" className="hover:text-yellow-300 transition duration-200">Dashboard</NavLink></li>
          <li><NavLink to="/ac" className="hover:text-yellow-300 transition duration-200">Accessories</NavLink></li>
        </ul>

        {/* Cart Button */}
        <NavLink
          to="/cart"
          className="btn btn-sm border border-white text-white hover:bg-yellow-300 hover:text-black transition duration-300"
        >
          Cart
        </NavLink>

        {/* Mobile Menu */}
        <div className="lg:hidden dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white text-black rounded-box w-52"
          >
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/st">Statistics</NavLink></li>
            <li><NavLink to="/db">Dashboard</NavLink></li>
            <li><NavLink to="/ac">Accessories</NavLink></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
