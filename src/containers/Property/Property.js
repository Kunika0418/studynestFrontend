import React, { useState, useEffect } from "react";
import PropertyDetail from "./PropertyDetail/PropertyDetail";
import ApartmentCard from "../../components/Card/Card";
import axios from "axios";
import { Oval } from "react-loader-spinner";
import FilterBar from "./components/FilterBar";

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
        setSelectedCountry(uniqueCountries[0]);
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
    if (selectedCountry !== "") {
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
    }
    else {
      setFilteredApartments(data);
    }
  }, [selectedCountry, selectedCity, minPrice, maxPrice, data]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="ml-4 transition duration-500 ease-in-out">
          <Oval
            visible={true}
            height="20"
            width="20"
            secondaryColor="#2c2c2c"
            strokeWidth={4}
            strokeWidthSecondary={4}
            color="#242A56"
            ariaLabel="oval-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
        <span className="ml-2">Loading...</span>
      </div>
    );
  }
  if (error) {
    localStorage.removeItem("name");
    localStorage.removeItem("item");
    return (
      <div className="flex flex-col gap-4 items-center justify-center min-h-screen">
        <p className="text-2xl font-semibold text-red-500">No apartments are found</p>
        <button
          className="text-white ring-2 ring-pink-900 bg-pink-700 hover:bg-pink-800 px-4 py-2 rounded-xl"
          onClick={() => window.location.reload()}
        >
          All Properties
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 relative w-full">
      {/* Filters Sidebar */}
      <FilterBar countries={countries} selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry} setSelectedCity={setSelectedCity} price={true} minPrice={minPrice} setMinPrice={setMinPrice} maxPrice={maxPrice} setMaxPrice={setMaxPrice} />

      {/* Main Content */}
      <main className="w-full">
        <div className="gap-4 flex sm:flex-row xs:flex-col w-full">
          <div className="cities sm:w-64 xs:w-full min-h-full bg-gray-50 shadow-lg overflow-y-auto border-r border-gray-200 gap-2 p-4">
            {cities.map((city, index) => (
              <button
                key={index}
                className={`my-2 px-4 text-md font-medium transition-colors w-full h-12 rounded-lg border border-slate-300
                                        ${selectedCity === city
                    ? 'bg-voilet text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-voilet hover:text-white'
                  }`}
                onClick={() => setSelectedCity(city)}
              >
                {city}
              </button>
            ))}
          </div>
          <div className="px-4 py-10 flex flex-col justify-center">
            <h1 className="text-2xl font-semibold font-sans text-voilet mb-8">
              Available{" "}
              <span className="text-4xl text-pink font-bold">
                Properties
              </span>
            </h1>

            {/* Filtered Apartments */}
            {filteredApartments.length > 0 ? (<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-6 w-full">
              {filteredApartments.map((apt) => (
                <ApartmentCard
                  key={apt._id}
                  {...apt}
                  onClick={() => setSelectedApartment(apt)}
                />
              ))}
            </div>) : (
              <div className="flex flex-col gap-4 items-center justify-center min-h-screen">
                <p className="text-2xl font-semibold text-red-500">No apartments are found</p>
              </div>)}
          </div>
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
