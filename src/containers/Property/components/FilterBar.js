import React from 'react';
import { useLocation } from 'react-router-dom';


function FilterBar({ countries, selectedCountry, setSelectedCountry, setSelectedCity, price, minPrice, setMinPrice, maxPrice, setMaxPrice, setCities }) {
    const location = useLocation();
    const path = location.pathname.toLowerCase();
    return (
        <div className='w-full'>
            <aside className="bg-gray-50 py-4 px-6 shadow-sm w-full">
                <div className="flex flex-col md:flex-row xs:flex-col items-center justify-between gap-8 w-full">
                    {/* Country Filter */}
                    {countries && (
                        <div className="flex gap-4 items-center overflow-auto hide-scrollbar w-full xl:max-w-3xl lg:max-w-2xl md:max-w-full sm:max-w-full xs:max-w-full max-w-full p-2">
                            {path === '/property' &&  <button
                                className={`py-1 px-6 text-nowrap rounded-full text-md font-medium transition-colors border border-slate-300
                                    ${selectedCountry === ""
                                        ? 'bg-darkpink text-white'
                                        : 'bg-voilet text-white hover:bg-darkpink'
                                    }`}
                                onClick={() => {
                                    setSelectedCountry("");
                                    setSelectedCity("");
                                    setCities([]);
                                }}
                            >
                                All Countries
                            </button>}
                            {countries.map((country, index) => (
                                <button
                                    key={index}
                                    className={`px-6 py-1 rounded-full text-md font-medium transition-colors border border-slate-300
                                        ${selectedCountry === country
                                            ? 'bg-darkpink text-white'
                                            : 'bg-voilet text-white hover:bg-darkpink'
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
