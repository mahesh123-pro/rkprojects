import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a 
      href="https://wa.me/919505650901" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 md:bottom-10 md:right-10 bg-[#25D366] hover:bg-[#20b858] text-white p-3 md:p-4 rounded-full shadow-2xl transition-transform hover:scale-110 z-[9999] flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} className="md:w-8 md:h-8" />
      <span className="absolute right-full mr-4 bg-white text-gray-800 font-bold px-4 py-2 rounded shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
        Chat on WhatsApp
      </span>
    </a>
  );
}
