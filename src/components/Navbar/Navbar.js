// components/Navbar.jsx
import React, { useState, Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdPerson } from "react-icons/io";
import logo from "../../assets/logo/logo.jpg";
import AuthModal from "../Login/Modal";
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import { toast } from "react-toastify";

import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // Manage modal visibility
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLoginLogout = () => {
    if (isLoggedIn) {
      setIsLoggedIn(false); // Handle logout
    } else {
      setIsModalOpen(true); // Open modal for login/signup
    }
  };

  const handleLogOut = () => {
    localStorage.removeItem("token");
    toast.success("Logged out successfully");
    navigate("/");
  };

  return (
    <>
      <div className="bg-white/30 bg-opacity-30 backdrop-blur-lg sticky top-0 z-20 shadow-md border-b-2 border-pink">
        <nav className="navbar flex justify-between items-center px-6 py-3 shadow-md">
          <Link to={"/"} className="flex justify-center items-center space-x-3">
            <div className="w-12 h-12">
              <img
                src={logo}
                alt="StudyNest Logo"
                className="w-full h-full object-contain rounded-full"
              />
            </div>
            <div className="text-3xl font-semibold font-sans text-pink">
              StudyNest
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex justify-center items-center gap-10">
            <li>
              <Link
                to={"/Property"}
                className="link_nav relative text-voilet text-base font-medium hover:text-voilet/80 transition duration-300"
              >
                Property
              </Link>
            </li>
            <li>
              <Link
                to={"/Services"}
                className="link_nav relative text-voilet text-base font-medium hover:text-voilet/80 transition duration-300"
              >
                Services
              </Link>
            </li>
            <li className="flex justify-center items-center">
              {/* Login/Logout Button */}
              {localStorage.getItem("token") && (
                <Popover className="relative">
                  <PopoverButton className="text-gray-700 hover:text-primary-100 text-2xl transition duration-300 mt-2 outline-none">
                    <IoMdPerson />
                  </PopoverButton>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <PopoverPanel
                      anchor="bottom"
                      className="flex flex-col justify-center items-center gap-1 bg-white border border-primary-100 rounded-xl p-2 w-32 z-20 mt-4 -ml-4"
                    >
                      <Link
                        className="hover:bg-primary-100 hover:text-bg-100 transition duration-300 ease-in-out cursor-pointer w-full px-4 py-2 rounded-xl text-center font-sans font-medium"
                        to={"/Profile"}
                      >
                        Profile
                      </Link>
                      <div
                        className="hover:bg-primary-100 hover:text-bg-100 transition duration-300 ease-in-out cursor-pointer w-full px-4 py-2 rounded-xl text-center font-sans font-medium"
                        onClick={handleLogOut}
                      >
                        Log Out
                      </div>
                    </PopoverPanel>
                  </Transition>
                </Popover>
              )}
              {!localStorage.getItem("token") && (
                <button
                  onClick={handleLoginLogout}
                  className="bg-pink text-white px-3 py-2 rounded-md font-medium hover:bg-darkpink transition-colors duration-300"
                  aria-label={isLoggedIn ? "Logout" : "Login"}
                >
                  Login / SignUp
                </button>
              )}
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
      {isModalOpen && (
        <AuthModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)} // Close the modal
        />
      )}
    </>
  );
};

export default Navbar;
