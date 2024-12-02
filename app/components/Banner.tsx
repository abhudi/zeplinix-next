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
      <div className="relative z-20 flex flex-col lg:flex-row w-11/12 mx-auto p-4 lg:p-8 text-center lg:text-left">
        {/* Column 1 */}
        <div className="w-full lg:w-1/2 px-2 sm:px-4 mb-4 lg:mb-0">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            About Us
          </h2>
          <p className="text-sm sm:text-base leading-relaxed">
            Trusted by innovators across the globe to deliver excellence.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit laborum — semper quis lectus nulla.
          </p>
        </div>

        {/* Column 2 */}
        <div className="w-full lg:w-1/2 px-2 sm:px-4">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
            Our Mission
          </h3>
          <p className="text-sm sm:text-base leading-relaxed">
            Empower businesses to achieve their goals with innovation and
            precision. We bring expertise, commitment, and results to every
            project we undertake.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
