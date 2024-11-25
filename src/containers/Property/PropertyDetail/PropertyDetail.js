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
  const [userRating, setUserRating] = useState(0); // State to handle user rating input

  const handleRating = (rating) => {
    setUserRating(rating); // Set the user rating
  };

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
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: (i) => (
      <div className="w-20 h-12 overflow-hidden rounded-lg">
        <img
          src={apartment.images[i]}
          alt={`Thumbnail ${i + 1}`}
          className="w-full h-full object-cover hover:opacity-80 transition"
        />
      </div>
    ),
    appendDots: (dots) => (
      <div className="relative w-full h-full flex justify-center">
        <ul className="w-full gap-20 flex justify-center">{dots}</ul>
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

  return (
    <div className="bg-gray-50 min-h-screen py-4">
      <div className="max-w-7xl mx-auto p-6 bg-white shadow-md rounded-lg overflow-hidden">
        {/* Property Details */}
        <div className="flex flex-col md:flex-row gap-10">
          {/* Left Section: Slider */}
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl font-bold mb-4">{apartment.title}</h1>
            <Slider {...sliderSettings}>
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

          {/* Right Section: Details */}
          <div className="w-full md:w-1/2 py-6 pr-20">
            <h2 className="text-2xl font-semibold text-gray-800">Description</h2>
            <p className="text-gray-600 mt-2">{apartment.description}</p>

            <div className="mt-6 flex gap-40">
              <div>
                <h2 className="text-2xl font-semibold text-gray-800">Location</h2>
                <p className="text-gray-600">
                  {apartment.city}, {apartment.country}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-800">Price</h2>
                <p className="text-amber-800 font-bold text-xl">${apartment.price}/month</p>
              </div>
            </div>


            <div className="mt-6">
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

            <div className="mt-6 flex gap-40">
              <div className="">
                <h2 className="text-2xl font-semibold text-gray-800">Services</h2>
                <ul className="list-disc list-inside mt-2 text-gray-600">
                  {apartment.services.map((service, index) => (
                    <li key={index}>{service}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-800">Rating</h2>
                <div className="flex justify-center flex-col">
                  <div className="">
                    <p className="text-xl font-semibold">{apartment.rating}/5</p>
                  </div>
                  <div className="">
                    {renderStars(apartment.rating)}
                    <span className="text-gray-600">({apartment.reviews.length} reviews)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 mt-6">
              <button className="bg-amber-800 hover:bg-amber-900 text-white px-6 py-3 rounded-lg shadow-lg transition">
                Contact Seller
              </button>
              <Link to="/" className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-3 rounded-lg transition">
                Back to Listings
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="m-4 max-w-7xl mx-auto p-6 bg-white shadow-md rounded-lg overflow-hidden">
        {/* User Reviews and Ratings */}
        <div className="mt-4">
          <h2 className="text-2xl font-semibold text-gray-800">User Reviews</h2>
          <div className="space-y-4 mt-4">
            {apartment.reviews.map((review, index) => (
              <div key={index} className="p-4 bg-gray-100 rounded-lg shadow-sm">
                <p className="font-semibold">{review.user}</p>
                <div className="flex items-center space-x-2">
                  {renderStars(review.rating)}
                </div>
                <p className="text-gray-600 mt-2">{review.comment}</p>
              </div>
            ))}
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
