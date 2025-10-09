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
    window.open('https://wa.me/919876543210', '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-4">
      <button
        onClick={openWhatsApp}
        className="group w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-full shadow-lg hover:shadow-green-500/50 flex items-center justify-center transition-all duration-300 hover:scale-110 animate-bounce"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle size={28} className="text-white" />
        <span className="absolute right-16 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Chat on WhatsApp
        </span>
      </button>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="group w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full shadow-lg hover:shadow-cyan-500/50 flex items-center justify-center transition-all duration-300 hover:scale-110 animate-fade-in"
          aria-label="Scroll to top"
        >
          <ArrowUp size={28} className="text-white" />
          <span className="absolute right-16 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Back to Top
          </span>
        </button>
      )}
    </div>
  );
}
