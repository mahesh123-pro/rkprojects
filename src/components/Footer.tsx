import Link from "next/link";
import { HardHat, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <HardHat className="text-accent h-8 w-8" />
              <span className="font-bold text-2xl tracking-tighter text-white">
                RK<span className="text-accent">Projects</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Delivering excellence in civil construction, infrastructure, and heavy machinery services with unyielding quality and precision.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-400 hover:text-accent transition">Home</Link></li>
              <li><Link href="/#services" className="text-gray-400 hover:text-accent transition">Our Services</Link></li>
              <li><Link href="/portfolio" className="text-gray-400 hover:text-accent transition">Portfolio & Implements</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-accent transition">Contact Us</Link></li>
            </ul>
          </div>

          {/* Catalog */}
          <div>
            <h4 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2 inline-block">Products & Machinery</h4>
            <ul className="space-y-3">
              <li><Link href="/services/thresher" className="text-gray-400 hover:text-accent transition">Thresher</Link></li>
              <li><Link href="/services/shredder" className="text-gray-400 hover:text-accent transition">Shredder</Link></li>
              <li><Link href="/services/chaff-cutter" className="text-gray-400 hover:text-accent transition">Chaff Cutter</Link></li>
              <li><Link href="/services/rotavator" className="text-gray-400 hover:text-accent transition">Rotavator</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2 inline-block">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-gray-400">
                <MapPin size={20} className="text-accent flex-shrink-0 mt-1" />
                <span className="text-sm">123 Industrial Area, Phase 1, Cityville, State 12345</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Phone size={20} className="text-accent flex-shrink-0" />
                <span className="text-sm">+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Mail size={20} className="text-accent flex-shrink-0" />
                <span className="text-sm">info@rkprojects.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} RK Projects. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link href="#" className="hover:text-white transition">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
