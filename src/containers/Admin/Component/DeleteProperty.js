import React, { useState } from "react";

const DeleteProperty = ({ closeModal }) => {
  const [propertyId, setPropertyId] = useState(""); // Store the property ID input
  const [error, setError] = useState(""); // For error messages
  const [successMessage, setSuccessMessage] = useState(""); // For success messages

  const handleInputChange = (e) => {
    setPropertyId(e.target.value); // Update property ID input
  };

  const handleDelete = async (e) => {
    e.preventDefault();

    // Validate if the property ID is not empty
    if (!propertyId) {
      setError("Property ID is required");
      return;
    }

    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_URI}/api/properties/${propertyId}`, // Make sure to replace this URL with your actual API endpoint
        {
          method: "DELETE",
        }
      );

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage("Property deleted successfully!");
        setError(""); // Reset error message if successful
        setPropertyId(""); // Reset property ID input
      } else {
        setError(data.message || "Failed to delete property");
        setSuccessMessage(""); // Reset success message if failed
      }
    } catch (err) {
      setError("Error deleting property");
      setSuccessMessage(""); // Reset success message if error occurs
    }
  };

  return (
    <div className="modal">
      <div className="modal-content relative">
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute text-2xl right-1 text-gray-800 hover:text-black"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4">Delete Property</h2>
        <form onSubmit={handleDelete}>
          <div className="mb-4">
            <label
              htmlFor="propertyId"
              className="block text-sm font-medium text-gray-700"
            >
              Property ID
            </label>
            <input
              type="text"
              id="propertyId"
              value={propertyId}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring"
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          {successMessage && (
            <p className="text-green-500 text-sm mb-4">{successMessage}</p>
          )}
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
          >
            Delete Property
          </button>
        </form>
      </div>
    </div>
  );
};

export default DeleteProperty;
