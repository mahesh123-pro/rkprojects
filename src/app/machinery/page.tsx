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
    { title: "Modern & Well-Maintained", desc: "Our fleet consists of the latest models, regularly serviced for zero downtime.", icon: <Settings className="text-accent w-8 h-8" /> },
    { title: "Large-Scale Capability", desc: "Equipped to handle massive infrastructure and industrial projects with ease.", icon: <Zap className="text-accent w-8 h-8" /> },
    { title: "Safety First", desc: "All machines operate under strict safety protocols and are manned by certified experts.", icon: <ShieldCheck className="text-accent w-8 h-8" /> },
  ];

  return (
    <div className="w-full bg-white pt-24 pb-32">
      {/* Header Section - Ultra Modern */}
      <section className="bg-dark-black py-32 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px] animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="text-accent font-black uppercase tracking-[0.3em] text-sm mb-6 block">Industrial Fleet</span>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none">
              Machinery & <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-accent">Precision.</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto font-medium leading-relaxed">
              Advanced machinery enabling efficient construction on complex terrains and large-scale infrastructure projects. We don't just show machines; we demonstrate capability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Earthmoving Equipment - Modern Grid */}
      <section id="earthmoving" className="py-32 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-accent font-black uppercase tracking-[0.2em] text-sm mb-4 block">Fleet Type A</span>
              <h2 className="text-5xl md:text-6xl font-black text-dark-black tracking-tighter leading-none">Earthmoving.</h2>
            </div>
            <p className="text-slate-500 text-lg font-medium max-w-sm">
              Used for land clearing, excavation, and handling uneven terrain efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {earthmovingEquipment.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ 
                  y: -15,
                  rotateX: 1,
                  rotateY: -1,
                  transition: { duration: 0.4 }
                }}
                style={{ perspective: 1000 }}
                className="group relative bg-white rounded-[40px] overflow-hidden shadow-2xl border border-slate-50 transition-all duration-500"
              >
                <div className="relative h-[400px] w-full overflow-hidden">
                  <Image src={item.img} alt={item.name} fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-black via-dark-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-10 z-10">
                    <h3 className="text-3xl font-black text-white mb-4 group-hover:text-accent transition-colors duration-500">{item.name}</h3>
                    <p className="text-slate-300 font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Construction Machinery - High Contrast */}
      <section id="construction" className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row-reverse justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl text-right">
              <span className="text-accent font-black uppercase tracking-[0.2em] text-sm mb-4 block">Fleet Type B</span>
              <h2 className="text-5xl md:text-6xl font-black text-dark-black tracking-tighter leading-none">Structural.</h2>
            </div>
            <p className="text-slate-500 text-lg font-medium max-w-sm text-left">
              Ensures high-quality structural work and road construction with extreme precision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {constructionMachinery.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ 
                  y: -15,
                  rotateX: 1,
                  rotateY: -1,
                  transition: { duration: 0.4 }
                }}
                style={{ perspective: 1000 }}
                className="group relative bg-white rounded-[40px] overflow-hidden shadow-2xl border border-slate-50 transition-all duration-500"
              >
                <div className="relative h-[400px] w-full overflow-hidden">
                  <Image src={item.img} alt={item.name} fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-black via-dark-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-10 z-10">
                    <h3 className="text-3xl font-black text-white mb-4 group-hover:text-accent transition-colors duration-500">{item.name}</h3>
                    <p className="text-slate-300 font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Terrain Handling Section - Ultra Premium Blue */}
      <section id="terrain" className="py-48 px-6 bg-primary relative overflow-hidden">
        <Image 
          src="/images/image_28.jpeg" 
          alt="Terrain detail" 
          fill 
          className="object-cover opacity-20 mix-blend-overlay" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent z-10"></div>
        
        <div className="max-w-7xl mx-auto relative z-20">
          <div className="max-w-4xl">
            <div className="flex items-center space-x-6 mb-12">
              <div className="w-20 h-20 rounded-[32px] bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center">
                <Mountain className="text-accent w-10 h-10" />
              </div>
              <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-none">Challenging <br/> <span className="text-accent">Terrain.</span></h2>
            </div>
            
            <p className="text-2xl text-blue-100 mb-16 leading-relaxed font-medium">
              Our machinery is capable of operating in uneven, rocky, and challenging landscapes, ensuring project completion regardless of terrain conditions. We specialize in transforming difficult sites into ready-to-build foundations.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                "High-capacity excavators for rocky soil",
                "Heavy-duty rollers for steep inclines",
                "Advanced grading for uneven land"
              ].map((spec, i) => (
                <div key={i} className="flex items-center space-x-4 glass-card-dark p-6 rounded-2xl border-white/10">
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="text-accent w-5 h-5" />
                  </div>
                  <span className="text-lg font-bold text-white">{spec}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Our Machinery Matters - Clean & Elegant */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-24">
          <span className="text-accent font-black uppercase tracking-[0.3em] text-sm mb-6 block">Why RK Projects</span>
          <h2 className="text-5xl md:text-7xl font-black text-dark-black tracking-tighter">Superior Quality.</h2>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {whyChooseUs.map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="text-left p-12 bg-slate-50 rounded-[40px] border border-slate-100 transition-all duration-500 hover:bg-white hover:shadow-2xl"
            >
              <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mb-10 group-hover:bg-primary transition-colors">
                {item.icon}
              </div>
              <h3 className="text-3xl font-black text-dark-black mb-6 tracking-tight">{item.title}</h3>
              <p className="text-slate-500 font-medium leading-relaxed text-lg">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section - Power Blue */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-primary rounded-[60px] p-16 md:p-24 text-center relative overflow-hidden shadow-2xl shadow-primary/30">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-[100px]"></div>
            <div className="relative z-10 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-7xl font-black text-white mb-10 tracking-tighter leading-none">Leverage Our Fleet.</h2>
              <p className="text-xl md:text-2xl text-blue-100/80 mb-16 font-medium">Consult with our engineering team for technical specs and immediate availability.</p>
              <Link 
                href="/contact" 
                className="btn-interactive bg-white text-primary px-16 py-7 rounded-2xl font-black text-2xl shadow-2xl shadow-black/20"
              >
                Project Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
