import React from "react";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { FaUser, FaSignInAlt } from 'react-icons/fa'; 

const MobileMenu = () => {
  return (
    <nav className="lg:hidden bg-white shadow-md absolute w-full top-full left-0">
      <ul className="flex flex-col items-center py-4 space-y-4">
        <li>
          <Link href="#home">
            <span className="text-gray-900 hover:text-blue-700 font-spline transition duration-300">Home</span>
          </Link>
        </li>
        <li>
          <Link href="#how-it-works">
            <span className="text-gray-900 hover:text-blue-700 font-spline transition duration-300">How It Works</span>
          </Link>
        </li>
        <li>
          <Link href="#pricing">
            <span className="text-gray-900 hover:text-blue-700 transition font-spline duration-300">Pricing</span>
          </Link>
        </li>
        <li>
          <Link href="#partners">
            <span className="text-gray-900 hover:text-blue-700 transition font-spline duration-300">Partners</span>
          </Link>
        </li>
        <li>
          <Link href="/evaluate">
            <span className="text-gray-900 flex items-center hover:text-blue-700 transition duration-300">
              Interview <span className="px-2"><MdArrowOutward /></span>
            </span>
          </Link>
        </li>

        {/* <li>
          <span onClick={()=>window.location.href = 'http://localhost:5173/signIn'}>
            <span className="text-gray-900 hover:text-blue-700 font-spline transition duration-300 flex items-center">
              <FaSignInAlt className="mr-2" /> Login
            </span>
          </span>
        </li>
        <li>
          <span onClick={()=>window.location.href = 'http://localhost:5173/createAccount'}>
            <span className="bg-blue-700 text-white px-4 py-2 font-spline rounded-md hover:bg-blue-800 transition duration-300 flex items-center">
              <FaUser className="mr-2" /> Signup
            </span>
          </span>
        </li> */}
      </ul>
      <div className=' flex flex-col w-full justify-center items-center' >
  <button
  className="bg-white border border-sky-500 max-sm:w-11/12 sm:w-7/12 my-3  text-sky-500 hover:bg-sky-500 hover:text-white font-medium font-spline py-2 px-4 rounded-[1px] transition duration-300 ease-in-out"
  onClick={()=>window.location.href = 'http://smart-grader-app-ts.vercel.app/signIn'}
>
  <span className="text-sky-500">Sign In</span>
</button>

<button
  className="bg-sky-500 text-white font-medium font-spline py-2 px-4 max-sm:w-11/12 sm:w-7/12 my-3 rounded-[1px] transition duration-300 ease-in-out  "
  onClick={()=>window.location.href = 'http://smart-grader-app-ts.vercel.app/createAccount'}
>
  <span>Sign Up</span>
</button>



  </div>
    </nav>
    
  );
};

export default MobileMenu;
