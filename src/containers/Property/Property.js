import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropertyDetail from "./PropertyDetail/PropertyDetail";
import ApartmentCard from "../../components/Card/Card";
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
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response;
        if (localStorage.getItem("item") && localStorage.getItem("name")) {
          const filterType = localStorage.getItem("name");
          const filterValue = localStorage.getItem("item");
          response = await axios.get(
            `${process.env.REACT_APP_SERVER_URI}/api/propertyauth/properties/search?${filterType}=${filterValue}`
          );
        } else {
          response = await axios.get(
            `${process.env.REACT_APP_SERVER_URI}/api/propertyauth/properties`
          );
        }
        localStorage.removeItem("item");
        localStorage.removeItem("name");
        const fetchedData = response.data;
        setData(fetchedData.properties);
        setFilteredApartments(fetchedData.properties);
        const uniqueCountries = Array.from(
          new Set(fetchedData.properties.map((apt) => apt.country))
        );
        setCountries(uniqueCountries);
        setLoading(false);
      } catch (err) {
        setError("Error fetching data:", err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Update cities when country changes
  useEffect(() => {
    if (selectedCountry) {
      const uniqueCities = Array.from(
        new Set(
          data
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

  // Filter apartments based on country, city, and price range
  useEffect(() => {
    const filtered = data.filter((apt) => {
      const isCountryMatch =
        !selectedCountry || apt.country === selectedCountry;
      const isCityMatch = !selectedCity || apt.city === selectedCity;
      const isPriceMatch =
        (!minPrice || apt.price >= parseInt(minPrice)) &&
        (!maxPrice || apt.price <= parseInt(maxPrice));

      return isCountryMatch && isCityMatch && isPriceMatch;
    });

    setFilteredApartments(filtered);
  }, [selectedCountry, selectedCity, minPrice, maxPrice, data]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div
          className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
          role="status"
        ></div>
        <span className="ml-2">Loading...</span>
      </div>
    );
  }
  if (error) {
    localStorage.removeItem("name");
    localStorage.removeItem("item");
    return (
      <div className="flex flex-col gap-4 items-center justify-center min-h-screen">
        <p className="text-2xl text-red-500">No apartments are found</p>
        <button
          className="text-white ring-2 ring-amber-900 bg-amber-700 hover:bg-amber-800 px-4 py-2 rounded-xl"
          onClick={() => window.location.reload()}
        >
          All Properties
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Filters Sidebar */}
      <aside className="bg-white py-4 px-6 border-b border-primary-100 flex justify-between items-center">
        <h2 className="text-lg font-medium text-accent-100 font-sans">
          Filters
        </h2>
        <div className="flex gap-4">
          {/* Country Filter */}
          <div>
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
              <option value="">All Countries</option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>

          {/* City Filter */}
          <div>
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
              <option value="">All Cities</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          {/* Price Range Filter */}
          <div>
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
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-semibold font-sans text-accent-100 mb-8">
          Available{" "}
          <span className="text-4xl text-primary-200 font-bold">
            Properties
          </span>
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
            <p className="text-center text-gray-500 mt-8">
              No apartments found.
            </p>
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
