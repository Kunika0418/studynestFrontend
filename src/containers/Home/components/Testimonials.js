import React, { useState, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "../Home.css";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_SERVER_URI}/api/testimonial/testimonials`);
        setTestimonials(response.data);
      } catch (err) {
        setError("Failed to load testimonials");
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="bg-lightpink py-12 px-4 sm:px-8 lg:px-16 w-full">
      <h2 className="text-3xl font-bold text-center text-voilet mb-8">
        What Our <span className="text-pink">Students Say</span>
      </h2>
      <div className="flex justify-center items-center py-4">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 5000 }}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
          }}
          slidesPerView={2}
          centeredSlides={true}
          loop={true}
          breakpoints={{
            350: { slidesPerView: 1, spaceBetween: 2 },
            640: { slidesPerView: 1.95, spaceBetween: 10 },
            780: { slidesPerView: 2.25, spaceBetween: 10 },
            900: { slidesPerView: 2.4, spaceBetween: 10 },
            1100: { slidesPerView: 2.5, spaceBetween: 2 },
            1270: { slidesPerView: 3, spaceBetween: 10 },
          }}
          className="w-full max-w-screen-xl h-auto flex"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="flex justify-center mt-6 w-full">
              <div className="bg-bg-100 shadow-lg rounded-lg p-6 lg:w-96 md:w-80 transform hover:scale-105 transition-transform duration-300 border border-voilet h-[15rem]">
                <img
                  src={'https://w7.pngwing.com/pngs/184/113/png-transparent-user-profile-computer-icons-profile-heroes-black-silhouette-thumbnail.png'}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mx-auto mb-4 border-2 border-voilet"
                  loading="lazy"
                />
                <p className="text-text-200 text-center italic mb-4">
                  "{testimonial.feedback}"
                </p>
                <h3 className="text-lg font-bold text-center text-darkpink">
                  {testimonial.name}
                </h3>
                <h5 className="text-sm font-medium text-center text-darkpink">
                  {testimonial.email}
                </h5>
              </div>
            </SwiperSlide>
          ))}
          <div className="custom-pagination mt-6 flex justify-center gap-2"></div>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
