import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../Assets/logoo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="border-gray-200 bg-gray-600 h-30">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/home">
            <img
              src={logo}
              className="w-28 opacity-80 hover:opacity-100 cursor-pointer"
              alt="Logo"
            />
          </Link>

          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } w-full md:block md:w-auto`}
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border- border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0">
              <li>
                <Link
                  to="/admin"
                  className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0 dark:text-white md:dark:text-blue-500"
                  aria-current="page"
                >
                  <i className="fa-solid fa-lock"></i>
                </Link>
              </li>
              <li>
                <Link
                  to="/home"
                  className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0 dark:text-white md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contact
                </Link>
                
              </li>
              <li>
              <Link to="/product" 
              className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Products
              </Link>
              </li>
             
             
              <li>
                <Link
                  to="/signup"
                  className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0 dark:text-white md:dark:text-blue-500"
                  aria-current="page"
                >
                  <i className="fa-solid fa-user-plus"></i>
                </Link>
              </li>
              <li>
                <Link
                  to="/cart"
                  className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0 dark:text-white md:dark:text-blue-500"
                  aria-current="page"
                >
                  <i className="fa-solid fa-cart-shopping"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
