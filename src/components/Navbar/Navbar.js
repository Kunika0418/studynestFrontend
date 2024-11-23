// components/Navbar.jsx
import React, { useState } from 'react';
import { IoMdPerson } from 'react-icons/io';
import { IoIosLogIn } from "react-icons/io";
import logo from '../../assets/logo/logo.jpg';
import AuthModal from '../Login/Modal';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // Manage modal visibility
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLoginLogout = () => {
    if (isLoggedIn) {
      setIsLoggedIn(false); // Handle logout
    } else {
      setIsModalOpen(true); // Open modal for login/signup
    }
  };

  return (
    <div className="bg-white sticky top-0 z-20 shadow-md">
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

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center space-x-6">
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
            {/* Login/Logout Button */}
            <button
              onClick={handleLoginLogout}
              className="text-gray-700 hover:text-amber-800 text-2xl transition duration-300"
              aria-label={isLoggedIn ? 'Logout' : 'Login'}
            >
              {isLoggedIn ? <IoIosLogIn/> : <IoMdPerson />}
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl text-gray-700"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? 'X' : '☰'}
        </button>
      </nav>

      {/* Mobile Nav Links */}
      {isMenuOpen && (
        <div className="md:hidden bg-white p-4 shadow-lg">
          <ul>
            <li className="py-2">
              <a
                href="/Property"
                className="block text-gray-700 hover:text-amber-800 transition duration-300"
              >
                Property
              </a>
            </li>
            <li className="py-2">
              <a
                href="/Services"
                className="block text-gray-700 hover:text-amber-800 transition duration-300"
              >
                Services
              </a>
            </li>
            <li className="py-2">
              {/* Login/Logout Button for Mobile */}
              <button
                onClick={handleLoginLogout}
                className="text-gray-700 hover:text-amber-800"
              >
                {isLoggedIn ? 'Logout' : 'Login'}
              </button>
            </li>
          </ul>
        </div>
      )}

      {/* Modal for Login/Signup */}
      <AuthModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)} // Close the modal
      />
    </div>
  );
};

export default Navbar;
