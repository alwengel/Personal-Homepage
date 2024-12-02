import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

import homePageLogo from "../assets/homepageLogo.png"
import { Reveal } from "../components";
import { motion } from "framer-motion";

const TopBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Add any scroll-related logic here
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      <nav className="bg-gray-700 p-1 fixed top-0 left-0 right-0 z-10 bg-opacity-50 backdrop-filter backdrop-blur">
        <div className="container mx-auto flex justify-between items-center">
          <Reveal>
          <Link to="/" className="flex items-center group">
            <motion.img
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              src={homePageLogo}
              alt=""
              className="max-h-12 max-w-12 rounded-md transition-transform duration-300 transform group-hover:scale-110"
            />
          </Link>

          </Reveal>

          <div className="hidden md:flex space-x-4">
            <Link to="/computer_science" className="text-white hover:text-gray-300">
              Computer Science
            </Link>
            <Link to="/geography" className="text-white hover:text-gray-300">
              Geography
            </Link>
            <Link to="/arts" className="text-white hover:text-gray-300">
              Arts
            </Link>
          </div>

          <div className="md:hidden">
            <button
              className={`text-white ${isOpen ? 'bg-gray-600' : ''} focus:outline-none`}
              onClick={toggleMenu}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden fixed top-16 left-0 right-0 bg-gray-600 p-4 z-20 bg-opacity-70 backdrop backdrop-blur">
          <Link to="/computer_science" className="block text-white py-2 hover:text-gray-300">
            Computer Science
          </Link>
          <Link to="/geography" className="block text-white py-2 hover:text-gray-300">
            Geography
          </Link>
          <Link to="/arts" className="block text-white py-2 hover:text-gray-300">
            Arts
          </Link>
        </div>
      )}
    </div>
  );
};

export default TopBar;
