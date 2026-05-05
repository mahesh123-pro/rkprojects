"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setFade(true);
      setTimeout(() => {
        setLoading(false);
      }, 500); // Match this with CSS transition duration
    }, 2000); // Time to show the preloader

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div 
      className={`fixed inset-0 z-[99999] bg-white flex flex-col items-center justify-center transition-opacity duration-500 ease-in-out ${fade ? 'opacity-0' : 'opacity-100'}`}
    >
      <div className="relative h-40 w-80 md:h-56 md:w-[450px] transition-transform duration-1000 transform hover:scale-110">
        <Image 
          src="/images/rkprojectslogo.png" 
          alt="RK Projects Loading Logo" 
          fill
          className="object-contain"
          priority
        />
      </div>
      
      {/* Premium Progress Bar */}
      <div className="mt-12 w-64 h-1.5 bg-slate-100 rounded-full overflow-hidden shadow-inner">
        <div className="h-full bg-primary animate-progress origin-left shadow-[0_0_15px_rgba(30,58,138,0.5)]"></div>
      </div>
      
      <div className="mt-4">
        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 animate-pulse">Initializing Excellence</p>
      </div>
    </div>
  );
}
