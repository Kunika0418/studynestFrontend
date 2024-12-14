import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AddTestimonial = () => {
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(`${process.env.REACT_APP_SERVER_URI}/api/testimonial/testimonials`, {
        name,
        feedback,
        email,
      });

      setLoading(false);
      toast.success("Testimonial created successfully!");
      // Reset form fields
      setName("");
      setFeedback("");
      setEmail("");
    } catch (err) {
      setLoading(false);
      toast.error(err.message || "Failed to create Testimonial");
    }
  };

  return (
    <div className="max-w-lg mx-auto my-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-[#6C0F0A] mb-6">
        Add Your Testimonial
      </h2>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6C0F0A]"
            placeholder="Enter your name"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6C0F0A]"
            placeholder="Enter your email"
            required
          />
        </div>

        <div>
          <label htmlFor="feedback" className="block text-sm font-medium text-gray-700">
            Feedback
          </label>
          <textarea
            id="feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6C0F0A]"
            placeholder="Write your feedback"
            rows="5"
            required
          ></textarea>
        </div>

        <div className="text-center">
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 mt-4 text-white font-semibold rounded-md ${loading ? "bg-gray-400" : "bg-[#6C0F0A] hover:bg-[#621814]"}`}
          >
            {loading ? "Submitting..." : "Submit Testimonial"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTestimonial;
