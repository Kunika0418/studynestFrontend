// components/AuthModal.jsx
import React, { useState, useEffect, useRef } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AuthModal = ({ isOpen, onClose }) => {
  const [isSignUp, setIsSignUp] = useState(false); // Toggle between Login and SignUp
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
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
    setError(null);
    const formData = new FormData(e.target);

    // Prepare data to send to the API
    const payload = {
      name: formData.get("fullname"),
      email: formData.get("email"),
      password: formData.get("password"),
      ...(isSignUp && {
        phone: formData.get("phoneno"),
        dateofBirth: formData.get("dob"),
        nationality: formData.get("nationality"),
        gender: formData.get("gender"),
      }),
    };

    const url = isSignUp ? `/api/auth/signup` : `/api/auth/login`;

    try {
      const response = await fetch(process.env.REACT_APP_SERVER_URI + url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(
          isSignUp ? "Account created successfully!" : "Login successful!"
        );
        localStorage.setItem("token", data.token);
        {
          isSignUp ? navigate("/Profile") : navigate("/Property");
        }
        onClose();
        window.location.reload();
      } else {
        setError(data.message || "Error occurred during authentication.");
        toast.error("Maybe Email or Password is incorrect.");
      }
    } catch (err) {
      setError(err.message || "An error occurred.");
      toast.error("An error occurred.");
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
        className="bg-white p-8 rounded-lg w-full max-w-md relative shadow-lg transition-transform transform scale-95 animate-scale-in"
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
        <h2 className="text-2xl font-semibold text-accent-100 mb-4">
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
            <div className="p-2 w-full border border-gray-300 rounded-lg flex flex-row justify-between items-center mt-2">
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
              <div className="p-2 w-full border border-gray-300 rounded-lg flex flex-row justify-between items-center mt-2">
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
                  htmlFor="dob"
                  className="block text-sm font-medium text-accent-100"
                >
                  DOB
                </label>
                <input
                  id="dob"
                  name="dob"
                  type="date"
                  placeholder="Date Of Birth"
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
              className="w-full py-2 px-4 bg-primary-100 hover:bg-primary-100/90 hover:scale-95 text-bg-200 rounded-lg transition duration-500 ease-in-out"
            >
              {isSignUp ? "Create Account" : "Login"}
            </button>
          </div>
        </form>

        {/* Toggle between Sign Up and Login */}
        <div className="text-center">
          <button
            onClick={handleSwitchForm}
            className="text-sm text-primary-100 hover:underline transition duration-300 ease-in-out"
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
