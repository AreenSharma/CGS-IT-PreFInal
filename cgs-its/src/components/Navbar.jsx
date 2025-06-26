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
    // { name: "Get Quote", href: "/GetQuote" },
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
            className="p-3 focus:outline-none border-none bg-transparent"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            style={{
              position: "fixed",
              right: "1rem",
              top: "3vh",
              zIndex: 51,
              background: "rgba(0, 0, 0, 0.7)",
              borderRadius: "50%",
              width: "48px",
              height: "48px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backdropFilter: "blur(10px)",
              border: "none",
              outline: "none",
            }}
          >
            {isMenuOpen ? (
              // X/Close icon
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="white" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              // Hamburger menu icon
              <RiMenuLine size={20} color="white" />
            )}
          </button>

          {/* Mobile Menu Dropdown */}
          {isMenuOpen && (
            <div
              className="fixed z-50 rounded-lg shadow-lg"
              style={{
                top: "calc(3vh + 60px)", // Position below the button
                right: "1rem",
                minWidth: "200px",
                background: "rgba(0, 0, 0, 0.9)",
                backdropFilter: "blur(15px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <div className="flex flex-col py-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={handleLinkClick}
                    className={`px-6 py-3 text-left transition-colors duration-200 hover:bg-white/10 ${
                      location.pathname === item.href
                        ? "bg-white/20 text-white"
                        : "text-white"
                    }`}
                    style={{
                      textDecoration: "none",
                      fontSize: "14px",
                      fontWeight: "500",
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
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