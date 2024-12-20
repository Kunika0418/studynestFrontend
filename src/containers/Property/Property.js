import React, { useState, useEffect } from "react";
import PropertyDetail from "./PropertyDetail/PropertyDetail";
import ApartmentCard from "../../components/Card/Card";
import axios from "axios";
import { Oval } from "react-loader-spinner";
import FilterBar from "./components/FilterBar";
import { useSearchParams } from "react-router-dom";
import HelmetConfig from "../../utils/HelmetConfig";



const initialCountries = [
  {
    country: "USA",
    cities: [
      "New York",
      "San Francisco",
      "Chicago",
      "Los Angeles",
      "Houston",
      "Miami",
      "Seattle",
      "Boston",
      "Atlanta",
      "Dallas",
      "San Diego",
      "Phoenix",
      "Philadelphia",
      "Austin",
      "Denver",
      "Orlando",
      "Las Vegas",
      "Portland",
      "San Jose",
      "Nashville",
    ],
  },
  {
    country: "UK",
    cities: [
      "London",
      "Manchester",
      "Birmingham",
      "Liverpool",
      "Edinburgh",
      "Glasgow",
      "Leeds",
      "Bristol",
      "Sheffield",
      "Cardiff",
      "Nottingham",
      "Newcastle",
      "Aberdeen",
      "Brighton",
      "Coventry",
      "Leicester",
      "Southampton",
      "Oxford",
      "Cambridge",
      "York",
    ],
  },
  {
    country: "Australia",
    cities: [
      "Sydney",
      "Melbourne",
      "Brisbane",
      "Perth",
      "Adelaide",
      "Canberra",
      "Hobart",
      "Darwin",
      "Gold Coast",
      "Newcastle",
      "Wollongong",
      "Geelong",
      "Cairns",
      "Townsville",
      "Toowoomba",
      "Ballarat",
      "Bendigo",
      "Launceston",
      "Alice Springs",
      "Mackay",
    ],
  },
  {
    country: "Germany",
    cities: [
      "Berlin",
      "Munich",
      "Frankfurt",
      "Hamburg",
      "Stuttgart",
      "Cologne",
      "Düsseldorf",
      "Dresden",
      "Leipzig",
      "Hannover",
      "Nuremberg",
      "Bremen",
      "Essen",
      "Dortmund",
      "Aachen",
      "Mannheim",
      "Karlsruhe",
      "Freiburg",
      "Potsdam",
      "Kiel",
    ],
  },
  {
    country: "Canada",
    cities: [
      "Toronto",
      "Vancouver",
      "Montreal",
      "Calgary",
      "Ottawa",
      "Edmonton",
      "Winnipeg",
      "Quebec City",
      "Hamilton",
      "Victoria",
      "Halifax",
      "Saskatoon",
      "Regina",
      "St. John's",
      "Kelowna",
      "Waterloo",
      "Brampton",
      "Mississauga",
      "Windsor",
      "Guelph",
    ],
  },
];

