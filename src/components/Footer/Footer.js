import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="bg-voilet text-white py-10">
      <div className="max-w-screen-xl mx-10 sm:px-4 flex justify-between">
        {/* Column 1: Contact Information */}
        <div className="px-4">
          <h3 className="text-2xl text-pink font-bold mb-4">Contact Us</h3>
          <p className="mb-2 cursor-pointer">
            Email:{" "}
            <span className="link relative transition duration-300 ease-in-out">
              contact@studynest.com
            </span>
          </p>
          <p className="mb-2 cursor-pointer">
            Phone:{" "}
            <span className="link relative transition duration-300 ease-in-out">
              +1 (123) 456-7890
            </span>
          </p>
          <p className="mb-2 cursor-pointer">
            Address:{" "}
            <span className="link relative transition duration-300 ease-in-out">
              123 Apartment St, City, Country
            </span>
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="xs:hidden sm:block">
          <h3 className="text-2xl text-pink font-bold mb-4">Quick Links</h3>
          <ul className="flex flex-col gap-1">
            <li>
              <Link
                to="/"
                className="link relative text-bg-100 transition duration-300 ease-in-out"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/Property"
                className="link relative text-bg-100 transition duration-300 ease-in-out"
              >
                Property
              </Link>
            </li>
            <li>
              <Link
                to="/Services"
                className="link relative text-bg-100 transition duration-300 ease-in-out"
              >
                Services
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Social Media */}
        <div>
          <h3 className="text-2xl text-pink font-bold mb-4">Follow Us</h3>
          <div className="grid xs:grid-cols-2 md:grid-flow-col gap-4">
            <Link
              to="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition duration-500 ease-in-out"
            >
              <FaFacebook size={24} />
            </Link>
            <Link
              to="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition duration-500 ease-in-out"
            >
              <FaXTwitter size={24} />
            </Link>
            <Link
              to="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white  duration-500 ease-in-out"
            >
              <FaInstagram size={24} />
            </Link>
            <Link
              to="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition duration-500 ease-in-out"
            >
              <FaLinkedin size={24} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Section: Copyright */}
      <div className="sm:m-10 xs:m-4">
        <p className="text-bg-200 px-6">
          &copy; 2024 StudyNest. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
