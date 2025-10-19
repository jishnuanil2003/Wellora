import React from "react";
import {Link} from "react-router"
import { useState } from "react";
import axios from 'axios'

const Register = () => {
    const [isLoading, setIsLoading] = useState(false)
        const [form, setForm] = useState({
            'name': '',
            'email': '',
            'password': '',
            'confirm_password': ''
        })
    const handleChange = (e)=>{
        setForm({...form,[e.target.name]:e.target.value})
    }    
    const handleSubmit = async(e)=>{
        e.preventDefault()
        setIsLoading(true)
        try {
            console.log(form);
            const response = await axios.post('http://127.0.0.1:8000/api/v1/register/', form)
            console.log(response.data)
            console.log("User registered successfully");
            setForm({
                'name': '',
                'email': '',
                'password': '',
                'confirm_password': ''
            });
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }
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
            Create new account
          </h2>
          {/* Email & Password */}
          <form className="text-gray-500" onSubmit={handleSubmit}>
            <label className="block text-gray-700 mb-2 text-sm">Name</label>
            <input
              type="text"
              placeholder="John Doe"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <label className="block text-gray-700 mb-2 text-sm">E-mail address</label>
            <input
              type="email"
              placeholder="example@mail.com"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <label className="block text-gray-700 mb-2 text-sm">Set Password</label>
              <input
                type="password"
                placeholder="Type your password here"
                name="password"
                value={form.password}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <label className="block text-gray-700 mb-2 text-sm">Confirm Password</label>
              <input
                type="password"
                placeholder="Type your password here"
                name="confirm_password"
                value={form.confirm_password}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            <button className={`w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium mb-3 ${isLoading ?(`cursor-not-allowed`):(` hover:bg-blue-700`)}`}>
              {isLoading ? ('Registering...') : ('Register')}
            </button>
          </form>

          <p className="text-center text-sm text-gray-600">
            Already have an account {" "}
            <Link to='/login' className="text-blue-600 font-medium hover:underline">
              Login to your account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;