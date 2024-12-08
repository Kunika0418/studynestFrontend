import React from 'react';
import { X } from 'lucide-react';

const ServiceItem = ({ service, index, onChange, onRemove, showRemove }) => {
  return (
    <div className="flex gap-2">
      <input
        value={service}
        onChange={(e) => onChange(index, e.target.value)}
        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff9e88]"
        placeholder="Enter service"
      />
      {showRemove && (
        <button
          type="button"
          onClick={() => onRemove(index)}
          className="p-2 text-[#6C0F0A] hover:bg-red-50 rounded-lg"
        >
          <X size={20} />
        </button>
      )}
    </div>
  );
};

export default ServiceItem;