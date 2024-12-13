import React from 'react';

const RoomTypeItem = ({ value, itemIndex, onChange, onRemove, showRemove }) => {
    return (
        <div className="w-full">
            <div className='flex gap-2 w-full'>
                <input
                    type="text"
                    value={value.title}
                    onChange={(e) => onChange(itemIndex, e.target.value, value.price)}
                    className="w-1/2 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff9e88]"
                    placeholder="Room Type Title"
                />
                <input
                    type="number"
                    value={value.price}
                    onChange={(e) => onChange(itemIndex, value.title, parseFloat(e.target.value))}
                    className="w-1/2 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff9e88]"
                    placeholder="Price"
                />
            </div>
            {showRemove && (
                <div className='w-full flex justify-end'>
                    <button
                        type="button"
                        onClick={() => onRemove(itemIndex)}
                        className="px-2 py-1 text-[#6C0F0A] hover:bg-red-50 rounded-lg"
                    >
                        Remove
                    </button>
                </div>
            )}
        </div>
    );
};

export default RoomTypeItem;
