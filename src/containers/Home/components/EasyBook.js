import React from "react";

import searchHouse from "../../../assets/images/searchHouse.jpg";
import notepad from "../../../assets/images/notepad.jpg";
import house from "../../../assets/images/house.jpg";

const EasyBook = () => {
  const data = [
    {
      img: searchHouse,
      title: "Explore and Decide",
      description: "Select from a range of trusted student housing options.",
    },
    {
      img: notepad,
      title: "We’ll Handle It",
      description: "Leave the paperwork to us, stress-free and easy.",
    },
    {
      img: house,
      title: "Room Reserved!",
      description:
        "Prepare, gather your things, and begin your next adventure!",
    },
  ];

  return (
    <>
      <div className="h-auto w-full flex flex-col justify-center items-center gap-5 py-6 px-10">
        <h2 className="text-3xl font-semibold font-sans text-accent-100 capitalize">
          Reserve your spot in{" "}
          <span className="text-primary-200 capitalize">3 simple steps</span>
        </h2>
        <h3 className="text-base font-sans text-accent-100">
          Reserve spots in top cities and universities worldwide.
        </h3>
        <div className="grid lg:grid-flow-col gap-4">
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className="h-80 w-96 flex flex-col justify-center items-center gap-2 rounded-lg border border-primary-300 overflow-hidden relative group cursor-pointer p-4 shadow-2xl shadow-slate-400 hover:shadow-3xl hover:shadow-primary-300 transition-shadow duration-500 ease-in-out"
              >
                <div className="h-40 w-40 border-4 border-primary-100/80 rounded-full relative flex justify-center items-center">
                  <img
                    src={item.img}
                    className="h-full w-full object-cover rounded-full"
                    alt="error occured"
                  />
                  <div className="h-14 w-14 rounded-full bg-primary-100 absolute -right-6 border-8 border-white flex justify-center items-center text-white">
                    0{index + 1}
                  </div>
                </div>
                <h4 className="text-xl text-accent-100 font-semibold font-sans mt-4">
                  {item.title}
                </h4>
                <span className="text-sm font-medium text-accent-100 font-sans text-center">
                  {item.description}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default EasyBook;
