"use client";
import React, { useState } from "react";
import { FaCheck, FaBars } from "react-icons/fa";
import { CiCircleAlert } from "react-icons/ci";
import { BsCartDash } from "react-icons/bs";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="">
      {/* Top bar */}
      <div className="md:px-56 hidden text-gray-200 md:flex justify-between items-center px-4 py-2 bg-[#272343]">
        <div className="text-sm flex items-center space-x-2">
          <FaCheck size={16} /> {/* Size prop used */}
          <span>Free shipping on all orders over $50</span>
        </div>
        <div className="flex items-center space-x-6 text-sm">
          <div className="hover:underline">Eng</div>
          <div className="hover:underline">FAQs</div>
          <div className="flex items-center space-x-1">
            <CiCircleAlert size={16} />
            <span className="hover:underline">Need Help</span>
          </div>
        </div>
      </div>

      {/* Middle bar */}
      <div className="bg-gray-100 md:px-56 shadow-md border-b border-gray-200 px-4 py-3">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src="/Logo Icon.png"
              alt="Comforty Logo"
              className="w-8 h-8"
            />
            <span className="text-xl font-bold text-gray-700">Comforty</span>
          </div>

         
        {/* Cart */}
<div className="relative hidden md:flex items-center space-x-2 bg-white p-2 rounded-md shadow-sm">
  <BsCartDash size={30} color="gray" /> {/* Cart Icon */}
  <span className="text-gray-700 text-sm font-medium">Cart</span> {/* Cart Text */}
  <span className="bg-teal-600 text-white text-xs rounded-full px-1 flex items-center justify-center">
    2
  </span>
</div>




          {/* Mobile menu icon */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex items-center text-gray-700"
          >
            <FaBars size={20} /> {/* Size prop used */}
          </button>
        </div>
      </div>

      {/* Links and Contact */}
      <div className="hidden md:px-56 md:flex bg-white px-4 py-3">
        <div className="container mx-auto flex justify-between items-center">
          {/* Links */}
          <div className="flex space-x-6 font-thin text-gray-700">
            <a href="#" className="hover:text-teal-600">
              Home
            </a>
            <a href="#" className="hover:text-teal-600">
              Shop
            </a>
            <a href="#" className="hover:text-teal-600">
              Product
            </a>
            <a href="#" className="hover:text-teal-600">
              Pages
            </a>
            <a href="#" className="hover:text-teal-600">
              About
            </a>
          </div>
          {/* Contact */}
          <div className="text-gray-700">Contact: (808) 555-0111</div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center bg-white py-3 space-y-2 text-gray-700">
          <a href="#" className="hover:text-teal-600">
            Home
          </a>
          <a href="#" className="hover:text-teal-600">
            Shop
          </a>
          <a href="#" className="hover:text-teal-600">
            Product
          </a>
          <a href="#" className="hover:text-teal-600">
            Pages
          </a>
          <a href="#" className="hover:text-teal-600">
            About
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
