import React, { useState } from "react";
import ApartmentCard from "../../components/Card/Card";
import PropertyDetail from "../Property/PropertyDetail/PropertyDetail";

import Hero from "./components/Hero";
import Parameters from "./components/Parameters"
import TopCities from "./components/TopCities";
import WhyWe from "./components/WhyWe";
import Options from "./components/Options";
import EasyBook from "./components/EasyBook";
import Testimonials from "./components/Testimonials";

import bannerVideo from "../../assets/video/Banner_video.mp4";


const Home = () => {
  const apartmentsData = [
    {
      id: 1,
      title: "Cozy Apartment",
      price: 1200,
      city: "New York",
      country: "USA",
      description: "A spacious 2-bedroom apartment in the heart of the city.",
      images: [
        "https://ulcdn.universityliving.com/cms/mm8yiT6fpKnzU8cfWW3JzzCdu7Uc1G.webp?format=auto&width=384",
        "https://ulcdn.universityliving.com/cms/E7fQRg0O2CuQWmp12dhJAPBg61kBnh.jpeg?format=auto&width=384",
      ],
      area: "1200 sq.ft",
      services: ["24/7 Security", "Maintenance", "Housekeeping"],
      amenities: ["Gym", "Swimming Pool", "Parking", "Wi-Fi"],
      rating: 4.5, // Add rating to the apartment
      reviews: [
        { user: "John Doe", rating: 5, comment: "Great place to live!" },
        { user: "Jane Smith", rating: 4, comment: "Very nice apartment, but a bit pricey." },
      ],
    },
    {
      id: 2,
      title: "Modern Studio",
      price: 800,
      city: "Toronto",
      country: "Canada",
      description: "A luxury studio with all modern amenities.",
      images: [
        "https://ulcdn.universityliving.com/cms/mm8yiT6fpKnzU8cfWW3JzzCdu7Uc1G.webp?format=auto&width=384",
        "https://ulcdn.universityliving.com/cms/E7fQRg0O2CuQWmp12dhJAPBg61kBnh.jpeg?format=auto&width=384",
      ],
      area: "600 sq.ft",
      services: ["24/7 Concierge", "Maintenance"],
      amenities: ["Wi-Fi", "Balcony", "Smart Home Features"],
      rating: 4.0, // Add rating to the apartment
      reviews: [
        { user: "John Doe", rating: 5, comment: "Great place to live!" },
        { user: "Jane Smith", rating: 4, comment: "Very nice apartment, but a bit pricey." },
      ],
    },
    {
      id: 3,
      title: "Beachside Condo",
      price: 1500,
      city: "Miami",
      country: "USA",
      description: "A luxurious 2-bedroom apartment with stunning ocean views.",
      images: [
        "https://ulcdn.universityliving.com/cms/mm8yiT6fpKnzU8cfWW3JzzCdu7Uc1G.webp?format=auto&width=384",
        "https://ulcdn.universityliving.com/cms/E7fQRg0O2CuQWmp12dhJAPBg61kBnh.jpeg?format=auto&width=384",
      ],
      area: "1500 sq.ft",
      services: ["24/7 Security", "Private Beach Access"],
      amenities: ["Swimming Pool", "Jacuzzi", "Private Parking"],
      rating: 4.1, // Add rating to the apartment
      reviews: [
        { user: "John Doe", rating: 5, comment: "Great place to live!" },
        { user: "Jane Smith", rating: 4, comment: "Very nice apartment, but a bit pricey." },
      ],
    },
    {
      id: 4,
      title: "Luxury Penthouse",
      price: 3000,
      city: "Dubai",
      country: "UAE",
      description: "An opulent penthouse with panoramic city views.",
      images: [
        "https://ulcdn.universityliving.com/cms/mm8yiT6fpKnzU8cfWW3JzzCdu7Uc1G.webp?format=auto&width=384",
        "https://ulcdn.universityliving.com/cms/E7fQRg0O2CuQWmp12dhJAPBg61kBnh.jpeg?format=auto&width=384",
      ],
      area: "2500 sq.ft",
      services: ["Valet Parking", "Private Chef", "Housekeeping"],
      amenities: ["Infinity Pool", "Rooftop Garden", "Cinema Room"],
      rating: 4.7, // Add rating to the apartment
      reviews: [
        { user: "John Doe", rating: 5, comment: "Great place to live!" },
        { user: "Jane Smith", rating: 4, comment: "Very nice apartment, but a bit pricey." },
      ],
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredApartments, setFilteredApartments] = useState(apartmentsData);
  const [selectedApartment, setSelectedApartment] = useState(null);

  const handleChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchTerm(query);
  };

  const handleSearch = () => {
    // Filter logic
    const query = searchTerm;
    const filtered = apartmentsData.filter(
      (apartment) =>
        apartment.title.toLowerCase().includes(query) ||
        apartment.city.toLowerCase().includes(query) ||
        apartment.country.toLowerCase().includes(query)
    );
    setFilteredApartments(filtered);
  };

  return (
    <div className="flex flex-col gap-10">
      <Hero apartmentsData={apartmentsData} handleSearch={handleSearch} searchTerm = {searchTerm} handleChange = {handleChange} bannerVideo={bannerVideo}/>
      
      <Parameters />

      <TopCities />

      {/* Apartments Section */}
      {/* <div className="Apartment px-4">
        <h1 className="font-semibold text-2xl underline">Top Apartments</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {filteredApartments.map((apartment) => (
            <ApartmentCard
              key={apartment.id}
              {...apartment}
              onClick={() => setSelectedApartment(apartment)}
            />
          ))}
        </div>
        {filteredApartments.length === 0 && (
          <p className="text-center text-gray-500 mt-4">No apartments found.</p>
        )}
      </div> */}

      <WhyWe />

      <Options />

      <EasyBook />

      <Testimonials />

      {selectedApartment && (
        <PropertyDetail
          apartment={selectedApartment}
          onClose={() => setSelectedApartment(null)}
        />
      )}
    </div>
  );
};

export default Home;
