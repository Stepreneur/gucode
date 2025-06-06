"use client"
import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrollY > 50 ? 'bg-black/90 backdrop-blur-md border-b border-gray-800' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-lg font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Gucode
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-gray-300 transition-colors duration-200">หน้าหลัก</a>

            <div className="relative group">
              <a href="#course" className="flex items-center gap-1 text-white hover:text-gray-300 transition-colors duration-200">
                คอร์ส
                <ChevronDown size={19} />
              </a>
              <div className="absolute left-0 top-full mt-2 w-48 bg-white rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transform -translate-y-2 transition-all duration-200 z-50">
                <a href="#web" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Web Development</a>
                <a href="#mobile" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Mobile App</a>
                <a href="#design" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">UI/UX Design</a>
              </div>
            </div>

            <a href="#about" className="text-white hover:text-gray-300 transition-colors duration-200">ทำงานกับเรา</a>
            <a href="#hire" className="text-white hover:text-gray-300 transition-colors duration-200">จ้างทำเว็บ</a>
          </div>

          {/* Right section: Mobile menu button + Login */}
          <div className="flex items-center space-x-4">
            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Login Button */}
            <a
              href="/login"
              className="text-white border border-white px-4 py-1 rounded-full text-sm hover:bg-white hover:text-black transition-colors duration-200"
            >
              Login
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 border-t border-gray-800">
            <a href="#home" className="block px-4 py-3 hover:bg-gray-900 text-white" onClick={() => setIsMenuOpen(false)}>หน้าหลัก</a>
            <a href="#course" className="block px-4 py-3 hover:bg-gray-900 text-white" onClick={() => setIsMenuOpen(false)}>คอร์ส</a>
            <a href="#about" className="block px-4 py-3 hover:bg-gray-900 text-white" onClick={() => setIsMenuOpen(false)}>ทำงานกับเรา</a>
            <a href="#hire" className="block px-4 py-3 hover:bg-gray-900 text-white" onClick={() => setIsMenuOpen(false)}>จ้างทำเว็บ</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
