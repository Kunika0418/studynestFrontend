import React, { useState } from "react";
import ApartmentCard from "../../components/Card/Card";
import PropertyDetail from "../Property/PropertyDetail/PropertyDetail";

import Hero from "./components/Hero";
import TopCities from "./components/TopCities";

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
      <Hero apartmentsData={apartmentsData} handleSearch={handleSearch} searchTerm = {searchTerm} handleChange = {handleChange}/>
      <TopCities />

      {/* Apartments Section */}
      <div className="Apartment px-4">
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
      </div>

      {/* Our Services */}
      <section className="bg-gray-800 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-700 rounded-lg shadow-md">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1076/1076928.png"
                alt="Personal Assistance"
                className="h-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-center text-white">
                Personalized Assistance
              </h3>
              <p className="text-gray-50 text-center mt-2">
                Our dedicated team helps you find your dream home effortlessly.
              </p>
            </div>
            <div className="p-6 bg-gray-700 rounded-lg shadow-md">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3658/3658538.png"
                alt="Flexible Leasing"
                className="h-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-center text-white">
                Flexible Leasing
              </h3>
              <p className="text-gray-50 text-center mt-2">
                Short-term and long-term rental options to suit your needs.
              </p>
            </div>
            <div className="p-6 bg-gray-700 rounded-lg shadow-md">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1611/1611310.png"
                alt="24/7 Support"
                className="h-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-center text-white">
                24/7 Support
              </h3>
              <p className="text-gray-50 text-center mt-2">
                We’re here to assist you anytime, anywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Collaborations */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Trusted Partners
          </h2>
          <p className="text-center mb-6">
            We collaborate with industry-leading real estate agencies and
            developers.
          </p>
          <div className="flex justify-center gap-8">
            <img
              src="https://download.logo.wine/logo/Airbnb/Airbnb-Logo.wine.png"
              alt="Airbnb"
              className="h-12"
            />
            <img
              src="https://logos-world.net/wp-content/uploads/2020/11/Zillow-Logo.jpg"
              alt="Zillow"
              className="h-12"
            />
            <img
              src="https://logos-world.net/wp-content/uploads/2021/10/Realtor-Logo.png"
              alt="Realtor"
              className="h-12"
            />
            <img
              src="https://cdn.prod.website-files.com/65402b8a17def72907241a6d/65402b8a17def72907241cc5_10-booking.com.jpg"
              alt="Booking.com"
              className="h-12"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSem2pzDthyzcJV7wZBHwpAfH5L4tMLSRjBQ&s"
              alt="Expedia"
              className="h-12"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-800 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
                alt="Verified Listings"
                className="h-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-white">
                Verified Listings
              </h3>
              <p className="text-gray-50">
                Every property is vetted to ensure quality and accuracy.
              </p>
            </div>
            <div className="text-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/7069/7069212.png"
                alt="Affordable Prices"
                className="h-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-white">
                Affordable Pricing
              </h3>
              <p className="text-gray-50">
                Competitive rates without compromising on quality.
              </p>
            </div>
            <div className="text-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3209/3209263.png"
                alt="Seamless Experience"
                className="h-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-white">
                Seamless Experience
              </h3>
              <p className="text-gray-50">
                Easy-to-use platform for a hassle-free property search.
              </p>
            </div>
          </div>
        </div>
      </section>

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
