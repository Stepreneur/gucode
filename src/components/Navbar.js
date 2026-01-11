"use client"
import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { trackLinkClick, trackButtonClick } from '@/utils/gtag';
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
            <Link href="/#hero" onClick={() => trackLinkClick('หน้าหลัก', '/#hero', 'navbar')} className="text-white hover:text-gray-300 transition-colors duration-200">หน้าหลัก</Link>
            <Link href="https://forms.gle/Dn4WyhXjkTwkqaPy5" onClick={() => trackLinkClick('GuWeb101', 'https://forms.gle/Dn4WyhXjkTwkqaPy5', 'navbar')} className="text-white hover:text-gray-300 transition-colors duration-200">GuWeb101</Link>


            <div className="relative group">
              <div className="hidden absolute left-0 top-full mt-2 w-48 bg-white rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transform -translate-y-2 transition-all duration-200 z-50">
                <a href="#web" onClick={() => trackLinkClick('Web Development', '#web', 'navbar-dropdown')} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Web Development</a>
                <a href="#mobile" onClick={() => trackLinkClick('Mobile App', '#mobile', 'navbar-dropdown')} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Mobile App</a>
                <a href="#design" onClick={() => trackLinkClick('UI/UX Design', '#design', 'navbar-dropdown')} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">UI/UX Design</a>
              </div>
            </div>

            <Link href="https://lin.ee/zzks4rF" onClick={() => trackLinkClick('ทำงานกับเรา', 'https://lin.ee/zzks4rF', 'navbar')} className="text-white hover:text-gray-300 transition-colors duration-200">ทำงานกับเรา</Link>
            <Link href="https://lin.ee/zzks4rF" onClick={() => trackLinkClick('จ้างทำเว็บ', 'https://lin.ee/zzks4rF', 'navbar')} className="text-white hover:text-gray-300 transition-colors duration-200">จ้างทำเว็บ</Link>
          </div>

          {/* Right section: Mobile menu button + Login */}
          <div className="flex items-center space-x-4">
            {/* Mobile Menu Button */}
            <button 
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
                trackButtonClick('Mobile Menu Toggle', 'navbar', '');
              }} 
              className="md:hidden text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Login Button */}
            <Link
              href="/login"
              onClick={() => trackLinkClick('Login', '/login', 'navbar')}
              className="text-white border hidden border-white px-4 py-1 rounded-full text-sm hover:bg-white hover:text-black transition-colors duration-200"
            >
              Login
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 border-t border-gray-800">
            <a 
              href="#home" 
              className="block px-4 py-3 hover:bg-gray-900 text-white" 
              onClick={() => {
                setIsMenuOpen(false);
                trackLinkClick('หน้าหลัก', '#home', 'mobile-menu');
              }}
            >
              หน้าหลัก
            </a>
            <a 
              href="https://forms.gle/Dn4WyhXjkTwkqaPy5" 
              className="block px-4 py-3 hover:bg-gray-900 text-white" 
              onClick={() => {
                setIsMenuOpen(false);
                trackLinkClick('คอร์ส', 'https://forms.gle/Dn4WyhXjkTwkqaPy5', 'mobile-menu');
              }}
            >
              คอร์ส
            </a>
            <a 
              href="https://lin.ee/zzks4rF" 
              className="block px-4 py-3 hover:bg-gray-900 text-white" 
              onClick={() => {
                setIsMenuOpen(false);
                trackLinkClick('ทำงานกับเรา', 'https://lin.ee/zzks4rF', 'mobile-menu');
              }}
            >
              ทำงานกับเรา
            </a>
            <a 
              href="https://lin.ee/zzks4rF" 
              className="block px-4 py-3 hover:bg-gray-900 text-white" 
              onClick={() => {
                setIsMenuOpen(false);
                trackLinkClick('จ้างทำเว็บ', 'https://lin.ee/zzks4rF', 'mobile-menu');
              }}
            >
              จ้างทำเว็บ
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
