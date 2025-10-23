import { Menu, X } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

// It's good practice to define the navigation links outside the component
// if they don't depend on component props or state.
const navLinks = [
  { name: 'Home', path: '/', sectionId: 'home' },
  { name: 'About', path: '/', sectionId: 'about' },
  { name: 'Courses', path: '/', sectionId: 'courses' },
  { name: 'Skill Training', path: '/', sectionId: 'skills' },
  { name: 'Partners', path: '/', sectionId: 'partners' },
  { name: 'Alagappa', path: '/alagappa', sectionId: null },
  { name: 'Gallery', path: '/', sectionId: 'gallery' },
  { name: 'Robots', path: '/', sectionId: 'robots' },
  { name: 'Founder', path: '/', sectionId: 'founder' },
  { name: 'Contact', path: '/', sectionId: 'contact' },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // Type is updated to allow null, matching navLinks
  const [activeSection, setActiveSection] = useState<string | null>('home');
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Helper function for scrolling to avoid repetition (DRY principle)
  const scrollToSection = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 70; // Height of the navbar
      const top = section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }, []);

  // Main click handler for navigation items
  const handleClick = (path: string, sectionId: string | null) => {
    setMobileMenuOpen(false);

    // If we are not on the page of the link, navigate first
    if (path !== location.pathname) {
      navigate(path);
      // If there's a sectionId, we need to wait for the new page
      // to render before we can scroll.
      if (sectionId) {
        setTimeout(() => scrollToSection(sectionId), 100);
      }
    } else if (sectionId) {
      // If we are already on the right page, just scroll.
      scrollToSection(sectionId);
    }
  };

  // Effect to lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'auto';
    // Cleanup function to restore scroll on component unmount
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenuOpen]);

  // Effect for scroll-based UI changes (navbar style and active link)
  useEffect(() => {
    const handleScroll = () => {
      // 1. Handle navbar background change
      setScrolled(window.scrollY > 50);

      // 2. Determine the active section
      let currentSection: string | null = null;
      // Iterate backwards to find the last section that has been scrolled past
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const link = navLinks[i];
        if (link.sectionId) {
          const section = document.getElementById(link.sectionId);
          if (section && section.offsetTop - 80 <= window.scrollY) {
            currentSection = link.sectionId;
            break; // Exit loop once the top-most visible section is found
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Empty dependency array means this runs once on mount

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
        <Link to="/" onClick={() => handleClick('/', 'home')} className="flex items-center space-x-2">
          <span className="flex justify-center gap-2 items-center text-xl font-bold text-blue-900 tracking-tight">
            <h1 className="text-4xl text-red-600">FUTURE</h1> COMPUTER EDUCATION
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            // FIX: Use <a> tags for navigation for accessibility and SEO
            <a
              key={link.name}
              href={link.path} // Provide a valid href
              onClick={(e) => {
                e.preventDefault(); // Prevent default link behavior
                handleClick(link.path, link.sectionId);
              }}
              className={`text-slate-700 transition-colors duration-300 relative group font-medium cursor-pointer ${
                activeSection === link.sectionId ? 'text-blue-600' : ''
              }`}
            >
              {link.name}
              <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                  activeSection === link.sectionId ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-slate-900"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white border-t border-gray-200 animate-fade-in h-screen overflow-y-auto">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              onClick={(e) => {
                e.preventDefault();
                handleClick(link.path, link.sectionId);
              }}
              className={`block py-3 w-full text-left font-medium transition-colors duration-300 ${
                activeSection === link.sectionId ? 'text-blue-600' : 'text-gray-700'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}