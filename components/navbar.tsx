"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-4 transition-all duration-300 ease-out ${
      isScrolled 
        ? 'backdrop-transparent bg-transparent/10' 
        : ''
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link 
          href="/" 
          className="flex items-center gap-2 text-white text-xl sm:text-2xl font-bold hover:scale-105 transition-transform duration-300"
        >
          <Image src="/images/nxtpostlogo.png" alt="NxtPost Logo" width={150} height={40} />
        </Link>

        {/* Get Started Button */}
        <button className="relative overflow-hidden shadow-blue-300/40 shadow-2xl backdrop-blur-sm bg-transparent text-white px-5 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-gradient-to-r hover:-translate-y-1 transition-all duration-300 hover:shadow-xl hover:shadow-teal-100/40 group z-50">
          <span className="relative z-10">Sign in</span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;