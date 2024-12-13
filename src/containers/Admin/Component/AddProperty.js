import React, { useState } from "react";
import ImageUpload from "./ImageUpload";
import BasicInfoFields from "./BasicInfo/BasicInfoFields";
import ServicesList from "./Services/ServicesList";
import AmenitiesList from "./Amenities/AmenitiesList";
import { toast } from "react-toastify";
import axios from "axios";
import RoomTypeGroup from "./RoomType/RoomTypesGroup";

const api = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URI}/api/propertyauth`,
});

const AddProperty = () => {
  const [images, setImages] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    city: "",
    country: "",
    description: "",
    university: "",
    area: "",
    services: [""],
    amenities: [{ title: "", items: [""] }],
    roomTypes: [{ title: "", price: "" }],
  });

  const handleImageChange = (files) => {
    const newImages = Array.from(files).slice(0, 5);
    setImages(newImages);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Room types handlers
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

  // Services handlers
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

  // Amenities handlers
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
    newAmenities[groupIndex].items = formData.amenities[groupIndex].items.filter((_, i) => i !== itemIndex);
    setFormData({ ...formData, amenities: newAmenities });
  };

  const createProperty = async (propertyData, images) => {
    try {
      const formData = new FormData();

      // Append property data
      formData.append("slug", propertyData.title.toLowerCase().replace(/\s+/g, "-"));
      formData.append("title", propertyData.title);
      formData.append("price", propertyData.price);
      formData.append("city", propertyData.city);
      formData.append("country", propertyData.country);
      formData.append("university", propertyData.university);
      formData.append("description", propertyData.description);
      formData.append("area", propertyData.area);

      // Append services, amenities, and roomTypes as JSON strings
      formData.append("services", JSON.stringify(propertyData.services.filter((service) => service.trim())));
      formData.append(
        "amenities",
        JSON.stringify(
          propertyData.amenities.filter(
            (group) => group.title.trim() && group.items.some((item) => item.trim())
          )
        )
      );
      formData.append(
        "roomTypes",
        JSON.stringify(
          propertyData.roomTypes.filter((roomType) => roomType.title.trim() && roomType.price)
        )
      );

      // Append images
      images.forEach((image) => {
        formData.append("images", image);
      });

      const response = await api.post("/property", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  };

  const validateForm = () => {
    if (!formData.title.trim()) return "Title is required";
    if (!formData.price) return "Price is required";
    if (!formData.city.trim()) return "City is required";
    if (!formData.country.trim()) return "Country is required";
    if (!formData.description.trim()) return "Description is required";
    if (!formData.university.trim()) return "University is required";
    if (!formData.area.trim()) return "Area is required";
    if (images.length === 0) return "At least one image is required";
    if (!formData.services.some((service) => service.trim())) return "At least one service is required";

    const hasValidAmenityGroup = formData.amenities.some(
      (group) => group.title.trim() && group.items.some((item) => item.trim())
    );
    if (!hasValidAmenityGroup) return "At least one amenity group with one item is required";

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
      const response = await createProperty(formData, images);
      toast.success("Property created successfully!");

      // Reset form
      setFormData({
        title: "",
        price: "",
        city: "",
        country: "",
        university: "",
        description: "",
        area: "",
        services: [""],
        amenities: [{ title: "", items: [""] }],
        roomTypes: [{ title: "", price: "" }],
      });
      setImages([]);
    } catch (error) {
      toast.error(error.message || "Failed to create property");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="bg-white rounded-xl shadow-lg p-6 space-y-6">
        <h2 className="text-2xl font-bold text-[#6C0F0A]">Add New Property</h2>

        <div className="space-y-6">
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
          className={`w-full bg-[#6C0F0A] text-white py-3 px-6 rounded-lg transition-colors duration-200 ${isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:bg-[#a04031]"
            }`}
        >
          {isSubmitting ? "Creating Property..." : "Submit Property"}
        </button>
      </div>
    </form>
  );
};

export default AddProperty;
