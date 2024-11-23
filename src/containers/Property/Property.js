import React, { useState, useEffect } from "react";
import PropertyDetail from "./PropertyDetail/PropertyDetail";
import ApartmentCard from "../../components/Card/Card";

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
      area: "1200 sq.ft",
      services: ["24/7 Security", "Maintenance", "Housekeeping"],
      amenities: ["Gym", "Swimming Pool", "Parking", "Wi-Fi"],
    },
    {
      id: 2,
      title: "Modern Studio",
      price: 800,
      city: "Toronto",
      country: "Canada",
      description: "A luxury studio with all modern amenities.",
      image: "https://ulcdn.universityliving.com/cms/E7fQRg0O2CuQWmp12dhJAPBg61kBnh.jpeg?format=auto&width=384",
      area: "600 sq.ft",
      services: ["24/7 Concierge", "Maintenance"],
      amenities: ["Wi-Fi", "Balcony", "Smart Home Features"],
    },
    {
      id: 3,
      title: "Beachside Condo",
      price: 1500,
      city: "Miami",
      country: "USA",
      description: "A luxurious 2-bedroom apartment with stunning ocean views.",
      image: "https://ulcdn.universityliving.com/cms/mm8yiT6fpKnzU8cfWW3JzzCdu7Uc1G.webp?format=auto&width=384",
      area: "1500 sq.ft",
      services: ["24/7 Security", "Private Beach Access"],
      amenities: ["Swimming Pool", "Jacuzzi", "Private Parking"],
    },
    {
      id: 4,
      title: "Luxury Penthouse",
      price: 3000,
      city: "Dubai",
      country: "UAE",
      description: "An opulent penthouse with panoramic city views.",
      image: "https://ulcdn.universityliving.com/cms/E7fQRg0O2CuQWmp12dhJAPBg61kBnh.jpeg?format=auto&width=384",
      area: "2500 sq.ft",
      services: ["Valet Parking", "Private Chef", "Housekeeping"],
      amenities: ["Infinity Pool", "Rooftop Garden", "Cinema Room"],
    },
  ];
  

  const [apartments, setApartments] = useState(apartmentsData);
  const [filteredApartments, setFilteredApartments] = useState(apartmentsData);
  const [selectedApartment, setSelectedApartment] = useState(null);
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  useEffect(() => {
    const uniqueCountries = Array.from(
      new Set(apartmentsData.map((apt) => apt.country))
    );
    setCountries(uniqueCountries);
  }, []);

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
            <ApartmentCard key={apt.id} {...apt} onClick={() => setSelectedApartment(apt)} />
          ))}
        </div>
        {filteredApartments.length === 0 && (
          <p className="text-center text-gray-500 mt-8">No apartments found.</p>
        )}
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
