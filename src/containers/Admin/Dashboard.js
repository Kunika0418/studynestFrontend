import React, { useEffect, useState } from "react";
import AddProperty from "./Component/AddProperty";
import EditProperty from "./Component/EditProperty";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import UserDetails from "./Component/UserDetails";


const Dashboard = () => {
  const navigate = useNavigate();

  const [menu, setMenu] = useState("");
  
  const handleLogOut = () => {
    localStorage.removeItem("atoken");
    toast.success("Logged out successfully");
    navigate("/admin/login");
  };

  useEffect(() => {
    if (!localStorage.getItem("atoken")) {
      navigate("/admin/login");
    }
  }, []);

  return (
    <>
      <div className="min-h-screen">
        <div className="flex flex-row gap-4 p-6">
          <button
            onClick={handleLogOut}
            className="py-2 px-4 bg-primary-100 rounded-lg text-white font-semibold text-lg"
          >
            Log out
          </button>
          <button
            onClick={() => {
              setMenu("add");
            }}
            className="py-2 px-4 bg-primary-100 rounded-lg text-white font-semibold text-lg"
          >
            Add Property
          </button>
          <button
            onClick={() => {
              setMenu("edit");
            }}
            className="py-2 px-4 bg-primary-100 rounded-lg text-white font-semibold text-lg"
          >
            Edit Property
          </button>
          <button
            onClick={() => {
              setMenu("userDetails");
            }}
            className="py-2 px-4 bg-primary-100 rounded-lg text-white font-semibold text-lg"
          >
            User Details
          </button>
        </div>
        {menu === "add" && <AddProperty />}
        {menu === "edit" && <EditProperty />}
        {menu === "userDetails" && <UserDetails />}
      </div>
    </>
  );
};

export default Dashboard;
