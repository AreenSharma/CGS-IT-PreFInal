import React from "react";
import { Link } from "react-router-dom";
import { RiMailLine, RiPhoneLine, RiMapPinLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">About CGS IT</h3>
          <p className="text-gray-400 text-sm">
            CGS IT LLC is a premier IT staffing and consulting company specializing in connecting exceptional technology talent with innovative organizations.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {[
              { name: "Home", href: "/" },
              { name: "About Us", href: "/AboutUs" },
              { name: "Services", href: "/Services" },
              { name: "Industries", href: "/Industries" },
              { name: "Contact Us", href: "/ContactUs" },
              { name: "Get Quote", href: "/GetQuote" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <RiMailLine className="w-5 h-5 text-red-500 mr-3" />
              <span>
                <strong>Email:</strong> <a href="mailto:Recruiter@cgs-its.com" className="hover:text-white transition-colors">Recruiter@cgs-its.com</a>
              </span>
            </li>
            <li className="flex items-start">
              <RiPhoneLine className="w-5 h-5 text-red-500 mr-3" />
              <span>
                <strong>Phone:</strong> <a href="tel:8888855368" className="hover:text-white transition-colors">888-885-5368</a>
              </span>
            </li>
            <li className="flex items-start">
              <RiMapPinLine className="w-5 h-5 text-red-500 mr-3" />
              <span>
                <strong>Address:</strong> <br />
                1212 N. Orange St. <br />
                Wilmington, DE 19801
              </span>
            </li>
          </ul>
        </div>

        {/* Let's Connect Section */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Let’s Connect</h3>
          <p className="text-gray-400 mb-4">
            Ready to transform your technology team? Get in touch with our expert recruiters and consultants today.
          </p>
          <button className="w-full py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition">
            Contact Us
          </button>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} CGS IT LLC. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
