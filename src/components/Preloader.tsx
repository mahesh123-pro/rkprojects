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
      className={`fixed inset-0 z-[99999] bg-primary flex flex-col items-center justify-center transition-opacity duration-500 ease-in-out ${fade ? 'opacity-0' : 'opacity-100'}`}
    >
      <div className="relative h-40 w-80 md:h-56 md:w-[450px] animate-pulse">
        <Image 
          src="/images/rkprojectslogo.png" 
          alt="RK Projects Loading Logo" 
          fill
          className="object-contain"
          priority
        />
      </div>
      {/* Optional: Add a small loading spinner or progress bar below the logo */}
      <div className="mt-8 w-48 h-1 bg-gray-200 rounded-full overflow-hidden">
        <div className="h-full bg-primary animate-progress origin-left"></div>
      </div>
    </div>
  );
}
