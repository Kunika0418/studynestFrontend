import React, { useState } from "react";
import { CountryTabs } from "../../../components/SearchTab/SearchTab";
import "../Home.css";

const Hero = ({
  searchTerm,
  handleChange,
  bannerVideo,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handler to open modal when the search input is focused
  const handleFocus = () => {
    setIsModalOpen(true);
  };

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
          <div className="mt-10 w-full max-w-2xl relative">
            {isModalOpen && (
              <CountryTabs setIsModalOpen={setIsModalOpen} searchTerm={searchTerm} isModalOpen={isModalOpen} />
            )}
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Enter city, country, or name"
                value={searchTerm}
                onChange={handleChange}
                onFocus={handleFocus}  // Open modal when focused
                className="w-full py-3 px-4 border border-gray-300 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-voilet transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
