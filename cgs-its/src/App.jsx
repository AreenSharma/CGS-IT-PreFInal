import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ServicesGrid from "./pages/ServicePage";
import GetQuote from "./pages/GetQuote";
// import AboutPage from "./pages/AboutPage";
// import ContactUs from "./pages/ContactUs";
// import Industries from "./pages/Industries";
import IndustriesGrid from "./pages/IndustryPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Services" element={<ServicesGrid />} />
        <Route path="/GetQuote" element={<GetQuote />} />
       < Route path="/Industries" element={<IndustriesGrid />} />
        {/* <Route path="/AboutUs" element={<AboutPage />} />
        <Route path="/ContactUs" element={<ContactUs />} />
     */}
      </Routes>
    </Router>
  );
}

export default App;
