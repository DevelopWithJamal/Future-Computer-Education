import { MessageCircle, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    window.open(
      'https://wa.me/919994707665?text=Hi%2C%20I\'m%20interested%20in%20the%20courses%20offered%20by%20Future%20Computer%20Education.',
      '_blank'
    );
  };

  return (
    <div
      className="
        fixed bottom-4 right-4 md:bottom-6 md:right-6 
        z-[9999] flex flex-col space-y-3 md:space-y-4
        pointer-events-none
      "
    >
      {/* WhatsApp Chat Button */}
      <button
        onClick={openWhatsApp}
        className="
          group pointer-events-auto w-12 h-12 md:w-14 md:h-14 
          bg-gradient-to-br from-green-500 to-green-600 
          rounded-full shadow-lg hover:shadow-green-500/50 
          flex items-center justify-center transition-all duration-300 
          hover:scale-110 active:scale-95 
          relative
        "
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle size={26} className="text-white" />
        <span
          className="
            hidden md:block absolute right-16 bg-gray-900 text-white 
            px-3 py-2 rounded-lg text-sm opacity-0 
            group-hover:opacity-100 transition-opacity duration-300 
            whitespace-nowrap
          "
        >
          Chat on WhatsApp
        </span>
      </button>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="
            group pointer-events-auto w-12 h-12 md:w-14 md:h-14 
            bg-blue-600 rounded-full shadow-lg hover:shadow-blue-600/50 
            flex items-center justify-center transition-all duration-300 
            hover:scale-105 active:scale-95 relative
          "
          aria-label="Scroll to top"
        >
          <ArrowUp size={26} className="text-white" />
          <span
            className="
              hidden md:block absolute right-16 bg-white text-slate-900 
              border border-gray-200 px-3 py-2 rounded-lg text-sm opacity-0 
              group-hover:opacity-100 transition-opacity duration-300 
              whitespace-nowrap shadow-lg font-medium
            "
          >
            Back to Top
          </span>
        </button>
      )}
    </div>
  );
}
