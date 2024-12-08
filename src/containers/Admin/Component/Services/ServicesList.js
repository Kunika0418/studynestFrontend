import React from 'react';
import { Plus } from 'lucide-react';
import ServiceItem from './ServiceItem';

const ServicesList = ({ services, onServiceChange, onServiceAdd, onServiceRemove }) => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <label className="block text-sm font-medium text-gray-700">Services</label>
        <button
          type="button"
          onClick={onServiceAdd}
          className="flex items-center text-[#a04031] hover:text-[#6C0F0A]"
        >
          <Plus size={20} />
          <span className="ml-1">Add Service</span>
        </button>
      </div>
      {services.map((service, index) => (
        <ServiceItem
          key={index}
          service={service}
          index={index}
          onChange={onServiceChange}
          onRemove={onServiceRemove}
          showRemove={index > 0}
        />
      ))}
    </div>
  );
};

export default ServicesList;