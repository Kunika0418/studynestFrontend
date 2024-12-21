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
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
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
            name: "Brisbane",
            link: "/Property?city=Brisbane",
            image:
              "https://images.unsplash.com/photo-1452859030887-bb96ef08d051?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            name: "Adelaide",
            link: "/Property?city=Adelaide",
            image:
              "https://images.unsplash.com/photo-1558509834-ec69b065eb4c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            name: "Perth",
            link: "/Property?city=Perth",
            image:
              "https://images.unsplash.com/photo-1524586410818-196d249560e4?q=80&w=1652&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            name: "Sydney",
            link: "/Property?city=Sydney",
            image:
              "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            name: "Darwin",
            link: "/Property?city=Darwin",
            image:
              "https://images.unsplash.com/photo-1671595334685-fce6db1f53a4?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            name: "Canberra",
            link: "/Property?city=Canberra",
            image:
              "https://images.unsplash.com/photo-1560316194-91df893f783d?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
              loading="lazy"
              className="h-full w-full object-cover group-hover:scale-125 transition-transform duration-500 ease-in-out"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopCities;
