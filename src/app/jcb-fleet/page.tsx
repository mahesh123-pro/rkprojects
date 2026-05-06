"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { 
  CheckCircle2, 
  Wrench, 
  Zap, 
  ShieldCheck, 
  ArrowRight,
  Truck,
  HardHat,
  Cpu
} from "lucide-react";
import Link from "next/link";

const jcbImages = [
  "pexels-acecranesindia-29411120.jpg",
  "pexels-acecranesindia-29411121.jpg",
  "pexels-acecranesindia-29411123.jpg",
  "pexels-acecranesindia-29827751.jpg",
  "pexels-acecranesindia-32917662.jpg",
  "pexels-ag-photography-243127230-12455093.jpg",
  "pexels-ahmed-al-hilali-84876-15495394.jpg",
  "pexels-aksinfo7-30401740.jpg",
  "pexels-alesustinau-11518763.jpg",
  "pexels-anilknhk-35662660.jpg",
  "pexels-baris-turkoz-214377915-13931830.jpg",
  "pexels-construccion-total-2464540-14466335.jpg",
  "pexels-gowtham-agm-609630353-34229743.jpg",
  "pexels-helen1-10451774.jpg",
  "pexels-ivandesignx-34226754.jpg",
  "pexels-manzil-joshi-2335395-3998410.jpg",
  "pexels-roger-brown-3435524-5125783.jpg",
  "pexels-saikat-bhowmik-2148125667-33703998.jpg",
  "pexels-sifat-2150441298-31293900.jpg",
  "pexels-the-jd-darshan-solanki-215282-11959308.jpg",
  "pexels-vijay-krishnam-1240921-20215499.jpg",
  "pexels-vladimirsrajber-18643035.jpg"
];

export default function HeavyFleetPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
  };

  const capabilities = [
    { 
      title: "Earthmoving Excellence", 
      desc: "Our specialized fleet excels in precision excavation, site leveling, and massive earth-moving operations.",
      icon: <Truck className="w-8 h-8 text-accent" />
    },
    { 
      title: "Structural Versatility", 
      desc: "From deep foundation digging to complex site preparation, these machines are the backbone of our projects.",
      icon: <Cpu className="w-8 h-8 text-accent" />
    },
    { 
      title: "Terrain Adaptability", 
      desc: "High-traction systems allow our machines to operate efficiently in rocky, sandy, and uneven terrains.",
      icon: <HardHat className="w-8 h-8 text-accent" />
    }
  ];

  return (
    <div className="w-full bg-white min-h-screen pt-24 pb-32">
      {/* Hero Header */}
      <section className="relative bg-dark-black py-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src={`/images/jcb images/${jcbImages[3]}`} 
            alt="Heavy Fleet" 
            fill 
            className="object-cover opacity-30 mix-blend-luminosity scale-110" 
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-dark-black via-dark-black/80 to-transparent z-10" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-20">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="text-accent font-black uppercase tracking-[0.4em] text-sm mb-6 block">RK Projects Elite Fleet</span>
            <h1 className="text-6xl md:text-9xl font-black text-white mb-8 tracking-tighter leading-none">
              Elite <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-accent">Fleet.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 max-w-3xl font-medium leading-relaxed">
              We maintain one of the region's most versatile and powerful machinery fleets. From specialized backhoe loaders to heavy-duty excavators, our machinery is the engine of infrastructure development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-center mb-32">
            <div>
              <h2 className="text-5xl md:text-7xl font-black text-dark-black mb-10 tracking-tighter leading-tight">
                The Power Behind <br/> <span className="text-primary">RK Projects.</span>
              </h2>
              <p className="text-xl text-slate-600 mb-12 font-medium leading-relaxed">
                Advanced machinery represents the pinnacle of reliability in civil engineering. At RK Projects, we leverage this power to ensure that every road, building, and infrastructure project is built on a foundation of precision. Our machines are regularly serviced and operated by industry-certified experts to guarantee 100% uptime.
              </p>
              
              <div className="space-y-8">
                {capabilities.map((item, i) => (
                  <div key={i} className="flex items-start space-x-6 group">
                    <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-500">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-2xl font-black text-dark-black mb-2 tracking-tight group-hover:text-primary transition-colors">{item.title}</h4>
                      <p className="text-slate-500 font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="relative h-[600px] w-full rounded-[60px] overflow-hidden shadow-2xl border-8 border-white group">
                <Image 
                  src={`/images/jcb images/${jcbImages[0]}`} 
                  alt="Machinery in action" 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-[2s]" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-black/60 to-transparent" />
                <div className="absolute bottom-12 left-12 right-12">
                   <p className="text-white text-3xl font-black mb-2 tracking-tighter">Precision Earthworks</p>
                   <p className="text-accent text-sm font-black uppercase tracking-widest">Site: Regional Highway Project</p>
                </div>
              </div>
              {/* Stats Badge */}
              <div className="absolute -bottom-10 -right-10 glass-card p-10 rounded-[40px] shadow-2xl border-slate-100 hidden md:block">
                <p className="text-5xl font-black text-primary mb-1">20+</p>
                <p className="text-slate-500 text-xs font-black uppercase tracking-widest">Active Machinery Units</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section - Masonry-ish Grid */}
      <section className="py-32 bg-slate-50 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <span className="text-accent font-black uppercase tracking-[0.2em] text-sm mb-4 block">Visual Fleet Catalog</span>
            <h2 className="text-5xl md:text-7xl font-black text-dark-black tracking-tighter">Machine Gallery.</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {jcbImages.map((img, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (idx % 3) * 0.1 }}
                whileHover={{ y: -15, transition: { duration: 0.4 } }}
                className="group relative h-[450px] bg-white rounded-[40px] overflow-hidden shadow-xl border border-slate-100"
              >
                <Image 
                  src={`/images/jcb images/${img}`} 
                  alt={`Advanced Machine ${idx + 1}`} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-[1.5s]" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-black via-dark-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                
                <div className="absolute bottom-8 left-8 right-8 z-10 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1 mb-4 inline-block">
                    <span className="text-white text-[10px] font-black uppercase tracking-widest">Equipment Unit {idx + 1}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specs Callout */}
      <section className="py-48 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <Wrench className="w-20 h-20 text-accent mx-auto mb-10 animate-bounce" />
          <h2 className="text-5xl md:text-7xl font-black text-dark-black mb-10 tracking-tighter">Engineered for Scale.</h2>
          <p className="text-xl text-slate-500 font-medium leading-relaxed mb-16">
            Our machinery units are equipped with advanced telematics, eco-mode for fuel efficiency, and heavy-duty buckets for maximum breakout force. Whether it's rock removal or precise trenching, our fleet delivers.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/contact" className="btn-interactive bg-primary text-white px-12 py-6 rounded-2xl font-black text-xl shadow-2xl shadow-primary/30">
              Inquire Fleet Specs
            </Link>
            <Link href="/machinery" className="btn-interactive glass-card text-dark-black px-12 py-6 rounded-2xl font-black text-xl border-slate-100">
              Back to Machinery
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
