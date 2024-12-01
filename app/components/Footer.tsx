import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  const aboutUsData = [
    { text: "Mission & Vision", link: "/about-us" },
    { text: "Our Team", link: "/team" },
    { text: "Careers", link: "/careers" },
    { text: "Press & Media", link: "/careers" },
    { text: "Advertising", link: "/careers" },
    { text: "Testimonials", link: "/careers" },
  ];

  const discoverData = [
    { text: "Our Blog", link: "/blog" },
    { text: "Plans & Pricing", link: "/products" },
    { text: "Knowledge Base", link: "/services" },
    { text: "Cookie Policy", link: "/services" },
    { text: "Office Center", link: "/services" },
    { text: "News & Events", link: "/services" },
  ];

  const usefulLinksData = [
    { text: "FAQ", link: "/faq" },
    { text: "Editor Help", link: "/privacy-policy" },
    { text: "Community", link: "/terms-of-service" },
    { text: "Live Chatting", link: "/terms-of-service" },
    { text: "Contact Us", link: "/terms-of-service" },
    { text: "Support Center", link: "/terms-of-service" },
  ];

  const additionalData = [
    { text: "Request an Offer", link: "/site-map" },
    { text: "How It Works", link: "/help-center" },
    { text: "Pricing", link: "/contact-support" },
    { text: "Reviews", link: "/contact-support" },
    { text: "Stories", link: "/contact-support" },
  ];

  return (
    <div>
      <div
        className="footer-structure "
        style={{
          background: "linear-gradient(180deg, #E63946 0%, #9F0914 100%)",
        }}
      >
        <div className="footer-upper-section flex justify-between p-20 items-center border-b-2 border-white">
          <h1 className="text-[40px] text-white font-bold">Zeplinix</h1>
          <div className="footer-right-section flex gap-6 items-center text-white">
            <h6>Ready To Get Started?</h6>
            <button className="bg-black text-white p-3 rounded-md">
              Create an Account
            </button>
          </div>
        </div>

        {/* Additional content can go here */}
        <div className="footer-lower-section px-20 py-10 text-white border-b-2 border-white">
          {/* Content below the upper section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Contact Column */}
            <div>
              <h6 className="font-bold text-xl mb-3">Contact</h6>
              <ul>
                <li className="mb-3">
                  4517 Washington Ave. Manchester, Kentucky 39495
                </li>
                <li className="mb-3">(239) 555-0108</li>
                <li className="mb-3">contact@agon.com</li>
              </ul>
            </div>

            {/* About Us Column */}
            <div>
              <h6 className="font-bold text-xl mb-3">About Us</h6>
              <ul>
                {aboutUsData.map((item, index) => (
                  <li key={index} className="mb-3">
                    <a href={item.link} className="text-white hover:underline">
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Discover Column */}
            <div>
              <h6 className="font-bold text-xl mb-3">Discover</h6>
              <ul>
                {discoverData.map((item, index) => (
                  <li key={index} className="mb-3">
                    <a href={item.link} className="text-white hover:underline">
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Useful Links Column */}
            <div>
              <h6 className="font-bold text-xl mb-3">Support</h6>
              <ul>
                {usefulLinksData.map((item, index) => (
                  <li key={index} className="mb-3">
                    <a href={item.link} className="text-white hover:underline">
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Additional Column */}
            <div>
              <h6 className="font-bold text-xl mb-3">Useful Links</h6>
              <ul>
                {additionalData.map((item, index) => (
                  <li key={index} className="mb-3">
                    <a href={item.link} className="text-white hover:underline">
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* Additional content can go here */}
        <div className="footer-lower-section px-20 py-10 text-white border-b-2 border-white">
          <div className="flex justify-between">
            <div className="flex gap-8">
              <h1>© Zeplinix Technologies Pvt Ltd</h1>
              <a href="#" className="text-white hover:underline">
                Privacy Policy
              </a>
              <a href="#" className="text-white hover:underline">
                Cookies
              </a>
              <a href="#" className="text-white hover:underline">
                Terms of Service
              </a>
            </div>
            <div className=" flex gap-6">
              <FaFacebook size={20} />
              <FaInstagram size={20} />
              <FaTwitter size={20} />
              <FaLinkedin size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
