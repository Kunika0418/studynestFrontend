import React from 'react';

const ApartmentCard = ({ image, title, price, description, city, country }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
      {/* Apartment Image */}
      <img src={image} alt="Apartment" className="w-full h-64 object-cover" />

      {/* Apartment Details */}
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
        <p className="text-lg font-semibold text-amber-800 mb-4">${price}/month</p>
        <p className="text-gray-600 text-base mb-4">{description}</p>
        <p className="text-sm text-gray-500">Location: {city}/{country}</p>
      </div>

      {/* Button to view details */}
      <div className="px-6 pb-4">
        <button className="w-full py-2 px-4 bg-amber-800 text-white rounded-lg hover:bg-amber-900 transition duration-300">
          View Details
        </button>
      </div>
    </div>
  );
};

export default ApartmentCard;
