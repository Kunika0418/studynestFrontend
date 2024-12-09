import React from 'react'

function FilterBar({ countries, selectedCountry, setSelectedCountry, cities, selectedCity, setSelectedCity, price, minPrice, setMinPrice, maxPrice, setMaxPrice }) {
    return (
        <div>
            <aside className="bg-gray-50 py-4 px-6 border-b border-primary-100 flex justify-between items-center">
                <div className="flex gap-4">
                    {/* Country Filter */}
                    {countries && <div>
                        <label
                            htmlFor="country"
                            className="block text-sm font-semibold text-gray-600 mb-2"
                        >
                            Country
                        </label>
                        <select
                            id="country"
                            value={selectedCountry}
                            onChange={(e) => setSelectedCountry(e.target.value)}
                            className="w-full py-1 px-2 border-2 border-primary-100 rounded-lg outline-none text-accent-100 text-sm font-medium font-sans"
                        >
                            <option value={""}>All Countries</option>
                            {countries.map((country) => (
                                <option key={country} value={country}>
                                    {country}
                                </option>
                            ))}
                        </select>
                    </div>}

                    {/* City Filter */}
                    {cities && <div>
                        <label
                            htmlFor="city"
                            className="block text-sm font-semibold text-gray-600 mb-2"
                        >
                            City
                        </label>
                        <select
                            id="city"
                            value={selectedCity}
                            onChange={(e) => setSelectedCity(e.target.value)}
                            className="w-full py-1 px-2 border-2 border-primary-100 rounded-lg outline-none text-accent-100 text-sm font-medium font-sans"
                            disabled={!selectedCountry}
                        >
                            <option value={""}>All Cities</option>
                            {cities.map((city) => (
                                <option key={city} value={city}>
                                    {city}
                                </option>
                            ))}
                        </select>
                    </div>}

                    {/* Price Range Filter */}
                    {price && <div>
                        <label
                            htmlFor="priceRange"
                            className="block text-sm font-semibold text-gray-600 mb-2"
                        >
                            Price Range
                        </label>
                        <div className="flex gap-4">
                            <input
                                type="number"
                                id="minPrice"
                                value={minPrice}
                                onChange={(e) => setMinPrice(e.target.value)}
                                placeholder="Min Price"
                                className="w-full py-1 px-2 border-2 border-primary-100 rounded-lg outline-none text-accent-100 text-sm font-medium font-sans"
                            />
                            <input
                                type="number"
                                id="maxPrice"
                                value={maxPrice}
                                onChange={(e) => setMaxPrice(e.target.value)}
                                placeholder="Max Price"
                                className="w-full py-1 px-2 border-2 border-primary-100 rounded-lg outline-none text-accent-100 text-sm font-medium font-sans"
                            />
                        </div>
                    </div>}
                </div>
            </aside>
        </div>
    )
}

export default FilterBar