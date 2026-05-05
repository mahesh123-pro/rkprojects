"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, MessageCircle, ChevronDown } from "lucide-react";

export default function ContactPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="w-full bg-white min-h-screen pt-24 pb-32">
      {/* Header - Ultra Modern */}
      <div className="relative bg-dark-black py-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px] animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <span className="text-accent font-black uppercase tracking-[0.3em] text-sm mb-6 block">Get in Touch</span>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none">
              Let's build <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-accent">Together.</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
              Get in touch with RK Projects. Whether you need a massive infrastructure quote or specialized heavy machinery, our team of experts is ready to assist you.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-20 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Contact Details & Info */}
          <motion.div 
            initial="hidden" animate="visible" variants={fadeInUp} transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glass-card rounded-[40px] p-10 md:p-16 border-slate-100 shadow-2xl">
              <h2 className="text-4xl font-black text-dark-black mb-10 tracking-tight">Contact Information</h2>
              
              <div className="space-y-12">
                <div className="flex items-start space-x-6 group">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-all duration-500">
                    <Phone className="w-8 h-8 text-primary group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Direct Line</h4>
                    <p className="text-2xl font-black text-dark-black">+91 95056 50901</p>
                    <p className="text-slate-500 font-bold text-sm">Dr. Rupani Lingaswamy</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6 group">
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-all duration-500">
                    <Mail className="w-8 h-8 text-accent group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Email Support</h4>
                    <p className="text-lg font-black text-dark-black">rkprojects.lrs@gmail.com</p>
                    <p className="text-slate-500 font-bold text-sm italic">dr.lingaswamy.r@rkprojects.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6 group">
                  <div className="w-16 h-16 rounded-2xl bg-dark-black/5 flex items-center justify-center flex-shrink-0 group-hover:bg-dark-black transition-all duration-500">
                    <MapPin className="w-8 h-8 text-dark-black group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Headquarters</h4>
                    <p className="text-lg font-black text-dark-black leading-snug">
                      H No: 17-1-473/72/A, Road No 2,<br />
                      Krishna Nagar Colony, Saidabad,<br />
                      Hyderabad – 500059
                    </p>
                  </div>
                </div>
              </div>

              {/* Social/Trust */}
              <div className="mt-16 pt-10 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Certification</p>
                  <p className="text-dark-black font-black">ISO 9001:2015 Certified</p>
                </div>
                <div className="flex space-x-3">
                   <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-dark-black hover:bg-primary hover:text-white transition-colors cursor-pointer">
                      <MessageCircle size={20} />
                   </div>
                </div>
              </div>
            </div>
            
            {/* Map Area - Simplified Professional */}
            <div className="w-full h-80 rounded-[40px] overflow-hidden relative shadow-2xl group border-4 border-white">
               <div className="absolute inset-0 bg-slate-200 group-hover:bg-slate-300 transition-colors">
                 <div className="absolute inset-0 flex items-center justify-center flex-col">
                    <div className="w-20 h-20 rounded-full bg-white/50 backdrop-blur-md flex items-center justify-center mb-4">
                      <MapPin className="w-10 h-10 text-primary animate-bounce" />
                    </div>
                    <p className="text-dark-black font-black uppercase tracking-widest text-sm">View Location on Map</p>
                 </div>
               </div>
            </div>
          </motion.div>

          {/* Contact Form - Glass Modern */}
          <motion.div 
            initial="hidden" animate="visible" variants={fadeInUp} transition={{ delay: 0.4 }}
            className="lg:sticky lg:top-32"
          >
            <div className="bg-white rounded-[40px] p-10 md:p-16 shadow-2xl border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-primary to-accent"></div>
              
              <div className="mb-12">
                <h3 className="text-4xl font-black text-dark-black mb-4 tracking-tight">Send a Message</h3>
                <p className="text-slate-500 font-medium">Complete the form below and our team will get back to you within 24 hours.</p>
              </div>
              
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-6 py-5 rounded-2xl bg-slate-50 border border-transparent focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-bold"
                      placeholder="e.g. Rahul Sharma"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full px-6 py-5 rounded-2xl bg-slate-50 border border-transparent focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-bold"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="interest" className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Area of Interest</label>
                  <div className="relative">
                    <select 
                      id="interest" 
                      className="w-full px-6 py-5 rounded-2xl bg-slate-50 border border-transparent focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-bold appearance-none cursor-pointer"
                    >
                      <option>Civil Construction</option>
                      <option>Road Infrastructure</option>
                      <option>Heavy Machinery Fleet</option>
                      <option>Consultation</option>
                    </select>
                    <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Your Message</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    className="w-full px-6 py-5 rounded-2xl bg-slate-50 border border-transparent focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-bold resize-none"
                    placeholder="Describe your project requirements..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-dark-black text-white font-black py-6 rounded-2xl transition-all duration-500 shadow-2xl shadow-primary/30 text-xl btn-interactive"
                >
                  Request a Callback
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

    </div>
  );
}
