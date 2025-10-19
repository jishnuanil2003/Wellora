import React from "react";
import {Link} from 'react-router'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-10 py-4 bg-white shadow-sm">
      {/* Logo Section */}
      <div className="flex items-center gap-2">
        <h1 className="text-2xl font-semibold text-gray-800">Wellora</h1>
      </div>

      {/* Navigation Links */}
      <ul className="flex gap-8 text-gray-700 font-medium">
        <li className="relative hover:text-blue-600 cursor-pointer after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-blue-600 after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-300">Home</li>
        <li className="relative hover:text-blue-600 cursor-pointer after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-blue-600 after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-300">About Us</li>
        <li className="relative hover:text-blue-600 cursor-pointer after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-blue-600 after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-300">Services</li>
        <li className="relative hover:text-blue-600 cursor-pointer after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-blue-600 after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-300">Doctors</li>
        <li className="relative hover:text-blue-600 cursor-pointer after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-blue-600 after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-300">Contact Us</li>
      </ul>

      {/* Contact Section */}
      <div className="flex items-center gap-4 rounded-lg">
        <span className="font-medium text-gray-800 bg-blue-100 px-8 py-2 rounded-lg cursor-pointer"><Link to='/login'>Login</Link></span>
        <span className="font-medium text-blue-500 cursor-pointer"><Link to='/register'>Register</Link></span>
      </div>
    </nav>
  );
};

export default Navbar;