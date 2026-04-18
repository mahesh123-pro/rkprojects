"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { productsData } from "@/lib/data";

type ProjectItem = {
  id: string;
  title: string;
  category: string;
  img: string;
  link?: string;
};

const projects: ProjectItem[] = [
  { id: "proj-1", title: "City Highway Expansion", category: "road", img: "/images/image_28.jpeg" },
  { id: "proj-2", title: "Commercial Plaza Build", category: "building", img: "/images/image_29.jpeg" },
  { id: "proj-3", title: "Industrial Godown Facility", category: "building", img: "/images/image_30.jpeg" },
  { id: "proj-4", title: "Rural Connectivity Bridge", category: "infrastructure", img: "/images/image_31.jpeg" },
];

export default function PortfolioPage() {
  const [filter, setFilter] = useState("all");

  const filterOptions = [
    { value: "all", label: "All Items" },
    { value: "machinery", label: "Machinery" },
    { value: "building", label: "Buildings" },
    { value: "road", label: "Roads" },
    { value: "infrastructure", label: "Infrastructure" },
  ];

  // Map products data to match project structure
  const machineryItems = Object.values(productsData).map(p => ({
    id: p.id,
    title: p.name,
    category: "machinery",
    img: p.banner,
    link: `/services/${p.id}`
  }));

  const allItems = [...projects, ...machineryItems];

  const filteredItems = filter === "all" 
    ? allItems 
    : allItems.filter(item => item.category === filter);

  return (
    <div className="w-full bg-surface min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold text-primary mb-6"
          >
            Our Portfolio & Implements
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto mb-10"
          >
            Explore our massive civil construction projects and cutting-edge heavy machinery built for endurance and scale.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {filterOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() => setFilter(opt.value)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  filter === opt.value 
                    ? "bg-primary text-white shadow-md shadow-primary/30" 
                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredItems.map((item, idx) => (
              <motion.div
                layout
                key={`${item.id}-${idx}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100"
              >
                <div className="relative h-72 w-full overflow-hidden bg-gray-200">
                  <Image 
                    src={item.img} 
                    alt={item.title} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-accent text-xs font-bold uppercase tracking-wider mb-2 block">{item.category}</span>
                  <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                  {item.link ? (
                    <Link href={item.link} className="inline-block mt-2 text-white border-b-2 border-accent pb-1 font-medium hover:text-accent transition-colors">
                      View Details →
                    </Link>
                  ) : (
                    <span className="inline-block mt-2 text-gray-300 text-sm">Completed Project</span>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-2xl font-medium text-gray-500">No items found for this category.</h3>
          </div>
        )}
      </div>
    </div>
  );
}
