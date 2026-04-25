"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  CheckCircle2, 
  Hammer, 
  Truck, 
  Settings, 
  Mountain, 
  Zap, 
  ShieldCheck 
} from "lucide-react";
import Link from "next/link";

export default function MachineryPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  const earthmovingEquipment = [
    { name: "Tata Hitachi Fleet", img: "/images/image_3.jpeg", desc: "Our comprehensive fleet of excavators and tippers working in sync for large-scale earthmoving." },
    { name: "Hydraulic Excavator EX200LC", img: "/images/image_5.jpeg", desc: "High-performance excavator optimized for deep digging and foundation work." },
    { name: "Material Handler", img: "/images/image_6.jpeg", desc: "Specialized excavators for rapid loading and handling of site materials." },
  ];

  const constructionMachinery = [
    { name: "Heavy Duty Excavation", img: "/images/image_2.jpeg", desc: "Advanced hydraulic power for efficient soil and rock excavation." },
    { name: "Site Development", img: "/images/image_7.jpeg", desc: "Coordinated machinery and personnel for complex infrastructure development." },
    { name: "Precision Grading", img: "/images/image_29.jpeg", desc: "Expert earthworks and grading to prepare perfect site foundations." },
  ];

  const whyChooseUs = [
    { title: "Modern & Well-Maintained", desc: "Our fleet consists of the latest models, regularly serviced for zero downtime.", icon: <Settings className="text-accent" /> },
    { title: "Large-Scale Capability", desc: "Equipped to handle massive infrastructure and industrial projects with ease.", icon: <Zap className="text-accent" /> },
    { title: "Safety First", desc: "All machines operate under strict safety protocols and are manned by certified experts.", icon: <ShieldCheck className="text-accent" /> },
  ];

  return (
    <div className="w-full bg-white pt-24">
      {/* Header Section */}
      <section className="bg-primary py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/image_4.jpeg" alt="Machinery background" fill className="object-cover" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.h1 
            initial="hidden" animate="visible" variants={fadeUp}
            className="text-4xl md:text-6xl font-black text-white mb-6"
          >
            Machinery & Equipment
          </motion.h1>
          <motion.p 
            initial="hidden" animate="visible" variants={fadeUp}
            className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed"
          >
            Advanced machinery enabling efficient construction on complex terrains and large-scale infrastructure projects. We don't just show machines; we demonstrate capability.
          </motion.p>
        </div>
      </section>

      {/* Earthmoving Equipment */}
      <section id="earthmoving" className="py-24 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-accent/10 rounded-lg">
              <Truck className="text-accent w-8 h-8" />
            </div>
            <div>
              <h2 className="text-3xl font-black text-primary">Earthmoving Equipment</h2>
              <p className="text-gray-500 font-medium mt-1">Used for land clearing, excavation, and handling uneven terrain efficiently.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {earthmovingEquipment.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100"
              >
                <div className="relative aspect-[4/3] image-zoom-container">
                  <Image src={item.img} alt={item.name} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 z-10">
                    <p className="text-white text-sm font-medium">{item.desc}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">{item.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Construction Machinery */}
      <section id="construction" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-accent/10 rounded-lg">
              <Hammer className="text-accent w-8 h-8" />
            </div>
            <div>
              <h2 className="text-3xl font-black text-primary">Construction Machinery</h2>
              <p className="text-gray-500 font-medium mt-1">Ensures high-quality structural work and road construction with precision.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {constructionMachinery.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100"
              >
                <div className="relative aspect-[4/3] image-zoom-container">
                  <Image src={item.img} alt={item.name} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 z-10">
                    <p className="text-white text-sm font-medium">{item.desc}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">{item.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Terrain Handling Section */}
      <section id="terrain" className="py-24 px-6 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
          <Image src="/images/image_28.jpeg" alt="Terrain detail" fill className="object-cover" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Mountain className="text-accent w-10 h-10" />
              <h2 className="text-3xl md:text-5xl font-black text-white">Terrain Handling Capability</h2>
            </div>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed font-light">
              Our machinery is capable of operating in uneven, rocky, and challenging landscapes, ensuring project completion regardless of terrain conditions. We specialize in transforming difficult sites into ready-to-build foundations.
            </p>
            
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6">Technical Specifications</h3>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-200">
                  <CheckCircle2 className="text-accent mr-3 w-5 h-5" />
                  <span>High-capacity excavators for deep digging in rocky soil</span>
                </li>
                <li className="flex items-center text-gray-200">
                  <CheckCircle2 className="text-accent mr-3 w-5 h-5" />
                  <span>Heavy-duty rollers for road compaction on steep inclines</span>
                </li>
                <li className="flex items-center text-gray-200">
                  <CheckCircle2 className="text-accent mr-3 w-5 h-5" />
                  <span>Advanced grading equipment for uneven land and stabilization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Our Machinery Matters */}
      <section className="py-24 px-6 bg-surface">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-black text-primary mb-4">Why Our Equipment Stands Out</h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {whyChooseUs.map((item, idx) => (
            <div key={idx} className="text-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-accent text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">Ready to leverage our fleet for your next project?</h2>
          <p className="text-xl mb-12 opacity-90 font-light">Consult with our engineering team for technical specs and availability.</p>
          <Link 
            href="/contact" 
            className="btn-interactive bg-primary hover:bg-primary-hover text-white px-12 py-5 rounded-full font-black text-xl shadow-xl inline-flex items-center"
          >
            Request Project Consultation <ArrowRight className="ml-3 w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  );
}
