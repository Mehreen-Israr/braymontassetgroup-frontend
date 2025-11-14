import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-invest-black text-invest-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 group" onClick={closeMenu}>
              <img 
                src={logo} 
                alt="Braymont Asset Group Logo" 
                className="h-12 w-auto object-contain transition-opacity group-hover:opacity-90"
              />
              <span className="text-lg font-semibold tracking-wide hidden sm:block">
                Braymont Asset Group
              </span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-6 text-sm font-medium">
            <Link to="/" className="hover:text-invest-orange transition-colors">Home</Link>
            <Link to="/about" className="hover:text-invest-orange transition-colors">About us</Link>
            <Link to="/services" className="hover:text-invest-orange transition-colors">Services</Link>
            <Link to="/real" className="hover:text-invest-orange transition-colors">Real Estate</Link>
            <Link to="/impressum" className="hover:text-invest-orange transition-colors">Impressum</Link>
            <Link to="/contact" className="hover:text-invest-orange transition-colors">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-invest-white hover:text-invest-orange focus:outline-none focus:ring-2 focus:ring-invest-orange"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-gray-700">
              <Link
                to="/"
                className="block px-3 py-2 rounded-md text-base font-medium hover:text-invest-orange hover:bg-gray-800 transition-colors"
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 rounded-md text-base font-medium hover:text-invest-orange hover:bg-gray-800 transition-colors"
                onClick={closeMenu}
              >
                About us
              </Link>
              <Link
                to="/services"
                className="block px-3 py-2 rounded-md text-base font-medium hover:text-invest-orange hover:bg-gray-800 transition-colors"
                onClick={closeMenu}
              >
                Services
              </Link>
              <Link
                to="/real"
                className="block px-3 py-2 rounded-md text-base font-medium hover:text-invest-orange hover:bg-gray-800 transition-colors"
                onClick={closeMenu}
              >
                Real Estate
              </Link>
              <Link
                to="/impressum"
                className="block px-3 py-2 rounded-md text-base font-medium hover:text-invest-orange hover:bg-gray-800 transition-colors"
                onClick={closeMenu}
              >
                Impressum
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 rounded-md text-base font-medium hover:text-invest-orange hover:bg-gray-800 transition-colors"
                onClick={closeMenu}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;