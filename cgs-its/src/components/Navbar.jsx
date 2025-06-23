import React from "react";

function Navbar() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">CGS IT</h1>
        <nav className="space-x-6">
          <a href="#services" className="text-gray-700 hover:text-blue-600">
            Services
          </a>
          <a href="#about" className="text-gray-700 hover:text-blue-600">
            About Us
          </a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
