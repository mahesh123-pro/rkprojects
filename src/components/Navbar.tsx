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
      <div className="hidden lg:block w-full bg-dark-black text-slate-100 py-2 border-b border-white/5 relative z-[101]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-xs font-semibold tracking-wide">
          <div className="flex space-x-8">
            <a href="tel:+919505650901" className="flex items-center hover:text-accent transition-colors group">
              <Phone size={14} className="mr-2 text-accent group-hover:scale-110 transition-transform" />
              +91 95056 50901
            </a>
            <a href="mailto:rkprojects.lrs@gmail.com" className="flex items-center hover:text-accent transition-colors group">
              <Mail size={14} className="mr-2 text-accent group-hover:scale-110 transition-transform" />
              rkprojects.lrs@gmail.com
            </a>
          </div>
          <div className="flex space-x-6 items-center">
            <span className="flex items-center bg-primary/20 px-3 py-1 rounded-full border border-primary/30">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mr-2 animate-pulse"></span>
              ISO 9001:2015 Certified
            </span>
            <span className="text-slate-700">|</span>
            <Link href="/contact" className="hover:text-accent transition-colors underline decoration-accent/30 underline-offset-4">Request a Quote</Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav 
        className={`fixed w-full z-[100] transition-all duration-700 ease-in-out ${
          scrolled || !isHome || isOpen
            ? "bg-white/90 backdrop-blur-xl shadow-2xl py-3 lg:top-10" 
            : "bg-transparent py-5 text-white lg:top-10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo & Brand Name */}
            <Link href="/" className="flex items-center space-x-3 group relative z-[110]">
              <div className="relative h-12 w-12 md:h-14 md:w-14 flex items-center justify-center transition-all duration-500 group-hover:scale-110">
                <Image 
                  src="/images/rkprojectslogo.png" 
                  alt="RK Projects Logo" 
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className={`text-xl md:text-2xl font-black tracking-tighter transition-colors ${scrolled || !isHome || isOpen ? 'text-dark-black' : 'text-white'}`}>
                  RK <span className="text-accent">PROJECTS</span>
                </span>
                <span className={`text-[8px] font-black uppercase tracking-[0.3em] -mt-1 transition-colors ${scrolled || !isHome || isOpen ? 'text-slate-400' : 'text-blue-200/60'}`}>
                  Civil Engineering
                </span>
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center space-x-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`text-sm font-bold uppercase tracking-widest animated-underline transition-colors ${
                    scrolled || !isHome || isOpen
                      ? (pathname === link.path ? 'text-primary' : 'text-slate-600 hover:text-primary')
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              
              {/* Fleet Dropdown */}
              <div className="relative group py-4">
                <button 
                  className={`text-sm font-bold uppercase tracking-widest flex items-center transition-colors ${
                    scrolled || !isHome || isOpen ? "text-slate-600 hover:text-primary" : "text-white/90 hover:text-white"
                  }`}
                >
                  Fleet <ChevronDown size={16} className="ml-1 group-hover:rotate-180 transition-transform duration-300" />
                </button>
                
                {/* Dropdown Menu */}
                <div className="absolute top-full right-0 w-64 bg-white/95 backdrop-blur-xl shadow-2xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 rounded-xl overflow-hidden">
                  <div className="py-2">
                    {[
                      { name: 'Elite Heavy Fleet', path: '/jcb-fleet' },
                      { name: 'Earthmoving Equipment', path: '/machinery#earthmoving' },
                      { name: 'Construction Machinery', path: '/machinery#construction' },
                      { name: 'Terrain Capability', path: '/machinery#terrain' }
                    ].map((item) => (
                      <Link 
                        key={item.path} 
                        href={item.path}
                        className="block px-6 py-4 text-sm font-semibold text-slate-700 hover:bg-primary/5 hover:text-primary transition-all duration-300 border-l-4 border-transparent hover:border-primary"
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
                className={`ml-4 px-8 py-3 rounded-full text-sm font-black uppercase tracking-widest transition-all duration-500 btn-interactive ${
                  scrolled || !isHome || isOpen
                    ? "bg-primary text-white shadow-xl shadow-primary/20"
                    : "bg-white text-primary hover:bg-accent hover:text-white shadow-xl shadow-white/10"
                }`}
              >
                Get Quote
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden flex items-center relative z-[110]">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-full focus:outline-none transition-all duration-300 ${
                  scrolled || !isHome || isOpen ? "bg-primary/5 text-primary" : "bg-white/10 text-white"
                }`}
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div 
          className={`lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-2xl shadow-2xl transition-all duration-500 ease-in-out overflow-hidden ${
            isOpen ? "max-h-screen opacity-100 py-8" : "max-h-0 opacity-0 py-0"
          }`}
        >
          <div className="px-8 flex flex-col space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className={`block text-2xl font-black uppercase tracking-tight transition-colors ${
                  pathname === link.path ? 'text-primary' : 'text-slate-800'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="pt-6 border-t border-slate-100">
              <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6">Our Fleet</p>
              <div className="flex flex-col space-y-4 pl-4 border-l-2 border-primary">
                {[
                  { name: 'Elite Heavy Fleet', path: '/jcb-fleet' },
                  { name: 'Earthmoving Equipment', path: '/machinery#earthmoving' },
                  { name: 'Construction Machinery', path: '/machinery#construction' },
                  { name: 'Terrain Capability', path: '/machinery#terrain' }
                ].map((item) => (
                  <Link 
                    key={item.path} 
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-bold text-slate-700 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-8 block w-full bg-primary text-white text-center py-5 rounded-2xl font-black uppercase tracking-widest shadow-2xl shadow-primary/30"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
