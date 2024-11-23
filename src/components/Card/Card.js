import React from 'react';

const ApartmentCard = ({ image, title, price, city, country, area, services, onClick }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
      {/* Apartment Image */}
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-500">{city}, {country}</p>
        <p className="text-sm text-gray-600">Area: {area}</p>
        <p className="text-sm text-gray-700 font-semibold mt-2">Price: ${price}/month</p>
        <ul className="text-xs text-gray-600 mt-2">
          {services.slice(0, 2).map((service, index) => (
            <li key={index} className="list-disc list-inside">
              {service}
            </li>
          ))}
          {services.length > 2 && <li className="italic">+ more services</li>}
        </ul>
      </div>

      {/* Button to view details */}
      <div className="px-6 pb-4">
        <button onClick={onClick} className="w-full py-2 px-4 bg-amber-800 text-white rounded-lg hover:bg-amber-900 transition duration-300">
          View Details
        </button>
      </div>
    </div>
  );
};

export default ApartmentCard;
