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
    <div className="w-full relative">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] w-full flex items-center bg-gray-900 overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <Image
            src="/images/image_4.jpeg"
            alt="Civil construction and highway road work by RK Projects"
            fill
            className="object-cover opacity-60 mix-blend-overlay"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
        
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 w-full pt-20">
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
              <Link href="/contact" className="btn-interactive bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded font-bold text-lg shadow-md flex items-center justify-center">
                Get a Quote <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/contact" className="btn-interactive bg-white/10 hover:bg-white/20 backdrop-blur border border-white/20 text-white px-8 py-4 rounded font-bold text-lg flex items-center justify-center">
                <Phone className="mr-2 w-5 h-5" /> Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Elements - Stats Bar */}
      <section className="bg-primary border-t border-white/10 py-10 relative z-10 -mt-1">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
            <div>
              <p className="text-4xl font-bold text-white">150+</p>
              <p className="text-accent text-sm uppercase tracking-wider mt-1">Completed Projects</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white">10+</p>
              <p className="text-accent text-sm uppercase tracking-wider mt-1">Years Experience</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white">50+</p>
              <p className="text-accent text-sm uppercase tracking-wider mt-1">Enterprise Clients</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white">100%</p>
              <p className="text-accent text-sm uppercase tracking-wider mt-1">Quality Assurance</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Realistic Vision Section */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <p className="text-accent font-bold uppercase tracking-widest text-sm mb-4 italic">Next-Gen Construction</p>
              <h2 className="text-4xl md:text-6xl font-black text-primary mb-8 leading-tight">
                Architectural <br />
                <span className="text-accent italic">Vision.</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed font-light">
                RK Projects blends traditional craftsmanship with the latest technological advancements. Our vision spans beyond just buildings; we create landmarks that stand the test of time through extreme realism and precision.
              </p>
              <div className="h-1 w-20 bg-accent mb-8"></div>
              <p className="text-gray-500 italic mb-10">
                "Our approach combines the strength of tradition with the precision of modern engineering."
              </p>
              <Link href="/contact" className="inline-flex items-center text-primary font-bold hover:text-accent transition-colors text-lg border-b-2 border-primary hover:border-accent pb-1">
                Get a Quote <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2 relative h-[350px] sm:h-[450px] md:h-[500px] w-full rounded-2xl shadow-2xl border-4 md:border-8 border-white group image-zoom-container"
            >
              <Image 
                src="/images/ai_impact.png" 
                alt="Architectural vision of modern construction by RK Projects" 
                fill 
                loading="lazy"
                className="object-cover"
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
              We execute scalable infrastructure and building projects alongside offering top-tier construction and infrastructure machinery.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="group bg-white rounded-xl shadow-md border border-gray-100 flex flex-col"
              >
                <div className="relative h-64 bg-gray-200 image-zoom-container">
                  <Image 
                    src={service.img} 
                    alt={`${service.title} services provided by RK Projects`} 
                    fill 
                    loading="lazy"
                    className="object-cover" 
                  />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                </div>
                <div className="p-8 relative flex-grow flex flex-col">
                  <div className="absolute -top-6 right-6 bg-accent w-12 h-12 rounded-full flex items-center justify-center shadow-lg group-hover:-translate-y-2 transition-transform duration-300">
                    <CheckCircle2 className="text-white w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-3">{service.title}</h3>
                  <p className="text-gray-600 font-medium leading-relaxed flex-grow mb-6">{service.desc}</p>
                  <Link href="/contact" className="text-accent font-bold hover:text-primary transition-colors flex items-center mt-auto">
                    Contact Us <ChevronRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link href="/contact" className="btn-interactive inline-block bg-primary text-white px-8 py-4 rounded font-bold hover:bg-primary-hover shadow-md">
              Get a Quote for Your Project
            </Link>
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
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                  >
                    <Link href={p.path} className="flex items-center p-4 rounded-lg bg-gray-50 border border-gray-100 hover:border-accent hover:bg-orange-50 group transition-colors">
                      <ChevronRight className="w-5 h-5 text-accent group-hover:translate-x-1 transition-transform" />
                      <span className="font-semibold text-primary ml-2">{p.name}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link href="/portfolio" className="btn-interactive inline-flex justify-center border-2 border-primary text-primary px-8 py-3 rounded font-bold hover:bg-primary hover:text-white">
                  View Full Catalog
                </Link>
                <Link href="/contact" className="btn-interactive inline-flex justify-center bg-accent text-white px-8 py-3 rounded font-bold hover:bg-accent-hover">
                  Contact Us
                </Link>
              </div>
            </motion.div>
            
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <motion.div 
                initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                className="col-span-2 h-64 relative rounded-xl shadow-md image-zoom-container"
              >
                <Image src="/images/image_5.jpeg" alt="Heavy duty machinery provided by RK Projects" fill loading="lazy" className="object-cover" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
                className="h-48 relative rounded-xl shadow-md image-zoom-container"
              >
                <Image src="/images/image_6.jpeg" alt="Industrial machinery implement" fill loading="lazy" className="object-cover" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}
                className="h-48 relative rounded-xl shadow-md image-zoom-container"
              >
                <Image src="/images/image_7.jpeg" alt="Heavy construction and industrial equipment" fill loading="lazy" className="object-cover" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Elements - Testimonials */}
      <section className="py-24 bg-surface w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">What Our Clients Say</h2>
            <div className="w-24 h-1.5 bg-accent mx-auto rounded-full mb-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-gray-600 mb-6 italic leading-relaxed">"{t.text}"</p>
                <div>
                  <h4 className="font-bold text-primary text-lg">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Construction Highlight */}
      <section className="relative w-full py-32 overflow-hidden bg-primary">
        <Image 
          src="/images/image_29.jpeg" 
          alt="Featured highway infrastructure project by RK Projects" 
          fill 
          loading="lazy"
          className="object-cover opacity-30 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/50 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl bg-[#111827]/90 p-10 rounded border border-gray-800"
          >
            <p className="text-accent font-bold uppercase tracking-widest text-sm mb-4">Precision & Power</p>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Civil Engineering <br />
              <span className="text-accent">Redefined.</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Our commitment to quality is visible in every road we pave and every structure we build. Using the most advanced machinery and engineering techniques, we ensure that every project is a landmark of durability.
            </p>
            <div className="flex flex-col sm:flex-row gap-8">
              <Link href="/contact" className="btn-interactive bg-accent hover:bg-accent-hover text-gray-900 px-8 py-3 rounded font-bold shadow-md self-start">
                Get a Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary border-t border-white/10 w-full relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent rounded-full filter blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/3"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
             <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
             <p className="text-xl text-gray-300 mb-10 font-light">
               Let's build something exceptional together. Contact us today for inquiries regarding civil works or machinery.
             </p>
             <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link href="/contact" className="btn-interactive bg-accent hover:bg-white text-gray-900 px-10 py-4 rounded font-bold text-lg shadow-md">
                  Get a Quote
                </Link>
                <a href="tel:+919505650901" className="btn-interactive flex items-center justify-center bg-transparent border border-white/40 hover:bg-white/10 text-white px-10 py-4 rounded font-bold text-lg">
                  <Phone className="mr-3 text-accent" size={20} /> Contact Us
                </a>
             </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
