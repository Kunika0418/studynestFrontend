import React from "react";

const Service = () => {
  const services = [
    {
      id: 1,
      title: "Property Listings",
      description: "Explore a wide range of apartments available for sale.",
      icon: "🏠",
    },
    {
      id: 2,
      title: "Virtual Tours",
      description: "Take a virtual walkthrough of properties from the comfort of your home.",
      icon: "🖥️",
    },
    {
      id: 3,
      title: "Real Estate Consultancy",
      description: "Get expert advice to find the right property for you.",
      icon: "🤝",
    },
    {
      id: 4,
      title: "Legal Assistance",
      description: "We help with property documentation and legal formalities.",
      icon: "📜",
    },
    {
      id: 5,
      title: "Home Loans",
      description: "Get assistance in securing the best home loan deals.",
      icon: "💰",
    },
    {
      id: 6,
      title: "Post-Sale Services",
      description: "We offer after-sale support for a seamless transition into your new home.",
      icon: "🔑",
    },
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-6 lg:px-20">
        <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-8">
          Our Services
        </h1>
        <p className="text-lg text-gray-600 text-center mb-12">
          We provide everything you need to buy, sell, or rent an apartment.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition duration-300 p-6 text-center"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h2>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
