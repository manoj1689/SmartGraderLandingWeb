import React, { useState } from "react";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { FaUser, FaSignInAlt } from "react-icons/fa"; // Importing icons from react-icons
import { MdArrowOutward } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Demo from "../components/Demo"

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [demo,setDemo]=useState(false)
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleClose = () => {
    setDemo(false);
    // Optionally, you can navigate back to the homepage or another page
  };
  return (
    <>
      <Demo open={demo} onClose={handleClose}/>
      <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className=" bg-[#01AFF4] ">
        {" "}
        <div className="flex flex-col md:flex-row container mx-auto py-1 font-semibold font-spline text-sm  text-white justify-between items-center ">
          <span> Welcome to smart Grader!</span>
          <span className="flex gap-3">
            <span>info@smartgrader.in</span>
            <span>+91-8287046917</span>
          </span>
        </div>
      </div>
      <div className="container mx-auto px-4 flex flex-row  justify-between items-center py-2 sm:py-4">
        <div className="text-lg font-semibold">
          <span onClick={() => navigate("/")}>
            <img
              src="images/home/smart-logo.png"
              alt="Smart Grader Logo"
              className=" cursor-pointer w-24 sm:w-32 md:w-44"
            />
          </span>
        </div>

        <nav className="hidden lg:flex w-full space-x-4 lg:space-x-6 justify-center items-center ">
          <span onClick={() => navigate("/")}>
            <span className="text-gray-900 hover:text-blue-700 font-spline transition duration-300 cursor-pointer">
              Home
            </span>
          </span>
          <Link
            href="https://chatgpt.com/g/g-QcBTxz9bF-smartgrader-assistant"
            passHref
          >
            <span className="text-gray-900 hover:text-blue-700 font-spline transition duration-300 cursor-pointer">
              Chat with our docs
            </span>
          </Link>
         
          
         
          <Link href="https://discord.com/invite/mQeEsStC" passHref>
            <span className="text-gray-900 hover:text-blue-700 transition font-spline duration-300 cursor-pointer">
              Join our Discord
            </span>
          </Link>
          <span className="text-gray-900 hover:text-blue-700 transition font-spline duration-300 cursor-pointer" onClick={()=>setDemo(true)}>
              Get Demo
            </span>
          
          <div onClick={() => navigate("blog")}>
            <span className="text-gray-900 flex  gap-2 justify-center items-center hover:text-blue-700 transition duration-300 cursor-pointer">
              <span>Blog</span>{" "}
              <span>
                <MdArrowOutward size={20} />
              </span>
            </span>
          </div>
        </nav>

        <div className="hidden lg:flex flex-row basis-1/4 space-x-6 justify-end items-center">
          <div
            onClick={() =>
              (window.location.href =
                "http://smart-grader-app-ts.vercel.app/signIn")
            }
          >
            <span className="text-gray-900 hover:text-blue-700 font-spline transition duration-300 flex items-center cursor-pointer">
              <FaSignInAlt className="mr-2" /> Login
            </span>
          </div>
          <div
            onClick={() =>
              (window.location.href =
                "http://smart-grader-app-ts.vercel.app/createAccount")
            }
          >
            <span className="bg-[#01AFF4] text-white px-4 py-2 font-spline rounded hover:bg-blue-500 transition duration-300 flex items-center cursor-pointer">
              <FaUser className="mr-2" /> Signup
            </span>
          </div>
        </div>

        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-600 focus:outline-none"
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
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && <MobileMenu />}
    </header>
    </>
   
  );
};

export default Navbar;
