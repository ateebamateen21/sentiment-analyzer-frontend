"use client";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Container from "../reusables/Container"; // Ensure the correct import path
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-300 py-4">
      <div className="fixed top-6 left-0 w-full z-50">
        <Container>
          <div className="flex justify-between items-center bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-4">
            <div className="text-2xl font-bold flex justify-center items-center gap-2 ">
              <Image src="/logo.png" alt="logo" width={30} height={30} />
              <div className="hidden md:block">NeuroBalanceAI</div>
            </div>
            <div className="hidden md:flex space-x-4">
              <Link href="#articleSection" className="hover:text-gray-700">
                Blog
              </Link>
              <Link href="#profileSection" className="hover:text-gray-700">
                Profile
              </Link>
              <Link href="#botSection" className="hover:text-gray-700">
                Chat
              </Link>
              <Link
                href="/analysis"
                className="hover:text-gray-700"
                target="_blank"
              >
                Analyze
              </Link>
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
        </Container>
        {isOpen && (
          <Container>
            <div className="p-4 md:hidden mt-4 text-white font-bold bg-blue-950 backdrop-blur-md bg-opacity-45 rounded-lg transition-all duration-300 ease-in-out flex flex-col gap-3  ">
            <Link href="#articleSection" className="hover:text-gray-700">
                Blog
              </Link>
              <Link href="#profileSection" className="hover:text-gray-700">
                Profile
              </Link>
              <Link href="#botSection" className="hover:text-gray-700">
                Chat
              </Link>
              <Link
                href="/analysis"
                className="hover:text-gray-700"
                target="_blank"
              >
                Analyze
              </Link>
            </div>
          </Container>
        )}
      </div>
    </nav>
  );
}
