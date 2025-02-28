import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./App.css";
import Footer from "./components/Footer/Footer.js";
import Navbar from "./components/Navbar/Navbar.js";
import WhastappIcon from "./components/WhatsappIcon/WhatsappIcon.js";
import Dashboard from "./containers/Admin/Dashboard.js";
import Login from "./containers/Admin/Login.js";
import Signup from "./containers/Admin/Signup.js";
import BlogPage from "./containers/BlogPage/BlogPage.js";
import BlogDetail from "./containers/BlogPage/BlogDetail.js";
import Home from "./containers/Home/Home.js";
import Profile from "./containers/Profile/Profile.js";
import Property from "./containers/Property/Property.js";
import PropertyDetail from "./containers/Property/PropertyDetail/PropertyDetail.js";
import Service from "./containers/Service/Service.js";

import { jwtDecode } from "jwt-decode";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFound from "./containers/NotFound/NotFound.js";

function App() {
  const [user, setUser] = useState({});

  const decodeToken = (token) => {
    try {
      const decoded = jwtDecode(token);
      console.log("Decoded Token:", decoded);
      setUser(decoded);
      return decoded;
    } catch (error) {
      console.error("Invalid token", error);
    }
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Navbar />
      <WhastappIcon />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/Property" element={<Property />} />
        <Route path="/Services" element={<Service />} />
        <Route path="/Property/:PropertyId" element={<PropertyDetail />} />
        <Route path="/Profile" element={<Profile decodeToken={decodeToken} />} />
        <Route path="/Admin/Login" element={<Login />} />
        <Route path="/Admin/Signup" element={<Signup />} />
        <Route path="/Admin/dashboard" element={<Dashboard />} />
        <Route path="/blog/:id" element={<BlogDetail />} />  {/* New Route */}
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
