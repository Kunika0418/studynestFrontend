import React from 'react';
import { Plus } from 'lucide-react';
import RoomTypeGroup from './RoomTypesGroup';

const RoomTypeList = ({
  roomGroups,
  onGroupAdd,
  onTitleChange,
  onRoomTypeChange,
  onRoomTypeAdd,
  onRoomTypeRemove
}) => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <label className="block text-sm font-medium text-gray-700">Room Types</label>
        <button
          type="button"
          onClick={onGroupAdd}
          className="flex items-center text-[#a04031] hover:text-[#6C0F0A]"
        >
          <Plus size={20} />
          <span className="ml-1">Add Room Group</span>
        </button>
      </div>
      {roomGroups.map((group, groupIndex) => (
        <RoomTypeGroup
          key={groupIndex}
          groupIndex={groupIndex}
          roomTypes={group}
          onTitleChange={onTitleChange}
          onRoomTypeChange={onRoomTypeChange}
          onRoomTypeAdd={onRoomTypeAdd}
          onRoomTypeRemove={onRoomTypeRemove}
        />
      ))}
    </div>
  );
};

export default RoomTypeList;
