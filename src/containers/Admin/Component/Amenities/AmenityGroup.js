import React from 'react';
import { Plus } from 'lucide-react';
import AmenityItem from './AmenityItem';

const AmenityGroup = ({
  group,
  groupIndex,
  onTitleChange,
  onItemChange,
  onItemAdd,
  onItemRemove
}) => {
  return (
    <div className="space-y-4 p-4 border border-gray-200 rounded-lg">
      <input
        value={group.title}
        onChange={(e) => onTitleChange(groupIndex, e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff9e88]"
        placeholder="Amenity Group Title"
      />
      {group.items.map((item, itemIndex) => (
        <AmenityItem
          key={itemIndex}
          value={item}
          groupIndex={groupIndex}
          itemIndex={itemIndex}
          onChange={onItemChange}
          onRemove={onItemRemove}
          showRemove={itemIndex > 0}
        />
      ))}
      <button
        type="button"
        onClick={() => onItemAdd(groupIndex)}
        className="flex items-center text-[#a04031] hover:text-[#6C0F0A]"
      >
        <Plus size={20} />
        <span className="ml-1">Add Item</span>
      </button>
    </div>
  );
};

export default AmenityGroup;