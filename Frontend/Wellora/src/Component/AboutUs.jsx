import React from "react";
import { FaUserMd, FaHospital, FaBed, FaMicroscope } from "react-icons/fa";
import vectorImg from "../asset/aboutus.png"; // Replace with your image path

const AboutUs = () => {
  const features = [
    {
      icon: <FaUserMd className="text-blue-600 text-3xl" />,
      title: "Experted Doctors",
      description:
        "Our team of physicians treats patients of all ages, from infants to seniors.",
    },
    {
      icon: <FaHospital className="text-blue-600 text-3xl" />,
      title: "Healthy Environment",
      description:
        "We have experienced nursing team and good beds for healthy environment.",
    },
    {
      icon: <FaBed className="text-blue-600 text-3xl" />,
      title: "Personalized Patient Care",
      description:
        "We prioritize personalized care for every patient.",
    },
    {
      icon: <FaMicroscope className="text-blue-600 text-3xl" />,
      title: "Advance Medical Care",
      description:
        "Our hospital is built with modern medical technology.",
    },
  ];

  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-16 bg-white">
      {/* Left content */}
      <div className="flex-1 space-y-6">
        <h2 className="text-4xl font-bold text-gray-900">About Us</h2>
        <p className="text-gray-600 max-w-md">
          Your life is our speciality. Our team of experienced physicians offers
          a comprehensive range of healthcare services.
        </p>

        <div className="space-y-6 my-10">
          {features.map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              {item.icon}
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right image */}
      <div className="flex-1 flex justify-center mt-10 md:mt-0">
        <img
          src={vectorImg}
          alt="Doctors"
          className="w-[400px] md:w-[500px] rounded-xl object-cover"
        />
      </div>
    </section>
  );
};

export default AboutUs;