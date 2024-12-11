import React, { useState, useEffect } from "react";
import UpdateProperty from "./UpdateProperty";
import { Oval } from "react-loader-spinner";

const EditProperty = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [properties, setProperties] = useState([]);
  const [editingProperty, setEditingProperty] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch properties based on search term
  const handleSearch = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_URI}/api/propertyauth/property?title=${searchTerm}`
      );
      const data = await response.json();
      console.log("Fetched properties:", data);
      setProperties(data.properties);
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
    setIsLoading(false);
  };

  // Delete property
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this property?")) {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_SERVER_URI}/api/propertyauth/property/${id}`,
          {
            method: "DELETE",
          }
        );
        if (response.ok) {
          alert("Property deleted successfully");
          handleSearch();
        } else {
          alert("Failed to delete property");
        }
      } catch (error) {
        console.error("Error deleting property:", error);
      }
    }
  };

  // Edit property (populate the form)
  const handleEdit = (property) => {
    setEditingProperty(property);
  };

  const handleSuccess = () => {
    console.log("Property updated successfully!");
    setEditingProperty(null);
    setProperties([]);
    setSearchTerm("");
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Manage Properties</h1>
      <div className="mb-6 flex flex-row">
        <input
          type="text"
          placeholder="Search property by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border px-4 py-2 rounded-md outline-none w-full"
        />
        <button
          disabled={isLoading}
          onClick={handleSearch}
          className="bg-voilet text-white w-44 px-4 py-2 rounded-md flex flex-row gap-2 justify-center items-center"
        >
          Search
          {isLoading && <div className="ml-4 transition duration-500 ease-in-out">
            <Oval
              visible={true}
              height="20"
              width="20"
              secondaryColor="#ffffff"
              strokeWidth={4}
              strokeWidthSecondary={4}
              color="#f5f5f5"
              ariaLabel="oval-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>}
        </button>
      </div>

      {editingProperty ? (
        <UpdateProperty property={editingProperty} onSuccess={handleSuccess} />
      ) : (
        <div className="space-y-4">
          {properties &&
            properties.map((property) => (
              <div key={property.id} className="border p-4 rounded-md">
                <h3 className="text-lg font-bold">{property.title}</h3>
                <p>{property.description}</p>
                <div className="flex space-x-4 mt-2">
                  <button
                    onClick={() => handleEdit(property)}
                    className="bg-yellow-500 text-white px-4 py-2 rounded-md"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(property._id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-md"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default EditProperty;
