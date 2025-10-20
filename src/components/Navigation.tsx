import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface NavigationProps {
  scrolled: boolean;
}

export default function Navigation({ scrolled }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/', sectionId: 'home' },
    { name: 'About', path: '/', sectionId: 'about' },
    { name: 'Courses', path: '/', sectionId: 'courses' },
    { name: 'Services', path: '/', sectionId: 'services' },
    { name: 'Alagappa', path: '/alagappa', sectionId: null }, // new page
    { name: 'Gallery', path: '/', sectionId: 'gallery' },
    { name: 'Robots', path: '/', sectionId: 'robots' },
    { name: 'Founder', path: '/', sectionId: 'founder' },
    { name: 'Contact', path: '/', sectionId: 'contact' },
  ];

  const handleClick = (path: string, sectionId: string | null) => {
    setMobileMenuOpen(false);

    if (path === location.pathname && sectionId) {
      // On home page, scroll to section
      const section = document.getElementById(sectionId);
      if (section) {
        const offset = 70; // navbar height
        const top = section.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    } else {
      // Navigate to another page
      navigate(path);
    }
  };

  // Disable background scroll when mobile menu is open
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
          onClick={() => handleClick('/', 'home')}
        >
         
          <span className="flex justify-center gap-2 items-center text-xl font-bold text-blue-900 tracking-tight">
            <h1 className='text-4xl text-purple-600'>Future</h1> Computer Education
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleClick(link.path, link.sectionId)}
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

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white border-t border-gray-200 animate-fade-in">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleClick(link.path, link.sectionId)}
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
