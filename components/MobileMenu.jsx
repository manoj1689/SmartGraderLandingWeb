import React from "react";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { FaUser, FaSignInAlt } from 'react-icons/fa'; 
import { useNavigate } from "react-router-dom";
const MobileMenu = () => {
  const navigate = useNavigate();
  return (
    <nav className="lg:hidden bg-white shadow-md absolute w-full top-full left-0">
      <ul className="flex flex-col items-center py-4 space-y-4">
        <li>
          <span onClick={()=>navigate("/")} >
            <span className="text-gray-900 hover:text-blue-700 font-spline transition duration-300">Home</span>
          </span>
        </li>
        <li>
          <Link href="https://chatgpt.com/g/g-QcBTxz9bF-smartgrader-assistant">
            <span className="text-gray-900 hover:text-blue-700 font-spline transition duration-300">Chat with our docs</span>
          </Link>
        </li>
      
        <li>
          <Link href="https://discord.com/invite/mQeEsStC">
            <span className="text-gray-900 hover:text-blue-700 transition font-spline duration-300">Joim our Discord</span>
          </Link>
        </li>
          <li>
        
            <span className="text-gray-900 hover:text-blue-700 transition font-spline duration-300"> Get Demo</span>

        </li>
        <li>
          <span onClick={()=>navigate("blog")} >
            <span className="text-gray-900 flex gap-2 items-center hover:text-blue-700 transition duration-300">
            <span>Blog</span> <span><MdArrowOutward  size={20}/></span>
            </span>
          </span>
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
