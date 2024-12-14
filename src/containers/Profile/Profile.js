import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import HelmetConfig from "../../utils/HelmetConfig";


const Profile = ({ decodeToken }) => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    nationality: "",
    gender: "",
    university: "",
    dateOfBirth: "",
    moveInDate: "",
    moveOutDate: "",
    guarantors: [],
  });

  const [userDetails, setUserDetails] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("You are not logged in!");
      navigate("/");
      return;
    }

    const decoded = decodeToken(token);
    setUserDetails(decoded);
    const userId = decoded.userId;

    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_SERVER_URI}/api/auth/user/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setUserData(response.data);
      } catch (error) {
        toast.error("Failed to fetch user details. Please log in again.");
        localStorage.removeItem("token");
        navigate("/");
      }
    };

    fetchUserDetails();
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserData((prevData) => ({
      ...prevData,
      [name]:
        name.includes("Date") && value ? new Date(value).toISOString() : value,
    }));
  };

  const handleGuarantorChange = (index, field, value) => {
    const updatedGuarantors = [...userData.guarantors];
    updatedGuarantors[index][field] = value;
    setUserData((prevData) => ({ ...prevData, guarantors: updatedGuarantors }));
  };

  const addGuarantor = () => {
    setUserData((prevData) => ({
      ...prevData,
      guarantors: [
        ...prevData.guarantors,
        { name: "", email: "", phone: "", relationship: "" },
      ],
    }));
  };

  const removeGuarantor = (index) => {
    const updatedGuarantors = [...userData.guarantors];
    updatedGuarantors.splice(index, 1);
    setUserData((prevData) => ({ ...prevData, guarantors: updatedGuarantors }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("You are not logged in!");
      navigate("/");
      return;
    }

    try {
      await axios.put(
        `${process.env.REACT_APP_SERVER_URI}/api/auth/user/${userDetails.userId}`,
        userData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Profile updated successfully!");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to update profile. Try again."
      );
    }
  };

  return (
    <>
    <HelmetConfig
        title="Profile"
        description="Manage your account details, preferences, and saved properties effortlessly on your profile page."
      />
    <div className="bg-bg-200 w-full h-auto py-10">
      <div className="max-w-4xl mx-auto p-6 bg-white rounded shadow">
        <div className="flex flex-col gap-2 mb-6">
          <h2 className="text-2xl font-sans text-pink font-bold">
            Your{" "}<span className="text-voilet">Profile</span>
          </h2>
          <span className="capitalize text-sm text-accent-100 font-medium font-sans">
            Please update your profile for providing you the better accomodation.
          </span>
        </div>
        <form onSubmit={handleSubmit}>
          {/* User Details */}
          <div className="grid grid-cols-2 gap-x-4">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={userData.name || ""}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                disabled
                type="email"
                name="email"
                value={userData.email || ""}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4 col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                University
              </label>
              <input
                type="text"
                name="university"
                value={userData.university || ""}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Phone no
              </label>
              <input
                type="tel"
                name="phone"
                value={userData.phone || ""}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                maxLength="10"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                DOB
              </label>
              <input
                type="date"
                name="dateOfBirth"
                value={
                  userData.dateOfBirth ? userData.dateOfBirth.split("T")[0] : ""
                }
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="nationality"
                className="block text-sm font-medium text-accent-100"
              >
                Nationality
              </label>
              <select
                defaultValue="Not-defined"
                value={userData.nationality || ""}
                onChange={handleChange}
                name="nationality"
                className="w-full p-2 border border-gray-300 text-accent-100 rounded-lg outline-none mt-2"
                required
              >
                <option value="">Select Country</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="China">China</option>
                <option value="Europe">Europe</option>
                <option value="Russia">Russia</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor="gender"
                className="block text-sm font-medium text-accent-100"
              >
                Gender
              </label>
              <select
                defaultValue="Not-defined"
                value={userData.gender || ""}
                onChange={handleChange}
                name="gender"
                className="w-full p-2 border border-gray-300 text-accent-100 rounded-lg outline-none mt-2"
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Non-binary">Non-binary</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Move In Date
              </label>
              <input
                type="date"
                name="moveInDate"
                value={
                  userData.moveInDate ? userData.moveInDate.split("T")[0] : ""
                }
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Move Out Date
              </label>
              <input
                type="date"
                name="moveOutDate"
                value={
                  userData.moveOutDate ? userData.moveOutDate.split("T")[0] : ""
                }
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
          </div>

          {/* Add other fields like email, phone, etc. */}

          {/* Guarantor Details */}
          <h3 className="text-xl font-semibold mt-6 mb-4">Guarantor Details</h3>
          {userData.guarantors.map((guarantor, index) => (
            <div key={index} className="border p-4 rounded mb-4">
              <h4 className="font-semibold text-lg mb-2">
                Guarantor {index + 1}
              </h4>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  value={guarantor.name}
                  onChange={(e) =>
                    handleGuarantorChange(index, "name", e.target.value)
                  }
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  value={guarantor.email}
                  onChange={(e) =>
                    handleGuarantorChange(index, "email", e.target.value)
                  }
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                  type="text"
                  value={guarantor.phone}
                  onChange={(e) =>
                    handleGuarantorChange(index, "phone", e.target.value)
                  }
                  className="w-full p-2 border border-gray-300 rounded"
                  maxLength="10"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Relationship
                </label>
                <input
                  type="text"
                  value={guarantor.relationship}
                  onChange={(e) =>
                    handleGuarantorChange(index, "relationship", e.target.value)
                  }
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>

              <button
                type="button"
                onClick={() => removeGuarantor(index)}
                className="text-red-500 hover:underline"
              >
                Remove Guarantor
              </button>
            </div>
          ))}

          <div className="flex flex-row gap-4">
            <button
              type="button"
              onClick={addGuarantor}
              className="bg-voilet text-white px-4 py-2 rounded hover:bg-voilet/90 hover:scale-95 transition duration-300 ease-in-out"
            >
              Add Guarantor
            </button>

            {/* Submit */}
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 hover:scale-95 transition duration-300 ease-in-out"
            >
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default Profile;
