import React from "react";
import backgroundHotel from "../../assets/images/backgroundHotel.jpg";

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
      description:
        "Take a virtual walkthrough of properties from the comfort of your home.",
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
      description:
        "We offer after-sale support for a seamless transition into your new home.",
      icon: "🔑",
    },
  ];

  return (
    <div className="bg-bg-200 w-full">
      <div className="flex flex-col justify-center items-center w-full px-16 py-16 relative">
        <div
          className="h-full w-full absolute top-0 left-0 bg-white/30 opacity-20 z-0"
          style={{
            backgroundImage: `url(${backgroundHotel})`,
            backgroundSize: "auto",
            backgroundPosition: "center",
          }}
        ></div>
        {/* Heading */}
        <h1 className="text-2xl font-semibold text-accent-100 text-center mb-8 z-10">
          Our{" "}
          <span className="text-4xl text-primary-200 font-bold">Services</span>
        </h1>
        <p className="text-base font-sans text-accent-100 text-center mb-12 z-10">
          We provide everything you need to buy, sell, or rent an apartment.
        </p>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16 z-10">
          {services.map((service) => (
            <div
              key={service.id}
              className="rounded-lg border border-primary-300 overflow-hidden shadow-2xl shadow-slate-400 hover:shadow-3xl hover:shadow-primary-300 transition duration-500 ease-in-out hover:scale-105 p-6 text-center text-accent-100 cursor-pointer bg-bg-200"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h2 className="text-xl font-semibold text-accent-100 mb-2">
                {service.title}
              </h2>
              <p className="text-accent-100">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-bg-200 rounded-lg px-20 py-10 md:py-20 md:px-40 max-w-full mx-auto border border-gray-200">
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
              className="w-full px-4 py-3 mt-1 rounded-md border border-primary-100 outline-none"
            />
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 mt-1 rounded-md border border-primary-100 outline-none"
            />
          </div>
          <div className="mb-4 flex gap-8">
            <input
              type="tel"
              id="Phone number"
              placeholder="Phone Number"
              className="w-full px-4 py-3 mt-1 rounded-md border border-primary-100 outline-none"
            />
            <input
              type="text"
              id="Country"
              placeholder="Travelling Country"
              className="w-full px-4 py-3 mt-1 rounded-md border border-primary-100 outline-none"
            />
          </div>
          <div className="mb-8">
            <textarea
              id="message"
              rows="4"
              placeholder="Your Description/Message"
              className="w-full px-4 py-3 mt-1 rounded-md border border-primary-100 outline-none"
            ></textarea>
          </div>
          <div className="btn flex justify-center w-full">
            <button
              type="submit"
              className="w-1/5 bg-primary-100 hover:bg-primary-100/90 hover:scale-95 text-bg-200 py-3 rounded-lg shadow-md transition duration-500 ease-in-out"
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
