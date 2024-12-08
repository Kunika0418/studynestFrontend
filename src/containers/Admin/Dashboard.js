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
      <button onClick={handleLogOut} className="btn btn-primary">
        Log out
      </button>
      <AddProperty />
      <EditProperty />
    </>
  );
};

export default Dashboard;
