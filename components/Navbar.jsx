import React, { useState } from "react";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { FaUser, FaSignInAlt } from 'react-icons/fa'; // Importing icons from react-icons
import { MdArrowOutward } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 flex flex-row justify-between items-center py-4">
        <div className="text-lg basis-1/4 font-semibold">
          <Link href="/" passHref>
            <img src="images/home/smart-logo.png" alt="Smart Grader Logo" className="h-11 cursor-pointer" />
          </Link>
        </div>
        
        <nav className="hidden lg:flex basis-1/2 space-x-4 lg:space-x-6 justify-center items-center">
          <Link href="#home" passHref>
            <span className="text-gray-900 hover:text-blue-700 font-spline transition duration-300 cursor-pointer">Home</span>
          </Link>
          <Link href="#how-it-works" passHref>
            <span className="text-gray-900 hover:text-blue-700 font-spline transition duration-300 cursor-pointer">How It Works</span>
          </Link>
          <Link href="#pricing" passHref>
            <span className="text-gray-900 hover:text-blue-700 transition font-spline duration-300 cursor-pointer">Pricing</span>
          </Link>
          <Link href="#partners" passHref>
            <span className="text-gray-900 hover:text-blue-700 transition font-spline duration-300 cursor-pointer">Partners</span>
          </Link>
          <Link href="/evaluate" passHref>
            <span className="text-gray-900 flex items-center hover:text-blue-700 transition duration-300 cursor-pointer">
              Interview <MdArrowOutward className="px-2" />
            </span>
          </Link>
        </nav>

        <div className="hidden lg:flex flex-row basis-1/4 space-x-6 justify-end items-center">
          <div onClick={()=>window.location.href = 'http://smart-grader-app-ts.vercel.app/signIn'}>
            <span className="text-gray-900 hover:text-blue-700 font-spline transition duration-300 flex items-center cursor-pointer">
              <FaSignInAlt className="mr-2" /> Login
            </span>
          </div>
          <div onClick={()=>window.location.href = 'http://smart-grader-app-ts.vercel.app/createAccount'}>
            <span className="bg-blue-700 text-white px-4 py-2 font-spline rounded-md hover:bg-blue-800 transition duration-300 flex items-center cursor-pointer">
              <FaUser className="mr-2" /> Signup
            </span>
          </div>
        </div>

        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && <MobileMenu />}
    </header>
  );
};

export default Navbar;
