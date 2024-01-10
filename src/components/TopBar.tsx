import React, { useState, useEffect } from 'react';

import homePageLogo from "../assets/homepageLogo.png"

// components
import { Reveal } from "../components";
// framer-motion
import { motion } from "framer-motion";


const TopBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
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
          <a href="/" className="flex items-center group">

            <motion.img
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              src={homePageLogo}
              alt=""
              className="max-h-12 max-w-12 rounded-full transition-transform duration-300 transform group-hover:scale-110"
            />
          </a>
        </Reveal>


  
          <div className="hidden md:flex space-x-4">
            <a href="/computer_science" className="text-white hover:text-gray-300">
              Computer Science
            </a>
            <a href="/geography" className="text-white hover:text-gray-300">
              Geography
            </a>
            <a href="/arts" className="text-white hover:text-gray-300">
              Arts
            </a>
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
          <a href="/computer_science" className="block text-white py-2 hover:text-gray-300">
            Computer Science
          </a>
          <a href="/geography" className="block text-white py-2 hover:text-gray-300">
            Geography
          </a>
          <a href="/arts" className="block text-white py-2 hover:text-gray-300">
            Arts
          </a>
        </div>
      )}
    </div>
  );
  
};

export default TopBar;

