"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, HardHat, Phone, MapPin, ChevronDown } from 'lucide-react';
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
    <>
      {/* Top Bar - Hidden on scroll or mobile */}
      <div 
        className={`fixed w-full z-[101] top-0 transition-transform duration-500 hidden md:flex bg-primary border-b border-white/10 ${
          scrolled || !isHome ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 w-full h-10 flex justify-between items-center text-[11px] font-bold tracking-widest text-gray-300 uppercase">
          <div className="flex gap-6">
            <span className="flex items-center gap-2"><Phone size={12} className="text-accent"/> +91 98765 43210</span>
            <span className="flex items-center gap-2 text-white/60"><MapPin size={12} className="text-accent"/> 123 Industrial Area, State 12345</span>
          </div>
          <div className="flex gap-6">
            <span className="hover:text-accent cursor-pointer transition-colors">Safety First</span>
            <span className="hover:text-accent cursor-pointer transition-colors">Quality Assured</span>
          </div>
        </div>
      </div>

      <nav 
        className={`fixed w-full z-[100] transition-all duration-500 ${
          scrolled || !isHome || isOpen
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-0 top-0" 
            : "bg-transparent py-4 text-white md:top-10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center space-x-2">
              <HardHat className={`h-8 w-8 transition-colors ${scrolled || !isHome || isOpen ? "text-accent" : "text-white"}`} />
              <div className="flex flex-col -space-y-1">
                <span className={`font-black text-2xl tracking-tighter transition-colors ${scrolled || !isHome || isOpen ? "text-primary" : "text-white"}`}>
                  RK<span className="text-accent italic underline decoration-accent/30 underline-offset-4">PROJECTS</span>
                </span>
                <span className={`text-[9px] font-bold tracking-[0.2em] transition-colors ${scrolled || !isHome || isOpen ? "text-gray-400" : "text-white/60"}`}>
                  CIVIL & INFRASTRUCTURE
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`text-xs font-bold tracking-widest transition-colors duration-200 uppercase ${
                    scrolled || !isHome || isOpen
                      ? (pathname === link.path ? 'text-accent' : 'text-dark-gray hover:text-accent')
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              
              <div className="relative group">
                <button className={`text-xs font-bold tracking-widest uppercase flex items-center gap-1 ${
                  scrolled || !isHome || isOpen ? "text-dark-gray hover:text-accent" : "text-white/90 hover:text-white"
                }`}>
                  Machinery <ChevronDown size={14} className="group-hover:rotate-180 transition-transform"/>
                </button>
                <div className="absolute top-full right-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="bg-white shadow-2xl rounded-xl border border-gray-100 p-4 w-56 grid gap-2">
                    {['Thresher', 'Shredder', 'Chaff Cutter', 'Rotavator'].map((m) => (
                      <Link 
                        key={m} 
                        href={`/services/${m.toLowerCase().replace(' ', '-')}`}
                        className="text-[11px] font-bold text-gray-600 hover:text-accent p-2 hover:bg-gray-50 rounded transition-all"
                      >
                        {m}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                href="/contact"
                className={`px-8 py-3 rounded text-[11px] font-black tracking-widest uppercase transition-all duration-300 ${
                  scrolled || !isHome || isOpen
                    ? "bg-accent hover:bg-accent-hover text-white shadow-lg shadow-accent/20"
                    : "bg-white text-primary hover:bg-accent hover:text-white"
                }`}
              >
                Inquiry
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
              <div className="px-6 pt-4 pb-10 flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block text-lg font-bold uppercase transition-colors ${
                      pathname === link.path ? 'text-accent' : 'text-primary'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-[10px] font-bold text-gray-400 mb-4 tracking-widest uppercase">Our Machinery</p>
                  <div className="grid grid-cols-2 gap-4">
                    {['Thresher', 'Shredder', 'Chaff Cutter', 'Rotavator'].map((m) => (
                      <Link 
                        key={m} 
                        href={`/services/${m.toLowerCase().replace(' ', '-')}`}
                        onClick={() => setIsOpen(false)}
                        className="text-sm font-bold text-gray-700 hover:text-accent"
                      >
                        {m}
                      </Link>
                    ))}
                  </div>
                </div>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="bg-accent text-white text-center py-4 rounded font-black tracking-widest uppercase mt-6"
                >
                  Send Inquiry
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
