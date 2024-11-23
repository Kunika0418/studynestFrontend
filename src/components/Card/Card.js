import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ApartmentCard = ({ images, title, price, city, country, area, services, onClick }) => {
  const settings = {
    dots: true, // Enable dots
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // Hide arrows for simplicity
    appendDots: (dots) => (
      <div className="relative w-full h-full flex justify-center">
        <ul className="w-full absolute bottom-6 flex justify-center">{dots}</ul>
      </div>
    ),
  };

  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
      {/* Apartment Image Slider */}
      <div className="relative w-full h-48">
        <Slider {...settings}>
          {images.length > 0 ? (
            images.map((image, index) => (
              <img
                key={index}
                src={image || '/default-image.jpg'}
                alt={title || 'Apartment'}
                className="w-full h-48 object-cover"
              />
            ))
          ) : (
            <img
              src="/default-image.jpg"
              alt="Default Apartment"
              className="w-full h-full object-cover"
            />
          )}
        </Slider>
      </div>

      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-500">{city}, {country}</p>
        <p className="text-sm text-gray-600">Area: {area}</p>
        <p className="text-sm text-gray-700 font-semibold mt-2">
          Price: ${price}/month
        </p>
        <ul className="text-xs text-gray-600 mt-2">
          {services.slice(0, 2).map((service, index) => (
            <li key={index} className="list-disc list-inside">
              {service}
            </li>
          ))}
          {services.length > 2 && <li className="italic">+ more services</li>}
        </ul>
      </div>

      {/* Button to view details */}
      <div className="px-6 pb-4">
        <button
          onClick={onClick}
          className="w-full py-2 px-4 bg-amber-800 text-white rounded-lg hover:bg-amber-900 transition duration-300"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default ApartmentCard;
