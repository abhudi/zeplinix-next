"use client";
import React, { useRef, useState } from "react";

const AboutUsCard: React.FC = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row mx-4 sm:mx-8 lg:mx-10 h-auto lg:h-80 max-w-full bg-white shadow-lg overflow-hidden mb-10 mt-10 lg:mt-20">
      {/* Left Section */}
      <div className="w-full lg:w-4/12 bg-secondary p-6 flex flex-col justify-center text-center lg:text-left">
        <h2 className="text-3xl sm:text-4xl font-bold mb-5 lg:mb-10 pt-5 lg:pt-10">
          About Us<span className="text-primary">.</span>
        </h2>
        <p className="mt-3 sm:mt-5 pb-5 lg:pb-10 text-base sm:text-lg">
          Trusted by innovators across the globe to deliver excellence.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit laborum — semper quis lectus nulla.
        </p>
      </div>

      {/* Right Section */}
      <div className="relative w-full lg:w-8/12 h-64 lg:h-auto">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted={isMuted}
        >
          <source src="/about.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Mute/Unmute Button */}
        <button
          onClick={toggleMute}
          className="absolute bottom-4 right-4 bg-white text-black p-2 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 focus:outline-none"
        >
          {isMuted ? (
            <span className="text-xl">🔇</span>
          ) : (
            <span className="text-xl">🔊</span>
          )}
        </button>
      </div>
    </div>
  );
};

export default AboutUsCard;
