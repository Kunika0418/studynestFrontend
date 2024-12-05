import React, { useState } from "react";
import AddProperty from "./Component/AddProperty";
import EditProperty from "./Component/EditProperty";
import DeleteProperty from "./Component/DeleteProperty";

const Admin = () => {
    const [isUnlocked, setIsUnlocked] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [operation, setOperation] = useState(null); // To track current operation
    const [propertyId, setPropertyId] = useState(null); // For editing or deleting specific property

    const correctUsername = "Admin1234";
    const correctPassword = "Admin0987";

    const handleLogin = (e) => {
        e.preventDefault();
        if (username === correctUsername && password === correctPassword) {
            setIsUnlocked(true);
            setError("");
        } else {
            setError("Invalid username or password");
        }
    };

    const openModal = (operation, propertyId = null) => {
        setOperation(operation);
        setPropertyId(propertyId);
    };

    const closeModal = () => {
        setOperation(null);
        setPropertyId(null);
    };

    return (
        <div className="flex flex-col">
            {/* Login Modal */}
            {!isUnlocked && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
                        <h2 className="text-2xl font-semibold mb-4 text-center">Login Required</h2>
                        <form onSubmit={handleLogin}>
                            <div className="mb-4">
                                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                                    Username
                                </label>
                                <input
                                    id="username"
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-amber-300"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-amber-300"
                                    required
                                />
                            </div>
                            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                            <button type="submit" className="w-full bg-amber-500 text-white py-2 rounded-lg hover:bg-amber-600">
                                Unlock
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {/* Main Content */}
            {isUnlocked && (
                <div className="p-6">
                    <div className="title flex justify-center">
                        <h1 className="text-3xl font-bold mb-4">Welcome To Admin Page</h1>
                    </div>
                    <div className="flex flex-col py-10">
                        <h2 className="text-2xl font-semibold mb-4 underline">Manage your property</h2>
                        {/* Property Management Buttons */}
                        <div className="space-x-4 py-4">
                            <button
                                onClick={() => openModal("add")}
                                className="bg-amber-500 text-white py-2 px-4 rounded hover:bg-amber-600"
                            >
                                Add Property
                            </button>
                            <button
                                onClick={() => openModal("edit", 1)} // Example for edit (replace with actual property ID)
                                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                            >
                                Edit Property
                            </button>
                            <button
                                onClick={() => openModal("delete", 1)} // Example for delete (replace with actual property ID)
                                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                            >
                                Delete Property
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Modal for Operations */}
            {operation && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 text-xl text-gray-600 hover:text-gray-800"
                        >
                            &times;
                        </button>

                        {/* Render different components based on operation type */}
                        {operation === "add" && <AddProperty closeModal={closeModal} />}
                        {operation === "edit" && <EditProperty propertyId={propertyId} closeModal={closeModal} />}
                        {operation === "delete" && <DeleteProperty propertyId={propertyId} closeModal={closeModal} />}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Admin;
