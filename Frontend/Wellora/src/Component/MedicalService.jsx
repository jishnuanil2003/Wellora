import React from "react";
import assistant from '../asset/assistant.png'
import report from '../asset/report.png'
import stethoscope from '../asset/stethoscope.png'

const MedicalService = () => {
  const services = [
    {
      icon:<img src={stethoscope}/>,
      title: "Apppointment Booking",
      description:
        "Lorem ipsum dolor sit amet consectetur sit dignissim pellentesque egestas.",
    },
    {
      icon:<img src={report}/>,
      title: "Report Summarization",
      description:
        "Lorem ipsum dolor sit amet consectetur sit dignissim pellentesque egestas.",
    },
    {
      icon:<img src={assistant}/>,
      title: "AI Medical Assistant",
      description:
        "Lorem ipsum dolor sit amet consectetur sit dignissim pellentesque egestas.",
    },
  ];

  return (
    <section className="bg-[#f9fcff] py-16 px-10 md:px-20 text-center">
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
        Our Medical Service
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-10">
        Experience next-level healthcare tailored to your unique needs. We’re here to raise
        the bar — for your body, mind, and peace of mind.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition duration-300 flex flex-col items-center"
          >
            <div className="flex justify-center mb-4 w-16">{service.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm mb-4">{service.description}</p>
            <button className="text-black font-medium hover:text-blue-600 flex items-center justify-center gap-1">
              Learn more <span className="text-base border rounded-full p-1">→</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MedicalService;