import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-invest-black text-invest-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-invest-orange flex items-center justify-center text-black font-bold">
              OG
            </div>
            <span className="text-lg font-semibold tracking-wide">
              Braymont Asset Group
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6 text-sm font-medium">
            <Link to="/" className="hover:text-invest-orange transition-colors">Home</Link>
            <Link to="/about" className="hover:text-invest-orange transition-colors">About us</Link>
            <Link to="/services" className="hover:text-invest-orange transition-colors">Services</Link>
            <Link to="/real" className="hover:text-invest-orange transition-colors">Real Estate</Link>
            <Link to="/impressum" className="hover:text-invest-orange transition-colors">Impressum</Link>
            <Link to="/contact" className="hover:text-invest-orange transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;