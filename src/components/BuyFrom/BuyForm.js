import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { Oval } from "react-loader-spinner";
import { getCurrencySymbolByCountry } from "../../utils/Currency";

const BuyForm = ({ apartment }) => {
  const location = useLocation();
  const path = location.pathname;

  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    university: "",
    message: "",
    Property: "https://studynests.com" + path,
  });

  const [errors, setErrors] = useState({
    email: false,
    terms: false,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [isTermsChecked, setIsTermsChecked] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleTermsChange = (e) => {
    setIsTermsChecked(e.target.checked); // Update terms checkbox state
    setErrors((prev) => ({
      ...prev,
      terms: false, // Clear the terms error
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setDisabled(true);

    if (!formData.email) {
      setErrors({ email: true });
      setIsLoading(false);
      setDisabled(false);
      return;
    }

    if (!isTermsChecked) {
      setErrors({ terms: true });
      setIsLoading(false);
      setDisabled(false);
      return;
    }

    try {
      const response = await axios.post(
        process.env.REACT_APP_SERVER_URI + "/property-query",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        toast.success("Message Sent Successfully."); // Success message
        setFormData({
          fullName: "",
          phoneNumber: "",
          email: "",
          university: "",
          message: "",
          Property: formData.Property, // Retain the Property link
        });
      } else {
        toast.error("Failed to send query");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to send query");
    } finally {
      setIsLoading(false);
      setDisabled(false);
    }
  };

  return (
    <div className={`max-w-sm mx-auto border-2 border-green-500 rounded-xl`}>
      <div className="border-b border-bg-300 bg-gradient-to-b from-green-300 to-bg-green-200 p-4 rounded-t-xl">
        <h2 className="text-2xl text-accent-100 font-semibold text-center">
          {getCurrencySymbolByCountry(apartment.country)}
          {apartment.price}/week
        </h2>

        <button className="bg-pink-100 text-primary-100 px-4 py-2 rounded mt-4 w-full text-left">
          Get <span className="font-semibold">personalized options </span>
          tailored to your needs!
          <span className="float-right">→</span>
        </button>
      </div>
      <div className="form px-4 mb-4">
        <form onSubmit={handleSubmit} className="space-y-4 mt-6">
          <div>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full border border-accent-200 px-4 py-2 rounded-lg mt-1 outline-none"
              required
            />
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full border border-accent-200 px-4 py-2 rounded-lg mt-1 outline-none"
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-accent-200 px-4 py-2 rounded-lg mt-1 outline-none"
              placeholder="Email"
              required
            />
            {errors.email && (
              <p className={`text-red-500 text-sm mt-1`}>
                Email address is required
              </p>
            )}
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="text"
              name="university"
              value={formData.university}
              onChange={handleChange}
              placeholder="University Name"
              className="w-full border border-accent-200 px-4 py-2 rounded-lg outline-none"
            />
          </div>

          <div className="flex items-center space-x-2">
            <textarea
              rows={2}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message Box"
              className="w-full border border-accent-200 px-4 py-2 rounded-lg mt-1 outline-none"
            />
          </div>

          <div className="flex flex-col">
            <div className="flex items-start">
              <input
                type="checkbox"
                name="terms"
                id="terms"
                onChange={handleTermsChange}
                className="h-4 w-4 text-primary-100 mt-[0.15rem]"
              />
              <label htmlFor="terms" className="ml-2 text-gray-600 text-sm">
                By continuing, you agree to our{" "}
                <a href="/" className="text-darkpink">
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a href="/" className="text-darkpink">
                  Terms of Service
                </a>
              </label>
            </div>
            {errors.terms && (
              <p className={`text-red-500 text-sm mt-1`}>
                Please accept Terms & Conditionss
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={disabled}
            className={`flex flex-row gap-2 items-center justify-center w-full py-3 mt-4 ${
              disabled ? "bg-blue/80" : "bg-blue"
            } hover:bg-blue/90 hover:scale-95 text-lightpink font-semibold rounded-lg transition duration-500 ease-in-out`}
          >
            Find My Home
            {isLoading && (
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
        </form>
      </div>
    </div>
  );
};

export default BuyForm;
