import React from 'react';

export const TabButton = ({
    country,
    flag,
    isSelected,
    onClick
}) => (
    <div>
        <button
            onClick={onClick}
            className={`px-3 py-1.5 rounded-mdtransition-all duration-200 ease-in-out ${isSelected ? 'bg-gray-100' : 'hover:bg-gray-50'}`}>
            <div className="flex items-center gap-4">
                <span className="text-lg">{flag}</span>
                <span className="text-sm font-medium">{country}</span>
            </div>
        </button>
    </div>
);