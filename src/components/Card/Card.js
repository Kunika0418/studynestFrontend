import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

const ApartmentCard = ({ id, images, title, price, city, country, area, services }) => {
  const settings = {
    dots: false, // Enable dots
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows:false
  };

  return (
    <div className="w-full">
      <Link to={`/Property/${id}`}>
        {/* Apartment Image Slider */}
        <div className='rounded-sm overflow-hidden shadow-lg bg-white flex'>
          <div className="relative w-[21rem] h-48">
            <Slider {...settings}>
              {images.length > 0 ? (
                images.map((image, index) => (
                  <img
                    key={index}
                    src={image || '/default-image.jpg'}
                    alt={title || 'Apartment'}
                    className="w-[21rem] h-48 object-cover"
                  />
                ))
              ) : (
                <img
                  src="/default-image.jpg"
                  alt="Default Apartment"
                  className="w-48 h-full object-cover"
                />
              )}
            </Slider>
          </div>

          <div className="p-4 flex flex-col gap-[2px]">
            <h2 className="text-xl font-bold">{title}</h2>
            <p className="text-sm mb-1">{city}, {country}</p>
            <p className="text-sm mb-1">Area: {area}</p>
            <p className="text-sm font-semibold mb-1">
              Price: ${price}/month
            </p>
            <ul className="text-xs text-gray-600 mt-2 grid grid-cols-3">
              {services.slice(0, 2).map((service, index) => (
                <li key={index} className="border-2 border-gray-200 bg-gray-50 px-2 py-1 list-inside mr-1 rounded-lg">
                  {service}
                </li>
              ))}
              {services.length > 2 && <li className="italic border-2 border-gray-200 bg-gray-50 px-2 py-1 rounded-lg">+ more services</li>}
            </ul>
          </div>
        </div>

      </Link>

    </div>
  );
};

export default ApartmentCard;
