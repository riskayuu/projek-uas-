import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../images/logo1.jpg'; 
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-600 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Use the imported logo here */}
        <img 
          src={logo}  // Use the imported logo
          alt="Logo UKM Seni Musik UAD" 
          className="w-12 h-12"  // Adjust size if needed
        />
        <h1 className="text-2xl font-bold">UKM Seni Musik UAD</h1>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none focus:ring-2 focus:ring-white"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
        
        <ul className="hidden md:flex space-x-4">
          <li>
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:underline">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/kegiatan" className="hover:underline">
              Kegiatan
            </Link>
          </li>
          <li>
            <Link to="/daftar" className="hover:underline">
              Daftar
            </Link>
          </li>
        </ul>
      </div>
      
      {/* Menu dropdown for mobile */}
      {isOpen && (
        <div className="md:hidden bg-blue-700">
          <ul className="flex flex-col space-y-2 p-4">
            <li>
              <Link to="/" onClick={toggleMenu} className="block hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={toggleMenu} className="block hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/kegiatan" onClick={toggleMenu} className="block hover:underline">
                Kegiatan
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
