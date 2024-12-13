import React from 'react';
import { Plus } from 'lucide-react';
import RoomTypeItem from './RoomTypesItems';

const RoomTypeGroup = ({
    roomTypes,
    onTitleChange,
    onRoomTypeChange,
    onRoomTypeAdd,
    onRoomTypeRemove,
    onGroupAdd
}) => {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <label className="block text-sm font-medium text-gray-700">RoomTypes</label>
                <button
                    type="button"
                    onClick={onGroupAdd}
                    className="flex items-center text-[#a04031] hover:text-[#6C0F0A]"
                >
                    <Plus size={20} />
                    <span className="ml-1">Add RoomTypes Group</span>
                </button>
            </div>
            {roomTypes.map((room, itemIndex) => (
                <RoomTypeItem
                    key={itemIndex}
                    value={room}
                    itemIndex={itemIndex}
                    onChange={onRoomTypeChange}
                    onRemove={onRoomTypeRemove}
                    showRemove={itemIndex > 0}
                />
            ))}
        </div>
    );
};

export default RoomTypeGroup;
