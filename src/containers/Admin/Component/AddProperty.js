import React, { useState } from "react";

const AddProperty = ({ closeModal }) => {
    const [property, setProperty] = useState({
        title: "",
        price: "",
        city: "",
        country: "",
        description: "",
        area: "",
        images: [],
        services: [],
        amenities: {
            "Room Features": [],
            "Common Areas": [],
            "Security & Services": [],
            "Utilities Included": [],
        },
    });
    const [fileCount, setFileCount] = useState(0); // To keep track of file uploads

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProperty((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        if (fileCount < 5) { // Limit to 5 files
            const files = Array.from(e.target.files);
            setProperty((prev) => ({
                ...prev,
                images: [...prev.images, ...files],
            }));
            setFileCount(fileCount + files.length);
        }
    };

    const handleServiceChange = (e) => {
        const { value } = e.target;
        setProperty((prev) => {
            const updatedServices = prev.services.includes(value)
                ? prev.services.filter((service) => service !== value)
                : [...prev.services, value];
            return { ...prev, services: updatedServices };
        });
    };

    const handleAmenityChange = (category, e) => {
        const { value, checked } = e.target;
        setProperty((prev) => {
            const updatedAmenities = checked
                ? [...prev.amenities[category], value]
                : prev.amenities[category].filter((amenity) => amenity !== value);
            return {
                ...prev,
                amenities: { ...prev.amenities, [category]: updatedAmenities },
            };
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Here, you can replace this with your API call to add the property
        console.log("Property added:", property);
        closeModal(); // Close modal after successful submission
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-4xl relative max-h-[90vh] overflow-auto">
                {/* Close Button */}
                <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 text-2xl text-gray-600 hover:text-black"
                >
                    &times;
                </button>

                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
                    Add Property
                </h2>
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

                    {/* Area */}
                    <div className="mb-6">
                        <label
                            htmlFor="area"
                            className="block text-gray-700 font-semibold mb-2"
                        >
                            Area (sq.ft)
                        </label>
                        <input
                            type="text"
                            id="area"
                            name="area"
                            value={property.area}
                            onChange={handleInputChange}
                            placeholder="Enter area"
                            className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                        />
                    </div>

                    {/* Image Upload */}
                    <div className="mb-6">
                        <label
                            htmlFor="images"
                            className="block text-gray-700 font-semibold mb-2"
                        >
                            Upload Property Images (Max 5)
                        </label>
                        <input
                            type="file"
                            id="images"
                            name="images"
                            accept="image/*"
                            onChange={handleFileChange}
                            multiple
                            className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                        />
                        <p className="mt-2 text-sm text-gray-500">
                            You can upload up to 5 images.
                        </p>
                    </div>

                    {/* Image Previews */}
                    <div className="mb-6">
                        <h4 className="text-lg font-semibold mb-2">Selected Images:</h4>
                        <div className="grid grid-cols-5 gap-4">
                            {property.images.map((file, index) => (
                                <div key={index} className="w-full h-24 overflow-hidden rounded-lg">
                                    <img
                                        src={URL.createObjectURL(file)}
                                        alt={`Property Image ${index + 1}`}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Services */}
                    <div className="mb-6">
                        <h3 className="text-xl font-semibold mb-2">Services</h3>
                        <div className="space-y-2">
                            {["24/7 Security", "Maintenance", "Housekeeping"].map((service) => (
                                <label key={service} className="block text-gray-700">
                                    <input
                                        type="checkbox"
                                        value={service}
                                        onChange={handleServiceChange}
                                        className="mr-2"
                                    />
                                    {service}
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Amenities */}
                    <div className="mb-6">
                        <h3 className="text-xl font-semibold mb-2">Amenities</h3>
                        <div className="grid grid-cols-2">
                            {Object.keys(property.amenities).map((category) => (
                                <div key={category} className="mb-4 ">
                                    <h4 className="font-semibold text-lg mb-2">{category}</h4>
                                    <div className="space-y-2">
                                        {[
                                            "UK-standard double beds",
                                            "Heating",
                                            "High-speed Wi-Fi (250 Mbps)",
                                            "Keyless entry",
                                            "Ample storage",
                                            "Fully equipped kitchens",
                                        ].map((item) => (
                                            <label key={item} className="block text-gray-700">
                                                <input
                                                    type="checkbox"
                                                    value={item}
                                                    onChange={(e) => handleAmenityChange(category, e)}
                                                    className="mr-2"
                                                />
                                                {item}
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-amber-500 text-white py-3 px-6 rounded-lg hover:bg-amber-600 transition duration-200"
                    >
                        Submit Property
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddProperty;
