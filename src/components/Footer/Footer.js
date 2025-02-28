import React from "react";
import { 
  FaFacebook, 
  FaInstagram, 
  FaLinkedin, 
  FaYoutube, 
  FaEnvelope, 
  FaPhoneAlt, 
  FaMapMarkerAlt
} from "react-icons/fa";
import { SiTrustpilot } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  const socialLinks = [
    { 
      icon: FaFacebook, 
      href: "https://facebook.com/studynest", 
      ariaLabel: "Facebook" 
    },
    { 
      icon: FaXTwitter, 
      href: "https://twitter.com/studynest", 
      ariaLabel: "Twitter" 
    },
    { 
      icon: FaInstagram, 
      href: "https://www.instagram.com/studynests.global", 
      ariaLabel: "Instagram" 
    },
    { 
      icon: FaLinkedin, 
      href: "https://linkedin.com/company/studynest", 
      ariaLabel: "LinkedIn" 
    },
    { 
      icon: FaYoutube, 
      href: "https://www.youtube.com/@studynest.global", 
      ariaLabel: "YouTube" 
    },
    { 
      icon: SiTrustpilot, 
      href: "https://www.trustpilot.com/review/www.studynests.com", 
      ariaLabel: "TrustPilot" 
    }
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Property", path: "/property" },
    { name: "Become a Partner", path: "/services" },
    { name: "Blog", path: "/blog" }
  ];

  return (
    <footer className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-4 text-white">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-pink-300" />
                <a 
                  href="mailto:hello@studynests.com" 
                  className="hover:text-pink-200 transition-colors"
                >
                  Hello@studynests.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhoneAlt className="text-pink-300" />
                <a 
                  href="tel:+918882487126" 
                  className="hover:text-pink-200 transition-colors"
                >
                  +91 888 248 7126
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-pink-300" />
                <span className="text-sm">
                  Shop no-1, Prafull Plaza, Tajnagari Phase-2, 
                  Fatehabad Road, Agra 282001
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="hover:text-pink-200 transition-colors flex items-center space-x-2"
                  >
                    <span className="w-2 h-2 bg-pink-300 rounded-full"></span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-4 text-white">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, ariaLabel }) => (
                <a
                  key={ariaLabel}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={ariaLabel}
                  className="text-white hover:text-pink-200 transition-colors transform hover:scale-110"
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-purple-500 text-center">
          <p className="text-sm text-gray-300">
            &copy; {new Date().getFullYear()} StudyNest. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;