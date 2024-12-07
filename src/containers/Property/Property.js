import React, { useState, useEffect } from "react";
import PropertyDetail from "./PropertyDetail/PropertyDetail";
import ApartmentCard from "../../components/Card/Card";
import FetchData from "../Hook/FetchData"; // Assuming FetchData is a custom hook
import axios from "axios";

const Property = () => {
  // State variables
  const [selectedApartment, setSelectedApartment] = useState(null);
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [minPrice, setMinPrice] = useState(""); 
  const [maxPrice, setMaxPrice] = useState("");
  const [filteredApartments, setFilteredApartments] = useState([]);
  
  // Fetch data using the custom hook (it should be called directly in the component body)
  const { data, loading, error } = FetchData(
    'http://localhost:5000/api/propertyauth/properties'
  );

  // Handle data when available
  useEffect(() => {
    if (data && data.properties) {
      setFilteredApartments(data.properties); // Set initial apartment list
      // Load unique countries from the data
      const uniqueCountries = Array.from(
        new Set(data.properties.map((apt) => apt.country))
      );
      setCountries(uniqueCountries);
    }
  }, [data]);

  // Fetch filtered data based on localStorage when conditions are met
  
  // Effect to load cities based on selected country
  useEffect(() => {
    if (selectedCountry && data && data.properties) {
      const uniqueCities = Array.from(
        new Set(
          data.properties
            .filter((apt) => apt.country === selectedCountry)
            .map((apt) => apt.city)
        )
      );
      setCities(uniqueCities);
      setSelectedCity(""); // Reset city when country changes
    } else {
      setCities([]);
    }
  }, [selectedCountry, data]);

  // Effect to filter apartments based on country, city, and price range
  useEffect(() => {
    if (data && data.properties) {
      const filtered = data.properties.filter((apt) => {
        const isCountryMatch = !selectedCountry || apt.country === selectedCountry;
        const isCityMatch = !selectedCity || apt.city === selectedCity;

        // Price filter logic
        const isPriceMatch =
          (!minPrice || apt.price >= parseInt(minPrice)) &&
          (!maxPrice || apt.price <= parseInt(maxPrice));

        return isCountryMatch && isCityMatch && isPriceMatch;
      });

      setFilteredApartments(filtered);
    }
  }, [selectedCountry, selectedCity, minPrice, maxPrice, data]);
  
  useEffect(() => {
    if (localStorage.getItem('item') && localStorage.getItem('name')) {
      const filterType = localStorage.getItem('name');
      const filterValue = localStorage.getItem('item');
      axios.get(
        `http://localhost:5000/api/propertyauth/properties/search?${filterType}=${filterValue}`
      )
      .then((response) => {
        const filteredData = response.data;
        if (filteredData) {
          setFilteredApartments(filteredData);
          console.log(filteredData)
        }
      })
      .catch((err) => console.error('Error fetching filtered data:', err));
      localStorage.removeItem('name');
      localStorage.removeItem('item');
    }
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Filters Sidebar */}
      <aside className="bg-white py-4 px-6 border-b border-primary-100 flex justify-between items-center">
        <h2 className="text-lg font-medium text-accent-100 font-sans">Filters</h2>
        <div className="flex gap-4">
          {/* Country Filter */}
          <div>
            <label htmlFor="country" className="block text-sm font-semibold text-gray-600 mb-2">
              Country
            </label>
            <select
              id="country"
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="w-full py-1 px-2 border-2 border-primary-100 rounded-lg outline-none text-accent-100 text-sm font-medium font-sans"
            >
              <option value="">All Countries</option>
              {countries.length > 0 ? (
                countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))
              ) : (
                <option disabled>No Countries Available</option>
              )}
            </select>
          </div>

          {/* City Filter */}
          <div>
            <label htmlFor="city" className="block text-sm font-semibold text-gray-600 mb-2">
              City
            </label>
            <select
              id="city"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="w-full py-1 px-2 border-2 border-primary-100 rounded-lg outline-none text-accent-100 text-sm font-medium font-sans"
              disabled={!selectedCountry}
            >
              <option value="">All Cities</option>
              {cities.length > 0 ? (
                cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))
              ) : (
                <option disabled>No Cities Available</option>
              )}
            </select>
          </div>

          {/* Price Range Filter */}
          <div>
            <label htmlFor="priceRange" className="block text-sm font-semibold text-gray-600 mb-2">
              Price Range
            </label>
            <div className="flex gap-4">
              <input
                type="number"
                id="minPrice"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                placeholder="Min Price"
                min="0"
                className="w-full py-1 px-2 border-2 border-primary-100 rounded-lg outline-none text-accent-100 text-sm font-medium font-sans"
              />
              <input
                type="number"
                id="maxPrice"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                placeholder="Max Price"
                min="0"
                className="w-full py-1 px-2 border-2 border-primary-100 rounded-lg outline-none text-accent-100 text-sm font-medium font-sans"
              />
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-semibold font-sans text-accent-100 mb-8">
          Available{" "}
          <span className="text-4xl text-primary-200 font-bold">Properties</span>
        </h1>

        {/* Filtered Apartments */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredApartments.length > 0 ? (
            filteredApartments.map((apt) => (
              <ApartmentCard
                key={apt._id}
                {...apt}
                onClick={() => setSelectedApartment(apt)}
              />
            ))
          ) : (
            <p className="text-center text-gray-500 mt-8">No apartments found.</p>
          )}
        </div>
      </main>

      {selectedApartment && (
        <PropertyDetail
          apartment={selectedApartment}
          onClose={() => setSelectedApartment(null)}
        />
      )}
    </div>
  );
};

export default Property;
