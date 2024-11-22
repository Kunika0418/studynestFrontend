import React from 'react';
import { IoMdPerson } from 'react-icons/io';
import logo from '../../assets/logo/logo.jpg';

const Navbar = () => {
  return (
    <div className="bg-light sticky top-0 z-9999 shadow-md">
      <nav className="navbar flex justify-between items-center px-6 py-3 shadow-md">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12">
            <img
              src={logo}
              alt="StudyNest Logo"
              className="w-full h-full object-contain rounded-full"
            />
          </div>
          <a
            href="/"
            className="text-xl font-bold text-gray-800 hover:text-amber-800 transition duration-300"
          >
            StudyNest
          </a>
        </div>

        <ul className="flex items-center space-x-6">
          <li>
            <a
              href="/Property"
              className="text-gray-700 hover:text-amber-800 transition duration-300"
            >
              Property
            </a>
          </li>
          <li>
            <a
              href="/Services"
              className="text-gray-700 hover:text-amber-800 transition duration-300"
            >
              Services
            </a>
          </li>
          <li>
            <button
              className="text-gray-700 hover:text-amber-800 text-2xl transition duration-300"
              aria-label="User Account"
            >
              <IoMdPerson />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
