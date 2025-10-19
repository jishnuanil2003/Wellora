import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import {Link} from "react-router"
const Login = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen w-full">
      {/* Left Section */}
       <div className="w-full md:w-1/2 bg-gradient-to-br text-blue-600 bg-gray-200 flex flex-col justify-center items-center p-10 ">
        <h1 className="text-3xl md:text-4xl font-semibold mb-3 text-center">
          Keep your health in your pocket!
        </h1>
        <p className="text-lg text-blue-600 mb-8 text-center">
          Discover Wellora.
        </p>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex justify-center items-center bg-white">
        <div className="w-[90%] max-w-md">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Log in to your account
          </h2>

          {/* Social Login */}
          <button className="flex items-center justify-center gap-2 w-full border text-black border-gray-300 rounded-lg py-3 mb-3 hover:bg-gray-50">
            <FcGoogle className="text-xl" /> Continue with Google
          </button>
          <button className="flex items-center justify-center gap-2 w-full border text-black border-gray-300 rounded-lg py-3 mb-4 hover:bg-gray-50">
            <FaFacebookF className="text-blue-600 text-lg" /> Continue with Facebook
          </button>

          <div className="flex items-center my-4">
            <hr className="flex-1 border-gray-300" />
            <span className="px-3 text-gray-500 text-sm">Or</span>
            <hr className="flex-1 border-gray-300" />
          </div>

          {/* Email & Password */}
          <form>
            <label className="block text-gray-700 mb-2 text-sm">E-mail address</label>
            <input
              type="email"
              placeholder="example@mail.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <label className="block text-gray-700 mb-2 text-sm">Password</label>
            <div className="relative">
              <input
                type="password"
                placeholder="Type your password here"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <a
                href="#"
                className="text-sm text-blue-500 hover:underline float-right block mb-4"
              >
                I forgot my password
              </a>
            </div>
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium mb-3">
              Log in
            </button>
          </form>

          <p className="text-center text-sm text-gray-600">
            Don’t have an account yet?{" "}
            <Link to='/register' className="text-blue-600 font-medium hover:underline">
              Register for free
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;