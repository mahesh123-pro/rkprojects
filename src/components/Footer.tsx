import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark-black text-white pt-24 pb-12 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-[100px]"></div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand */}
          <div className="flex flex-col">
            <Link href="/" className="flex items-center mb-8 group">
              <div className="relative h-16 w-44 flex items-center justify-center transition-all duration-500 group-hover:scale-105">
                <Image 
                  src="/images/rkprojectslogo.png" 
                  alt="RK Projects Logo" 
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <span className="block text-accent text-xs font-black uppercase tracking-[0.2em] mb-4">Civil Contract Works</span>
            <p className="text-slate-400 text-sm leading-relaxed mb-8 font-medium">
              Delivering excellence in civil construction, infrastructure, and heavy machinery services with unyielding quality and precision under the leadership of Dr. Rupani Lingaswamy.
            </p>
            <div className="flex space-x-4">
              {/* Social icons placeholder if needed, or just leave as is */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-black mb-8 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-accent rounded-full"></span>
            </h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-slate-400 hover:text-white transition-all duration-300 flex items-center group"><span className="w-0 group-hover:w-4 h-[2px] bg-accent mr-0 group-hover:mr-2 transition-all"></span>Home</Link></li>
              <li><Link href="/#services" className="text-slate-400 hover:text-white transition-all duration-300 flex items-center group"><span className="w-0 group-hover:w-4 h-[2px] bg-accent mr-0 group-hover:mr-2 transition-all"></span>Our Services</Link></li>
              <li><Link href="/machinery" className="text-slate-400 hover:text-white transition-all duration-300 flex items-center group"><span className="w-0 group-hover:w-4 h-[2px] bg-accent mr-0 group-hover:mr-2 transition-all"></span>Machinery & Equipment</Link></li>
              <li><Link href="/portfolio" className="text-slate-400 hover:text-white transition-all duration-300 flex items-center group"><span className="w-0 group-hover:w-4 h-[2px] bg-accent mr-0 group-hover:mr-2 transition-all"></span>Portfolio & Projects</Link></li>
              <li><Link href="/contact" className="text-slate-400 hover:text-white transition-all duration-300 flex items-center group"><span className="w-0 group-hover:w-4 h-[2px] bg-accent mr-0 group-hover:mr-2 transition-all"></span>Contact Us</Link></li>
            </ul>
          </div>

          {/* Catalog */}
          <div>
            <h4 className="text-xl font-black mb-8 relative inline-block">
              Solutions
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-accent rounded-full"></span>
            </h4>
            <ul className="space-y-4">
              <li><Link href="/jcb-fleet" className="text-slate-400 hover:text-white transition-all duration-300 flex items-center group"><span className="w-0 group-hover:w-4 h-[2px] bg-accent mr-0 group-hover:mr-2 transition-all"></span>Elite Heavy Fleet</Link></li>
              <li><Link href="/machinery#earthmoving" className="text-slate-400 hover:text-white transition-all duration-300 flex items-center group"><span className="w-0 group-hover:w-4 h-[2px] bg-accent mr-0 group-hover:mr-2 transition-all"></span>Earthmoving Equipment</Link></li>
              <li><Link href="/machinery#construction" className="text-slate-400 hover:text-white transition-all duration-300 flex items-center group"><span className="w-0 group-hover:w-4 h-[2px] bg-accent mr-0 group-hover:mr-2 transition-all"></span>Construction Machinery</Link></li>
              <li><Link href="/machinery#terrain" className="text-slate-400 hover:text-white transition-all duration-300 flex items-center group"><span className="w-0 group-hover:w-4 h-[2px] bg-accent mr-0 group-hover:mr-2 transition-all"></span>Terrain Capability</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-black mb-8 relative inline-block">
              Contact Info
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-accent rounded-full"></span>
            </h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4 group">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                  <MapPin size={20} className="text-accent group-hover:text-white" />
                </div>
                <span className="text-slate-400 text-sm leading-relaxed font-medium">
                  H No: 17-1-473/72/A, Road No 2,<br />
                  Krishna Nagar Colony, Saidabad,<br />
                  Hyderabad – 500059
                </span>
              </li>
              <li className="flex items-center space-x-4 group">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                  <Phone size={20} className="text-accent group-hover:text-white" />
                </div>
                <span className="text-slate-400 text-sm font-bold">+91 95056 50901</span>
              </li>
              <li className="flex items-start space-x-4 group">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                  <Mail size={20} className="text-accent group-hover:text-white" />
                </div>
                <div className="flex flex-col space-y-1">
                  <span className="text-slate-400 text-sm font-bold">rkprojects.lrs@gmail.com</span>
                  <span className="text-slate-500 text-xs font-medium italic">dr.lingaswamy.r@rkprojects.com</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800/50 pt-10 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm font-medium">
          <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} RK Projects. <span className="text-slate-700 mx-2">|</span> All rights reserved.</p>
          <div className="flex space-x-8">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
