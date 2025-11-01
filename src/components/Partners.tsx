import { useEffect, useState } from 'react';
import { Briefcase, Zap } from 'lucide-react'; 
import CourseSyllabus from './CourseSyllabus';

interface Partner {
  name: string;
  logo: string;
  description: string;
}

export default function Partners() {
  const [hasAnimated, setHasAnimated] = useState(false);

  // Intersection Observer for scroll-reveal animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) { // Only animate once
            setHasAnimated(true);
            observer.unobserve(entry.target); 
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    const section = document.getElementById('partners');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
      observer.disconnect();
    };
  }, [hasAnimated]); // Dependency on hasAnimated ensures observer runs only once

  const partners: Partner[] = [
    {
      name: 'TNSKILL',
      logo: 'https://www.tnskill.tn.gov.in/wp-content/uploads/2025/02/tnskill-logo-250x125-1.png',
      description:
        'Enhancing employability with comprehensive skill development programs across diverse sectors.',
    },
    {
      name: 'Naan Mudhalvan',
      logo: 'https://naanmudhalvan.tn.gov.in/_nuxt/img/logo.cda70ae.svg',
      description:
        'A flagship initiative focused on upskilling and career guidance in high-demand, emerging technologies.',
    },
    {
      name: 'Vetri Nichayam',
      logo: 'https://www.tnskill.tn.gov.in/wp-content/uploads/2024/05/NM_Vetri-Nichayam-e1751281172977.png',
      description:
        'Structured programs and practical training aimed at guaranteeing strong employability for students and professionals.',
    },
  ];

  return (
  <>
    <section
      id="partners"
      className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-dots-pattern opacity-10 pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className={`text-sm font-semibold text-blue-700 mb-2 tracking-wide uppercase 
            ${hasAnimated ? 'animate-fade-in' : 'opacity-0'} delay-100`}>
            <Zap size={16} className="inline mr-2 -mt-0.5 text-blue-500" /> OFFICIAL COLLABORATIONS
          </p>
          <h2
            className={`text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 
            ${hasAnimated ? 'animate-slide-up' : 'opacity-0 translate-y-8'} delay-200`}
          >
            Our Trusted <span className="bg-gradient-to-r from-blue-600 to-indigo-700 text-transparent bg-clip-text">Government Partners</span>
          </h2>
          <p
            className={`text-lg md:text-xl text-gray-700 max-w-3xl mx-auto 
            ${hasAnimated ? 'animate-slide-up' : 'opacity-0 translate-y-8'} delay-300`}
          >
            We collaborate with leading government initiatives to ensure our training programs meet
            industry standards and enhance job readiness for our students.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, idx) => (
            <div
              key={idx}
              className={`group relative bg-white rounded-2xl p-6 md:p-8 
                          border border-gray-100 
                          transform transition-all duration-700 ease-out
                          shadow-lg hover:shadow-2xl hover:shadow-blue-200/50 hover:-translate-y-2
                          ${hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                          `}
              style={{ transitionDelay: `${idx * 150 + 400}ms` }} // Staggered animation after header
            >
              <div className="flex flex-col items-center text-center">
                
                {/* Logo Container with subtle styling */}
                <div className="w-full h-24 md:h-28 flex items-center justify-center mb-4 p-3 border-b border-gray-100/70">
                  <img
                    src={partner.logo}
                    alt={partner.name + " Logo"}
                    className="max-w-full max-h-20 object-contain transition-transform duration-300 group-hover:scale-[1.05]"
                    loading="lazy"
                  />
                </div>

                {/* Name */}
                <h3 className="text-2xl font-bold mb-2 text-gray-900 transition-colors duration-300 group-hover:text-blue-700">
                  {partner.name}
                </h3>

                {/* Badge/Pill */}
                <span className="inline-flex items-center text-xs font-semibold text-white bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full px-3 py-1 mb-4 shadow-md transform group-hover:scale-105 transition-transform duration-300">
                    <Briefcase size={12} className="mr-1" /> Government Affiliated
                </span>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed text-base">
                  {partner.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Tailwind CSS Keyframes (add to your global CSS or directly in style tag for demo) */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        .animate-slide-up {
          animation: slide-up 0.7s ease-out forwards;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .bg-dots-pattern {
          background-image: radial-gradient(#d1d5db 1px, transparent 1px);
          background-size: 16px 16px;
        }
      `}</style>
    </section>
    <CourseSyllabus></CourseSyllabus>
  </>
  );
}