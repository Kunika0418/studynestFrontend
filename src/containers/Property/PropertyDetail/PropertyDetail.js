import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Grid, Pagination, Navigation } from "swiper/modules";
import BuyForm from "../../../components/BuyFrom/BuyForm";
import ImageModal from "../../../components/ImageModal/ImageModal";

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
      "https://media.uhzcdn.com/image/1393/01HVCWGG3YX6N3VNP4VPQBCNFY_z.webp",
      "https://media.uhzcdn.com/image/1389/01HVCWFJC2BXK4RD2SNSD4B2P2_z.webp",
      "https://media.uhzcdn.com/image/1385/01J60KG2SMH713NPXD8GJ19MWZ_g.webp",
      "https://ulcdn.universityliving.com/cms/mm8yiT6fpKnzU8cfWW3JzzCdu7Uc1G.webp?format=auto&width=384",
      "https://ulcdn.universityliving.com/cms/E7fQRg0O2CuQWmp12dhJAPBg61kBnh.jpeg?format=auto&width=384",
      "https://media.uhzcdn.com/image/1393/01HVCWGG3YX6N3VNP4VPQBCNFY_z.webp",
      "https://media.uhzcdn.com/image/1389/01HVCWFJC2BXK4RD2SNSD4B2P2_z.webp",
      "https://media.uhzcdn.com/image/1385/01J60KG2SMH713NPXD8GJ19MWZ_g.webp",
    ],
    area: "1200 sq.ft",
    services: ["24/7 Security", "Maintenance", "Housekeeping"],
    amenities: [
      {
        title: 'Room Features',
        items: [
          'UK-standard double beds',
          'Heating',
          'High-speed Wi-Fi (250 Mbps)',
          'Keyless entry',
          'Ample storage',
          'Fully equipped kitchens',
          'Showers, basins, mirrors, toilets, towel racks, hairdryers in bathrooms'
        ]
      },
      {
        title: 'Common Areas',
        items: [
          'Study rooms',
          'Gym',
          'Lounge areas',
          'Cinema room',
          'Coffee bar',
          'Poker room',
          'Vending machines',
          'Laundry facilities'
        ]
      },
      {
        title: 'Security & Services',
        items: [
          'Doorman access',
          'Video surveillance',
          'Cleaning services',
          'Parcel delivery services'
        ]
      },
      {
        title: 'Utilities Included',
        items: [
          'High-speed internet',
          'Water',
          'Electricity',
          'Heating'
        ]
      }
    ],
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
      "https://media.uhzcdn.com/image/1393/01HVCWGG3YX6N3VNP4VPQBCNFY_z.webp",
      "https://media.uhzcdn.com/image/1389/01HVCWFJC2BXK4RD2SNSD4B2P2_z.webp",
      "https://media.uhzcdn.com/image/1385/01J60KG2SMH713NPXD8GJ19MWZ_g.webp",
      "https://ulcdn.universityliving.com/cms/mm8yiT6fpKnzU8cfWW3JzzCdu7Uc1G.webp?format=auto&width=384",
      "https://ulcdn.universityliving.com/cms/E7fQRg0O2CuQWmp12dhJAPBg61kBnh.jpeg?format=auto&width=384",
      "https://media.uhzcdn.com/image/1393/01HVCWGG3YX6N3VNP4VPQBCNFY_z.webp",
      "https://media.uhzcdn.com/image/1389/01HVCWFJC2BXK4RD2SNSD4B2P2_z.webp",
      "https://media.uhzcdn.com/image/1385/01J60KG2SMH713NPXD8GJ19MWZ_g.webp",

    ],
    area: "600 sq.ft",
    services: ["24/7 Concierge", "Maintenance"],
    amenities: [
      {
        title: 'Room Features',
        items: [
          'UK-standard double beds',
          'Heating',
          'High-speed Wi-Fi (250 Mbps)',
          'Keyless entry',
          'Ample storage',
          'Fully equipped kitchens',
          'Showers, basins, mirrors, toilets, towel racks, hairdryers in bathrooms'
        ]
      },
      {
        title: 'Common Areas',
        items: [
          'Study rooms',
          'Gym',
          'Lounge areas',
          'Cinema room',
          'Coffee bar',
          'Poker room',
          'Vending machines',
          'Laundry facilities'
        ]
      },
      {
        title: 'Security & Services',
        items: [
          'Doorman access',
          'Video surveillance',
          'Cleaning services',
          'Parcel delivery services'
        ]
      },
      {
        title: 'Utilities Included',
        items: [
          'High-speed internet',
          'Water',
          'Electricity',
          'Heating'
        ]
      }
    ],
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
      "https://media.uhzcdn.com/image/1393/01HVCWGG3YX6N3VNP4VPQBCNFY_z.webp",
      "https://media.uhzcdn.com/image/1389/01HVCWFJC2BXK4RD2SNSD4B2P2_z.webp",
      "https://media.uhzcdn.com/image/1385/01J60KG2SMH713NPXD8GJ19MWZ_g.webp",
      "https://ulcdn.universityliving.com/cms/mm8yiT6fpKnzU8cfWW3JzzCdu7Uc1G.webp?format=auto&width=384",
      "https://ulcdn.universityliving.com/cms/E7fQRg0O2CuQWmp12dhJAPBg61kBnh.jpeg?format=auto&width=384",
      "https://media.uhzcdn.com/image/1393/01HVCWGG3YX6N3VNP4VPQBCNFY_z.webp",
      "https://media.uhzcdn.com/image/1389/01HVCWFJC2BXK4RD2SNSD4B2P2_z.webp",
      "https://media.uhzcdn.com/image/1385/01J60KG2SMH713NPXD8GJ19MWZ_g.webp",

    ],
    area: "1500 sq.ft",
    services: ["24/7 Security", "Private Beach Access"],
    amenities: [
      {
        title: 'Room Features',
        items: [
          'UK-standard double beds',
          'Heating',
          'High-speed Wi-Fi (250 Mbps)',
          'Keyless entry',
          'Ample storage',
          'Fully equipped kitchens',
          'Showers, basins, mirrors, toilets, towel racks, hairdryers in bathrooms'
        ]
      },
      {
        title: 'Common Areas',
        items: [
          'Study rooms',
          'Gym',
          'Lounge areas',
          'Cinema room',
          'Coffee bar',
          'Poker room',
          'Vending machines',
          'Laundry facilities'
        ]
      },
      {
        title: 'Security & Services',
        items: [
          'Doorman access',
          'Video surveillance',
          'Cleaning services',
          'Parcel delivery services'
        ]
      },
      {
        title: 'Utilities Included',
        items: [
          'High-speed internet',
          'Water',
          'Electricity',
          'Heating'
        ]
      }
    ],
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
      "https://media.uhzcdn.com/image/1393/01HVCWGG3YX6N3VNP4VPQBCNFY_z.webp",
      "https://media.uhzcdn.com/image/1389/01HVCWFJC2BXK4RD2SNSD4B2P2_z.webp",
      "https://media.uhzcdn.com/image/1385/01J60KG2SMH713NPXD8GJ19MWZ_g.webp",
      "https://ulcdn.universityliving.com/cms/mm8yiT6fpKnzU8cfWW3JzzCdu7Uc1G.webp?format=auto&width=384",
      "https://ulcdn.universityliving.com/cms/E7fQRg0O2CuQWmp12dhJAPBg61kBnh.jpeg?format=auto&width=384",
      "https://media.uhzcdn.com/image/1393/01HVCWGG3YX6N3VNP4VPQBCNFY_z.webp",
      "https://media.uhzcdn.com/image/1389/01HVCWFJC2BXK4RD2SNSD4B2P2_z.webp",
      "https://media.uhzcdn.com/image/1385/01J60KG2SMH713NPXD8GJ19MWZ_g.webp",

    ],
    area: "2500 sq.ft",
    services: ["Valet Parking", "Private Chef", "Housekeeping"],
    amenities: [
      {
        title: 'Room Features',
        items: [
          'UK-standard double beds',
          'Heating',
          'High-speed Wi-Fi (250 Mbps)',
          'Keyless entry',
          'Ample storage',
          'Fully equipped kitchens',
          'Showers, basins, mirrors, toilets, towel racks, hairdryers in bathrooms'
        ]
      },
      {
        title: 'Common Areas',
        items: [
          'Study rooms',
          'Gym',
          'Lounge areas',
          'Cinema room',
          'Coffee bar',
          'Poker room',
          'Vending machines',
          'Laundry facilities'
        ]
      },
      {
        title: 'Security & Services',
        items: [
          'Doorman access',
          'Video surveillance',
          'Cleaning services',
          'Parcel delivery services'
        ]
      },
      {
        title: 'Utilities Included',
        items: [
          'High-speed internet',
          'Water',
          'Electricity',
          'Heating'
        ]
      }
    ],
    rating: 4.7, // Add rating to the apartment
    reviews: [
      { user: "John Doe", rating: 5, comment: "Great place to live!" },
      { user: "Jane Smith", rating: 4, comment: "Very nice apartment, but a bit pricey." },
    ],
  },
];

