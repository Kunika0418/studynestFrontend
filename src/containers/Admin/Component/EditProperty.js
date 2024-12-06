import React, { useState, useEffect } from "react";

const EditProperty = ({ closeModal }) => {
  const [propertyId, setPropertyId] = useState(""); // State to hold the property ID
  const [property, setProperty] = useState({
    title: "",
    price: "",
    city: "",
    country: "",
    description: "",
    amenities: [],
    services: [],
    images: [], // Image file state
  });
  const [isPropertyFetched, setIsPropertyFetched] = useState(false); // Flag to indicate whether property data is fetched
  const [isLoading, setIsLoading] = useState(false); // Flag to indicate loading state
  const [imagePreviews, setImagePreviews] = useState([]); // Image previews for selected files

  // Predefined amenities and services
  const amenitiesOptions = ["Pool", "Gym", "Parking", "Wi-Fi", "Spa", "Garden"];
  const servicesOptions = ["Cleaning", "Security", "Concierge", "Maintenance", "Laundry"];

  // Fetch the property details based on the propertyId when it's entered
  useEffect(() => {
    if (propertyId) {
      setIsLoading(true); // Set loading to true before fetching
      console.log(`Fetching property details for ID: ${propertyId}`);
      // Simulate API fetch - Replace with your API call
      setTimeout(() => {
        setProperty({
          title: "Sample Property Title",
          price: 100000,
          city: "Sample City",
          country: "Sample Country",
          description: "This is a sample property description.",
          amenities: ["Pool", "Gym"],
          services: ["Cleaning", "Security"],
          images: ["image1.jpg", "image2.jpg"], // Example images
        });
        setIsPropertyFetched(true); // Mark property data as fetched
        setIsLoading(false); // Set loading to false after fetch
      }, 1000); // Simulating API call delay
    }
  }, [propertyId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProperty((prev) => ({ ...prev, [name]: value }));
  };

  const handleAmenityChange = (e) => {
    const { value, checked } = e.target;
    setProperty((prev) => ({
      ...prev,
      amenities: checked
        ? [...prev.amenities, value]
        : prev.amenities.filter((item) => item !== value),
    }));
  };

  const handleServiceChange = (e) => {
    const { value, checked } = e.target;
    setProperty((prev) => ({
      ...prev,
      services: checked
        ? [...prev.services, value]
        : prev.services.filter((item) => item !== value),
    }));
  };

  const handleImageChange = (e) => {
    const files = e.target.files;
    const fileArray = Array.from(files);

    // Preview the selected images
    const previews = fileArray.map((file) =>
      URL.createObjectURL(file)
    );
    setImagePreviews(previews);

    setProperty((prev) => ({
      ...prev,
      images: [...prev.images, ...fileArray],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Submit updated property details
    console.log("Updated property:", property);
    closeModal(); // Close modal after successful update
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-3xl relative overflow-auto max-h-[80vh]">
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-2xl text-gray-600 hover:text-black"
        >
          &times;
        </button>

        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Edit Property
        </h2>

        {/* Step 1: Show form to enter property ID */}
        {!isPropertyFetched ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setIsPropertyFetched(false);
            }}
          >
            <div className="mb-6">
              <label
                htmlFor="propertyId"
                className="block text-gray-700 font-semibold mb-2"
              >
                Enter Property ID
              </label>
              <input
                type="text"
                id="propertyId"
                value={propertyId}
                onChange={(e) => setPropertyId(e.target.value)}
                placeholder="Enter property ID"
                className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600"
            >
              Fetch Property Details
            </button>
          </form>
        ) : (
          // Step 2: Show the form to edit the property details
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              {/* Title & Price */}
              <div>
                <label
                  htmlFor="title"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Property Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={property.title}
                  onChange={handleInputChange}
                  placeholder="Enter property title"
                  className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="price"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Price
                </label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={property.price}
                  onChange={handleInputChange}
                  placeholder="Enter price"
                  className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              {/* City & Country */}
              <div>
                <label
                  htmlFor="city"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={property.city}
                  onChange={handleInputChange}
                  placeholder="Enter city"
                  className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="country"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Country
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={property.country}
                  onChange={handleInputChange}
                  placeholder="Enter country"
                  className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  required
                />
              </div>
            </div>

            {/* Description */}
            <div className="mb-6">
              <label
                htmlFor="description"
                className="block text-gray-700 font-semibold mb-2"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={property.description}
                onChange={handleInputChange}
                placeholder="Property description"
                className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                rows="4"
              />
            </div>

            {/* Amenities */}
            <div className="mb-6">
              <label
                htmlFor="amenities"
                className="block text-gray-700 font-semibold mb-2"
              >
                Amenities
              </label>
              <div className="space-y-2">
                {amenitiesOptions.map((amenity) => (
                  <div key={amenity} className="flex items-center">
                    <input
                      type="checkbox"
                      id={amenity}
                      value={amenity}
                      checked={property.amenities.includes(amenity)}
                      onChange={handleAmenityChange}
                      className="mr-2"
                    />
                    <label htmlFor={amenity} className="text-gray-700">
                      {amenity}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="mb-6">
              <label
                htmlFor="services"
                className="block text-gray-700 font-semibold mb-2"
              >
                Services
              </label>
              <div className="space-y-2">
                {servicesOptions.map((service) => (
                  <div key={service} className="flex items-center">
                    <input
                      type="checkbox"
                      id={service}
                      value={service}
                      checked={property.services.includes(service)}
                      onChange={handleServiceChange}
                      className="mr-2"
                    />
                    <label htmlFor={service} className="text-gray-700">
                      {service}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Property Images */}
            <div className="mb-6">
              <label
                htmlFor="images"
                className="block text-gray-700 font-semibold mb-2"
              >
                Property Images
              </label>
              <input
                type="file"
                id="images"
                name="images"
                multiple
                onChange={handleImageChange}
                className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              <div className="mt-4 grid grid-cols-5 gap-4">
                {imagePreviews.map((preview, index) => (
                  <div key={index} className="w-full h-32 overflow-hidden rounded-lg">
                    <img
                      src={preview}
                      alt={`Image Preview ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600"
            >
              {isLoading ? "Updating..." : "Update Property"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default EditProperty;
