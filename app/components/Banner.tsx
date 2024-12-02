"use client";
import React from "react";

const Banner: React.FC = () => {
  return (
    <div className="relative w-full h-[28rem] sm:h-[32rem] lg:h-[37rem] flex items-center justify-center overflow-hidden bg-gray-800 text-white mb-8">
      {/* Video Background using ::before */}
      <div className="absolute inset-0 before:absolute before:inset-0 before:bg-black/40 before:z-10">
        <video className="w-full h-full object-cover" autoPlay loop muted>
          <source src="/earth.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Foreground Content */}
      <div className="relative z-20 flex flex-col w-11/12 mx-auto p-4 lg:p-8 text-center lg:text-left">
        <div className="mb-8">
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Zeplinix where <span className="text-red-500">innovation</span>{" "}
            meets digital transformation
          </h1>
          <p className="text-sm sm:text-base lg:text-lg mt-4 leading-relaxed">
            Transform your business with innovative software solutions designed
            to adapt, scale, and thrive.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-4">
          <button className="px-6 py-3 bg-red-500 text-white font-semibold rounded-full shadow-lg hover:bg-red-600 transition">
            Contact Us →
          </button>
          <button className="px-6 py-3 bg-white text-gray-800 font-semibold rounded-full shadow-lg hover:bg-gray-200 transition">
            Explore More →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
