// components/AddPropertyForm.js

import React, { useState } from "react";
import axios from "axios";

const AddProperty = () => {
  const [formData, setFormData] = useState({
    slug: "",
    title: "",
    price: "",
    city: "",
    country: "",
    description: "",
    area: "",
    services: [],
    amenities: {},
  });
  const [images, setImages] = useState([]);

  const servicesOptions = ["Wi-Fi", "Parking", "Pool", "Gym", "Air Conditioning"];
  const amenitiesOptions = {
    Pool: ["Shared", "Private"],
    Gym: ["Available"],
    Parking: ["Indoor", "Outdoor"],
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle checkboxes for services
  const handleServiceChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      services: checked
        ? [...prevData.services, value]
        : prevData.services.filter((service) => service !== value),
    }));
  };

  // Handle amenities as key-value pairs
  const handleAmenityChange = (e, key) => {
    const { value, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      amenities: {
        ...prevData.amenities,
        [key]: checked ? [value] : [],
      },
    }));
  };

  // Handle image selection
  const handleImageChange = (e) => {
    setImages(Array.from(e.target.files));
  };

  // Submit form data to backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((el) => data.append(key + "[]", el));
      } else if (typeof value === "object") {
        data.append(key, JSON.stringify(value));
      } else {
        data.append(key, value);
      }
    });

    images.forEach((img) => {
      data.append("images", img);
    });

    try {
      const response = await axios.post(
        "http://localhost:5000/api/propertyauth/add",
        data
      );
      console.log(response.data);
      alert("Property added successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to add property!");
    }
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <input
        type="text"
        placeholder="Property Slug"
        name="slug"
        required
        onChange={handleInputChange}
      />
      <input
        type="text"
        placeholder="Property Title"
        name="title"
        required
        onChange={handleInputChange}
      />
      <input
        type="number"
        placeholder="Price"
        name="price"
        required
        onChange={handleInputChange}
      />
      <input
        type="text"
        placeholder="City"
        name="city"
        required
        onChange={handleInputChange}
      />
      <input
        type="text"
        placeholder="Country"
        name="country"
        required
        onChange={handleInputChange}
      />
      <textarea
        placeholder="Property Description"
        name="description"
        rows="4"
        required
        onChange={handleInputChange}
      />
      <input
        type="text"
        placeholder="Area (sq. ft)"
        name="area"
        required
        onChange={handleInputChange}
      />
      
      <label>Services</label>
      {servicesOptions.map((service) => (
        <label key={service}>
          <input
            type="checkbox"
            value={service}
            onChange={handleServiceChange}
          />
          {service}
        </label>
      ))}

      <label>Amenities</label>
      {Object.keys(amenitiesOptions).map((amenity) => (
        <div key={amenity}>
          <h4>{amenity}</h4>
          {amenitiesOptions[amenity].map((option) => (
            <label key={option}>
              <input
                type="checkbox"
                value={option}
                onChange={(e) => handleAmenityChange(e, amenity)}
              />
              {option}
            </label>
          ))}
        </div>
      ))}

      <input type="file" multiple accept="image/*" onChange={handleImageChange} />
      <button type="submit">Add Property</button>
    </form>
  );
};

export default AddProperty;
