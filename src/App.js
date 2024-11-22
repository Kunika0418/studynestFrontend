import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navabar from "./components/Navbar/Navbar.js";
import Footer from "./components/Footer/Footer.js";
import Home from "./containers/Home/Home.js";

function App() {
  return (
    <>
      <Navabar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
