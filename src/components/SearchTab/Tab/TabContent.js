import React from 'react';
import { MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const TabContent = ({ items, name ,isModalOpen,title,selectedCountry }) => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    const itemValue = e.target.value;
    isModalOpen(false);
    navigate(
      `/Property?type=${title}&name=${encodeURIComponent(
        itemValue
      )}&country=${encodeURIComponent(selectedCountry.id)}`
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-darkpink">
        <MapPin className="w-4 h-4" />
        <h2 className="font-medium">Popular {name} in</h2>
      </div>
      <div className="grid grid-cols-4 gap-1 rounded-lg">
        {items.map((item, index) => (
          <button
            onClick={handleClick}
            value={item} // Pass item value
            key={index}
            className="text-start p-1 sm:text-base text-sm rounded-md hover:bg-gray-50 cursor-pointer
                     text-gray-600 hover:text-gray-900 transition-colors"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};
