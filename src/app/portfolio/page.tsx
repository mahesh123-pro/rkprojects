"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { productsData } from "@/lib/data";

type ProjectItem = {
  id: string;
  title: string;
  category: string;
  img: string;
  link?: string;
};

const projects: ProjectItem[] = [
  { id: "proj-1", title: "Highway Infrastructure Grading", category: "road", img: "/images/image_28.jpeg" },
  { id: "proj-2", title: "Industrial Site Development", category: "building", img: "/images/image_29.jpeg" },
  { id: "proj-3", title: "Deep Foundation Excavation", category: "building", img: "/images/image_30.jpeg" },
  { id: "proj-4", title: "Rock Removal & Site Clearing", category: "infrastructure", img: "/images/image_31.jpeg" },
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
    <div className="w-full bg-white min-h-screen pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-black uppercase tracking-[0.3em] text-sm mb-6 block">Our Impact</span>
            <h1 className="text-6xl md:text-8xl font-black text-dark-black mb-10 tracking-tighter leading-none">
              Portfolio & <br/> <span className="text-primary">Innovation.</span>
            </h1>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed mb-12">
              Explore RK Projects' massive civil construction portfolio and cutting-edge heavy machinery built for endurance and scale.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 bg-slate-50 p-3 rounded-3xl inline-flex border border-slate-100"
          >
            {filterOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() => setFilter(opt.value)}
                className={`px-8 py-3 rounded-2xl font-black uppercase tracking-widest text-xs transition-all duration-500 ${
                  filter === opt.value 
                    ? "bg-primary text-white shadow-2xl shadow-primary/30 scale-105" 
                    : "text-slate-500 hover:text-primary hover:bg-white"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <AnimatePresence mode='popLayout'>
            {filteredItems.map((item, idx) => (
              <motion.div
                layout
                key={`${item.id}-${idx}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: "circOut" as const }}
                className="group relative bg-white rounded-[40px] overflow-hidden shadow-2xl border border-slate-50 hover:-translate-y-4 transition-all duration-500"
              >
                <div className="relative h-[450px] w-full overflow-hidden bg-slate-100">
                  <Image 
                    src={item.img} 
                    alt={item.title} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-1000" 
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-black via-dark-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                  
                  {/* Content Container */}
                  <div className="absolute bottom-0 left-0 right-0 p-10 z-10">
                    <span className="bg-accent/20 backdrop-blur-md text-accent text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-full mb-4 inline-block border border-accent/30">
                      {item.category}
                    </span>
                    <h3 className="text-3xl font-black text-white mb-6 leading-tight group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                    
                    {item.link ? (
                      <Link href={item.link} className="btn-interactive inline-flex items-center text-sm font-black text-white uppercase tracking-widest group/link">
                        View Solution <ArrowRight className="ml-2 w-5 h-5 group-hover/link:translate-x-2 transition-transform" />
                      </Link>
                    ) : (
                      <div className="flex items-center text-slate-400 text-xs font-black uppercase tracking-widest">
                        <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                        Completed Project
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <div className="text-center py-32 glass-card rounded-[40px] border-slate-100">
            <h3 className="text-3xl font-black text-slate-400 uppercase tracking-tighter">No assets found in this category.</h3>
            <button onClick={() => setFilter('all')} className="mt-8 text-primary font-black uppercase tracking-widest border-b-2 border-primary">Clear Filters</button>
          </div>
        )}
      </div>
    </div>
  );
}
