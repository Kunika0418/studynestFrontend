import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const TestimonialManagement = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchTestimonials();
  }, []);

  // Fetch all testimonials from the API
  const fetchTestimonials = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${process.env.REACT_APP_SERVER_URI}/api/testimonial/testimonials`);
      setTestimonials(response.data);
      setLoading(false);
    } catch (err) {
      toast.error(err.message || "Failed to fetch testimonials.");
      setLoading(false);
    }
  };

  // Search testimonials by name
  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URI}/api/testimonial/search?name=${searchName}`
      );
      setTestimonials(response.data);
      setLoading(false);
    } catch (err) {
      toast.error(err.message || "Failed to search testimonials.");
      setLoading(false);
    }
  };

  // Delete testimonial by ID
  const handleDelete = async (id) => {
    setLoading(true);

    try {
      await axios.delete(`${process.env.REACT_APP_SERVER_URI}/api/testimonial/testimonials/${id}`);
      setTestimonials(testimonials.filter((testimonial) => testimonial._id !== id));
      setLoading(false);
      toast.success("Testimonial deleted successfully!");
    } catch (err) {
      toast.error(err.message || "Failed to delete testimonial.");
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-[#6C0F0A] mb-6">
        Manage Testimonials
      </h2>

      {/* Search Form */}
      <div className="mb-6">
        <form onSubmit={handleSearch} className="flex space-x-4 items-center">
          <input
            type="text"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
            placeholder="Search by Name"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6C0F0A]"
            required
          />
          <button
            type="submit"
            className="px-6 py-3 bg-[#6C0F0A] text-white rounded-md hover:bg-[#621814] focus:outline-none"
          >
            Search
          </button>
        </form>
      </div>

      {/* Error Message */}
      {error && <p className="text-[#6C0F0A] text-center mb-4">{error}</p>}

      {/* Testimonials Table */}
      {loading ? (
        <p className="text-center text-[#6C0F0A]">Loading...</p>
      ) : (
        <div className="overflow-x-auto hide-scrollbar"> {/* Scrollable div with hidden scrollbar */}
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="border-b">
                <th className="py-2 px-4 text-left font-semibold text-gray-700">Name</th>
                <th className="py-2 px-4 text-left font-semibold text-gray-700">Email</th>
                <th className="py-2 px-4 text-left font-semibold text-gray-700">Feedback</th>
                <th className="py-2 px-4 text-left font-semibold text-gray-700">Action</th>
              </tr>
            </thead>
            <tbody>
              {testimonials.map((testimonial) => (
                <tr key={testimonial._id} className="border-b hover:bg-gray-50">
                  <td className="py-2 px-4">{testimonial.name}</td>
                  <td className="py-2 px-4">{testimonial.email}</td>
                  <td className="py-2 px-4">{testimonial.feedback}</td>
                  <td className="py-2 px-4 text-red-600 cursor-pointer">
                    <button onClick={() => handleDelete(testimonial._id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default TestimonialManagement;
