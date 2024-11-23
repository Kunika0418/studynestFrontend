// components/AuthModal.jsx
import React, { useState } from 'react';

const AuthModal = ({ isOpen, onClose }) => {
  const [isSignUp, setIsSignUp] = useState(false); // Switch between SignUp and Login

  const handleSwitchForm = () => setIsSignUp(!isSignUp); // Toggle between Login and SignUp

  return (
    isOpen && (
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-8 rounded-lg w-96 relative">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            {isSignUp ? 'Sign Up' : 'Login'}
          </h2>
          <button
            onClick={onClose}
            className="text-2xl absolute top-2 right-4"
            aria-label="Close"
          >
            &times;
          </button>

          <form>
            {/* Username */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Username</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            {/* Password */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div className="mb-4">
              <button
                type="submit"
                className="w-full py-2 px-4 bg-amber-800 text-white rounded-md hover:bg-amber-900 transition duration-300"
              >
                {isSignUp ? 'Create Account' : 'Login'}
              </button>
            </div>
          </form>

          <div className="text-center">
            <button
              onClick={handleSwitchForm}
              className="text-sm text-amber-800 hover:text-amber-900"
            >
              {isSignUp ? 'Already have an account? Login' : "Don't have an account? Sign Up"}
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default AuthModal;
