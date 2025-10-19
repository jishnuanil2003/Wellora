import React from "react";
import doctorImg from '../asset/doctorImg.png'

const HeroSection = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-10 md:px-20 bg-[#f8fbff]">
      {/* Left Content */}
      <div className="flex-1 space-y-6">
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
          <span className="text-blue-600 font-bold">Expert Care.</span> Genuine
          Compassion. Always for You.
        </h1>

        <p className="text-gray-600 max-w-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
        </p>

        <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition">
          Book Appointment
        </button>

        {/* Stats Section */}
        <div className="flex flex-wrap gap-6 md:gap-16 mt-8">
          <div>
            <p className="text-gray-600 text-lg">Patient satisfaction</p>
            <h2 className="text-blue-600 font-semibold text-4xl">90%</h2>
          </div>
          <div>
            <p className="text-gray-600 text-lg">Patient on platform</p>
            <h2 className="text-blue-600 font-semibold text-4xl">100K+</h2>
          </div>
          <div>
            <p className="text-gray-600 text-lg">Hospital cooperate</p>
            <h2 className="text-blue-600 font-semibold text-4xl">1.5K+</h2>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="relative flex-1 flex justify-center mb-10 md:mb-0">
        <div className="absolute w-[320px] h-[320px] bg-blue-100 rounded-full blur-3xl opacity-40 top-10"></div>
        <img
          src={doctorImg}
          alt="Doctor"
          className="relative w-[320px] md:w-[420px] lg:w-[480px] object-contain"
        />
      </div>
    </section>
  );
};

export default HeroSection;