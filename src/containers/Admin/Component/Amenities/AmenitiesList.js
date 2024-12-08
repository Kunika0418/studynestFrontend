import React from 'react';
import { Plus } from 'lucide-react';
import AmenityGroup from './AmenityGroup';

const AmenitiesList = ({
  amenities,
  onGroupAdd,
  onTitleChange,
  onItemChange,
  onItemAdd,
  onItemRemove
}) => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <label className="block text-sm font-medium text-gray-700">Amenities</label>
        <button
          type="button"
          onClick={onGroupAdd}
          className="flex items-center text-[#a04031] hover:text-[#6C0F0A]"
        >
          <Plus size={20} />
          <span className="ml-1">Add Amenity Group</span>
        </button>
      </div>
      {amenities.map((group, groupIndex) => (
        <AmenityGroup
          key={groupIndex}
          group={group}
          groupIndex={groupIndex}
          onTitleChange={onTitleChange}
          onItemChange={onItemChange}
          onItemAdd={onItemAdd}
          onItemRemove={onItemRemove}
        />
      ))}
    </div>
  );
};

export default AmenitiesList;