import React, { useState } from "react";
import axios from "axios";
import { FaExclamationCircle } from "react-icons/fa";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";



const AdminLogin = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  if (localStorage.getItem("atoken")) {
    navigate("/admin/dashboard");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Basic client-side validation
    if (!email || !password || !name) {
      setError("Please enter details in fields");
      setIsLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        process.env.REACT_APP_SERVER_URI + "/api/admin/signup",
        {
          name,
          email,
          password,
        }
      );

      if (response.data) {
        localStorage.setItem("atoken", response.data.token);
        toast.success("New Admin created successfully");
        navigate("/admin/dashboard");
      }
      // Handle successful login
      // You might want to:
      // - Store the token in localStorage
      // - Update global auth state
      // - Redirect to admin dashboard
    } catch (err) {
      // Handle login failure
      const errorMessage =
        err.response?.data?.message ||
        "Login failed. Please check your credentials.";
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-8">
        <div className="max-w-md w-full bg-white shadow-md rounded-lg p-8">
          <h2
            className="text-3xl font-bold text-center mb-6"
            style={{ color: "#6C0F0A" }}
          >
            Admin Signup
          </h2>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded relative mb-4 flex items-center">
              <FaExclamationCircle className="mr-2 text-red-600" size={20} />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium mb-2"
                style={{ color: "#a04031" }}
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2"
                style={{
                  borderColor: "#ff9e88",
                  focusRingColor: "#6C0F0A",
                }}
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-2"
                style={{ color: "#a04031" }}
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2"
                style={{
                  borderColor: "#ff9e88",
                  focusRingColor: "#6C0F0A",
                }}
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium mb-2"
                style={{ color: "#a04031" }}
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2"
                style={{
                  borderColor: "#ff9e88",
                  focusRingColor: "#6C0F0A",
                }}
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 rounded-md text-white font-semibold transition-colors duration-300 ease-in-out"
              style={{
                backgroundColor: "#6C0F0A",
                opacity: isLoading ? 0.7 : 1,
                cursor: isLoading ? "not-allowed" : "pointer",
              }}
            >
              {isLoading ? "In Progress..." : "Signup"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
