import React from "react";
import "../Home.css"

const TopCities = () => {
  return (
    <>
      <div className="w-full h-auto px-10 flex flex-col items-center gap-12 py-10">
        <div className="flex flex-col justify-center items-center gap-4">
          <h2 className="text-2xl font-semibold font-sans text-accent-100">
            Top{" "}<span className="text-3xl font-bold text-primary-200">Cities</span>
          </h2>
          <span className="text-text-200 font-sans font-medium">We help you discover your ideal student home across countries and cities around the globe.</span>
        </div>
        <div className="grid grid-cols-3 gap-28">
          <div className="w-80 h-44 rounded-lg overflow-hidden relative cursir-pointer">
            <div className="text-gradient text-bg-200 top-5 left-0 px-3 h-auto w-fit absolute text-lg font-semibold z-10">London</div>
            <img
              src="https://ulcdn.universityliving.com/cms/mm8yiT6fpKnzU8cfWW3JzzCdu7Uc1G.webp?format=auto&width=384"
              className="h-full w-full object-cover hover:scale-125 transition duration-300 ease-in-out"
            />
          </div>
          <div className="w-80 h-44 rounded-lg overflow-hidden relative cursor-pointer">
            <div className="text-gradient text-bg-200 top-5 left-0 px-3 h-auto w-fit absolute text-lg font-semibold z-10">Toronto</div>
            <img
              src="https://ulcdn.universityliving.com/cms/mm8yiT6fpKnzU8cfWW3JzzCdu7Uc1G.webp?format=auto&width=384"
              className="h-full w-full object-cover hover:scale-125 transition duration-300 ease-in-out"
            />
          </div>
          <div className="w-80 h-44 rounded-lg overflow-hidden relative cursor-pointer">
            <div className="text-gradient text-bg-200 top-5 left-0 px-3 h-auto w-fit absolute text-lg font-semibold z-10">Washington</div>
            <img
              src="https://ulcdn.universityliving.com/cms/mm8yiT6fpKnzU8cfWW3JzzCdu7Uc1G.webp?format=auto&width=384"
              className="h-full w-full object-cover hover:scale-125 transition duration-300 ease-in-out"
            />
          </div>
          <div className="w-80 h-44 rounded-lg overflow-hidden relative cursor-pointer">
            <div className="text-gradient text-bg-200 top-5 left-0 px-3 h-auto w-fit absolute text-lg font-semibold z-10">Newyork</div>
            <img
              src="https://ulcdn.universityliving.com/cms/mm8yiT6fpKnzU8cfWW3JzzCdu7Uc1G.webp?format=auto&width=384"
              className="h-full w-full object-cover hover:scale-125 transition duration-300 ease-in-out"
            />
          </div>
          <div className="w-80 h-44 rounded-lg overflow-hidden relative cursor-pointer">
            <div className="text-gradient text-bg-200 top-5 left-0 px-3 h-auto w-fit absolute text-lg font-semibold z-10">Sydney</div>
            <img
              src="https://ulcdn.universityliving.com/cms/mm8yiT6fpKnzU8cfWW3JzzCdu7Uc1G.webp?format=auto&width=384"
              className="h-full w-full object-cover hover:scale-125 transition duration-300 ease-in-out"
            />
          </div>
          <div className="w-80 h-44 rounded-lg overflow-hidden relative cursor-pointer">
            <div className="text-gradient text-bg-200 top-5 left-0 px-3 h-auto w-fit absolute text-lg font-semibold z-10">Luxembourg</div>
            <img
              src="https://ulcdn.universityliving.com/cms/mm8yiT6fpKnzU8cfWW3JzzCdu7Uc1G.webp?format=auto&width=384"
              className="h-full w-full object-cover hover:scale-125 transition duration-300 ease-in-out"
            />
          </div>
          
        </div>
      </div>
    </>
  );
};

export default TopCities;
