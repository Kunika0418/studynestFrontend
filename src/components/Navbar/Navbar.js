// components/Navbar.jsx
import React, { useState, Fragment, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdPerson } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa"; // WhatsApp Icon
import logo from "../../assets/logo/logo.jpg";
import AuthModal from "../Login/Modal";
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import { toast } from "react-toastify";
import { IoMenu, IoClose } from "react-icons/io5";
import EnhancedSearch from "../EnhancedSearch/EnhancedSearch";

import "./Navbar.css";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // Manage modal visibility
  const [isSearchOpen, setIsSearchOpen] = useState(false); // Manage modal visibility
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();
  const searchContainerRef = useRef(null);
  const searchMobileContainerRef = useRef(null);
  const searchMobileInputRef = useRef(null);
  const searchInputRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchTerm(query);
  };

  const handleFocus = () => {
    setIsSearchOpen(true);
  };

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

  // Handle click outside search
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target) &&
        searchMobileContainerRef.current &&
        !searchMobileContainerRef.current.contains(event.target)
      ) {
        setIsSearchOpen(false);
        setSearchTerm("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <div className="bg-offwhite/50 bg-opacity-30 backdrop-blur-lg sticky top-0 z-20 shadow-md border-b-2 border-pink">
        <nav className="navbar flex justify-between items-center xs:px-4 md:px-6 py-3 shadow-md">
          <Link
            to={"/"}
            className="flex justify-center items-center space-x-3 px-1"
          >
            <div className="w-12 h-12 overflow-hidden rounded-full">
              <img
                src={logo}
                alt="StudyNest Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-lg sm:text-3xl font-semibold font-sans text-voilet">
              StudyNests
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex justify-center items-center xl:gap-10 lg:gap-6 w-full max-w-5xl">
            <li className="relative w-full">
              <div className="w-full h-auto flex justify-center items-center relative">
                <div className="w-full max-w-2xl">
                  <div
                    className={`flex items-center ${
                      isSearchOpen ? "justify-center" : "justify-end"
                    }`}
                  >
                    <input
                      ref={searchInputRef}
                      type="text"
                      placeholder="Enter city, country, or name"
                      value={searchTerm}
                      onChange={handleChange}
                      onFocus={handleFocus} // Open modal when focused
                      className={`transition-all duration-300 w-full py-3 px-4 border border-gray-300 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-voilet ${
                        isSearchOpen ? "w-full xl:w-96 lg:w-[21rem]" : "lg:w-72"
                      }`}
                    />
                  </div>
                </div>
                {/* Mobile Centered Search Modal */}
                {isSearchOpen && (
                  <div className="absolute inset-0 flex justify-center z-50 w-full max-w-4xl">
                    {/* Background Overlay */}
                    <div
                      className="absolute inset-0 min-h-screen w-full" // Semi-transparent black background
                      onClick={() => setIsSearchOpen(false)} // Close the modal if clicked outside
                    ></div>

                    {/* Modal Content */}
                    <div
                      ref={searchContainerRef}
                      className="absolute top-10 z-10 w-full max-w-2xl mt-2"
                    >
                      <EnhancedSearch
                        searchTerm={searchTerm}
                        isOpen={isSearchOpen}
                        onClose={() => {
                          setIsSearchOpen(false);
                          setSearchTerm("");
                        }}
                      />
                    </div>
                  </div>
                )}
              </div>
            </li>
            <li>
              <a
                href="https://api.whatsapp.com/send?phone=918882487126" // Replace with your WhatsApp number
                target="_blank"
                rel="noopener noreferrer"
                className="text-voilet hover:text-voilet/80 transition duration-300 relative"
              >
                <FaWhatsapp size={24} />
              </a>
            </li>
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
            {/* WhatsApp Icon */}
            <li className="flex justify-center items-center">
              {/* Login/Logout Button */}
              {localStorage.getItem("token") && (
                <Popover className="relative">
                  <PopoverButton className="text-gray-700 hover:text-voilet text-2xl transition duration-300 mt-2 outline-none">
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
                      className="flex flex-col justify-center items-center gap-1 bg-offwhite/80 border border-voilet rounded-xl p-2 w-32 z-20 mt-4 -ml-4"
                    >
                      <Link
                        className="hover:bg-voilet hover:text-white transition duration-300 ease-in-out cursor-pointer w-full px-4 py-2 rounded-xl text-center font-sans font-medium"
                        to={"/Profile"}
                      >
                        Profile
                      </Link>
                      <div
                        className="hover:bg-voilet hover:text-white transition duration-300 ease-in-out cursor-pointer w-full px-4 py-2 rounded-xl text-center font-sans font-medium"
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
                  className="bg-pink text-white px-3 w-[10rem] py-2 rounded-md font-medium hover:bg-darkpink transition-colors duration-300"
                  aria-label={isLoggedIn ? "Logout" : "Login"}
                >
                  Login / SignUp
                </button>
              )}
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex gap-2">
            <div className="w-full h-auto flex justify-center items-center">
              <div className="w-full max-w-lg relative">
                <div className="relative flex items-center">
                  <input
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={handleChange}
                    onFocus={handleFocus} // Open modal when focused
                    className="xs:w-[8rem] md:w-full py-2 px-4 border border-gray-300 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-voilet transition-all duration-300"
                  />
                </div>
              </div>
              {/* Mobile Search Modal */}
              {isSearchOpen && (
                <div className="absolute inset-0 flex justify-center items-start z-50">
                  {/* Background Overlay */}
                  <div
                    className="absolute inset-0 bg-black opacity-30 min-h-screen" // Semi-transparent black background
                    onClick={() => setIsSearchOpen(false)} // Close the modal if clicked outside
                  ></div>

                  {/* Modal Content */}
                  <div
                    ref={searchMobileContainerRef}
                    className="relative z-10 w-full max-w-md mt-2"
                  >
                    <EnhancedSearch
                      searchTerm={searchTerm}
                      isOpen={isSearchOpen}
                      onClose={() => {
                        setIsSearchOpen(false);
                        setSearchTerm("");
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
            <button
              onClick={toggleMenu}
              className="text-2xl text-gray-700"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <IoClose /> : <IoMenu />}
            </button>
          </div>
        </nav>

        {/* Mobile Nav Links */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white p-4 shadow-lg absolute w-full z-10">
            <ul>
              <li className="py-2">
                <a
                  href="https://api.whatsapp.com/send?phone=918882487126" // Replace with your WhatsApp number
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-voilet hover:text-voilet/80 transition duration-300"
                >
                  <FaWhatsapp size={24} />
                </a>
              </li>
              <li className="py-2">
                <Link
                  to={"/Property"}
                  onClick={toggleMenu}
                  className="block text-voilet hover:text-pink transition duration-300"
                >
                  Property
                </Link>
              </li>
              <li className="py-2">
                <Link
                  to={"/Services"}
                  onClick={toggleMenu}
                  className="block text-voilet hover:text-pink transition duration-300"
                >
                  Services
                </Link>
              </li>
              <li className="py-2">
                {/* Login/Logout Button for Mobile */}

                {localStorage.getItem("token") && (
                  <Popover className="relative">
                    <PopoverButton className="text-gray-700 hover:text-voilet text-2xl transition duration-300 mt-2 outline-none">
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
                        className="flex flex-col justify-center items-center gap-1 bg-offwhite/80 border border-voilet rounded-xl p-2 w-32 z-20 mt-4 -ml-4"
                      >
                        <Link
                          onClick={toggleMenu}
                          className="hover:bg-voilet hover:text-white transition duration-300 ease-in-out cursor-pointer w-full px-4 py-2 rounded-xl text-center font-sans font-medium"
                          to={"/Profile"}
                        >
                          Profile
                        </Link>
                        <div
                          className="hover:bg-voilet hover:text-white transition duration-300 ease-in-out cursor-pointer w-full px-4 py-2 rounded-xl text-center font-sans font-medium"
                          onClick={() => {
                            handleLogOut();
                            toggleMenu();
                          }}
                        >
                          Log Out
                        </div>
                      </PopoverPanel>
                    </Transition>
                  </Popover>
                )}

                {!localStorage.getItem("token") && (
                  <button
                    onClick={() => {
                      handleLoginLogout();
                      toggleMenu();
                    }}
                    className="text-voilet hover:text-pink"
                  >
                    Login / SignUp
                  </button>
                )}
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
