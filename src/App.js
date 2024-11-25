import "./App.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.js";
import Footer from "./components/Footer/Footer.js";
import Home from "./containers/Home/Home.js";
import Property from "./containers/Property/Property.js";
import Service from "./containers/Service/Service.js";
import PropertyDetail from "./containers/Property/PropertyDetail/PropertyDetail.js";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Property" element={<Property />} />
        <Route path="/Services" element={<Service />} />
        <Route path="/Property/:PropertyId" element={<PropertyDetail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
