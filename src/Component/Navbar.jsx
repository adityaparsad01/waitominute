import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          <NavLink className="text-2xl font-bold text-gray-800" to="/">
            waitominute
          </NavLink>
          <button
            className="block lg:hidden text-gray-800 focus:outline-none"
            type="button"
            aria-label="Toggle navigation"
          >
            <span className="material-icons">menu</span>
          </button>
          <div className="hidden lg:flex space-x-4">
            <NavLink
              exact
              activeClassName="font-bold border-b-2 border-blue-500"
              className="text-gray-600 hover:text-blue-500"
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              exact
              activeClassName="font-bold border-b-2 border-blue-500"
              className="text-gray-600 hover:text-blue-500"
              to="/products"
            >
              Products
            </NavLink>
            <NavLink
              exact
              activeClassName="font-bold border-b-2 border-blue-500"
              className="text-gray-600 hover:text-blue-500"
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              exact
              activeClassName="font-bold border-b-2 border-blue-500"
              className="text-gray-600 hover:text-blue-500"
              to="/contact"
            >
              Contact
            </NavLink>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
