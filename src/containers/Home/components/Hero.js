import React, { useEffect, useRef, useState } from "react";
import EnhancedSearch from "../../../components/EnhancedSearch/EnhancedSearch";
import { FaSearch } from "react-icons/fa";
import "../Home.css";


const Hero = ({ searchTerm, handleChange, bannerVideo, setSearchTerm }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const inputRef = useRef(null);

  // Handler to open modal when the search input is focused
  const handleFocus = () => {
    setIsModalOpen(true);
  };

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setIsModalOpen(false);
        setSearchTerm("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen bg-bg-300 relative">
        {/* Added pt-20 for spacing */}
        <div className="w-full h-full absolute top-0 z-0">
          <video
            src={bannerVideo}
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            preload="auto"
          />
        </div>
        {/* <div className="absolute w-full h-full bg-white/30 bg-opacity-30 z-0"></div> */}
        {/* Header Section */}
        <div className="w-full max-w-6xl text-center px-6 z-10">
          <h1 className="font-outline text-4xl md:text-6xl font-sans text-bg-100 animate-fade-in">
            Find Your Dream Apartment
          </h1>
          <p className="mt-4 text-bg-200 text-lg md:text-xl animate-slide-up">
            Discover modern apartments in the best neighborhoods at competitive
            prices.
          </p>
        </div>
        {/* Search Bar Section */}
        <div className="w-full h-auto flex justify-center items-center mb-20 px-4">
          <div ref={inputRef} className="mt-10 w-full max-w-2xl relative">
            {isModalOpen && (
              <EnhancedSearch
                searchTerm={searchTerm}
                isOpen={isModalOpen}
                onClose={() => {
                  setIsModalOpen(false);
                  setSearchTerm("");
                }}
              />
            )}
            <div className="relative flex items-center bg-white py-3 px-4 border border-gray-300 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-voilet transition-all duration-300">
              <input
                ref={inputRef}
                type="text"
                placeholder="Enter city, country, or name"
                value={searchTerm}
                onChange={handleChange}
                onFocus={handleFocus} // Open modal when focused
                className="w-full outline-none"
              />
              <FaSearch className="text-voilet" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
