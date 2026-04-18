"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, HardHat } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/#services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-[100] top-0 transition-all duration-500 ${
        scrolled || !isHome || isOpen
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-0" 
          : "bg-transparent py-4 text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-2">
            <HardHat className={`h-8 w-8 transition-colors ${scrolled || !isHome || isOpen ? "text-accent" : "text-white"}`} />
            <span className={`font-bold text-2xl tracking-tighter transition-colors ${scrolled || !isHome || isOpen ? "text-primary" : "text-white"}`}>
              RK<span className="text-accent underline decoration-accent/30 underline-offset-4">Projects</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`text-sm font-bold tracking-wide transition-colors duration-200 uppercase ${
                  scrolled || !isHome || isOpen
                    ? (pathname === link.path ? 'text-accent' : 'text-dark-gray hover:text-accent')
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className={`px-6 py-2.5 rounded text-sm font-bold transition-all duration-300 ${
                scrolled || !isHome || isOpen
                  ? "bg-accent hover:bg-accent-hover text-white shadow-lg shadow-accent/20"
                  : "bg-white text-primary hover:bg-accent hover:text-white"
              }`}
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`transition focus:outline-none ${scrolled || !isHome || isOpen ? "text-dark-gray" : "text-white"}`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block text-lg font-medium py-2 ${
                    pathname === link.path ? 'text-accent' : 'text-dark-gray'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="bg-accent text-white text-center py-3 rounded font-bold mt-4"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
