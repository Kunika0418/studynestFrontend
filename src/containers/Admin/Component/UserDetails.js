import React, { useState, useEffect } from "react";
import axios from "axios";
import * as XLSX from "xlsx";
import { Oval } from "react-loader-spinner";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch users on component mount
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          process.env.REACT_APP_SERVER_URI + "/api/auth/users"
        );

        // Transform user data to extract specific fields
        const transformedUsers = response.data.users.map((user) => ({
          Name: user.name,
          Email: user.email,
          Phone: user.phone,
          University: user.university,
        }));

        setUsers(transformedUsers);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch users");
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Function to download users as Excel file
  const downloadExcel = () => {
    // Create a new workbook
    const workbook = XLSX.utils.book_new();

    // Convert users to worksheet
    const worksheet = XLSX.utils.json_to_sheet(users);

    // Add the worksheet to the workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, "Users");

    // Generate and download the Excel file
    XLSX.writeFile(workbook, "user_list.xlsx");
  };

  // Render loading state
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="ml-4 transition duration-500 ease-in-out">
          <Oval
            visible={true}
            height="20"
            width="20"
            secondaryColor="#2c2c2c"
            strokeWidth={4}
            strokeWidthSecondary={4}
            color="#242A56"
            ariaLabel="oval-loading"
          />
        </div>
        <span className="ml-2">Loading Users...</span>
      </div>
    );
  }

  // Render error state
  if (error) {
    return (
      <div className="flex justify-center items-center h-screen bg-lightpink">
        <div className="text-xl font-bold p-4 rounded-lg bg-darkpink text-offwhite">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 bg-offwhite">
      <div className="bg-white shadow-md rounded-lg overflow-hidden border-voilet">
        {/* Table Title */}
        <div className="p-4 text-2xl font-bold text-center bg-blue text-offwhite">
          User Information
        </div>

        {/* User Table */}
        <table className="w-full">
          <thead>
            <tr className="bg-pink text-offwhite">
              <th className="p-2 text-left">Name</th>
              <th className="p-2 text-left">Email</th>
              <th className="p-2 text-left">Phone</th>
              <th className="p-2 text-left">University</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-lightpink" : "bg-offwhite"
                } border-b`}
              >
                <td className="p-2">{user.Name}</td>
                <td className="p-2">{user.Email}</td>
                <td className="p-2">{user.Phone}</td>
                <td className="p-2">{user.University}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Download Button */}
        <div className="p-4 text-center">
          <button
            onClick={downloadExcel}
            className="px-4 py-2 rounded-lg font-bold bg-voilet text-offwhite"
          >
            Download Users as Excel
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
