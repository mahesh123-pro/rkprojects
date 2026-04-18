"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronRight, Phone } from "lucide-react";

export default function Home() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  const services = [
    { title: "Building Construction", img: "/images/image_1.jpeg", desc: "Commercial & residential projects with high quality." },
    { title: "Road Infrastructure", img: "/images/image_2.jpeg", desc: "Durable and reliable road construction." },
    { title: "Heavy Machinery", img: "/images/image_3.jpeg", desc: "Providing industrial-scale machines for agriculture & civil needs." }
  ];

  const products = [
    { name: "Thresher", path: "/services/thresher" },
    { name: "Shredder", path: "/services/shredder" },
    { name: "Chaff Cutter", path: "/services/chaff-cutter" },
    { name: "Rotavator", path: "/services/rotavator" },
  ];

  return (
    <div className="w-full relative">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] w-full flex items-center bg-gray-900">
        <Image
          src="/images/image_4.jpeg"
          alt="Civil Construction Hero Background"
          fill
          className="object-cover opacity-40 mix-blend-overlay"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div 
            initial="hidden" animate="visible" variants={fadeUp}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
              Building The<br/> Foundations Of <span className="text-accent underline decoration-accent/50 underline-offset-8">Tomorrow.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl font-light">
              Premium civil construction, road infrastructure, and specialized heavy machinery designed to meet industrial demands. Serious solutions for big projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded font-bold text-lg transition-transform hover:scale-105 duration-300 shadow-xl shadow-accent/20 flex items-center justify-center">
                Get a Quote <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/portfolio" className="bg-white/10 hover:bg-white/20 backdrop-blur border border-white/20 text-white px-8 py-4 rounded font-bold text-lg transition-colors duration-300 text-center">
                View Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI Realistic Vision Section */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <h2 className="text-accent font-bold uppercase tracking-widest text-sm mb-4 italic">Next-Gen Construction</h2>
              <h3 className="text-4xl md:text-6xl font-black text-primary mb-8 leading-tight">
                Architectural <br />
                <span className="text-accent italic">Vision.</span>
              </h3>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed font-light">
                RK Projects blends traditional craftsmanship with the latest technological advancements. Our vision spans beyond just buildings; we create landmarks that stand the test of time through extreme realism and precision.
              </p>
              <div className="h-1 w-20 bg-accent mb-8"></div>
              <p className="text-gray-500 italic">
                "Our approach combines the strength of tradition with the precision of modern engineering."
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="lg:w-1/2 relative h-[350px] sm:h-[450px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl border-4 md:border-8 border-white group"
            >
              <Image 
                src="/images/ai_impact.png" 
                alt="AI Generated Construction Vision" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-24 bg-surface w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-primary mb-4">Our Services</h2>
            <div className="w-24 h-1.5 bg-accent mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We execute scalable infrastructure and building projects alongside offering top-tier agricultural and industrial machinery.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: idx * 0.15 } }
                }}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden bg-gray-200">
                  <Image 
                    src={service.img} 
                    alt={service.title} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" 
                  />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <div className="p-8 relative">
                  <div className="absolute -top-6 right-6 bg-accent w-12 h-12 rounded-full flex items-center justify-center shadow-lg group-hover:-translate-y-2 transition-transform duration-300">
                    <CheckCircle2 className="text-white w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-3">{service.title}</h3>
                  <p className="text-gray-600 font-medium leading-relaxed">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Machinery Lineup Preview */}
      <section className="py-24 bg-white relative border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
              className="md:w-1/2"
            >
              <h2 className="text-4xl font-bold text-primary mb-6">Machinery & Equipment</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                As part of RK Projects' comprehensive infrastructure services, we deliver top-of-the-line heavy duty implements. From precision shredders to high-capacity threshers, our machinery is built to endure.
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {products.map((p, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <Link href={p.path} className="flex items-center p-4 rounded-lg bg-gray-50 border border-gray-100 hover:border-accent hover:bg-orange-50 group transition-colors">
                      <ChevronRight className="w-5 h-5 text-accent group-hover:translate-x-1 transition-transform" />
                      <span className="font-semibold text-primary ml-2">{p.name}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <Link href="/portfolio" className="inline-block border-2 border-primary text-primary px-8 py-3 rounded font-bold hover:bg-primary hover:text-white transition-colors duration-300">
                View Full Catalog
              </Link>
            </motion.div>
            
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
                className="col-span-2 h-64 relative rounded-xl overflow-hidden shadow-lg"
              >
                <Image src="/images/image_5.jpeg" alt="Machinery 1" fill className="object-cover" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
                className="h-48 relative rounded-xl overflow-hidden shadow-lg"
              >
                <Image src="/images/image_6.jpeg" alt="Machinery 2" fill className="object-cover" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}
                className="h-48 relative rounded-xl overflow-hidden shadow-lg"
              >
                <Image src="/images/image_7.jpeg" alt="Machinery 3" fill className="object-cover" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Construction Highlight */}
      <section className="relative w-full py-32 overflow-hidden bg-primary">
        <Image 
          src="/images/image_29.jpeg" 
          alt="Featured Infrastructure Project" 
          fill 
          className="object-cover opacity-30 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/50 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl bg-white/5 backdrop-blur-md p-10 rounded-2xl border border-white/10"
          >
            <h2 className="text-accent font-bold uppercase tracking-widest text-sm mb-4">Precision & Power</h2>
            <h3 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Civil Engineering <br />
              <span className="text-accent">Redefined.</span>
            </h3>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Our commitment to quality is visible in every road we pave and every structure we build. Using the most advanced machinery and engineering techniques, we ensure that every project is a landmark of durability.
            </p>
            <div className="flex flex-col sm:flex-row gap-8">
              <div className="flex flex-col items-center sm:items-start">
                <span className="block text-3xl font-bold text-white mb-1">150+</span>
                <span className="text-accent text-sm font-semibold uppercase">Projects Done</span>
              </div>
              <div className="hidden sm:block w-px h-12 bg-white/20"></div>
              <div className="flex flex-col items-center sm:items-start pt-4 sm:pt-0 border-t border-white/10 sm:border-t-0 w-full sm:w-auto">
                <span className="block text-3xl font-bold text-white mb-1">10+ Years</span>
                <span className="text-accent text-sm font-semibold uppercase">Experience</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary w-full relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent rounded-full filter blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/3"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
             <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
             <p className="text-xl text-gray-300 mb-10 font-light">
               Let's build something exceptional together. Contact us today for inquiries regarding civil works or machinery.
             </p>
             <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link href="/contact" className="bg-accent hover:bg-accent-hover text-white px-10 py-4 rounded font-bold text-lg transition-transform hover:-translate-y-1 duration-300 shadow-xl">
                  Contact Us Now
                </Link>
                <a href="tel:+919876543210" className="flex items-center justify-center bg-white/10 hover:bg-white/20 text-white px-10 py-4 rounded font-bold text-lg transition-colors border border-white/20">
                  <Phone className="mr-3 text-accent" size={24} /> +91 98765 43210
                </a>
             </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
