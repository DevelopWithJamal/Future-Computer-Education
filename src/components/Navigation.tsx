import { Menu, X, Globe, MessageCircle, ChevronDown, ChevronUp, Cpu } from 'lucide-react'; 
import { useState, useEffect, useCallback, useRef } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

// --- 1. NEW STRUCTURED MENU DATA WITH SEPARATE ROUTES ---
const structuredMenu = [
    { name: 'Home', path: '/', sectionId: 'home', type: 'single' as const },
    { 
        name: 'About', 
        type: 'dropdown' as const, 
        links: [
            { name: 'Founder', path: '/', sectionId: 'founder' },
            { name: 'Alagappa', path: '/alagappa', sectionId: null }, // Dedicated route
            { name: 'Partners', path: '/', sectionId: 'partners' },
            { name: 'About Us', path: '/', sectionId: 'about' },
        ]
    },
    { 
        name: 'Programs', 
        type: 'dropdown' as const, 
        links: [
            { name: 'Courses', path: '/', sectionId: 'courses' },
            { name: 'Skill Training', path: '/', sectionId: 'skills' },
            { name: 'Robots', path: '/', sectionId: 'robots' },
        ]
    },
    { 
        name: 'Explore', 
        type: 'dropdown' as const, 
        links: [
            { name: 'Gallery', path: '/gallery', sectionId: null }, // Dedicated route
            { name: 'Contact', path: '/contact', sectionId: null }, // Dedicated route
        ]
    },
];

// --- 2. FLAT NAV LINKS FOR SCROLL SPYING ---
const flatNavLinks = structuredMenu.flatMap(item => {
    if (item.type === 'single' && item.sectionId) {
        return [{ name: item.name, sectionId: item.sectionId }];
    }
    if (item.type === 'dropdown') {
        return item.links.filter(link => link.sectionId).map(link => ({ 
            name: link.name, 
            sectionId: link.sectionId as string
        }));
    }
    return [];
});


