// components/AuthModal.jsx
import React, { useState, useEffect, useRef } from "react";

const AuthModal = ({ isOpen, onClose }) => {
  const [isSignUp, setIsSignUp] = useState(false); // Toggle between Login and SignUp
  const modalRef = useRef(null); // Ref for the modal

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
    const { username, password } = e.target.elements;

    try {
      if (isSignUp) {
        console.log("Sign Up:", username.value, password.value);
        // Add sign-up functionality here
      } else {
        console.log("Login:", username.value, password.value);
        // Add login functionality here
      }
    } catch (error) {
      console.error("Authentication error:", error);
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
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          {isSignUp ? "Sign Up" : "Login"}
        </h2>

        {/* Form */}
        <form onSubmit={handleAuth}>
          {/* Username */}
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              placeholder="Enter your username"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="mb-4">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-amber-800 text-white rounded-md hover:bg-amber-900 transition duration-300"
            >
              {isSignUp ? "Create Account" : "Login"}
            </button>
          </div>
        </form>

        {/* Toggle between Sign Up and Login */}
        <div className="text-center">
          <button
            onClick={handleSwitchForm}
            className="text-sm text-amber-800 hover:underline"
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
