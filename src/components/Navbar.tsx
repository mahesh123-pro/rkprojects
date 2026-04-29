"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/#services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Machinery', path: '/machinery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Top Contact Bar */}
      <div className="hidden lg:block w-full bg-primary text-slate-100 py-2 border-b border-slate-800 relative z-[101]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-xs font-medium">
          <div className="flex space-x-6">
            <a href="tel:+919505650901" className="flex items-center hover:text-white transition-colors">
              <Phone size={14} className="mr-2 text-accent" />
              +91 95056 50901
            </a>
            <a href="mailto:rkprojects.lrs@gmail.com" className="flex items-center hover:text-white transition-colors">
              <Mail size={14} className="mr-2 text-accent" />
              rkprojects.lrs@gmail.com
            </a>
          </div>
          <div className="flex space-x-6 items-center">
            <span className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-accent mr-2"></span>
              ISO 9001:2015 Certified
            </span>
            <span className="text-slate-500">|</span>
            <Link href="/contact" className="hover:text-accent transition-colors">Request a Quote</Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav 
        className={`fixed w-full z-[100] transition-all duration-500 ${
          scrolled || !isHome || isOpen
            ? "bg-white/95 backdrop-blur-md shadow-lg py-2 lg:top-8" 
            : "bg-transparent py-4 text-white lg:top-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo */}
            <Link href="/" className="flex items-center group relative z-[110]">
              <div className="relative h-12 w-32 md:h-14 md:w-36 flex items-center justify-center transition-all duration-300 group-hover:scale-105">
                <Image 
                  src="/images/rkprojectslogo.png" 
                  alt="RK Projects Logo" 
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`text-sm font-semibold uppercase tracking-wide transition-colors ${
                    scrolled || !isHome || isOpen
                      ? (pathname === link.path ? 'text-primary' : 'text-gray-600 hover:text-primary')
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              
              {/* Fleet Dropdown */}
              <div className="relative group py-4">
                <Link 
                  href="/machinery"
                  className={`text-sm font-semibold uppercase tracking-wide flex items-center transition-colors ${
                    scrolled || !isHome || isOpen ? "text-gray-600 hover:text-primary" : "text-white/90 hover:text-white"
                  }`}
                >
                  Fleet <ChevronDown size={16} className="ml-1" />
                </Link>
                
                {/* Dropdown Menu */}
                <div className="absolute top-full right-0 w-64 bg-white shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                  <div className="py-2">
                    {[
                      { name: 'Earthmoving Equipment', path: '/machinery#earthmoving' },
                      { name: 'Construction Machinery', path: '/machinery#construction' },
                      { name: 'Terrain Capability', path: '/machinery#terrain' }
                    ].map((item) => (
                      <Link 
                        key={item.path} 
                        href={item.path}
                        className="block px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <Link
                href="/contact"
                className={`ml-4 px-6 py-2.5 rounded text-sm font-bold uppercase tracking-wide transition-all duration-300 ${
                  scrolled || !isHome || isOpen
                    ? "bg-accent text-white hover:bg-accent-hover shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                    : "bg-white text-primary hover:bg-accent hover:text-white"
                }`}
              >
                Get Quote
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden flex items-center relative z-[110]">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded focus:outline-none transition-colors ${
                  scrolled || !isHome || isOpen ? "text-gray-900" : "text-white"
                }`}
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div 
          className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-screen opacity-100 py-4" : "max-h-0 opacity-0 py-0"
          }`}
        >
          <div className="px-6 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className={`block text-lg font-bold uppercase transition-colors ${
                  pathname === link.path ? 'text-primary' : 'text-gray-800'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="pt-4 border-t border-gray-100">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Our Fleet</p>
              <div className="flex flex-col space-y-3 pl-4 border-l-2 border-accent">
                {[
                  { name: 'Earthmoving Equipment', path: '/machinery#earthmoving' },
                  { name: 'Construction Machinery', path: '/machinery#construction' },
                  { name: 'Terrain Capability', path: '/machinery#terrain' }
                ].map((item) => (
                  <Link 
                    key={item.path} 
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                    className="text-base font-semibold text-gray-700 hover:text-primary"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-6 block w-full bg-primary text-white text-center py-4 rounded font-bold uppercase tracking-widest"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
