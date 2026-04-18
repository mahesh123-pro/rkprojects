"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";

export default function ContactPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="w-full bg-surface min-h-screen">
      {/* Header */}
      <div className="bg-primary py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Contact Us</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto px-4">
          Get in touch with RK Projects. Whether you need a massive infrastructure quote or specialized heavy machinery, our team is ready.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Details & Map */}
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="space-y-10">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Get In Touch</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                We're here to answer any questions you may have about our civil engineering services or our agricultural and industrial machinery.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-accent/10 p-3 rounded-full mr-4 border border-accent/20">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-primary">Phone</h4>
                  <p className="text-gray-600 mt-1">+91 98765 43210</p>
                  <p className="text-gray-600">+91 12345 67890</p>
                </div>
              </div>
              
              <div className="flex items-start border-t border-gray-100 pt-6">
                <div className="bg-accent/10 p-3 rounded-full mr-4 border border-accent/20">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-primary">Email</h4>
                  <p className="text-gray-600 mt-1">info@rkprojects.com</p>
                  <p className="text-gray-600">sales@rkprojects.com</p>
                </div>
              </div>

              <div className="flex items-start border-t border-gray-100 pt-6">
                <div className="bg-accent/10 p-3 rounded-full mr-4 border border-accent/20">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-primary">Office Location</h4>
                  <p className="text-gray-600 mt-1 leading-relaxed">
                    123 Industrial Area, Phase 1<br />
                    Cityville, State 12345<br />
                    India
                  </p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-64 bg-gray-200 rounded-xl overflow-hidden relative border border-gray-100 shadow-inner">
               <div className="absolute inset-0 flex items-center justify-center">
                 <p className="text-gray-500 font-medium flex flex-col items-center">
                   <MapPin className="w-8 h-8 mb-2 opacity-50" />
                   Interactive Map Area
                 </p>
               </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} transition={{ delay: 0.2 }}>
            <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-accent"></div>
              <h3 className="text-2xl font-bold text-primary mb-8">Send Us A Message</h3>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-colors"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-semibold text-gray-700 mb-2">Area of Interest</label>
                  <select 
                    id="interest" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-colors appearance-none bg-white"
                  >
                    <option>Civil Construction</option>
                    <option>Road Infrastructure</option>
                    <option>Heavy Machinery (Thresher, Shredder, etc.)</option>
                    <option>Other Services</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-colors resize-none"
                    placeholder="How can we help with your project?"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-gray-800 text-white font-bold py-4 rounded-lg transition-colors duration-300 shadow-lg text-lg"
                  >
                    Submit Inquiry
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

    </div>
  );
}
