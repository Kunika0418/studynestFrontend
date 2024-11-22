import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="max-w-screen-xl mx-10 px-6 flex justify-between">
        {/* Column 1: Contact Information */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
          <p className="mb-2">Email: contact@studynest.com</p>
          <p className="mb-2">Phone: +1 (123) 456-7890</p>
          <p className="mb-2">Address: 123 Apartment St, City, Country</p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
          <ul>
            <li><a href="/" className="text-gray-300 hover:text-white transition">Home</a></li>
            <li><a href="/Property" className="text-gray-300 hover:text-white transition">Property</a></li>
            <li><a href="/Services" className="text-gray-300 hover:text-white transition">Services</a></li>
            <li><a href="/About" className="text-gray-300 hover:text-white transition">About Us</a></li>
            <li><a href="/Contact" className="text-gray-300 hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Social Media */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition">
              <FaFacebook size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition">
              <FaTwitter size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition">
              <FaInstagram size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section: Copyright */}
      <div className="m-10">
        <p className="text-gray-400 px-6">&copy; 2024 StudyNest. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
