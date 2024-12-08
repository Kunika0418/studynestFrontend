import React, { useEffect, useState } from "react";
import AddProperty from "./Component/AddProperty";
import EditProperty from "./Component/EditProperty";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Dashboard = () => {
  const navigate = useNavigate();

  const [isAddProperty, setIsAddProperty] = useState(false);
  const [isEditProperty, setIsEditProperty] = useState(false);

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
              setIsAddProperty(!isAddProperty);
            }}
            className="py-2 px-4 bg-primary-100 rounded-lg text-white font-semibold text-lg"
          >
            Add Property
          </button>
          <button
            onClick={() => {
              setIsEditProperty(!isEditProperty);
            }}
            className="py-2 px-4 bg-primary-100 rounded-lg text-white font-semibold text-lg"
          >
            Edit Property
          </button>
        </div>
        {isAddProperty && <AddProperty />}
        {isEditProperty && <EditProperty />}
      </div>
    </>
  );
};

export default Dashboard;
