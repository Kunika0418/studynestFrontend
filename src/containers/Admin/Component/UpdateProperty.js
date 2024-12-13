import React, { useState } from "react";
import PropTypes from "prop-types";
import ImageUpload from "./ImageUpload";
import BasicInfoFields from "./BasicInfo/BasicInfoFields";
import ServicesList from "./Services/ServicesList";
import AmenitiesList from "./Amenities/AmenitiesList";
import RoomTypeGroup from "./RoomType/RoomTypesGroup";
import { toast } from "react-toastify";
import axios from "axios";

const UpdateProperty = ({ property, onSuccess }) => {
  const [images, setImages] = useState([]);
  const [existingImages, setExistingImages] = useState(property.images);
  const [replaceImages, setReplaceImages] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: property.title,
    price: property.price,
    city: property.city,
    country: property.country,
    description: property.description,
    university: property.university,
    area: property.area,
    services: property.services,
    amenities: property.amenities,
    roomTypes: property.roomTypes,
  });

  const api = axios.create({
    baseURL: `${process.env.REACT_APP_SERVER_URI}/api/propertyauth`,
  });

  const updateProperty = async (propertyId, formData) => {
    try {
      const response = await api.put(`/property/${propertyId}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  };

  const handleImageChange = (files) => {
    const newImages = Array.from(files).slice(0, 5);
    setImages(newImages);
  };

  const handleExistingImageRemove = (index) => {
    setExistingImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleServiceChange = (index, value) => {
    const newServices = [...formData.services];
    newServices[index] = value;
    setFormData({ ...formData, services: newServices });
  };

  const handleServiceAdd = () => {
    setFormData({ ...formData, services: [...formData.services, ""] });
  };

  const handleServiceRemove = (index) => {
    const newServices = formData.services.filter((_, i) => i !== index);
    setFormData({ ...formData, services: newServices });
  };

  const handleRoomTypeGroupAdd = () => {
    // Adds a new room group with an initial title and one room type
    setFormData({
      ...formData,
      roomTypes: [
        ...formData.roomTypes,
        { title: '', roomTypes: [{ title: '', price: '' }] }
      ]
    });
  };

  const handleRoomTypeGroupTitleChange = (groupIndex, title) => {
    // Updates the title of a specific room group
    const updatedRoomTypes = [...formData.roomTypes];
    updatedRoomTypes[groupIndex].title = title;
    setFormData({ ...formData, roomTypes: updatedRoomTypes });
  };

  const handleRoomTypeChange = (groupIndex, title, price) => {
    // Create a copy of the room types array
    const updatedRoomTypes = [...formData.roomTypes];
    updatedRoomTypes[groupIndex].title = title;
    updatedRoomTypes[groupIndex].price = price;
    // Update the formData state with the updated room types
    setFormData({ ...formData, roomTypes: updatedRoomTypes });
  };


  const handleRoomTypeAdd = (groupIndex) => {
    // Adds a new room type to a specific room group
    const updatedRoomTypes = [...formData.roomTypes];
    updatedRoomTypes[groupIndex].roomTypes.push({ title: '', price: 100 });
    setFormData({ ...formData, roomTypes: updatedRoomTypes });
  };

  const handleRoomTypeRemove = (groupIndex) => {
    // Removes a specific room group
    const updatedRoomTypes = [...formData.roomTypes];
    updatedRoomTypes.splice(groupIndex, 1); // Remove the group at the specified index
    setFormData({ ...formData, roomTypes: updatedRoomTypes });
  };

  const handleAmenityGroupAdd = () => {
    setFormData({
      ...formData,
      amenities: [...formData.amenities, { title: "", items: [""] }],
    });
  };

  const handleAmenityTitleChange = (groupIndex, title) => {
    const newAmenities = [...formData.amenities];
    newAmenities[groupIndex].title = title;
    setFormData({ ...formData, amenities: newAmenities });
  };

  const handleAmenityItemChange = (groupIndex, itemIndex, value) => {
    const newAmenities = [...formData.amenities];
    newAmenities[groupIndex].items[itemIndex] = value;
    setFormData({ ...formData, amenities: newAmenities });
  };

  const handleAmenityItemAdd = (groupIndex) => {
    const newAmenities = [...formData.amenities];
    newAmenities[groupIndex].items.push("");
    setFormData({ ...formData, amenities: newAmenities });
  };

  const handleAmenityItemRemove = (groupIndex, itemIndex) => {
    const newAmenities = [...formData.amenities];
    newAmenities[groupIndex].items = formData.amenities[
      groupIndex
    ].items.filter((_, i) => i !== itemIndex);
    setFormData({ ...formData, amenities: newAmenities });
  };

  const validateForm = () => {
    if (!formData.title.trim()) return "Title is required";
    if (!formData.price) return "Price is required";
    if (!formData.city.trim()) return "City is required";
    if (!formData.country.trim()) return "Country is required";
    if (!formData.description.trim()) return "Description is required";
    if (!formData.university.trim()) return "University is required";
    if (!formData.area.trim()) return "Area is required";
    if (existingImages.length === 0 && images.length === 0)
      return "At least one image is required";
    if (!formData.services.some((service) => service.trim()))
      return "At least one service is required";

    const hasValidAmenityGroup = formData.amenities.some(
      (group) => group.title.trim() && group.items.some((item) => item.trim())
    );
    if (!hasValidAmenityGroup)
      return "At least one amenity group with one item is required";

    const hasValidRoomType = formData.roomTypes.some(
      (roomType) => roomType.title.trim() && roomType.price
    );
    if (!hasValidRoomType) return "At least one room type is required";


    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const error = validateForm();
    if (error) {
      toast.error(error);
      return;
    }

    setIsSubmitting(true);
    try {
      const formDataToSend = new FormData();

      // Append property data
      Object.entries(formData).forEach(([key, value]) => {
        if (key === "services" || key === "amenities" || key === "roomTypes") {
          formDataToSend.append(key, JSON.stringify(value));
        } else {
          formDataToSend.append(key, value.toString());
        }
      });

      console.log("Existing Images:", existingImages);
      console.log("New Images:", images);

      if (!replaceImages) {
        // Append existing images
        existingImages.forEach((image) => {
          formDataToSend.append("images", image);
        });
      }

      // Append new images images
      images.forEach((image) => {
        formDataToSend.append("images", image);
      });

      // Append replaceImages flag
      formDataToSend.append("replaceImages", replaceImages.toString());

      await updateProperty(property._id, formDataToSend);
      toast.success("Property updated successfully!");
      onSuccess();
    } catch (error) {
      toast.error(error.message || "Failed to update property");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="bg-white rounded-xl shadow-lg p-6 space-y-6">
        <h2 className="text-2xl font-bold text-[#6C0F0A]">Edit Property</h2>

        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Current Images</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {existingImages.map((image, index) => (
                <div key={index} className="relative">
                  <img
                    src={image}
                    alt={`Property ${index + 1}`}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={() => handleExistingImageRemove(index)}
                    className="absolute top-2 right-2 bg-red-500 text-white h-6 w-6 rounded-full hover:bg-red-600"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={replaceImages}
                onChange={(e) => setReplaceImages(e.target.checked)}
                className="rounded text-[#6C0F0A]"
              />
              <span>Replace all existing images</span>
            </label>
          </div>

          <ImageUpload images={images} onImageChange={handleImageChange} />

          <BasicInfoFields formData={formData} onChange={handleInputChange} />

          <ServicesList
            services={formData.services}
            onServiceChange={handleServiceChange}
            onServiceAdd={handleServiceAdd}
            onServiceRemove={handleServiceRemove}
          />

          <AmenitiesList
            amenities={formData.amenities}
            onGroupAdd={handleAmenityGroupAdd}
            onTitleChange={handleAmenityTitleChange}
            onItemChange={handleAmenityItemChange}
            onItemAdd={handleAmenityItemAdd}
            onItemRemove={handleAmenityItemRemove}
          />

          <RoomTypeGroup
            roomTypes={formData.roomTypes}
            onGroupAdd={handleRoomTypeGroupAdd}
            onRoomTypeChange={handleRoomTypeChange}
            onRoomTypeAdd={handleRoomTypeAdd}
            onRoomTypeRemove={handleRoomTypeRemove}
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-[#6C0F0A] text-white py-3 px-6 rounded-lg transition-colors duration-200 ${isSubmitting
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-[#a04031]"
            }`}
        >
          {isSubmitting ? "Updating Property..." : "Update Property"}
        </button>
      </div>
    </form>
  );
};

UpdateProperty.propTypes = {
  property: PropTypes.object.isRequired,
  onSuccess: PropTypes.func.isRequired,
};

export default UpdateProperty;
