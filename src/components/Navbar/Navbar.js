// components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdPerson } from "react-icons/io";
import { IoIosLogIn } from "react-icons/io";
import logo from "../../assets/logo/logo.jpg";
import AuthModal from "../Login/Modal";

import "./Navbar.css";

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
    <>
      <div className="bg-white/30 bg-opacity-30 backdrop-blur-lg sticky top-0 z-20 shadow-md">
        <nav className="navbar flex justify-between items-center px-6 py-3 shadow-md">
          <Link to={"/"} className="flex justify-center items-center space-x-3">
            <div className="w-12 h-12">
              <img
                src={logo}
                alt="StudyNest Logo"
                className="w-full h-full object-contain rounded-full"
              />
            </div>
            <div className="text-xl font-semibold font-sans text-primary-100">
              StudyNest
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex justify-center items-center gap-10">
            <li>
              <Link
                to={"/Property"}
                className="link_nav relative text-accent-100 hover:text-primary-100 transition duration-300"
              >
                Property
              </Link>
            </li>
            <li>
              <Link
                to={"/Services"}
                className="link_nav relative text-accent-100 hover:text-primary-100 transition duration-300"
              >
                Services
              </Link>
            </li>
            <li className="flex justify-center items-center">
              {/* Login/Logout Button */}
              <button
                onClick={handleLoginLogout}
                className="text-gray-700 hover:text-primary-100 text-2xl transition duration-300"
                aria-label={isLoggedIn ? "Logout" : "Login"}
              >
                {isLoggedIn ? <IoIosLogIn /> : <IoMdPerson />}
              </button>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-2xl text-gray-700"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? "X" : "☰"}
          </button>
        </nav>

        {/* Mobile Nav Links */}
        {isMenuOpen && (
          <div className="md:hidden bg-white p-4 shadow-lg">
            <ul>
              <li className="py-2">
                <Link
                  to={"/Property"}
                  className="block text-gray-700 hover:text-primary-100 transition duration-300"
                >
                  Property
                </Link>
              </li>
              <li className="py-2">
                <Link
                  to={"/Services"}
                  className="block text-gray-700 hover:text-primary-100 transition duration-300"
                >
                  Services
                </Link>
              </li>
              <li className="py-2">
                {/* Login/Logout Button for Mobile */}
                <button
                  onClick={handleLoginLogout}
                  className="text-gray-700 hover:text-amber-800"
                >
                  {isLoggedIn ? "Logout" : "Login"}
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
      {/* Modal for Login/Signup */}
      {isModalOpen && <AuthModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)} // Close the modal
      />}
    </>
  );
};

export default Navbar;
