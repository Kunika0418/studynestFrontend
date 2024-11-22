import React, { useState } from "react";
import ApartmentCard from "../../components/Card/Card";

const Home = () => {

  const apartments = [
    {
      imageUrl: "https://ulcdn.universityliving.com/cms/mm8yiT6fpKnzU8cfWW3JzzCdu7Uc1G.webp?format=auto&width=384",
      title: "Modern 2-Bedroom Apartment",
      price: "$1,200/month",
      description: "A spacious 2-bedroom apartment in the heart of the city.",
      location: "Downtown, CityName",
    },
    {
      imageUrl: "https://ulcdn.universityliving.com/cms/E7fQRg0O2CuQWmp12dhJAPBg61kBnh.jpeg?format=auto&width=384",
      title: "Luxury Studio Apartment",
      price: "$900/month",
      description: "A luxury studio with all modern amenities.",
      location: "Uptown, CityName",
    },
    // Add more apartments here...
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    console.log(`Searching for apartments in: ${searchTerm}`);
  };

  return (
    <div>
      <div className="flex flex-col items-center py-20 bg-slate-400"> {/* Added pt-20 for spacing */}
        {/* Header Section */}
        <div className="w-full max-w-6xl text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 animate-fade-in">
            Find Your Dream Apartment
          </h1>
          <p className="mt-4 text-gray-600 text-lg md:text-xl animate-slide-up">
            Discover modern apartments in the best neighborhoods at competitive prices.
          </p>
        </div>

        {/* Search Bar Section */}
        <div className="mt-10 w-full max-w-2xl">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Enter city, neighborhood, or ZIP code"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full py-3 px-4 border border-gray-300 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-amber-900 transition-all duration-300"
            />
            <button
              onClick={handleSearch}
              className="absolute right-2 py-2 px-6 bg-amber-800 text-white rounded-full shadow-md hover:bg-amber-900 transition-all duration-300"
            >
              Search
            </button>
          </div>
        </div>

      </div>
      <div className="Apartment p-4">
        <h1 className='font-semibold text-2xl underline'>Top Apartment</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {apartments.map((apartment, index) => (
            <ApartmentCard key={index} {...apartment} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
