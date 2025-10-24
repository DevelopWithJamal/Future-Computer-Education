import { Menu, X, Globe, MessageCircle } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

const navLinks: { name: string; path: string; sectionId: string | null }[] = [
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

// 🚀 Export the Main Navigation Wrapper 🚀
export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>('home');
  const navigate = useNavigate();
  const location = useLocation();
  const whatsappNumber = '+919363706033'; 
  
  // Define a constant for the fixed header height for consistent padding
  const HEADER_HEIGHT_CLASS = 'h-20'; // Using h-20 (5rem) for a standard header height
  const HEADER_HEIGHT_PX = 80;

  const scrollToSection = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      // Offset adjusted for the fixed header height
      const offset = HEADER_HEIGHT_PX; 
      const top = section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }, []);

  const handleClick = (path: string, sectionId: string | null) => {
    setMobileMenuOpen(false);

    if (path !== location.pathname) {
      navigate(path);
      if (sectionId) {
        setTimeout(() => scrollToSection(sectionId), 100);
      }
    } else if (sectionId) {
      scrollToSection(sectionId);
    }
  };

  useEffect(() => {
    // Prevent scrolling on the body when the mobile menu is open
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      let currentSection: string | null = null;
      // Scroll offset adjusted to match the scroll-to-section offset (80px)
      const scrollOffset = HEADER_HEIGHT_PX; 

      for (let i = navLinks.length - 1; i >= 0; i--) {
        const link = navLinks[i];
        if (link.sectionId) {
          const section = document.getElementById(link.sectionId);
          // Check if the section's top is past the top of the viewport (minus the header height)
          if (section && section.offsetTop - scrollOffset <= window.scrollY) { 
            currentSection = link.sectionId;
            break;
          }
        }
      }
      // Special case: if at the very top of the page, ensure 'home' is active
      if (window.scrollY < 50) currentSection = 'home';
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Call on mount to set initial active section
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* 🌟 Fixed Header Container (Light Theme) 🌟 */}
      <header 
        className="fixed top-0 left-0 w-full z-50 
           bg-white/95 backdrop-blur-md 
           shadow-lg border-b border-gray-100/50 transition-all duration-300"
      >
        <div className={`container mx-auto px-4 sm:px-6 ${HEADER_HEIGHT_CLASS} flex items-center justify-between`}>
          
          {/* Brand Name (Light Theme Text) */}
          <Link 
            to="/" 
            onClick={() => handleClick('/', 'home')}
            className="flex items-center space-x-2 shrink-0 py-2 group"
            aria-label="Home"
          >
            <Globe size={24} className="text-blue-600 group-hover:text-blue-500 transition-colors" /> 
            <span className="text-xl font-bold text-gray-900 whitespace-nowrap">
              Future Computer Education
            </span>
          </Link>

          {/* DESKTOP: Navigation Links (Light Theme Colors) */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-6"> 
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path === '/' && link.sectionId ? `#${link.sectionId}` : link.path} 
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(link.path, link.sectionId);
                  }}
                  className={`text-base font-medium py-1 transition-colors duration-300 relative cursor-pointer
                    ${
                      activeSection === link.sectionId
                        ? 'text-blue-600 font-semibold'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* WhatsApp CTA (Light Theme Shadow) */}
            <a
              href={`https://wa.me/${whatsappNumber.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white font-medium py-2 px-4 rounded-full text-sm hover:bg-green-600 transition-colors duration-200 shadow-lg shadow-green-500/20 flex items-center space-x-1 shrink-0 ml-4"
              aria-label="Chat with us on WhatsApp"
            >
              <MessageCircle size={18} />
              <span className='hidden lg:inline'>WhatsApp</span>
            </a>
          </nav>
          
          {/* MOBILE: Toggle Button */}
          <button
            className="md:hidden p-2 bg-blue-600 text-white rounded-full shadow-lg shrink-0 hover:bg-blue-700 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* 🚀 Spacer for Content Below Fixed Header 🚀 */}
      <div className={`block ${HEADER_HEIGHT_CLASS}`}></div> 

      {/* MOBILE MENU: Full-Screen Overlay (Light Theme) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-md flex flex-col pt-20 overflow-y-auto">
          <div className="container mx-auto px-6 space-y-2 pb-10 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path === '/' && link.sectionId ? `#${link.sectionId}` : link.path}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(link.path, link.sectionId);
                }}
                className={`block py-3 text-xl w-full text-center font-bold transition-colors duration-300 rounded-lg ${
                  activeSection === link.sectionId ? 'text-blue-600 bg-blue-100/70' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href={`https://wa.me/${whatsappNumber.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-8 py-3 w-full text-center font-semibold bg-green-500 text-white rounded-full text-lg hover:bg-green-600 transition-colors shadow-xl shadow-green-500/30"
              onClick={() => setMobileMenuOpen(false)}
            >
              <MessageCircle size={20} className="inline mr-2" />
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </>
  );
}