import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

const PropertyDetail = () => {

  const [activeTab, setActiveTab] = useState('Overview'); // Set default active tab
  const { PropertyId } = useParams();
  const apartment = apartmentsData.find((apt) => apt.id === parseInt(PropertyId));
  const recommendedApartments = apartmentsData.filter((apt) => apt.id !== parseInt(PropertyId)).slice(0, 3);

  if (!apartment) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg text-gray-500">Property not found.</p>
      </div>
    );
  }

  const sliderSettings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    customPaging: (i) => (
      <div className="overflow-hidden w-[5rem] h-[3rem] rounded-md">
        <img
          src={apartment.images[i]}
          alt={`Thumbnail ${i + 1}`}
          className="w-full h-full object-cover hover:opacity-80 transition"
        />
      </div>
    ),
    appendDots: (dots) => (
      <div className="relative w-full h-full flex justify-center px-10">
        <ul className="w-full gap-10 flex justify-center">
          {dots}
        </ul>
      </div>
    ),
  };

  // Function to render stars based on rating
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating); // Get the number of full stars
    const halfStar = rating % 1 !== 0;  // Check if there's a half star
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0); // Remaining empty stars

    // Generate star components
    return (
      <div className="flex items-center space-x-1">
        {[...Array(fullStars)].map((_, i) => (
          <span key={`full-${i}`} className="text-yellow-500 text-xl">★</span>
        ))}
        {halfStar && <span className="text-yellow-500 text-xl">☆</span>}
        {[...Array(emptyStars)].map((_, i) => (
          <span key={`empty-${i}`} className="text-gray-300 text-xl">★</span>
        ))}
      </div>
    );
  };


  const renderTabs = () => {
    switch (activeTab) {
      case 'Overview':
        return (
          <div className="px-10">
            <div className="description mb-8">
              <h2 className="text-2xl font-semibold text-gray-800">Description</h2>
              <p className="text-gray-600 mt-2">{apartment.description}</p>
            </div>
            <div className="Location mb-8">
              <h2 className="text-2xl font-semibold text-gray-800">Location</h2>
              <p className="text-gray-600">
                {apartment.city}, {apartment.country}
              </p>
            </div>
            <div className="Price mb-8">
              <h2 className="text-2xl font-semibold text-gray-800">Price</h2>
              <p className="text-amber-800 font-bold text-xl">${apartment.price}/month</p>
            </div>
            <div className="rating">
              <h2 className="text-2xl font-semibold text-gray-800">Rating</h2>
              <div className="flex justify-start flex-col">
                <p className="text-xl font-semibold">{apartment.rating}/5</p>
                <div className="flex items-center">
                  {renderStars(apartment.rating)}
                  <span className="text-gray-600">({apartment.reviews.length} reviews)</span>
                </div>
              </div>
            </div>
          </div>
        );
      case 'Facilities':
        return (
          <div className="px-10">
            <div className="amenities mb-8">
              <h2 className="text-2xl font-semibold text-gray-800">Amenities</h2>
              <ul className="grid grid-cols-3 gap-4 mt-2">
                {apartment.amenities.map((amenity, index) => (
                  <li
                    key={index}
                    className="px-2 py-1 bg-gray-100 border rounded-lg text-center text-gray-700 hover:shadow-md transition"
                  >
                    {amenity}
                  </li>
                ))}
              </ul>
            </div>
            <div className="services">
              <h2 className="text-2xl font-semibold text-gray-800">Services</h2>
              <ul className="list-disc list-inside mt-2 text-gray-600">
                {apartment.services.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-4">
      <div className="max-w-7xl mx-auto pt-8 px-10 bg-white shadow-md rounded-lg overflow-hidden">
        {/* Property Details */}
        <div className="">
          <h1 className="text-3xl font-bold mb-6">{apartment.title}</h1>
          <div className="w-full h-[500px]">
            <Slider {...sliderSettings} dotsClass="h-[4rem] mt-3">
              {apartment.images.map((image, index) => (
                <div key={index} className="relative">
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-[400px] object-cover rounded-lg"
                  />
                </div>
              ))}
            </Slider>
          </div>
          <div className="w-full py-2 px-4">
            <div className="flex justify-center border-y gap-10">
              <button
                className={`py-2 px-4 font-semibold ${activeTab === 'Overview' ? 'border-b-2 border-amber-800 text-amber-800' : 'text-gray-600'
                  }`}
                onClick={() => setActiveTab('Overview')}
              >
                Overview
              </button>
              <button
                className={`py-2 px-4 font-semibold ${activeTab === 'Facilities' ? 'border-b-2 border-amber-800 text-amber-800' : 'text-gray-600'
                  }`}
                onClick={() => setActiveTab('Facilities')}
              >
                Facilities
              </button>
            </div>

            {/* Tab Content */}
            <div className="mt-6 border-b pb-10">
              {renderTabs()}
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 my-6">
            <button className="bg-amber-800 hover:bg-amber-900 text-white px-6 py-3 rounded-lg shadow-lg transition">
              Book Now
            </button>
            <Link to="/" className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-3 rounded-lg transition">
              Back to Listings
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6 bg-white shadow-md rounded-lg overflow-hidden m-4">
        {/* Recommended Apartments */}
        <div className="mt-4">
          <h2 className="text-2xl font-semibold text-gray-800">Recommended Apartments</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {recommendedApartments.map((apt) => (
              <Link
                key={apt.id}
                to={`/property/${apt.id}`}
                className="block bg-white border rounded-lg shadow-md hover:shadow-lg transition overflow-hidden"
              >
                <img
                  src={apt.images[0]}
                  alt={apt.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{apt.title}</h3>
                  <p className="text-gray-500 text-sm">
                    {apt.city}, {apt.country}
                  </p>
                  <p className="text-amber-600 font-bold mt-2">${apt.price}/month</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
