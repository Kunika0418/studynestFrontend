import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "swiper/css/bundle";
import BuyForm from "../../../components/BuyFrom/BuyForm";
import ImageModal from "../../../components/ImageModal/ImageModal";
import { IoLocationSharp, IoShieldCheckmark, IoBusiness  } from "react-icons/io5";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaGraduationCap } from "react-icons/fa6";
import axios from "axios";

const PropertyDetail = () => {
  const { PropertyId } = useParams();
  const [apartmentsData, setApartmentsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("Overview");
  const [isExpanded, setIsExpanded] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);


  // const apartment = apartmentsData.find((apt) => apt._id === PropertyId);
  const [apartment, setapartment] = useState({});



  useEffect(() => {

    const fetchPropertyById = async() => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_SERVER_URI}/api/propertyauth/property/${PropertyId}`
        );
        setapartment(response.data.property);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    const fetchedData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_SERVER_URI}/api/propertyauth/properties`
        );
        setApartmentsData(response.data.properties);
        setLoading(false);
        console.log(response);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchPropertyById();
    fetchedData();
  }, []); // Empty dependency array to run only once


  const recommendedApartments = apartmentsData
    .filter((apt) => apt._id !== PropertyId)
    .slice(0, 3);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  // const renderStars = (rating) => {
  //   const fullStars = Math.floor(rating);
  //   const halfStar = rating % 1 !== 0;
  //   const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  //   return (
  //     <div className="flex items-center space-x-1">
  //       {/* {[...Array(fullStars)].map((_, i) => (
  //         <span key={`full-${i}`} className="text-pink-500 text-2xl">
  //           ★
  //         </span>
  //       ))}
  //       {halfStar && <span className="text-pink-500 text-2xl">☆</span>}
  //       {[...Array(emptyStars)].map((_, i) => (
  //         <span key={`empty-${i}`} className="text-gray-300 text-2xl">
  //           ★
  //         </span>
  //       ))} */}
  //     </div>
  //   );
  // };
  // Scroll to the target section when a tab is clicked
  const scrollToSection = (section, margin = 150) => {
    const element = document.getElementById(section);

    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - margin;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div
          className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
          role="status"
        ></div>
        <span className="ml-2">Loading...</span>
      </div>
    );
  }
  if (error || !apartment) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg text-red-500">Something went wrong: {error}</p>
        <button
          className="text-primary-100 underline"
          onClick={() => window.location.reload()}
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 bg-offwhite/50">
      {apartment ? (<div>
        {/* Image Slider */}
        <div className="mb-6 px-20">
          <div className="info mb-6 flex flex-col gap-2">
            <h1 className="text-4xl text-voilet font-semibold font-sans">
              {apartment.title}
            </h1>
            <div className="flex gap-4">
              <p className="flex gap-2 items-center text-lg text-voilet font-sans font-medium">
                <FaGraduationCap className="text-darkpink" /> Student
                Accomodation
              </p>
              <p className="flex gap-2 items-center text-lg text-voilet font-sans font-medium">
                <IoShieldCheckmark className="text-darkpink" /> On-site
                verification
              </p>
            </div>
            <div className="flex justify-between">
              <p className="flex gap-2 items-center text-lg text-voilet font-sans font-medium">
                <IoLocationSharp className="text-darkpink" /> {apartment.city},{" "}
                {apartment.country}
              </p>
              <p className="flex gap-2 items-center text-lg text-voilet font-sans font-medium">
                <IoBusiness  className="text-darkpink" />
                {apartment.university}
              </p>

              {/* <div className="flex items-center border-2 border-pink-100 bg-pink-50 px-4 py-1 rounded-lg gap-2">
              {renderStars(apartment.rating)}
              <span className="text-gray-600">
                ({apartment.reviews.length} reviews)
              </span>
            </div> */}
            </div>
          </div>
          <div className="flex w-full max-h-[400px] gap-2">
            {/* Large image */}
            <div
              onClick={() => openModal(apartment.images[1])}
              className="w-1/2 cursor-pointer"
            >
              <img
                src={apartment.images && apartment.images[0]}
                alt="Large Image"
                className="w-full h-full object-cover rounded-md"
              />
            </div>

            {/* Grid of smaller images */}
            <div className="w-1/2 grid grid-cols-2 gap-2 grid-rows-2">
              {apartment.images.slice(1, 4).map((image, index) => (
                <div
                  onClick={() => openModal(apartment.images[index + 1])}
                  key={index}
                  className="overflow-hidden rounded-md cursor-pointer"
                >
                  <img
                    src={image}
                    alt={`Image ${index + 2}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
              {apartment.images.length > 4 && (
                <div
                  key={4}
                  className="relative overflow-hidden rounded-md opacity-75 w-full h-full cursor-pointer"
                  onClick={() => openModal(apartment.images[0])}
                >
                  <img
                    src={apartment.images && apartment.images[4] || ""}
                    alt="Others"
                    className="w-full h-full object-cover blur-sm"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-white text-2xl font-medium">
                      +{apartment.images.length - 4} others
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex space-x-4 w-full h-16 z-10">
          <div className="flex justify-center border-b gap-10 w-full">
            <button
              className={`py-2 px-4 text-lg font-semibold transition duration-300 ease-in-out border-b-2 ${activeTab === "Overview"
                ? "border-darkpink text-voilet"
                : "text-gray-600 hover:border-darkpink hover:text-voilet"
                }`}
              onClick={() => {
                setActiveTab("Overview");
                scrollToSection("overview");
              }}
            >
              Overview
            </button>
            <button
              className={`py-2 px-4 text-lg font-semibold transition duration-300 ease-in-out border-b-2 ${activeTab === "Facilities"
                ? "border-darkpink text-voilet"
                : "text-gray-600 hover:border-darkpink hover:text-voilet"
                }`}
              onClick={() => {
                setActiveTab("Facilities");
                scrollToSection("facilities");
              }}
            >
              Facilities
            </button>
            <button
              className={`py-2 px-4 text-lg font-semibold transition duration-300 ease-in-out border-b-2 ${activeTab === "Services"
                ? "border-darkpink text-voilet"
                : "text-gray-600 hover:border-darkpink hover:text-voilet"
                }`}
              onClick={() => {
                setActiveTab("Services");
                scrollToSection("services");
              }}
            >
              Services
            </button>
            <button
              className={`py-2 px-4 text-lg font-semibold transition duration-300 ease-in-out border-b-2 ${activeTab === "Properties"
                ? "border-darkpink text-voilet"
                : "text-gray-600 hover:border-darkpink hover:text-voilet"
                }`}
              onClick={() => {
                setActiveTab("Properties");
                scrollToSection("properties");
              }}
            >
              Properties
            </button>
          </div>
        </div>

        {/* Section Contents */}
        <div
          id="overview"
          className="w-full py-6 flex justify-between relative px-20 gap-10 bg-bg-200"
        >
          {/* Left Section */}
          <div className="mb-6 w-[65%]">
            {/* Overview Section */}
            <h2 className="text-2xl font-sans text-accent-100 font-semibold mb-6">
              Overview
            </h2>
            <div className="description mb-8">
              <p className="mt-2 text-justify">
                {isExpanded
                  ? apartment.description
                  : `${apartment.description.split(" ").slice(0, 50).join(" ")}${apartment.description.split(" ").length > 50 ? "..." : ""
                  }`}
              </p>
              {apartment.description.split(" ").length > 50 && (
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-primary-200 underline underline-offset-2 text-lg flex gap-1 items-center"
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
            {apartment.amenities.length > 0 && (
              <div id="facilities" className="w-full py-2 mt-4">
                <h2 className="text-2xl font-sans text-accent-100 font-semibold mb-6">
                  Amenities
                </h2>
                <div className="amenities">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                    {apartment.amenities.map((category, index) => (
                      <div
                        key={index}
                        className="mb-6 border border-voilet bg-gray-50 px-6 py-4 rounded-lg"
                      >
                        <h3 className="text-lg text-accent-100 font-semibold mb-2">
                          {category.title}
                        </h3>
                        <ul className="list-disc px-4 grid grid-cols-2 gap-x-4 gap-y-2">
                          {category.items.map((item, itemIndex) => (
                            <li
                              className="text-accent-100 font-medium text-sm"
                              key={itemIndex}
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Services Section */}
            {apartment.services.length > 0 && (
              <div id="services" className="w-full py-2 mb-6">
                <h2 className="text-2xl font-sans text-accent-100 font-semibold mb-6">
                  Services
                </h2>
                <div className="services border border-voilet bg-gray-50 p-4 rounded-lg">
                  <ul className="list-disc list-inside mt-2">
                    {apartment.services.map((service, index) => (
                      <li
                        className="text-accent-100 font-medium text-sm"
                        key={index}
                      >
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Right Section */}
          <aside className="form mt-8 h-full sticky top-[9.5rem]">
            <BuyForm apartment={apartment} />
          </aside>
        </div>

        {/* Similar Apartments */}
        <div id="properties" className="mt-4 px-20">
          <h2 className="text-2xl font-sans text-primary-100 font-semibold mb-6">
            Similar Properties
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {recommendedApartments.map((apt) => (
              <Link
                key={apt._id}
                to={`/Property/${apt._id}`}
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
                  <p className="text-pink-800 font-bold">${apt.price}/month</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        {modalOpen && (
          <ImageModal
            images={apartment.images}
            selectedImage={selectedImage}
            onClose={closeModal}
          />
        )}
      </div>) : (
        <div className="flex items-center justify-center min-h-screen">
          <p className="text-lg text-gray-500">Property not found.</p>
        </div>
      )}
    </div>
  );
};

export default PropertyDetail;
