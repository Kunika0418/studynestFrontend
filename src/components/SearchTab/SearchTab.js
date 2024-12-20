import React, { useState } from "react";
import { TabButton } from "./Tab/TabButton";
import { TabContent } from "./Tab/TabContent";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Data
const countries = [
  { id: "USA", name: "United States", flag: "🇺🇸" },
  { id: "UK", name: "United Kingdom", flag: "🇬🇧" },
  { id: "CAN", name: "Canada", flag: "🇨🇦" },
  { id: "DEU", name: "Germany", flag: "🇩🇪" },
];

const cities = {
  USA: ["New York", "Los Angeles", "Chicago", "Houston", "Miami"],
  UK: ["London", "Leicester", "Sheffield", "Manchester", "Birmingham"],
  CAN: ["Toronto", "Vancouver", "Montreal", "Ottawa", "Calgary"],
  DEU: ["Berlin", "Munich", "Frankfurt", "Hamburg", "Cologne"],
};

const properties = {
  USA: [
    "Luxury Condo in New York",
    "Beachfront House in Los Angeles",
    "Modern Apartment in Chicago",
    "Cozy Studio in Houston",
    "Spacious Loft in Miami",
  ],
  UK: [
    "Luxury Apartment in London",
    "Student Housing in Manchester",
    "Affordable Flats in Birmingham",
    "Cozy Studio in Leeds",
  ],
  CAN: [
    "Modern Condo in Toronto",
    "Lakefront Villa in Vancouver",
    "Charming House in Montreal",
    "Cozy Cottage in Ottawa",
    "Luxury Penthouse in Calgary",
  ],
  DEU: [
    "City Center Apartment in Berlin",
    "Spacious Flat in Munich",
    "Modern Loft in Frankfurt",
    "Luxury House in Hamburg",
    "Family Home in Cologne",
  ],
};

export const CountryTabs = ({ setIsModalOpen, searchTerm }) => {
  const navigate = useNavigate();
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  const allCities = cities[selectedCountry.id];
  const allProperties = properties[selectedCountry.id];

  const filteredCities = allCities.filter((city) =>
    city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredProperties = allProperties.filter((property) =>
    property.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const generateSearchData = () => {
    const searchData = [];
    for (const [countryId, cityList] of Object.entries(cities)) {
      const countryName = countries.find(
        (country) => country.id === countryId
      )?.name;
      cityList.forEach((city) => {
        searchData.push({
          type: "City",
          name: city,
          country: countryName,
        });
      });
      properties[countryId].forEach((property) => {
        searchData.push({
          type: "Property",
          name: property,
          country: countryName,
        });
      });
    }
    return searchData;
  };

  const searchData = generateSearchData();

  const handleClick = (type, name, country) => {
    setIsModalOpen(false);
    navigate(
      `/Property?type=${type}&name=${encodeURIComponent(
        name
      )}&country=${encodeURIComponent(country)}`
    );
  };

  const globalSearchResults = searchData.filter(({ name }) =>
    name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="absolute flex justify-center w-full max-w-2xl h-fit top-16">
      <div className="w-full rounded-lg overflow-hidden shadow-lg bg-white border border-gray-300 hide-scrollbar">
        {/* Header */}
        <div className="flex justify-between items-center p-3 bg-gray-100">
          <div className="flex">
            {!searchTerm &&
              countries.map((country) => (
                <TabButton
                  key={country.id}
                  country={country.id}
                  flag={country.flag}
                  setIsModalOpen={setIsModalOpen}
                  isSelected={selectedCountry.id === country.id}
                  onClick={() => setSelectedCountry(country)}
                />
              ))}
          </div>
          <button
            onClick={() => setIsModalOpen(false)}
            className="text-gray-600 hover:text-gray-900"
          >
            <X />
          </button>
        </div>

        {/* Tab Content */}
        <div className="max-h-96 overflow-y-auto hide-scrollbar"> {/* Scrollable container */}
          {!searchTerm ? (
            <>
              {filteredCities.length > 0 && (
                <div className="space-y-6 px-4 py-2">
                  <TabContent
                    items={filteredCities}
                    name={"Cities"}
                    title={"city"}
                    isModalOpen={setIsModalOpen}
                    selectedCountry={selectedCountry}
                  />
                </div>
              )}
              {filteredProperties.length > 0 && (
                <div className="space-y-6 px-4 py-2">
                  <TabContent
                    items={filteredProperties}
                    name={"Properties"}
                    title={"university"}
                    isModalOpen={setIsModalOpen}
                    selectedCountry={selectedCountry}
                  />
                </div>
              )}
            </>
          ) : (
            // Global Search Results
            <div className="p-4 space-y-2">
              {globalSearchResults.length > 0 ? (
                globalSearchResults.map(({ type, name, country }, index) => (
                  <button
                    key={index}
                    onClick={() => handleClick(type, name, country)}
                    className="flex items-center space-x-3 p-3 bg-gray-50 hover:bg-gray-100 rounded-lg shadow-sm w-full"
                  >
                    <span className="text-blue-600">
                      {type === "City" ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.657 16.657L13.414 12l4.243-4.243M6.343 7.343 10.586 12 6.343 16.657M21 12c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9 9-4.03 9-9z"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 10h11M9 21V3M17 16l4-4m0 0l-4-4m4 4H9"
                          />
                        </svg>
                      )}
                    </span>
                    <div>
                      <h3 className="text-sm font-medium text-start">{name}</h3>
                      <p className="text-xs text-gray-500 text-start">{country}</p>
                    </div>
                  </button>
                ))
              ) : (
                <p className="text-center text-gray-500">No results found</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

