// components/AuthModal.jsx
import React, { useState, useEffect, useRef } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Oval } from "react-loader-spinner";
import axios from "axios";
import logo from "../../assets/logo/logo.jpg";


const AuthModal = ({ isOpen, onClose }) => {
  const [isSignUp, setIsSignUp] = useState(false); // Toggle between Login and SignUp
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const modalRef = useRef(null); // Ref for the modal

  const navigate = useNavigate();

  // Focus management
  useEffect(() => {
    if (isOpen && modalRef.current) {
      const firstInput = modalRef.current.querySelector("input");
      firstInput && firstInput.focus();
    }
  }, [isOpen]);

  const handleBackgroundClick = (e) => {
    if (e.target.id === "modalBackground") {
      onClose();
    }
  };

  const handleAuth = async (e) => {
    e.preventDefault();
    setDisabled(true);
    setIsLoading(true);
    setError(null);

    const formData = new FormData(e.target);

    // Prepare data to send to the API
    const payload = {
      name: formData.get("fullname"),
      email: formData.get("email"),
      password: formData.get("password"),
      ...(isSignUp && {
        phone: formData.get("phoneno"),
        university: formData.get("university"),
        nationality: formData.get("nationality"),
        gender: formData.get("gender"),
      }),
    };

    const url = isSignUp ? `/api/auth/signup` : `/api/auth/login`;

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URI}${url}`,
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Handle success
      toast.success(
        isSignUp ? "Account created successfully!" : "Login successful!"
      );
      localStorage.setItem("token", response.data.token);
      navigate(isSignUp ? "/Profile" : "/Property");
      onClose();
    } catch (err) {
      // Handle error
      setError(
        err.response?.data?.message ||
          "An error occurred during authentication."
      );
      toast.error(err.response?.data?.message || "An error occurred.");
    } finally {
      setDisabled(false);
      setIsLoading(false);
    }
  };

  const handleSwitchForm = () => setIsSignUp(!isSignUp);

  if (!isOpen) return null;

  return (
    <div
      id="modalBackground"
      onClick={handleBackgroundClick}
      className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50"
      aria-hidden={!isOpen}
      role="dialog"
      aria-modal="true"
    >
      <div
        ref={modalRef}
        className="bg-offwhite p-8 rounded-lg w-full max-w-md relative shadow-lg transition-transform transform scale-95 animate-scale-in"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="text-2xl absolute top-2 right-4"
          aria-label="Close"
        >
          &times;
        </button>

        {/* Title */}
        <h2 className="flex flex-row gap-2 justify-start items-center text-2xl font-semibold text-accent-100 mb-4">
          <div className="w-10 h-10 overflow-hidden rounded-full">
            <img
              src={logo}
              alt="StudyNest Logo"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          {isSignUp ? "Sign Up" : "Login"}
        </h2>

        {/* Form */}
        <form onSubmit={handleAuth}>
          {/* Username */}
          <div
            className={`grid ${
              isSignUp ? "grid-cols-2" : "grid-cols-1"
            } gap-x-4`}
          >
            <div className="w-full mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-accent-100"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 border border-gray-300 text-accent-100 rounded-lg outline-none mt-2"
                required
              />
            </div>

            {isSignUp && (
              <div className="mb-4">
                <label
                  htmlFor="fullname"
                  className="block text-sm font-medium text-accent-100"
                >
                  Full Name
                </label>
                <input
                  id="fullname"
                  name="fullname"
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full p-2 border border-gray-300 text-accent-100 rounded-lg outline-none mt-2"
                  required
                />
              </div>
            )}
          </div>

          {/* Password */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-accent-100"
            >
              Password
            </label>
            <div className="bg-white p-2 w-full border border-gray-300 rounded-lg flex flex-row justify-between items-center mt-2">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="outline-none w-full text-accent-100"
                required
              />
              {showPassword && (
                <IoEye
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                  className="text-accent-100 text-xl cursor-pointer"
                />
              )}
              {!showPassword && (
                <IoEyeOff
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                  className="text-accent-100 text-xl cursor-pointer"
                />
              )}
            </div>
          </div>

          {/* Confirm Password */}
          {isSignUp && (
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-accent-100"
              >
                Confirm Password
              </label>
              <div className="bg-white p-2 w-full border border-gray-300 rounded-lg flex flex-row justify-between items-center mt-2">
                <input
                  id="confirmpassword"
                  name="confirmpassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Enter your confirm password"
                  className="outline-none w-full text-accent-100"
                  required
                />
                {showConfirmPassword && (
                  <IoEye
                    onClick={() => {
                      setShowConfirmPassword(!showConfirmPassword);
                    }}
                    className="text-accent-100 text-xl cursor-pointer"
                  />
                )}
                {!showConfirmPassword && (
                  <IoEyeOff
                    onClick={() => {
                      setShowConfirmPassword(!showConfirmPassword);
                    }}
                    className="text-accent-100 text-xl cursor-pointer"
                  />
                )}
              </div>
            </div>
          )}

          {isSignUp && (
            <div className="grid grid-cols-2 gap-x-4">
              <div className="mb-4">
                <label
                  htmlFor="phoneno"
                  className="block text-sm font-medium text-accent-100"
                >
                  Phone no
                </label>
                <input
                  id="phoneno"
                  name="phoneno"
                  type="tel"
                  placeholder="Enter your mobile number"
                  className="w-full p-2 border border-gray-300 text-accent-100 rounded-lg outline-none mt-2"
                  required
                  maxLength={10}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="university"
                  className="block text-sm font-medium text-accent-100"
                >
                  University
                </label>
                <input
                  id="university"
                  name="university"
                  type="university"
                  placeholder="University Name"
                  className="w-full p-2 border border-gray-300 text-accent-100 rounded-lg outline-none mt-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="nationality"
                  className="block text-sm font-medium text-accent-100"
                >
                  Nationality
                </label>
                <select
                  defaultValue="Not-defined"
                  id="nationality"
                  name="nationality"
                  className="w-full p-2 border border-gray-300 text-accent-100 rounded-lg outline-none mt-2"
                  required
                >
                  <option value="">Select Country</option>
                  <option value="India">India</option>
                  <option value="USA">USA</option>
                  <option value="China">China</option>
                  <option value="Europe">Europe</option>
                  <option value="Russia">Russia</option>
                </select>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="gender"
                  className="block text-sm font-medium text-accent-100"
                >
                  Gender
                </label>
                <select
                  defaultValue="Not-defined"
                  id="gender"
                  name="gender"
                  className="w-full p-2 border border-gray-300 text-accent-100 rounded-lg outline-none mt-2"
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Non-binary">Non-binary</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
          )}

          {/* Submit Button */}
          <div className="mb-4">
            <button
              type="submit"
              disabled={disabled}
              className={`flex flex-row items-center justify-center w-full py-2 px-4 ${
                disabled ? "bg-blue/80" : "bg-blue"
              } hover:bg-blue/90 hover:scale-95 text-lightpink font-semibold rounded-lg transition duration-500 ease-in-out`}
            >
              {isSignUp ? "Create Account" : "Login"}
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
          </div>
        </form>

        {/* Toggle between Sign Up and Login */}
        <div className="text-center">
          <button
            onClick={handleSwitchForm}
            className="text-sm text-darkpink hover:underline transition duration-300 ease-in-out"
          >
            {isSignUp
              ? "Already have an account? Login"
              : "Don't have an account? Sign Up"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