const Property = () => {
  const [searchParams] = useSearchParams();
  const city = searchParams.get("city");

  // State variables
  const [selectedApartment, setSelectedApartment] = useState(null);
  const [countries, setCountries] = useState([
    "USA",
    "UK",
    "Australia",
    "Germany",
    "Canada",
  ]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState(city || "");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [filteredApartments, setFilteredApartments] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [isFetchingMore, setIsFetchingMore] = useState(false);

  // Fetch properties
  const fetchProperties = async (pageNumber = 1, filters = {}) => {
    try {
      setIsFetchingMore(true);
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URI}/api/propertyauth/properties/filter`,
        {
          params: {
            page: pageNumber,
            limit: 10,
            ...filters,
          },
        }
      );

      const { properties, pagination } = response.data;

      if (pageNumber === 1) {
        setData(properties);
        setFilteredApartments(properties);

        //   // Calculate unique countries after setting initial state
        //   const uniqueCountries = Array.from(
        //   new Set(properties.map((apt) => apt.country))
        // );
        // setCountries(uniqueCountries);
      } else {
        setData((prevData) => {
          const updatedData = [...prevData, ...properties];

          // Calculate unique countries after combining previous and new data
          // const uniqueCountries = Array.from(
          //   new Set(updatedData.map((apt) => apt.country))
          // );
          // setCountries(uniqueCountries);

          return updatedData;
        });

        setFilteredApartments((prevApartments) => {
          const updatedApartments = [...prevApartments, ...properties];

          return updatedApartments;
        });
      }

      setTotal(pagination.total);
      setIsFetchingMore(false);
      setLoading(false);
    } catch (err) {
      setError("Error fetching data");
      setIsFetchingMore(false);
      setLoading(false);
    }
  };

  // Initial fetch
  // useEffect(() => {
  //   fetchProperties(1);
  // }, []);

  useEffect(() => {
    if (selectedCity) {
      fetchProperties(1, {
        city: selectedCity
      });
    } else {
      fetchProperties(1);
    }
  }, [selectedCity, selectedCountry]);

  // // Update cities when country changes
  useEffect(() => {
    if (selectedCountry) {
      const countryObj = initialCountries.find(
        (country) => country.country === selectedCountry
      );

      if (countryObj && countryObj.cities) {
        setCities(countryObj.cities);
      }
    }
  }, [selectedCountry]);

  // // Update cities when country changes
  // useEffect(() => {
  //   if (selectedCountry) {
  //     const uniqueCities = Array.from(
  //       new Set(
  //         data
  //           .filter((apt) => apt.country === selectedCountry)
  //           .map((apt) => apt.city)
  //       )
  //     );
  //     setCities(uniqueCities);
  //     setSelectedCity(""); // Reset city when country changes
  //   } else {
  //     setCities([]);
  //   }
  // }, [selectedCountry, data]);

  // Apply filters
  // const applyFilters = () => {
  //   // Filter the original data based on selected filters
  //   let filtered = data;

  //   if (selectedCountry) {
  //     filtered = filtered.filter((apt) => apt.country === selectedCountry);
  //   }

  //   if (selectedCity) {
  //     filtered = filtered.filter((apt) => apt.city === selectedCity);
  //   }

  //   if (minPrice) {
  //     filtered = filtered.filter((apt) => apt.price >= parseFloat(minPrice));
  //   }

  //   if (maxPrice) {
  //     filtered = filtered.filter((apt) => apt.price <= parseFloat(maxPrice));
  //   }

  //   setFilteredApartments(filtered);
  //   setPage(1);
  // };

  // Apply filters
  const applyFilters = () => {
    setPage(1);
    fetchProperties(1, {
      country: selectedCountry,
      city: selectedCity,
      minPrice,
      maxPrice,
    });
  };

  useEffect(() => {
    applyFilters();
  }, [selectedCountry, selectedCity, minPrice, maxPrice]);

  // Infinite scroll
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
          document.documentElement.offsetHeight - 300 &&
        !isFetchingMore &&
        data.length < total
      ) {
        setPage((prev) => prev + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isFetchingMore, data, total]);

  useEffect(() => {
    if (page > 1) fetchProperties(page);
  }, [page]);

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
          />
        </div>
        <span className="ml-2">Loading...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col gap-4 items-center justify-center min-h-screen">
        <p className="text-xl font-semibold text-red-500">{error}</p>
        <button
          className="text-white bg-voilet hover:bg-pink px-4 py-2 rounded-xl"
          onClick={() => window.location.reload()}
        >
          Reload
        </button>
      </div>
    );
  }

  return (
    <>
    <HelmetConfig
        title="Property"
        description="Explore a curated list of student accommodations worldwide at StudyNest. Find properties tailored to your preferences, offering comfort, convenience, and affordability."
      />
    <div className="bg-gray-50 relative w-full">
      {/* Filters Sidebar */}
      <div className="sticky top-16 z-10">
        <FilterBar
          countries={countries}
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
          setSelectedCity={setSelectedCity}
          price={true}
          minPrice={minPrice}
          setMinPrice={setMinPrice}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
          setCities={setCities}
        />
      </div>

      {/* Main Content */}
      <main className="w-full">
        <div className="gap-4 flex flex-col lg:flex-row w-full">
          {selectedCountry!=="" && <div className="cities flex flex-row lg:flex-col lg:w-64 w-full h-[6rem] max-h-full lg:h-[30rem] bg-gray-50 shadow-lg border-r border-gray-200 gap-2 p-4 overflow-x-auto whitespace-nowrap overflow-hidden lg:overflow-y-scroll sticky lg:top-32 top-52 z-20 lg:z-0 hide-scrollbar">
            {cities.map((city, index) => {
              return (
                <button
                  key={index}
                  className={`my-2 px-4 py-1 text-md font-medium transition-colors w-full h-12 rounded-lg border border-slate-300
                                        ${
                                          selectedCity === city
                                            ? "bg-voilet text-white"
                                            : "bg-gray-100 text-gray-600 hover:bg-voilet hover:text-white"
                                        }`}
                  onClick={() => setSelectedCity(city)}
                >
                  {city}
                </button>
              );
            })}
          </div>}
          <div className="px-4 py-10 flex flex-col justify-center">
            <h1 className="text-2xl font-semibold font-sans text-voilet mb-8">
              Available{" "}
              <span className="text-4xl text-pink font-bold">Properties</span>
            </h1>

            {/* Filtered Apartments */}
            {filteredApartments.length > 0 ? (
              <div className={`grid grid-cols-1 md:grid-cols-2 ${selectedCountry===""?'xl:grid-cols-4':`xl:grid-cols-3`} gap-x-6 gap-y-6 w-full`}>
                {filteredApartments.map((apt) => (
                  <ApartmentCard
                    key={apt._id}
                    {...apt}
                    onClick={() => setSelectedApartment(apt)}
                  />
                ))}
              </div>
            ) : (
              <div className="flex flex-col gap-4 items-center justify-center min-h-screen">
                <p className="text-2xl font-semibold text-red-500">
                  No apartments are found
                </p>
              </div>
            )}
          </div>
        </div>
      </main>

      {selectedApartment && (
        <PropertyDetail
          apartment={selectedApartment}
          onClose={() => setSelectedApartment(null)}
        />
      )}

      {/* Infinite Scroll Loader */}
      {isFetchingMore && (
        <div className="flex flex-row gap-2 items-center justify-center text-center py-16">
          <Oval
            visible={true}
            height="20"
            width="20"
            color="#242A56"
            ariaLabel="loading"
          />
          <span className="ml-2">Loading more properties...</span>
        </div>
      )}
    </div>
    </>
  );
};

export default Property;
