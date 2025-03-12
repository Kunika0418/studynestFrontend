import React, { useEffect, useState } from "react";
import AddProperty from "./Component/AddProperty";
import EditProperty from "./Component/EditProperty";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import UserDetails from "./Component/UserDetails";
import AddTestimonial from "./Component/AddTestimonial";
import ManageTestimonial from "./Component/ManageTestimonial";
import PropertyUpload from "./Component/PropertyUpload";
import AddBlog from "./Component/AddBlog";


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
        <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-flow-col gap-4 p-6">
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
              setMenu("upload");
            }}
            className="py-2 px-4 bg-primary-100 rounded-lg text-white font-semibold text-lg"
          >
            Upload Properties
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
          <button
            onClick={() => {
              setMenu("Add Testimonial");
            }}
            className="py-2 px-4 bg-primary-100 rounded-lg text-white font-semibold text-lg"
          >
            Add Testimonial
          </button>
          <button
            onClick={() => {
              setMenu("Manage Testimonial");
            }}
            className="py-2 px-4 bg-primary-100 rounded-lg text-white font-semibold text-lg"
          >
            Manage Testimonial
          </button>
          <button
            onClick={() => {
              setMenu("Add Blog");
            }}
            className="py-2 px-4 bg-primary-100 rounded-lg text-white font-semibold text-lg"
          >
            Add Blog
          </button>
        </div>
        {menu === "add" && <AddProperty />}
        {menu === "upload" && <PropertyUpload />}
        {menu === "edit" && <EditProperty />}
        {menu === "userDetails" && <UserDetails />}
        {menu === "Add Testimonial" && <AddTestimonial />}
        {menu === "Manage Testimonial" && <ManageTestimonial />}
        {menu === "Add Blog" && <AddBlog />}
      </div>
    </>
  );
};

export default Dashboard;
