import React from "react";

import room1 from "../../../assets/images/room1.jpg";
import room2 from "../../../assets/images/room2.jpg";
import room3 from "../../../assets/images/room3.jpg";
import room4 from "../../../assets/images/room4.jpg";
import backgroundHotel from "../../../assets/images/backgroundHotel.jpg";
import backgroundDot from "../../../assets/images/backgroundDot.jpg";
import backgroundDot1 from "../../../assets/images/backgroundDot1.jpg";

const Options = () => {
  const data = [
    {
      id: 1,
      title: "Single Room",
      description: "Single Room",
      image: room1,
    },
    {
      id: 2,
      title: "Double Room",
      description: "Double Room",
      image: room2,
    },
    {
      id: 3,
      title: "Triple Room",
      description: "Triple Room",
      image: room3,
    },
    {
      id: 4,
      title: "Quad Room",
      description: "Quad Room",
      image: room4,
    },
  ];

  return (
    <>
      <div className="h-auto w-full mt-72 flex flex-col justify-center items-center gap-5 py-10 px-10 relative">
        <div
          className="h-full w-full absolute top-0 left-0 bg-white/30 opacity-20 z-0"
          style={{
            backgroundImage: `url(${backgroundHotel})`,
            backgroundSize: "auto", // Adjust size if needed
            backgroundPosition: "center",
          }}
        >
        </div>
        <h2 className="text-3xl font-semibold font-sans text-accent-100 capitalize z-10">
          Discover the Options: Explore the Range of{" "}
          <span className="text-primary-200 capitalize z-10">
            Student Housing Choices We Provide
          </span>
        </h2>
        <h3 className="text-base font-sans text-accent-100 z-10">
          Here’s a look at the various room types available for student rentals.
        </h3>
        <div className="flex flex-row justify-center items-center gap-4">
          {data.map((item) => {
            return (
              <div
                key={item.key}
                className="h-[30rem] w-72 bg-slate-200 rounded-lg border border-primary-300 overflow-hidden relative group cursor-pointer"
              >
                <img
                  src={item.image}
                  className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                  alt="error occured"
                />
                <div className="left-0 bottom-0 absolute z-0 p-4 group-hover:-translate-y-10 transition-transform duration-500">
                  <h3 className="text-xl font-sans text-white font-semibold">
                    {item.title}
                  </h3>
                  <span className="text-sm font-sans text-white font-medium">
                    {item.description}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Options;
