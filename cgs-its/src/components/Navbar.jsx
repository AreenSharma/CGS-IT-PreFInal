import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { RiMenuLine } from "react-icons/ri";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const location = useLocation();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/AboutUs" },
    { name: "Services", href: "/Services" },
    { name: "Industries", href: "/Industries" },
    { name: "Contact", href: "/ContactUs" },
    { name: "Get Quote", href: "/GetQuote" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsScrolledDown(currentScrollPos > prevScrollPos && currentScrollPos > 50);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const [isMobileView, setIsMobileView] = useState(false);
  useEffect(() => {
    const updateView = () => {
      setIsMobileView(window.innerWidth <= 1022);
    };

    window.addEventListener("resize", updateView);
    updateView(); // Set initial state
    return () => {
      window.removeEventListener("resize", updateView);
    };
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close the menu when a link is clicked
  };

  return (
    <header
      className={`fixed left-0 right-0 z-50 transition-transform duration-300 ${
        isScrolledDown ? "-translate-y-32" : "translate-y-0"
      }`}
      style={{
        top: isMobileView ? (isMenuOpen ? "30vh" : "3vh") : "3vh", // Adjust for vertical positioning
      }}
    >
      {isMobileView ? (
        <div className="w-full flex justify-end items-center px-6 py-4">
          <button
            className={`p-2 text-white rounded-full focus:outline-none ${
              isMenuOpen ? "bg-white text-black" : "bg-black text-white"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            style={{
              position: "fixed",
              right: "1rem",
              top: "3vh", // Keep button at its original position
              zIndex: 51, // Ensure it stays above other elements
            }}
          >
            <RiMenuLine
              size={24}
              style={{
                transform: isMenuOpen ? "rotate(45deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease",
              }}
            />
          </button>

          {/* Fullscreen Menu */}
          {isMenuOpen && (
            <div
              className="fixed inset-0 bg-black text-white z-50 flex flex-col items-center justify-center space-y-8"
              style={{ top: 0 }}
            >
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={handleLinkClick}
                  className="text-2xl font-semibold transition hover:text-gray-400"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      ) : (
        <nav
          className="p-4 rounded-full mx-auto"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            width: "fit-content",
            padding: "1rem 2rem",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(10px)",
          }}
        >
          <div className="flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                  location.pathname === item.href
                    ? "bg-white/20 text-white"
                    : "text-white hover:bg-white/10"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
