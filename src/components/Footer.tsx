import Link from "next/link";
import { HardHat, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <HardHat className="text-accent h-8 w-8" />
              <span className="font-bold text-2xl tracking-tighter text-white">
                RK<span className="text-accent">Projects</span>
              </span>
            </Link>
            <span className="block text-accent text-xs font-bold uppercase tracking-widest mb-2">Civil Contract Works</span>
            <p className="text-blue-200 text-sm leading-relaxed mb-6">
              Delivering excellence in civil construction, infrastructure, and heavy machinery services with unyielding quality and precision under the leadership of Dr. Rupani Lingaswamy.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 border-b border-blue-800 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-blue-200 hover:text-white transition">Home</Link></li>
              <li><Link href="/#services" className="text-blue-200 hover:text-white transition">Our Services</Link></li>
              <li><Link href="/machinery" className="text-blue-200 hover:text-white transition">Machinery & Equipment</Link></li>
              <li><Link href="/portfolio" className="text-blue-200 hover:text-white transition">Portfolio & Projects</Link></li>
              <li><Link href="/contact" className="text-blue-200 hover:text-white transition">Contact Us</Link></li>
            </ul>
          </div>

          {/* Catalog */}
          <div>
            <h4 className="text-lg font-bold mb-4 border-b border-blue-800 pb-2 inline-block">Products & Machinery</h4>
            <ul className="space-y-3">
              <li><Link href="/machinery#earthmoving" className="text-blue-200 hover:text-white transition">Earthmoving Equipment</Link></li>
              <li><Link href="/machinery#construction" className="text-blue-200 hover:text-white transition">Construction Machinery</Link></li>
              <li><Link href="/machinery#terrain" className="text-blue-200 hover:text-white transition">Terrain Capability</Link></li>
              <li><Link href="/portfolio" className="text-blue-200 hover:text-white transition">Completed Projects</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4 border-b border-blue-800 pb-2 inline-block">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-blue-200">
                <MapPin size={20} className="text-accent flex-shrink-0 mt-1" />
                <span className="text-sm">
                  H No: 17-1-473/72/A, Road No 2,<br />
                  Krishna Nagar Colony, Saidabad,<br />
                  Hyderabad – 500059
                </span>
              </li>
              <li className="flex items-center space-x-3 text-blue-200">
                <Phone size={20} className="text-accent flex-shrink-0" />
                <span className="text-sm">+91 95056 50901</span>
              </li>
              <li className="flex flex-col space-y-2 text-blue-200 ml-[32px]">
                <div className="flex items-center space-x-3 -ml-[32px]">
                  <Mail size={20} className="text-accent flex-shrink-0" />
                  <span className="text-sm">rkprojects.lrs@gmail.com</span>
                </div>
                <span className="text-sm">dr.lingaswamy.r@rkprojects.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-900 pt-8 flex flex-col md:flex-row justify-between items-center text-blue-300 text-sm">
          <p>&copy; {new Date().getFullYear()} RK Projects. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link href="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
