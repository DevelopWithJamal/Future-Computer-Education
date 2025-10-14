  import { Menu, X } from 'lucide-react';
  import { useState, useEffect } from 'react';

  interface NavigationProps {
    scrolled: boolean;
  }

  export default function Navigation({ scrolled }: NavigationProps) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = [
      { name: 'Home', id: 'home' },
      { name: 'About', id: 'about' },
      { name: 'Our Services', id: 'services' }, // Updated
      { name: 'Gallery', id: 'gallery' },
      { name: 'Robots', id: 'robots' },
      { name: 'Founder', id: 'founder' },
      { name: 'Contact', id: 'contact' },
    ];

    // Smooth scroll handler
    const handleScrollToSection = (id: string) => {
      const section = document.getElementById(id);
      if (section) {
        const offset = 70; // height of navbar
        const top = section.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
      setMobileMenuOpen(false);
    };

    // Disable body scroll when mobile menu is open
    useEffect(() => {
      document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'auto';
    }, [mobileMenuOpen]);

    return (
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white shadow-sm border-b border-gray-200'
            : 'bg-white/90 backdrop-blur-sm'
        }`}
      >
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => handleScrollToSection('home')}
          >
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-600 text-white font-bold">
              F
            </div>
            <span className="text-xl font-bold text-blue-900 tracking-tight">
              Future Computer Education
            </span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleScrollToSection(link.id)}
                className="text-slate-700 hover:text-blue-600 transition-colors duration-300 relative group font-medium"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden px-4 pb-4 space-y-2 bg-white border-t border-gray-200 animate-fade-in">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleScrollToSection(link.id)}
                className="block text-gray-700 hover:text-blue-600 transition-colors duration-300 py-2 w-full text-left font-medium"
              >
                {link.name}
              </button>
            ))}
          </div>
        )}
      </nav>
    );
  }
    