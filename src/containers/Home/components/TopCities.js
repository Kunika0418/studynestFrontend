import React from "react";
import backgroundDot from "../../../assets/images/backgroundDot.jpg";
import "../Home.css";
import { Link } from "react-router-dom";
import housebg from "../../../assets/images/housesbg.png";


const TopCities = () => {
  return (
    <div className="relative w-full h-auto px-5 md:px-10 flex flex-col items-center gap-12 py-10">
      <div
        className="h-full w-full absolute top-0 left-0 bg-white/30 opacity-20 z-0"
        style={{
          backgroundImage: `url(${backgroundDot})`,
          backgroundSize: "auto",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="flex flex-col justify-center items-center gap-4 text-center z-10 w-full">
        <h2 className="text-3xl font-semibold font-sans text-voilet">
          Top <span className="text-4xl font-bold text-pink">Cities</span>
        </h2>
        <span className="text-text-200 font-sans font-medium max-w-2xl">
          We help you discover your ideal student home across countries and
          cities around the globe.
        </span>
        <div
        className="h-24 w-full"
        style={{
          backgroundImage: `url(${housebg})`,
          backgroundSize: "contain",
          backgroundRepeat: "repeat",
          backgroundPosition: "center",
        }}
      ></div>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-6">
        {[
          {
            name: "London",
            link: "/Property?city=London",
            image:
              "https://images.unsplash.com/photo-1448906654166-444d494666b3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            name: "Melbourne",
            link: "/Property?city=Melbourne",
            image:
              "https://images.unsplash.com/photo-1545044846-351ba102b6d5?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            name: "Washington",
            link: "/Property?city=Washington",
            image:
              "https://images.unsplash.com/photo-1463839346397-8e9946845e6d?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            name: "New York",
            link: "/Property?city=New York",
            image:
              "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            name: "Toronto",
            link: "/Property?city=Toronto",
            image:
              "https://images.unsplash.com/photo-1445873014904-7dc044bd92db?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            name: "Sydney",
            link: "/Property?city=Sydney",
            image:
              "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            name: "Luxembourg",
            link: "/Property?city=Luxembourg",
            image:
              "https://images.unsplash.com/photo-1543930379-9c68a7de2be8?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            name: "Prague",
            link: "/Property?city=Prague",
            image:
              "https://images.unsplash.com/photo-1541849546-216549ae216d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
        ].map((city, index) => (
          <Link
            key={index}
            to={city.link}
            className="w-full h-52 rounded-lg overflow-hidden relative cursor-pointer group border hover:border-voilet transition duration-500 ease-in-out"
          >
            <div className="w-full h-full text-white bg-black/40 flex justify-center items-center absolute text-xl font-semibold z-10 tracking-widest">
              {city.name}
            </div>
            <img
              src={city.image}
              alt={city.name}
              className="h-full w-full object-cover group-hover:scale-125 transition-transform duration-500 ease-in-out"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopCities;
