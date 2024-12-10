import React from 'react';

function FilterBar({ countries, selectedCountry, setSelectedCountry, setSelectedCity, price, minPrice, setMinPrice, maxPrice, setMaxPrice }) {
    return (
        <div>
            <aside className="bg-gray-50 py-4 px-6 shadow-sm">
                <div className="flex items-center justify-between gap-8">
                    {/* Country Filter */}
                    {countries && (
                        <div className="flex gap-4 items-center">
                            {countries.map((country, index) => (
                                <button
                                    key={index}
                                    className={`h-12 px-4 rounded-full text-md font-medium transition-colors border border-slate-300
                                        ${selectedCountry === country
                                            ? 'bg-voilet text-pink'
                                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                        }`}
                                    onClick={() => {
                                        setSelectedCountry(country);
                                        setSelectedCity('');
                                    }}
                                >
                                    {country}
                                </button>
                            ))}
                        </div>
                    )}

                    {/* Price Range Filter */}
                    {price && (
                        <div className="flex gap-4 items-center">
                            <input
                                type="number"
                                id="minPrice"
                                value={minPrice}
                                onChange={(e) => setMinPrice(e.target.value)}
                                placeholder="Min Price"
                                className="w-32 py-2 px-3 border rounded-lg outline-none text-sm font-medium placeholder-gray-400"
                            />
                            <input
                                type="number"
                                id="maxPrice"
                                value={maxPrice}
                                onChange={(e) => setMaxPrice(e.target.value)}
                                placeholder="Max Price"
                                className="w-32 py-2 px-3 border rounded-lg outline-none text-sm font-medium placeholder-gray-400"
                            />
                        </div>
                    )}
                </div>
            </aside>
        </div>
    );
}

export default FilterBar;
