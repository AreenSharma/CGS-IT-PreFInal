import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/AboutUs" },
    { name: "Services", href: "/Services" },
    { name: "Industries", href: "/Industries" },
    { name: "Contact", href: "/ContactUs" },
    { name: "Get Quote", href: "/GetQuote" },
  ];

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center">
      <nav className="flex space-x-6 bg-black/60 p-4 rounded-full backdrop-blur-md">
        {navItems.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
              pathname === item.href
                ? "bg-white/20 text-white"
                : "text-white hover:bg-white/10"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>

      {/* Mobile toggle */}
      <div className="lg:hidden absolute top-4 right-4">
        <button
          className="p-2 text-white"
          onClick={() => setIsOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {isOpen ? <RiCloseLine size={24} /> : <RiMenuLine size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/80 backdrop-blur-lg flex flex-col items-center justify-center space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={() => setIsOpen(false)}
              className={`text-white text-lg font-medium transition ${
                pathname === item.href ? "underline" : "hover:underline"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