// 🚀 Export the Main Navigation Wrapper 🚀
export default function Navigation() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);
    const [activeSection, setActiveSection] = useState<string | null>('home');
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null); 
    
    const navigate = useNavigate();
    const location = useLocation();
    const whatsappNumber = '+919363706033'; 
    
    const HEADER_HEIGHT_CLASS = 'h-20'; 
    const HEADER_HEIGHT_PX = 80;

    const scrollToSection = useCallback((sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            const offset = HEADER_HEIGHT_PX; 
            const top = section.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    }, []);

    const handleLinkClick = (path: string, sectionId: string | null) => {
        setMobileMenuOpen(false);
        setActiveDropdown(null); 

        if (timeoutRef.current !== null) {
            clearTimeout(timeoutRef.current);
        }

        if (path !== location.pathname) {
            navigate(path);
            if (sectionId) {
                setTimeout(() => scrollToSection(sectionId), 100);
            }
        } 
        else if (sectionId) {
            scrollToSection(sectionId);
        }
    };

    const toggleMobileDropdown = (name: string) => {
        setActiveMobileDropdown(activeMobileDropdown === name ? null : name);
    };

    // --- HOVER LOGIC FUNCTIONS ---
    const handleMouseEnter = (name: string) => {
        if (timeoutRef.current !== null) {
            clearTimeout(timeoutRef.current);
        }
        setActiveDropdown(name);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setActiveDropdown(null);
        }, 200);
    };
    // --- END HOVER LOGIC ---

    useEffect(() => {
        document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'auto';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [mobileMenuOpen]);

    // Scroll Spy Logic
    useEffect(() => {
        const handleScroll = () => {
            let currentSection: string | null = null;
            const scrollOffset = HEADER_HEIGHT_PX; 

            if (location.pathname === '/') {
                for (let i = flatNavLinks.length - 1; i >= 0; i--) {
                    const link = flatNavLinks[i];
                    const section = document.getElementById(link.sectionId);
                    if (section && section.offsetTop - scrollOffset <= window.scrollY) { 
                        currentSection = link.sectionId;
                        break;
                    }
                }
                if (window.scrollY < 50) currentSection = 'home';
            }
            
            setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); 
        return () => window.removeEventListener('scroll', handleScroll);
    }, [location.pathname]);

    // Check if the current dropdown or any of its links are active
    const isDropdownActive = (items: typeof structuredMenu[number]['links']) => {
        if (location.pathname !== '/') {
            return items.some(link => link.path === location.pathname && link.sectionId === null);
        }
        return items.some(link => link.sectionId === activeSection);
    };

    return (
        <>
            {/* 🌟 Fixed Header Container (Light Theme) 🌟 */}
            <header 
                className="fixed top-0 left-0 w-full z-50 
                   bg-white/95 backdrop-blur-md 
                   shadow-lg border-b border-gray-100/50 transition-all duration-300"
            >
                <div className={`container mx-auto px-4 sm:px-6 ${HEADER_HEIGHT_CLASS} flex items-center justify-between`}>
                    
                    {/* Brand Name - FINALIZED MOBILE LOOK */}
                    <Link 
                        to="/" 
                        onClick={() => handleLinkClick('/', 'home')}
                        className="flex items-center space-x-2 shrink-0 py-2 px-3 transition-all duration-300 rounded-lg group hover:bg-blue-50/50" 
                        aria-label="Home - Future Computer Education"
                    >
                        {/* ICON: Used CPU icon for a stronger tech look */}
                        <Cpu size={24} className="text-blue-600 group-hover:text-blue-700 transition-colors duration-300 group-hover:scale-105" /> 
                        
                        {/* TEXT: Conditional Display for Mobile vs. Desktop */}
                        <span className="text-xl font-extrabold text-gray-900 whitespace-nowrap tracking-tight">
                            {/* Mobile/Small Screen: Show Full Name */}
                            <span className="inline md:hidden">Future Computer Education</span>
                            {/* Desktop/Large Screen: Show Acronym */}
                            <span className="hidden md:inline">FCE</span>
                        </span>
                        
                        {/* Secondary Text (Hidden until large screen to save space) */}
                        <span className="hidden lg:inline text-sm font-medium text-gray-600 border-l border-gray-300 pl-2">
                             Future Computer Education
                        </span>
                    </Link>

                    {/* DESKTOP: Navigation Links with Hover Dropdowns */}
                    <nav 
                        className="hidden md:flex items-center space-x-8"
                        onMouseLeave={handleMouseLeave} 
                    >
                        <div className="flex items-center space-x-6"> 
                            {structuredMenu.map((item) => (
                                <div 
                                    key={item.name} 
                                    className="relative h-full flex items-center"
                                    onMouseEnter={() => handleMouseEnter(item.name)} 
                                >
                                    
                                    {item.type === 'single' ? (
                                        <a
                                            href={item.path} 
                                            onClick={(e) => { e.preventDefault(); handleLinkClick(item.path, item.sectionId); }}
                                            className={`text-base font-medium py-1 transition-colors duration-300 relative cursor-pointer
                                                ${activeSection === item.sectionId || location.pathname === item.path
                                                    ? 'text-blue-600 font-semibold' 
                                                    : 'text-gray-600 hover:text-gray-900'
                                                }`}
                                        >
                                            {item.name}
                                        </a>
                                    ) : (
                                        <button
                                            onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)} 
                                            className={`flex items-center text-base font-medium py-1 transition-colors duration-300 relative cursor-pointer
                                                ${isDropdownActive(item.links) || activeDropdown === item.name
                                                  ? 'text-blue-600 font-semibold'
                                                  : 'text-gray-600 hover:text-gray-900'
                                                }`}
                                        >
                                            {item.name}
                                            {activeDropdown === item.name ? <ChevronUp size={16} className="ml-1" /> : <ChevronDown size={16} className="ml-1" />}
                                        </button>
                                    )}

                                    {/* Dropdown Panel */}
                                    {item.type === 'dropdown' && activeDropdown === item.name && (
                                        <div className="absolute top-full mt-6 left-1/2 transform -translate-x-1/2 min-w-[12rem] z-50 
                                                        bg-white border border-gray-200 rounded-xl shadow-xl p-2" 
                                        >
                                            {item.links.map((link) => (
                                                <a
                                                    key={link.name}
                                                    href={link.sectionId ? `#${link.sectionId}` : link.path} 
                                                    onClick={(e) => { e.preventDefault(); handleLinkClick(link.path, link.sectionId); }}
                                                    className={`block px-4 py-2 text-sm font-medium rounded-lg whitespace-nowrap transition-colors
                                                        ${(link.sectionId === activeSection && location.pathname === '/') || (link.path === location.pathname && link.sectionId === null)
                                                            ? 'bg-blue-50 text-blue-600'
                                                            : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                                                        }`}
                                                >
                                                    {link.name}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </div>
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
                        {structuredMenu.map((item) => (
                            <div key={item.name}>
                                {item.type === 'single' ? (
                                    // Mobile Single Link
                                    <a
                                        href={item.path} 
                                        onClick={(e) => { e.preventDefault(); handleLinkClick(item.path, item.sectionId); }}
                                        className={`block py-3 text-xl w-full text-center font-bold transition-colors duration-300 rounded-lg ${
                                            activeSection === item.sectionId || location.pathname === item.path
                                                ? 'text-blue-600 bg-blue-100/70' 
                                                : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                                        }`}
                                    >
                                        {item.name}
                                    </a>
                                ) : (
                                    // Mobile Dropdown Group (Click-to-open)
                                    <>
                                        <button
                                            onClick={() => toggleMobileDropdown(item.name)}
                                            className={`flex justify-between items-center py-3 px-4 text-xl w-full font-bold transition-colors duration-300 rounded-lg 
                                                ${isDropdownActive(item.links) || activeMobileDropdown === item.name
                                                   ? 'text-blue-600 bg-blue-100/70' 
                                                   : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                                                }`}
                                        >
                                            {item.name}
                                            {activeMobileDropdown === item.name ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                                        </button>
                                        
                                        {activeMobileDropdown === item.name && (
                                            <div className="flex flex-col space-y-1 p-2 bg-gray-50 rounded-lg mt-1">
                                                {item.links.map((link) => (
                                                    <a
                                                        key={link.name}
                                                        href={link.sectionId ? `#${link.sectionId}` : link.path}
                                                        onClick={(e) => { e.preventDefault(); handleLinkClick(link.path, link.sectionId); }}
                                                        className={`block py-2 px-4 text-base w-full text-left font-medium rounded-lg transition-colors duration-300
                                                            ${(link.sectionId === activeSection && location.pathname === '/') || (link.path === location.pathname && link.sectionId === null)
                                                                ? 'text-blue-600 bg-blue-200/50' 
                                                                : 'text-gray-600 hover:text-gray-800 hover:bg-gray-200'
                                                            }`}
                                                    >
                                                        {link.name}
                                                    </a>
                                                ))}
                                            </div>
                                        )}
                                    </>
                                )}
                            </div>
                        ))}
                        
                        {/* Mobile WhatsApp CTA */}
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