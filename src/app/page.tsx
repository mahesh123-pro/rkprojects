"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronRight, Phone, Star, Building2, Users } from "lucide-react";

export default function Home() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  const services = [
    { title: "Building Construction", img: "/images/image_1.jpeg", desc: "Commercial & residential projects with high quality." },
    { title: "Road Infrastructure", img: "/images/image_2.jpeg", desc: "Durable and reliable road construction." },
    { title: "Heavy Machinery", img: "/images/image_3.jpeg", desc: "Providing industrial-scale machines for civil & infrastructure needs." }
  ];

  const products = [
    { name: "Tata Hitachi Excavators", path: "/machinery" },
    { name: "Heavy Duty Tippers", path: "/machinery" },
    { name: "Hydraulic Earthmovers", path: "/machinery" },
    { name: "Site Fleet Management", path: "/machinery" },
  ];

  const testimonials = [
    { name: "Rajesh Kumar", role: "Property Developer", text: "RK Projects delivered our commercial complex ahead of schedule. Uncompromising quality." },
    { name: "Suresh Reddy", role: "Govt. Contractor", text: "Their road infrastructure work is phenomenal. Highly durable and professionally executed." },
    { name: "Amit Patel", role: "Agri-Business Owner", text: "The heavy machinery we sourced from RK Projects has significantly improved our efficiency." }
  ];

  return (
    <div className="w-full relative bg-white">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[800px] w-full flex items-center bg-dark-black overflow-hidden">
        <motion.div 
          style={{ y }} 
          className="absolute inset-0 z-0"
        >
          <Image
            src="/images/image_4.jpeg"
            alt="Civil construction and highway road work by RK Projects"
            fill
            className="object-cover opacity-40 mix-blend-luminosity scale-110"
            priority
          />
        </motion.div>
        
        {/* Modern Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark-black via-dark-black/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark-black z-10" />
        
        {/* Animated Background Elements */}
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse z-0"></div>
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-accent/10 rounded-full blur-[120px] animate-pulse z-0"></div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 w-full pt-20 z-20">
          <motion.div 
            initial="hidden" animate="visible" variants={fadeUp}
            className="max-w-4xl"
          >
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center space-x-3 mb-6"
            >
              <div className="h-px w-12 bg-accent"></div>
              <span className="text-accent font-black uppercase tracking-[0.3em] text-sm">Premier Civil Engineering</span>
            </motion.div>
            
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-black text-white mb-8 leading-[0.95] tracking-tighter">
              Engineering <br/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-accent">The Future.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl font-medium leading-relaxed">
              Premium civil construction and infrastructure solutions designed for the modern industrial landscape. Built on a foundation of precision and power.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Link href="/contact" className="btn-interactive bg-primary hover:bg-accent text-white px-10 py-5 rounded-2xl font-black text-lg shadow-2xl shadow-primary/40 flex items-center justify-center group">
                Start Your Project <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link href="/portfolio" className="btn-interactive glass-card-dark text-white px-10 py-5 rounded-2xl font-black text-lg flex items-center justify-center border-white/10 hover:bg-white/10">
                View Portfolio
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center"
        >
          <span className="text-white/30 text-[10px] font-black uppercase tracking-[0.5em] mb-4">Scroll to explore</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-accent to-transparent"></div>
        </motion.div>
      </section>

      {/* Trust Stats Bar - Ultra Modern */}
      <section className="relative z-30 -mt-12 max-w-6xl mx-auto px-4">
        <div className="glass-card rounded-3xl shadow-2xl p-8 md:p-12 border-white/50">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: "Completed Projects", value: "150+" },
              { label: "Years Experience", value: "10+" },
              { label: "Enterprise Clients", value: "50+" },
              { label: "Success Rate", value: "100%" }
            ].map((stat, i) => (
              <div key={i} className="relative group">
                <p className="text-4xl md:text-5xl font-black text-primary mb-2 group-hover:scale-110 transition-transform duration-500">{stat.value}</p>
                <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-32 md:py-48 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 z-0"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-24">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <span className="text-accent font-black uppercase tracking-[0.2em] text-sm mb-6 block">Our Vision</span>
              <h2 className="text-5xl md:text-7xl font-black text-dark-black mb-10 leading-none tracking-tighter">
                Architectural <br />
                <span className="text-primary italic">Excellence.</span>
              </h2>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed font-medium">
                RK Projects blends traditional craftsmanship with cutting-edge engineering. We don't just build structures; we create landmarks that define the skyline and stand the test of time.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Building2 className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-black text-dark-black text-lg">Smart Design</h4>
                    <p className="text-slate-500 text-sm font-medium">Precision engineering for every square inch.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Users className="text-accent w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-black text-dark-black text-lg">Expert Team</h4>
                    <p className="text-slate-500 text-sm font-medium">Led by industry veterans and innovators.</p>
                  </div>
                </div>
              </div>

              <Link href="/contact" className="inline-flex items-center group">
                <span className="text-lg font-black text-dark-black border-b-4 border-accent pb-1 group-hover:border-primary transition-colors">Start a Conversation</span>
                <ChevronRight className="ml-2 w-6 h-6 text-accent group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 relative h-[500px] md:h-[650px] w-full"
            >
              <div className="absolute inset-0 bg-primary/5 rounded-[40px] rotate-3 z-0"></div>
              <div className="relative h-full w-full rounded-[40px] overflow-hidden shadow-2xl border-8 border-white z-10 group image-zoom-container">
                <Image 
                  src="/images/ai_impact.png" 
                  alt="Architectural vision" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-black/40 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid - Blue & White Theme */}
      <section id="services" className="py-32 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-accent font-black uppercase tracking-[0.2em] text-sm mb-4 block">Core Services</span>
              <h2 className="text-5xl md:text-6xl font-black text-dark-black tracking-tighter leading-none">
                Comprehensive <br/> Infrastructure.
              </h2>
            </div>
            <p className="text-slate-500 text-lg font-medium max-w-sm">
              We provide end-to-end solutions for large-scale civil projects and heavy machinery requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                whileHover={{ 
                  y: -15,
                  rotateX: 2,
                  rotateY: -2,
                  transition: { duration: 0.4, ease: "easeOut" as const }
                }}
                style={{ perspective: 1000 }}
                className="group relative bg-white rounded-[40px] p-5 shadow-2xl shadow-slate-200/50 border border-slate-100 transition-all duration-500"
              >
                <div className="relative h-80 rounded-[32px] overflow-hidden mb-10">
                  <Image 
                    src={service.img} 
                    alt={service.title} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-1000" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-black/80 via-dark-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                  <div className="absolute bottom-8 left-8">
                    <h3 className="text-3xl font-black text-white group-hover:text-accent transition-colors duration-500">{service.title}</h3>
                  </div>
                </div>
                <div className="px-5 pb-10">
                  <p className="text-slate-500 font-medium mb-10 leading-relaxed text-lg">
                    {service.desc}
                  </p>
                  <Link href="/contact" className="inline-flex items-center text-primary font-black group/link text-lg uppercase tracking-widest">
                    Consultation <ArrowRight className="ml-3 w-6 h-6 group-hover/link:translate-x-3 transition-transform duration-500" />
                  </Link>
                </div>
                {/* Advanced Shine Effect */}
                <div className="absolute inset-0 rounded-[40px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000 bg-gradient-to-br from-white/20 via-transparent to-transparent z-20" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Machinery Lineup - High Contrast */}
      <section className="py-32 bg-dark-black text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <span className="text-accent font-black uppercase tracking-[0.2em] text-sm mb-6 block">Industrial Fleet</span>
              <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter leading-none">
                Machinery <br /> 
                <span className="text-accent">& Power.</span>
              </h2>
              <p className="text-xl text-slate-400 mb-12 font-medium leading-relaxed">
                As part of RK Projects' comprehensive infrastructure services, we deliver top-of-the-line heavy duty implements built to endure extreme conditions.
              </p>
              
              <div className="space-y-4 mb-12">
                {products.map((p, idx) => (
                  <Link 
                    key={idx} 
                    href={p.path} 
                    className="flex items-center justify-between p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-accent transition-all group"
                  >
                    <span className="text-lg font-black">{p.name}</span>
                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center group-hover:bg-accent transition-colors">
                      <ChevronRight className="w-5 h-5 text-accent group-hover:text-white" />
                    </div>
                  </Link>
                ))}
              </div>

              <Link href="/machinery" className="btn-interactive bg-white text-dark-black px-12 py-5 rounded-2xl font-black text-lg inline-block shadow-2xl shadow-white/5">
                View Full Fleet
              </Link>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <div className="col-span-2 h-[400px] relative rounded-[40px] overflow-hidden border-4 border-white/10">
                  <Image src="/images/image_5.jpeg" alt="Machinery" fill className="object-cover" />
                </div>
                <div className="h-64 relative rounded-[32px] overflow-hidden border-4 border-white/10">
                  <Image src="/images/image_6.jpeg" alt="Machinery" fill className="object-cover" />
                </div>
                <div className="h-64 relative rounded-[32px] overflow-hidden border-4 border-white/10">
                  <Image src="/images/image_7.jpeg" alt="Machinery" fill className="object-cover" />
                </div>
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-10 -left-10 glass-card-dark p-8 rounded-[32px] shadow-2xl border-white/10 hidden md:block">
                <p className="text-4xl font-black text-white mb-1">24/7</p>
                <p className="text-accent text-xs font-black uppercase tracking-widest">Support & Ops</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JCB Elite Fleet Teaser */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <span className="text-accent font-black uppercase tracking-[0.3em] text-sm mb-6 block">Specialized Equipment</span>
              <h2 className="text-5xl md:text-7xl font-black text-dark-black mb-10 tracking-tighter leading-tight">
                The Elite <br/> <span className="text-primary">Heavy Fleet.</span>
              </h2>
              <p className="text-xl text-slate-600 mb-10 font-medium leading-relaxed">
                Discover our specialized collection of 20+ machinery units, meticulously maintained to deliver peak performance on every project site. From backhoes to excavators, we have the right machine for the job.
              </p>
              <Link href="/jcb-fleet" className="btn-interactive inline-flex items-center bg-primary text-white px-12 py-5 rounded-2xl font-black text-lg group">
                Explore Gallery <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
            
            <div className="lg:w-1/2 grid grid-cols-2 gap-6">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="h-80 relative rounded-[40px] overflow-hidden shadow-2xl border-4 border-white"
              >
                <Image src="/images/jcb images/pexels-acecranesindia-29411120.jpg" alt="Heavy Machinery" fill className="object-cover" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="h-80 relative rounded-[40px] overflow-hidden shadow-2xl border-4 border-white mt-12"
              >
                <Image src="/images/jcb images/pexels-acecranesindia-29411121.jpg" alt="Heavy Machinery" fill className="object-cover" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Elegant White */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-accent font-black uppercase tracking-[0.2em] text-sm mb-4 block">Testimonials</span>
            <h2 className="text-5xl md:text-6xl font-black text-dark-black tracking-tighter">Client Stories.</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {testimonials.map((t, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-slate-50 p-10 rounded-[40px] relative hover:bg-primary transition-all duration-500 group"
              >
                <div className="flex text-accent mb-8 group-hover:text-blue-300 transition-colors">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-xl text-slate-600 mb-10 font-medium italic leading-relaxed group-hover:text-white/90 transition-colors">
                  "{t.text}"
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 group-hover:bg-white/10 flex items-center justify-center font-black text-primary group-hover:text-white transition-all">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-black text-dark-black text-lg group-hover:text-white transition-colors">{t.name}</h4>
                    <p className="text-sm text-slate-500 font-bold group-hover:text-blue-200 transition-colors">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Ultra Premium */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-primary rounded-[60px] overflow-hidden p-12 md:p-24 text-center">
            <Image 
              src="/images/image_29.jpeg" 
              alt="Background" 
              fill 
              className="object-cover opacity-20 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary to-primary z-10" />
            
            <div className="relative z-20 max-w-4xl mx-auto">
              <h2 className="text-5xl md:text-8xl font-black text-white mb-8 leading-[0.9] tracking-tighter">
                Ready to build <br /> the <span className="text-accent">extraordinary?</span>
              </h2>
              <p className="text-xl md:text-2xl text-blue-100/80 mb-12 font-medium max-w-2xl mx-auto">
                Join forces with RK Projects and let's turn your infrastructure vision into a reality.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link href="/contact" className="btn-interactive bg-white text-primary px-12 py-6 rounded-2xl font-black text-xl shadow-2xl shadow-black/20">
                  Get a Free Quote
                </Link>
                <a href="tel:+919505650901" className="btn-interactive flex items-center justify-center bg-transparent border-2 border-white/20 hover:bg-white/10 text-white px-12 py-6 rounded-2xl font-black text-xl backdrop-blur-md">
                  <Phone className="mr-3 text-accent" size={24} /> Contact Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