const PropertyDetail = () => {

  const openModal = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  const [activeTab, setActiveTab] = useState("Overview");
  const { PropertyId } = useParams();
  const apartment = apartmentsData.find((apt) => apt.id === parseInt(PropertyId));
  const recommendedApartments = apartmentsData.filter((apt) => apt.id !== parseInt(PropertyId)).slice(0, 3);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(apartment.images[0]);

  if (!apartment) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg text-gray-500">Property not found.</p>
      </div>
    );
  }

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

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

  // Scroll to the target section when a tab is clicked
  const scrollToSection = (section, margin = 180) => {
    const element = document.getElementById(section);

    if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - margin;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
};


  return (
    <div className="min-h-screen py-8 ">
      {/* Image Slider */}
      <div className="mb-6 px-20">
        <h1 className="text-4xl font-bold mb-6">{apartment.title}</h1>
        <div className="relative flex w-full max-h-[500px] gap-2">
          {/* Large image */}
          <div className="w-1/2">
            <img src={apartment.images[0]} alt="Large Image" className="w-full h-full object-cover rounded-md" />
          </div>

          {/* Grid of smaller images */}
          <div className="w-1/2 grid grid-cols-2 gap-2">
            {apartment.images.slice(1, 4).map((image, index) => (
              <div key={index} className="overflow-hidden rounded-md">
                <img src={image} alt={`Image ${index + 2}`} className="w-full h-full object-cover" />
              </div>
            ))}
            <div key={4} className="overflow-hidden rounded-md relative opacity-75" onClick={() => openModal(apartment.images[4])}>
              <img src={apartment.images[4]} alt={`Others`} className="w-full h-full object-cover blur-sm" />
              <div className="text absolute top-24 left-20">
                <p className="text-white text-4xl font-semibold">+{apartment.images.length - 4} others</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-4 w-full mb-4 sticky top-[72px] h-16 bg-white z-20">
        <div className="flex justify-center border-b gap-10 w-full">
          <button
            className={`py-2 px-4 text-lg font-semibold ${activeTab === 'Overview' ? 'border-b-2 border-amber-800 text-amber-800' : 'text-gray-600'
              }`}
            onClick={() => { setActiveTab('Overview'); scrollToSection('overview') }}
          >
            Overview
          </button>
          <button
            className={`py-2 px-4 text-lg font-semibold ${activeTab === 'Facilities' ? 'border-b-2 border-amber-800 text-amber-800' : 'text-gray-600'
              }`}
            onClick={() => { setActiveTab('Facilities'); scrollToSection('facilities') }}
          >
            Facilities
          </button>
          <button
            className={`py-2 px-4 text-lg font-semibold ${activeTab === 'Services' ? 'border-b-2 border-amber-800 text-amber-800' : 'text-gray-600'
              }`}
            onClick={() => { setActiveTab('Services'); scrollToSection('services') }}
          >
            Services
          </button>
          <button
            className={`py-2 px-4 text-lg font-semibold ${activeTab === 'Reviews' ? 'border-b-2 border-amber-800 text-amber-800' : 'text-gray-600'
              }`}
            onClick={() => { setActiveTab('Reviews'); scrollToSection('reviews') }}
          >
            Reviews
          </button>
          <button
            className={`py-2 px-4 text-lg font-semibold ${activeTab === 'Properties' ? 'border-b-2 border-amber-800 text-amber-800' : 'text-gray-600'
              }`}
            onClick={() => { setActiveTab('Properties'); scrollToSection('properties') }}
          >
            Properties
          </button>
        </div>
      </div>

      {/* Section Contents */}
      <div id="overview" className="w-full py-2 flex justify-between relative px-20">
        <div className="mb-6 w-[65%]">
          <h2 className="text-3xl font-semibold mb-6 underline">Overview</h2>
          <div className="description mb-8 border-gray-400 bg-gray-50 p-4 rounded-lg border-2">
            <h2 className="text-2xl font-semibold text-gray-800">Description</h2>
            <p className="text-gray-600 mt-2">{apartment.description}</p>
          </div>
          <div className="Location mb-8 border-gray-400 bg-gray-50 p-4 rounded-lg border-2">
            <h2 className="text-2xl font-semibold text-gray-800">Location</h2>
            <p className="text-gray-600">{apartment.city}, {apartment.country}</p>
          </div>
          <div className="Price mb-8 border-gray-400 bg-gray-50 p-4 rounded-lg border-2">
            <h2 className="text-2xl font-semibold text-gray-800">Price</h2>
            <p className="text-amber-800 font-bold text-xl">${apartment.price}/month</p>
          </div>
          <div className="rating border-gray-400 bg-gray-50 p-4 rounded-lg border-2">
            <h2 className="text-2xl font-semibold text-gray-800">Rating</h2>
            <div className="flex justify-start flex-col">
              <p className="text-xl font-semibold">{apartment.rating}/5</p>
              <div className="flex items-center">
                {renderStars(apartment.rating)}
                <span className="text-gray-600">({apartment.reviews.length} reviews)</span>
              </div>
            </div>
          </div>
          <div id="facilities" className="w-full py-2 mt-4">
            <div className="">
              <h2 className="text-3xl font-semibold mb-6 underline">Amenities</h2>
              <div className="amenities">
                <ul className="grid grid-cols-2 gap-4 mt-2">
                  {apartment.amenities.map((category, index) => (
                    <div key={index} className="mb-6 border-2 border-gray-400 bg-gray-50 p-4 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-800">{category.title}</h3>
                      <ul className="list-disc pl-6">
                        {category.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-gray-600">{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div id="services" className="w-full py-2 mb-6">
            <h2 className="text-3xl font-semibold mb-6 underline">Services</h2>
            <div className="services border-gray-400 bg-gray-50 p-4 rounded-lg border-2">
              <ul className="list-disc list-inside mt-2 text-gray-600">
                {apartment.services.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <aside className="form mt-8 sticky top-20">
          <BuyForm apartment={apartment} />
        </aside>
      </div>

      <div id="reviews" className="w-full py-2 px-20">
        <div className="mb-6">
          <h2 className="text-3xl font-semibold mb-6 underline">Reviews</h2>
          <div className="reviews mb-8 border-gray-400 bg-gray-50 p-4 rounded-lg border-2">
            {apartment.reviews.map((review, index) => (
              <div key={index} className="mb-4">
                <p className="font-semibold">{review.user}</p>
                <div className="flex items-center space-x-1">
                  {renderStars(review.rating)}
                </div>
                <p className="text-gray-600">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Similar Apartments */}
      <div id="properties" className="mt-4 px-20">
        <h2 className="text-3xl font-semibold underline">Similar Properties</h2>
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
                <p className="text-gray-500">{apt.city}</p>
                <p className="text-amber-800 font-bold">${apt.price}/month</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      {modalOpen && <ImageModal images={apartment.images} selectedImage={selectedImage} onClose={closeModal} />}
    </div>
  );
};

export default PropertyDetail;
