import React from "react";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Isabella López",
    username: "puckish_glitter_44",
    image: "https://i.pravatar.cc/100?img=47",
    rating: 4,
  },
  {
    name: "Nicolás Vásquez",
    username: "turbulent_inker_79",
    image: "https://i.pravatar.cc/100?img=12",
    rating: 5,
  },
  {
    name: "Mohammed Ahmad",
    username: "execrable_captain_24",
    image: "https://i.pravatar.cc/100?img=33",
    rating: 4,
  },
  {
    name: "Zyaire Mambwe",
    username: "ruminative_unicorn_46",
    image: "https://i.pravatar.cc/100?img=21",
    rating: 4,
  },
  {
    name: "Valeria Castro",
    username: "animistic_artisan_2",
    image: "https://i.pravatar.cc/100?img=28",
    rating: 5,
  },
  {
    name: "Gabriela Álvarez",
    username: "luminous_artisan_39",
    image: "https://i.pravatar.cc/100?img=8",
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-[#f9fcff] py-20 px-5 md:px-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
        Testimonials
      </h2>
        <h2 className="text-md md:text-md font-semibold mt-4 text-blue-600">
          Our trusted clients
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-white shadow-sm rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all"
          >
            {/* Rating Stars */}
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={`${
                    i < t.rating ? "text-blue-600" : "text-gray-300"
                  } text-lg`}
                />
              ))}
            </div>

            {/* Review Text */}
            <p className="text-gray-700 mb-6 text-sm leading-relaxed">
              "Lorem ipsum dolor sit amet consectetur nullam consectetur turpis consectetur mattis fames sit eu tempus molestie.
              In purus cursus <strong>Improved</strong> varius velit sit aenean et et laoreet tortor scelerisque tortor pharetra velit sed in sed sed ultricies."
            </p>

            {/* Profile */}
            <div className="flex items-center gap-3">
              <img
                src={t.image}
                alt={t.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-gray-900 text-sm">
                  {t.name}
                </h4>
                <p className="text-gray-500 text-xs">@{t.username}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;