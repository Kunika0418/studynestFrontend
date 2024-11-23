import React, { useState } from "react";

const PropertyDetail = ({ apartment, onClose }) => {
  const [activeTab, setActiveTab] = useState("details");

  if (!apartment) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="relative bg-white w-11/12 max-w-4xl rounded-lg overflow-hidden shadow-xl">
        {/* Close Button */}
        <button
          className="absolute top-2 right-4 text-white text-2xl cursor-pointer z-20"
          onClick={onClose}
        >
          &times;
        </button>

        {/* Image Section */}
        <div className="relative">
          <img
            src={apartment.image}
            alt={apartment.title}
            className="w-full h-64 object-cover"
          />
          <div className="absolute top-0 left-0 bg-black bg-opacity-50 text-white p-4">
            <h2 className="text-xl font-bold">{apartment.title}</h2>
            <p className="text-sm">{apartment.city}, {apartment.country}</p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="border-b flex justify-center bg-gray-100">
          {["details", "services", "amenities"].map((tab) => (
            <button
              key={tab}
              className={`px-6 py-2 font-medium transition ${
                activeTab === tab
                  ? "border-b-4 border-amber-500 text-amber-700"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="p-6">
          {activeTab === "details" && (
            <div className="animate-fade-in">
              <h3 className="text-lg font-bold text-gray-800">Apartment Details</h3>
              <p className="text-gray-600 mt-2">{apartment.description}</p>
              <p className="text-gray-500 mt-4">Area: {apartment.area}</p>
              <p className="text-gray-700 mt-2 font-semibold">
                Price: ${apartment.price}/month
              </p>
            </div>
          )}

          {activeTab === "services" && (
            <div className="animate-fade-in">
              <h3 className="text-lg font-bold text-gray-800">Services</h3>
              <ul className="list-disc list-inside text-gray-600 mt-2">
                {apartment.services.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === "amenities" && (
            <div className="animate-fade-in">
              <h3 className="text-lg font-bold text-gray-800">Amenities</h3>
              <ul className="grid grid-cols-2 gap-2 mt-4 text-gray-600">
                {apartment.amenities.map((amenity, index) => (
                  <li
                    key={index}
                    className="border p-2 rounded-md shadow-sm hover:shadow-md transition"
                  >
                    {amenity}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="btn m-2 mb-4  flex justify-center">
          <button className="bg-amber-800 hover:bg-amber-900 rounded-2xl py-2 px-4 text-white ring-1 ring-amber-950">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
