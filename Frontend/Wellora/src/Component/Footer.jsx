import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import { MdOutlineHealthAndSafety } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-700 py-12 px-6 md:px-20 border-t border-gray-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Logo & About */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Wellora</h2>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            It’s time to find freedom from pain so you can start living again.
          </p>
          <div className="flex space-x-4 text-xl text-blue-600">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Company</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#" className="hover:text-blue-600">Home</a></li>
            <li><a href="#" className="hover:text-blue-600">About Us</a></li>
            <li><a href="#" className="hover:text-blue-600">Doctors</a></li>
            <li><a href="#" className="hover:text-blue-600">Contact Us</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Services</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#" className="hover:text-blue-600">Appointment Booking</a></li>
            <li><a href="#" className="hover:text-blue-600">Report Summarization</a></li>
            <li><a href="#" className="hover:text-blue-600">AI Medical Assistant </a></li>
          </ul>
        </div>

        {/* Information */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Information</h3>
          <p className="text-sm text-gray-600">
            4517 Washington Ave.<br />
            Manchester, Kentucky 39495
          </p>
          <p className="text-sm mt-2 text-gray-600">(303) 555-01017</p>
          <p className="text-sm text-gray-600">care@gmail.com</p>
        </div>
      </div>

      {/* Bottom border */}
      <div className="text-center text-xs text-gray-500 mt-10 border-t pt-6">
        © {new Date().getFullYear()} wellora. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;