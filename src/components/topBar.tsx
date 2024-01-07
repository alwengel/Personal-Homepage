import React, { useState, useEffect } from 'react';

const TopBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`bg-gray-800 p-4 ${isScrolled ? 'fixed top-0 left-0 right-0 z-10' : ''}`}>
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-white font-bold text-lg">Your Logo</a>

        <div className="hidden md:flex space-x-4">
          <a href="/" className="text-white hover:text-gray-300">
            Home
          </a>
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

        {isOpen && (
          <div className="md:hidden fixed top-16 left-0 right-0 bg-gray-800 p-4 z-20">
            <a href="/" className="block text-white py-2 hover:text-gray-300">
              Home
            </a>
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
    </nav>
  );
};

export default TopBar;

