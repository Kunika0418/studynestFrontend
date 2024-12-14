import React from "react";
import { FaGlobe, FaUsers, FaHome, FaCity, FaBed  } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";


const Parameters = () => {
  const data = [
    {
      icon: <FaGlobe className="text-3xl text-blue-500" />,
      iconColor: "group-hover:text-blue-500",
      title: "10+ Countries Worldwide",
      description:
        "Premium living spaces for students.",
    },
    {
      icon: <FaCity className="text-3xl text-green-500" />,
      iconColor: "group-hover:text-green-500",
      title: "450+ Cities Across the Globe",
      description:
        "Presence in top cities worldwide.",
    },
    {
      icon: <PiStudentFill className="text-3xl text-orange-500" />,
      iconColor: "group-hover:text-orange-500",
      title: "5,000+ Students Assisted Worldwide",
      description: "Trusted for quality housing services.",
    },
    {
      icon: <FaBed className="text-3xl text-indigo-500" />,
      iconColor: "group-hover:text-indigo-500",
      title: "122k+ Beds Available Globally",
      description: "Ideal homes near leading universities.",
    },
  ];
  return (
    <>
      <div className="flex flex-wrap justify-center gap-6 px-6 py-16 -mt-10 bg-bg-200">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex items-center p-4 bg-white shadow-lg rounded-lg w-72 hover:shadow-xl border hover:border-voilet transition ease-in-out duration-300 cursor-pointer group"
          >
            <div className="flex-shrink-0 bg-gray-100 p-4 rounded-full mr-4">
              {item.icon}
            </div>
            <div>
              <h3 className={`text-lg font-semibold text-gray-800 ${item.iconColor} transition ease-in-out duration-300`}>
                {item.title}
              </h3>
              <p className="text-gray-600 text-justify">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Parameters;
