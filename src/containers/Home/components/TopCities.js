import React from "react";
import "../Home.css";

const TopCities = () => {
  return (
    <div className="w-full h-auto px-5 md:px-10 flex flex-col items-center gap-12 py-10">
      <div className="flex flex-col justify-center items-center gap-4 text-center">
        <h2 className="text-3xl font-semibold font-sans text-voilet">
          Top <span className="text-4xl font-bold text-pink">Cities</span>
        </h2>
        <span className="text-text-200 font-sans font-medium max-w-2xl">
          We help you discover your ideal student home across countries and cities around the globe.
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-y-12 gap-x-20">
        {[
          { name: "London", image: "https://ulcdn.universityliving.com/cms/mm8yiT6fpKnzU8cfWW3JzzCdu7Uc1G.webp?format=auto&width=384" },
          { name: "Toronto", image: "https://ulcdn.universityliving.com/cms/mm8yiT6fpKnzU8cfWW3JzzCdu7Uc1G.webp?format=auto&width=384" },
          { name: "Washington", image: "https://ulcdn.universityliving.com/cms/mm8yiT6fpKnzU8cfWW3JzzCdu7Uc1G.webp?format=auto&width=384" },
          { name: "New York", image: "https://ulcdn.universityliving.com/cms/mm8yiT6fpKnzU8cfWW3JzzCdu7Uc1G.webp?format=auto&width=384" },
          { name: "Sydney", image: "https://ulcdn.universityliving.com/cms/mm8yiT6fpKnzU8cfWW3JzzCdu7Uc1G.webp?format=auto&width=384" },
          { name: "Luxembourg", image: "https://ulcdn.universityliving.com/cms/mm8yiT6fpKnzU8cfWW3JzzCdu7Uc1G.webp?format=auto&width=384" },
        ].map((city, index) => (
          <div
            key={index}
            className="w-full h-44 rounded-lg overflow-hidden relative cursor-pointer"
          >
            <div className="text-gradient text-bg-200 top-5 left-0 px-3 h-auto w-fit absolute text-lg font-semibold z-10">
              {city.name}
            </div>
            <img
              src={city.image}
              alt={city.name}
              className="h-full w-full object-cover hover:scale-125 transition-transform duration-300 ease-in-out"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCities;
