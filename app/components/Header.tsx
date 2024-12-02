import Link from "next/link";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import Image from "next/image";
const Header = () => {
  return (
    <div className="flex justify-between items-center bg-black p-4 mx-5 my-3">
      {/* Left Section: Logo and Navigation Links */}
      <div className="flex space-x-8 items-center text-white gap-28">
        {/* Logo */}
        <div className="text-white text-lg font-bold">
          <Image
            src="/logo.png" // Replace with the path to your logo image
            alt="Logo"
            width={200} // Adjust the width as needed
            height={100} // Adjust the height as needed
            className="object-contain"
          />
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-8">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <Link href="/about" className="hover:text-primary">
            About
          </Link>
          <Link href="/services" className="hover:text-primary">
            Services
          </Link>
          <Link href="/blog" className="hover:text-primary">
            Blog
          </Link>
        </div>
      </div>

      {/* Right Section: Avatar and Contact Button */}
      <div className="flex items-center space-x-4">
        {/* Contact Button */}
        <button className="bg-primary text-white px-6 py-3 rounded-md  flex items-center space-x-2">
          <FaPhoneAlt /> {/* React Phone Icon */}
          <span>Contact</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
