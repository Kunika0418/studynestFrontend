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
    <div className="bg-gray-50">
      <div className="container mx-auto px-6 py-10 lg:px-20 bg-gray-800">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-8">
          Our Services
        </h1>
        <p className="text-lg text-gray-50 text-center mb-12">
          We provide everything you need to buy, sell, or rent an apartment.
        </p>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-700 border border-gray-200 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 p-6 text-center text-white"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h2 className="text-xl font-semibold text-white mb-2">
                {service.title}
              </h2>
              <p className="text-gray-50">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white rounded-lg px-20 py-10 md:py-20 md:px-40 max-w-full mx-auto border border-gray-200">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Have a Query? Tell Us
        </h2>
        <p className="text-gray-600 text-center mb-8">
          Fill out the form below and we’ll get back to you promptly.
        </p>
        <form>
          <div className="mb-4 flex gap-8">
            <input
              type="text"
              id="name"
              placeholder="Your Full Name"
              className="w-full px-4 py-3 mt-1 rounded-md border border-gray-300 focus:ring-2 focus:ring-amber-700 focus:outline-none"
            />
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 mt-1 rounded-md border border-gray-300 focus:ring-2 focus:ring-amber-700 focus:outline-none"
            />
          </div>
          <div className="mb-4 flex gap-8">
            <input
              type="tel"
              id="Phone number"
              placeholder="Phone Number"
              className="w-full px-4 py-3 mt-1 rounded-md border border-gray-300 focus:ring-2 focus:ring-amber-700 focus:outline-none"
            />
            <input
              type="text"
              id="Country"
              placeholder="Travelling Country"
              className="w-full px-4 py-3 mt-1 rounded-md border border-gray-300 focus:ring-2 focus:ring-amber-700 focus:outline-none"
            />
          </div>
          <div className="mb-8">
            <textarea
              id="message"
              rows="4"
              placeholder="Your Description/Message"
              className="w-full px-4 py-3 mt-1 rounded-md border border-gray-300 focus:ring-2 focus:ring-amber-700 focus:outline-none"
            ></textarea>
          </div>
          <div className="btn flex justify-center w-full">
            <button
              type="submit"
              className="w-1/5 bg-amber-800 text-white py-3 rounded-lg shadow-md hover:bg-amber-900 transition duration-300"
            >
              Submit Query
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Service;
