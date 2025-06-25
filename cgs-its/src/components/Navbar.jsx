import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";

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

      // Hide navbar when scrolling down, show when scrolling up
      setIsScrolledDown(currentScrollPos > prevScrollPos && currentScrollPos > 50);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <header
      className={`fixed top-6 left-0 right-0 z-50 flex justify-center transition-transform duration-300 ${
        isScrolledDown ? "-translate-y-32" : "translate-y-0"
      }`}
    >
      <nav
        className="p-4 rounded-full"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Transparent pure black
          width: "fit-content", // Keeps the width similar to original
          padding: "1rem 2rem", // Same padding as original
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow
          backdropFilter: "blur(10px)", // Manual blur
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

      {/* Mobile menu toggle */}
      <div className="lg:hidden absolute top-4 right-4">
        <button
          className="p-2 text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <RiCloseLine size={24} /> : <RiMenuLine size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/80 flex flex-col items-center justify-center space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-white text-lg font-medium transition hover:underline"
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
// Second Navbar 
// import React, { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { RiMenuLine, RiCloseLine } from "react-icons/ri";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolledDown, setIsScrolledDown] = useState(false);
//   const [prevScrollPos, setPrevScrollPos] = useState(0);
//   const location = useLocation();

//   const navItems = [
//     { name: "Home", href: "/" },
//     { name: "About Us", href: "/AboutUs" },
//     { name: "Services", href: "/Services" },
//     { name: "Industries", href: "/Industries" },
//     { name: "Contact", href: "/ContactUs" },
//     { name: "Get Quote", href: "/GetQuote" },
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollPos = window.scrollY;

//       // Hide navbar when scrolling down, show when scrolling up
//       setIsScrolledDown(currentScrollPos > prevScrollPos && currentScrollPos > 50);
//       setPrevScrollPos(currentScrollPos);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [prevScrollPos]);

//   return (
//     <header
//       className={`fixed top-6 left-0 right-0 z-50 flex justify-center transition-transform duration-300 ${
//         isScrolledDown ? "-translate-y-32" : "translate-y-0"
//       }`}
//     >
//       <nav
//         className="p-4 rounded-full"
//         style={{
//           backgroundColor: "rgba(15, 15, 23, 0.8)", // Subtle transparency with a dark theme
//           width: "fit-content", // Keeps the width similar to original
//           padding: "1rem 2rem",
//           boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)", // Soft shadow for elevation
//         }}
//       >
//         <div className="flex space-x-6">
//           {navItems.map((item) => (
//             <Link
//               key={item.href}
//               to={item.href}
//               className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
//                 location.pathname === item.href
//                   ? "bg-white/20 text-white"
//                   : "text-white hover:bg-white/10"
//               }`}
//             >
//               {item.name}
//             </Link>
//           ))}
//         </div>
//       </nav>

//       {/* Mobile menu toggle */}
//       <div className="lg:hidden absolute top-4 right-4">
//         <button
//           className="p-2 text-white"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           aria-label="Toggle menu"
//         >
//           {isMenuOpen ? <RiCloseLine size={24} /> : <RiMenuLine size={24} />}
//         </button>
//       </div>

//       {/* Mobile menu */}
//       {isMenuOpen && (
//         <div className="lg:hidden fixed inset-0 bg-black/80 flex flex-col items-center justify-center space-y-4">
//           {navItems.map((item) => (
//             <Link
//               key={item.href}
//               to={item.href}
//               onClick={() => setIsMenuOpen(false)}
//               className="text-white text-lg font-medium transition hover:underline"
//             >
//               {item.name}
//             </Link>
//           ))}
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;

