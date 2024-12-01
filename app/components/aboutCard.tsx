"use client";
import React, { useRef, useState } from "react";

const AboutUsCard: React.FC = () => {
  const [isMuted, setIsMuted] = useState(true); // State to control mute/unmute
  const videoRef = useRef<HTMLVideoElement>(null); // Reference to the video element

  // Function to toggle mute/unmute
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted; // Toggle mute state on the video
      setIsMuted(!isMuted); // Update state
    }
  };

  return (
    <div className="flex flex-wrap mx-10 h-80 lg:flex-nowrap max-w-full bg-white  shadow-lg overflow-hidden mb-10 mt-20">
      {/* Left Section */}
      <div className="w-full lg:w-4/12 bg-secondary p-6 flex flex-col justify-center">
        <h2 className="text-3xl font-bold mb-10 pt-10">
          About Us<span className="text-primary">.</span>
        </h2>
        <p className="mt-5 pb-10" style={{ fontSize: "16px" }}>
          Trusted by innovators across the globe to deliver excellence.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit laborum — semper quis lectus nulla. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit laborum — semper quis lectus nulla.
        </p>
      </div>

      {/* Right Section */}
      <div className="relative w-full lg:w-9/12">
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
          className="absolute top-4 right-4 bg-white text-black p-2 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300"
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
