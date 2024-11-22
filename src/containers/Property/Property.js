import React, { useState, useEffect } from "react";

const Property = () => {
  const apartmentsData = [
    {
      id: 1,
      title: "Cozy Apartment",
      price: 1200,
      city: "New York",
      country: "USA",
      description: "A spacious 2-bedroom apartment in the heart of the city.",
      image: "https://ulcdn.universityliving.com/cms/mm8yiT6fpKnzU8cfWW3JzzCdu7Uc1G.webp?format=auto&width=384",
    },
    {
      id: 2,
      title: "Modern Studio",
      price: 800,
      city: "Toronto",
      country: "Canada",
      description: "A luxury studio with all modern amenities.",
      image: "https://ulcdn.universityliving.com/cms/E7fQRg0O2CuQWmp12dhJAPBg61kBnh.jpeg?format=auto&width=384",
    },
    {
      id: 3,
      title: "Beachside Condo",
      price: 1500,
      city: "Miami",
      country: "USA",
      description: "A spacious 2-bedroom apartment in the heart of the city.",
      image: "https://ulcdn.universityliving.com/cms/mm8yiT6fpKnzU8cfWW3JzzCdu7Uc1G.webp?format=auto&width=384",
    },
    {
      id: 4,
      title: "Luxury Penthouse",
      price: 3000,
      city: "Dubai",
      country: "UAE",
      description: "A luxury studio with all modern amenities.",
      image: "https://ulcdn.universityliving.com/cms/E7fQRg0O2CuQWmp12dhJAPBg61kBnh.jpeg?format=auto&width=384",
    },
  ];

  const [apartments, setApartments] = useState(apartmentsData);
  const [filteredApartments, setFilteredApartments] = useState(apartmentsData);
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  useEffect(() => {
    const uniqueCountries = Array.from(
      new Set(apartmentsData.map((apt) => apt.country))
    );
    setCountries(uniqueCountries);
  }, [apartmentsData]);

  useEffect(() => {
    if (selectedCountry) {
      const uniqueCities = Array.from(
        new Set(
          apartmentsData
            .filter((apt) => apt.country === selectedCountry)
            .map((apt) => apt.city)
        )
      );
      setCities(uniqueCities);
      setSelectedCity(""); // Reset city when country changes
    } else {
      setCities([]);
    }
  }, [selectedCountry]);

  useEffect(() => {
    const filtered = apartmentsData.filter(
      (apt) =>
        (!selectedCountry || apt.country === selectedCountry) &&
        (!selectedCity || apt.city === selectedCity)
    );
    setFilteredApartments(filtered);
  }, [selectedCountry, selectedCity]);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-1/5 bg-white shadow-lg p-6 border-r">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Filter</h2>
        <div className="mb-6">
          <label htmlFor="country" className="block text-sm font-semibold text-gray-600 mb-2">
            Country
          </label>
          <select
            id="country"
            className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-amber-600"
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
          >
            <option value="">All Countries</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="city" className="block text-sm font-semibold text-gray-600 mb-2">
            City
          </label>
          <select
            id="city"
            className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-amber-600"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
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
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-8">Apartments for Rent</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredApartments.map((apt) => (
            <div
              key={apt.id}
              className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transform transition duration-300"
            >
              <img
                src={apt.image}
                alt={apt.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{apt.title}</h3>
                <p className="text-sm text-gray-600 mb-2">
                  {apt.city}, {apt.country}
                </p>
                <p className="text-lg font-bold text-amber-900">${apt.price}/month</p>
              </div>
            </div>
          ))}
        </div>
        {filteredApartments.length === 0 && (
          <p className="text-center text-gray-500 mt-8">No apartments found.</p>
        )}
      </main>
    </div>
  );
};

export default Property;
