"use client";
//PATH: src/components/NavBar.tsx

// components/Navbar.js
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Container } from "./index";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-300  py-4">
      <Container>
        <div className="container mx-auto flex justify-between items-center bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-4">
          <div className="text-2xl font-bold">NeuroBalanceAI</div>
          <div className="hidden md:flex space-x-4">
            <a href="#" className="hover:text-gray-700">
              Project
            </a>
            <a href="#" className="hover:text-gray-700">
              Demo
            </a>
            <a href="#" className="hover:text-gray-700">
              Profile
            </a>
            <a href="#" className="hover:text-gray-700">
              Services
            </a>
          </div>
          <div className="md:hidden flex justify-center items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <a href="#" className="block p-2 hover:text-gray-700">
              Project
            </a>
            <a href="#" className="block p-2 hover:text-gray-700">
              Demo
            </a>
            <a href="#" className="block p-2 hover:text-gray-700">
              Profile
            </a>
            <a href="#" className="block p-2 hover:text-gray-700">
              Services
            </a>
          </div>
        )}
      </Container>
    </nav>
  );
}
