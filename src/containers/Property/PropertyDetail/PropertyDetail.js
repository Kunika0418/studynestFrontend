import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import "swiper/css/bundle";
import BuyForm from "../../../components/BuyFrom/BuyForm";
import ImageModal from "../../../components/ImageModal/ImageModal";
import { IoLocationSharp, IoShieldCheckmark } from "react-icons/io5";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaGraduationCap } from "react-icons/fa6";
import { apartmentsData } from "../../../components/Data/Data";

const PropertyDetail = () => {

  const openModal = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  const [activeTab, setActiveTab] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
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
          <span key={`full-${i}`} className="text-amber-500 text-2xl">★</span>
        ))}
        {halfStar && <span className="text-amber-500 text-2xl">☆</span>}
        {[...Array(emptyStars)].map((_, i) => (
          <span key={`empty-${i}`} className="text-gray-300 text-2xl">★</span>
        ))}
      </div>
    );
  };

  // Scroll to the target section when a tab is clicked
  const scrollToSection = (section, margin = 150) => {
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
        <div className="info mb-6 flex flex-col gap-2">
          <h1 className="text-4xl font-bold ">{apartment.title}</h1>
          <div className="flex gap-4">
            <p className="flex gap-2 items-center text-xl"><FaGraduationCap /> Student Accomodation</p>
            <p className="flex gap-2 items-center text-xl"><IoShieldCheckmark /> On-site verification</p>
          </div>
          <div className="flex justify-between">
            <p className="flex gap-2 items-center text-xl"><IoLocationSharp /> {apartment.city}, {apartment.country}</p>
            <div className="flex items-center border-2 border-amber-100 bg-amber-50 px-4 py-1 rounded-lg gap-2">
              {renderStars(apartment.rating)}
              <span className="text-gray-600">({apartment.reviews.length} reviews)</span>
            </div>
          </div>
        </div>
        <div className="flex w-full max-h-[400px] gap-2">
          {/* Large image */}
          <div className="w-1/2">
            <img src={apartment.images[0]} alt="Large Image" className="w-full h-full object-cover rounded-md" />
          </div>

          {/* Grid of smaller images */}
          <div className="w-1/2 grid grid-cols-2 gap-2 grid-rows-2">
            {apartment.images.slice(1, 4).map((image, index) => (
              <div key={index} className="overflow-hidden rounded-md">
                <img src={image} alt={`Image ${index + 2}`} className="w-full h-full object-cover" />
              </div>
            ))}
            <div
              key={4}
              className="relative overflow-hidden rounded-md opacity-75 cursor-pointer w-full h-full"
              onClick={() => openModal(apartment.images[4])}
            >
              <img
                src={apartment.images[4]}
                alt="Others"
                className="w-full h-full object-cover blur-sm"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-white text-2xl font-medium">
                  +{apartment.images.length - 4} others
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-4 w-full mb-4 sticky top-[72px] h-16 bg-white/30 bg-opacity-30 backdrop-blur-lg z-20">
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
      <div id="overview" className="w-full py-2 flex justify-between relative px-20 gap-10">
        {/* Left Section */}
        <div className="mb-6 w-[65%]">
          {/* Overview Section */}
          <h2 className="text-3xl font-semibold mb-6 underline">Overview</h2>
          <div className="description mb-8">
            <p className="mt-2">
              {isExpanded
                ? apartment.description
                : `${apartment.description.split(' ').slice(0, 50).join(' ')}${apartment.description.split(' ').length > 50 ? '...' : ''
                }`}
            </p>
            {apartment.description.split(' ').length > 50 && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-amber-700 underline text-lg flex gap-1 items-center"
              >
                {isExpanded ? (
                  <>
                    View Less <IoIosArrowUp />
                  </>
                ) : (
                  <>
                    View More <IoIosArrowDown />
                  </>
                )}
              </button>
            )}
          </div>

          {/* Amenities Section */}
          <div id="facilities"  className="w-full py-2 mt-4">
            <h2 className="text-3xl font-semibold mb-6 underline">Amenities</h2>
            <div className="amenities">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                {apartment.amenities.map((category, index) => (
                  <div
                    key={index}
                    className="mb-6 border-2 border-gray-400 bg-gray-50 px-6 py-4 rounded-lg"
                  >
                    <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                    <ul className="list-disc pl-4 grid grid-cols-2">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="pr-6">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </ul>
            </div>
          </div>

          {/* Services Section */}
          <div id="services" className="w-full py-2 mb-6">
            <h2 className="text-3xl font-semibold mb-6 underline">Services</h2>
            <div className="services border-gray-400 bg-gray-50 p-4 rounded-lg border-2">
              <ul className="list-disc list-inside mt-2">
                {apartment.services.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <aside className="form mt-8 h-full sticky top-[10rem]">
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
