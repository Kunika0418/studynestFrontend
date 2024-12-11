import React, { useEffect, useState } from "react";
import axios from "axios";
import ApartmentCard from "../../../components/Card/Card";
import FilterBar from "../../Property/components/FilterBar";
import PropertyDetail from "../../Property/PropertyDetail/PropertyDetail";


const TopApartments = () => {
  const [selectedApartment, setSelectedApartment] = useState(null);
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [filteredApartments, setFilteredApartments] = useState([]);
  const [viewed, setViewed] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${process.env.REACT_APP_SERVER_URI}/api/propertyauth/properties`
        ); // Replace with your API URL
        const allProperties = response.data.properties; // Assuming response is an object with a 'properties' field
        setProperties(allProperties);
        setFilteredApartments(allProperties);
        // Sort properties by views in descending order and select top 6

        // Set unique countries from the top properties
        const uniqueCountries = Array.from(
          new Set(allProperties.map((apt) => apt.country))
        );
        setCountries(uniqueCountries);
        setSelectedCountry(uniqueCountries[0]);
      } catch (err) {
        setError("Failed to fetch properties.");
      } finally {
        setLoading(false);
      }
    };
    fetchProperties();
  }, []);

  useEffect(() => {
    const topProperties = filteredApartments
      .sort((a, b) => b.views - a.views)
      .slice(0, 6);

    setViewed(topProperties);
  }, [filteredApartments]);

  useEffect(() => {
    if (selectedCountry) {
      const uniqueCities = Array.from(
        new Set(
          properties
            .filter((apt) => apt.country === selectedCountry)
            .map((apt) => apt.city)
        )
      );
      setCities(uniqueCities);
      setSelectedCity(""); // Reset city when country changes
    } else {
      setCities([]);
    }
  }, [selectedCountry, properties]);

  useEffect(() => {
    if (selectedCountry !== "") {
      const filtered = properties.filter((apt) => {
        const isCountryMatch =
          !selectedCountry || apt.country === selectedCountry;
        const isCityMatch = !selectedCity || apt.city === selectedCity;
        return isCountryMatch && isCityMatch;
      });
      setFilteredApartments(filtered); // Update filtered apartments
    } else {
      setFilteredApartments(properties);
    }
  }, [selectedCountry, selectedCity, properties]);

  if (loading) {
    return <div className="text-center text-blue-500">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="bg-offwhite/50">
      <div className="w-full h-auto flex flex-col pt-10">
        <div className="flex flex-col justify-center items-center gap-4 mb-10">
          <h2 className="text-3xl font-semibold font-sans text-voilet">
            Top <span className="text-4xl font-bold text-pink">Apartments</span>
          </h2>
          <h3 className="text-base font-sans font-medium text-accent-100 z-10 px-4 text-justify">
          Find your dream home from our Rent added properties.
        </h3>
        </div>  
        <FilterBar
          countries={countries}
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
          setSelectedCity={setSelectedCity}
          price={false}
        />
        <div className="flex sm:flex-row xs:flex-col w-full">
          <div className="cities sm:w-64 xs:w-full min-h-full bg-offwhite/50 shadow-lg overflow-y-auto border-r border-gray-200 gap-2 p-4 grid grid-flow-col overflow-x-auto lg:grid-flow-row">
            {cities.map((city, index) => (
              <button
                key={index}
                className={`my-2 px-4 text-md font-medium transition-colors w-full h-12 rounded-lg border border-slate-300
                                    ${
                                      selectedCity === city
                                        ? "bg-voilet text-white"
                                        : "bg-gray-100 text-gray-600 hover:bg-voilet hover:text-white"
                                    }`}
                onClick={() => setSelectedCity(city)}
              >
                {city}
              </button>
            ))}
          </div>
          <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-6 py-16 px-4">
            {viewed.map((property) => (
              <ApartmentCard
                key={property._id}
                {...property}
                onClick={() => setSelectedApartment(property)}
              />
            ))}
          </div>
        </div>
      </div>
      {selectedApartment && (
        <PropertyDetail
          apartment={selectedApartment}
          onClose={() => setSelectedApartment(null)}
        />
      )}
    </div>
  );
};

export default TopApartments;
