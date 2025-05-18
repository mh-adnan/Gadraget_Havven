import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-purple-700 to-indigo-700 bg-opacity-95 shadow-md backdrop-blur-lg border-b border-white/20 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand */}
        <NavLink
          to="/"
          className="text-3xl font-extrabold text-white tracking-wider hover:text-yellow-300 transition duration-300"
        >
          Gadget<span className="text-yellow-300">Haven</span>
        </NavLink>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex gap-8 text-white font-semibold text-lg">
          <li>
            <NavLink
              to="/"
              className="hover:text-yellow-300 hover:scale-105 transition duration-200"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/st"
              className="hover:text-yellow-300 hover:scale-105 transition duration-200"
            >
              Statistics
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/db"
              className="hover:text-yellow-300 hover:scale-105 transition duration-200"
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/ac"
              className="hover:text-yellow-300 hover:scale-105 transition duration-200"
            >
              Accessories
            </NavLink>
          </li>
        </ul>

        {/* Cart & Wishlist Buttons */}
        <div className="flex gap-4 items-center">
          <NavLink
            to="/wishlist"
            className="text-lg font-semibold border-2 border-white text-white px-4 py-2 rounded-full hover:bg-pink-400 hover:text-black transition duration-300"
          >
            ❤️ Wishlist
          </NavLink>
          <NavLink
            to="/cart"
            className="text-lg font-semibold border-2 border-white text-white px-4 py-2 rounded-full hover:bg-yellow-300 hover:text-black transition duration-300"
          >
            🛒 Cart
          </NavLink>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow bg-white text-black rounded-box w-56 font-medium"
          >
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/st">Statistics</NavLink></li>
            <li><NavLink to="/db">Dashboard</NavLink></li>
            <li><NavLink to="/ac">Accessories</NavLink></li>
            <li><NavLink to="/wishlist">❤️ Wishlist</NavLink></li>
            <li><NavLink to="/cart">🛒 Cart</NavLink></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
