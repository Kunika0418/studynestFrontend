import React, { useState } from "react";
import backgroundHotel from "../../assets/images/backgroundHotel.jpg";
import { toast } from "react-toastify";
import axios from "axios";
import { Oval } from "react-loader-spinner";
import HelmetConfig from "../../utils/HelmetConfig";

const Service = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setDisabled(true);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URI}/send-query`, // Replace with your backend URL
        formData
      );
      toast.success(response.data.message);
      setFormData({ name: "", email: "", phone: "", country: "", message: "" });
    } catch (error) {
      console.error("Error sending query:", error);
      toast.error("Failed to send query. Please try again later.");
    }
    setIsSending(false);
    setDisabled(false);
  };

  return (
    <>
      <HelmetConfig
        title="Service"
        description="At StudyNest, we provide exceptional services to help students find, book, and manage accommodations effortlessly. Experience unmatched support for a stress-free stay."
      />

      <div className="bg-bg-200 w-full">
        <div className="flex flex-col justify-center items-center w-full px-16 py-44 relative">
          <div
            className="h-full w-full absolute top-0 left-0 z-0 before:absolute before:inset-0 before:bg-gradient-to-b before:from-black before:to-white/20 before:opacity-80"
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1533929736458-ca588d08c8be?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
              backgroundSize: "auto",
              backgroundPosition: "center",
            }}
          ></div>
          {/* Heading */}
          <h1 className="text-3xl font-semibold text-indigo-200 text-center mb-8 z-10">
            Partner{" "}
            <span className="text-4xl text-pink font-bold">With Us</span>
          </h1>
          <p className="text-base font-sans tracking-wider font-semibold text-white text-center mb-12 z-10">
            Join our network and unlock exciting opportunities.
          </p>
        </div>
        <div className="bg-offwhite/50 rounded-lg p-6 md:py-10 md:px-20 max-w-full mx-auto border border-gray-200">
          <p className="text-gray-600 font-semibold text-center mb-8">
            Fill out the form below and we'll get back to you promptly.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4 flex gap-8">
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Full Name"
                className="w-full px-4 py-3 mt-1 rounded-md border border-voilet outline-none"
                required
              />
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full px-4 py-3 mt-1 rounded-md border border-voilet outline-none"
                required
              />
            </div>
            <div className="mb-4 flex gap-8">
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full px-4 py-3 mt-1 rounded-md border border-voilet outline-none"
              />
              <input
                type="text"
                id="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="Travelling Country"
                className="w-full px-4 py-3 mt-1 rounded-md border border-voilet outline-none"
              />
            </div>
            <div className="mb-8">
              <textarea
                id="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Description/Message"
                className="w-full px-4 py-3 mt-1 rounded-md border border-voilet outline-none"
              ></textarea>
            </div>
            <div className="btn flex justify-center w-full">
              <button
                type="submit"
                disabled={disabled}
                className={`flex flex-row gap-2 items-center justify-center md:w-1/5 xs:w-1/2 ${
                  disabled ? "bg-voilet/80" : "bg-voilet"
                } hover:bg-voilet/90 hover:scale-95 text-lightpink py-3 rounded-lg shadow-md transition duration-500 ease-in-out`}
              >
                Submit Query
                {isSending && (
                  <div className="ml-4 transition duration-500 ease-in-out">
                    <Oval
                      visible={true}
                      height="20"
                      width="20"
                      secondaryColor="#ffffff"
                      strokeWidth={4}
                      strokeWidthSecondary={4}
                      color="#f5f5f5"
                      ariaLabel="oval-loading"
                      wrapperStyle={{}}
                      wrapperClass=""
                    />
                  </div>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Service;
