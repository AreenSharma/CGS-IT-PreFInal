import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ServicesGrid from "./pages/ServicePage";
// import AboutPage from "./pages/AboutPage";
// import ContactUs from "./pages/ContactUs";
// import Industries from "./pages/Industries";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Services" element={<ServicesGrid />} />
        {/* <Route path="/AboutUs" element={<AboutPage />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        Route path="/Industries" element={<Industries />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
