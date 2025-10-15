import { Sparkles, Laptop, Scissors, BookOpen } from 'lucide-react';
import tnskillLogo from '../assets/tnskill-logo.png';
import alagappaLogo from '../assets/alagappa-logo.png';

export default function OurServices() {
  const services = [
    {
      title: 'Free Computer Courses',
      description:
        'Organized by TNSKILL Development, these courses help students gain essential digital skills for a bright future.',
      icon: Laptop,
      logo: tnskillLogo,
    },

    {
      title: 'Distance Education',
      description:
        'Collaboration with Alagappa University providing flexible distance education programs for learners everywhere.',
      icon: BookOpen,
      logo: alagappaLogo,
    },
        {
      title: 'Tailoring Courses',
      description:
        'Affordable and practical tailoring courses designed for students to learn hands-on skills at a low cost.',
      icon: Scissors,
      logo: null,
    }   
  ];

  return (
    <section
      id="services"
      className="w-full pt-10    md:pt-1    2 bg-gradient-to-b from-white to-blue-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto pb-10 px-6 md:px-10 text-center">
        {/* Tagline */}
        <div className="inline-flex mb-6 items-center space-x-2 px-5 py-2 bg-blue-50 border border-blue-200 rounded-lg text-blue-700 text-sm font-medium mx-auto">
          <Sparkles size={16} />
          <span>Shaping Futures, One Skill at a Time</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold leading-tight text-slate-900 mb-8">
          Our Services
        </h2>

        {/* Storytelling Paragraph */}
        <p className="text-slate-700 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto mb-12 text-justify
            bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-blue-100 animate-fade-in">
          At <strong>Future Computer Education</strong>, we believe in empowering every student to achieve their dreams through practical and accessible learning.  

          Our <strong>Free Computer Courses</strong>, organized by <strong>TNSKILL Development</strong>, provide essential digital skills to help students build a strong foundation in technology and open doors to exciting career opportunities.  

          For those with creative passions, our <strong>Tailoring Courses</strong> are offered at an affordable cost, ensuring that committed students can pursue hands-on learning without financial barriers.  

          Additionally, we collaborate with <strong>Alagappa University</strong> to provide <strong>Distance Education programs</strong>, giving learners the flexibility to study from anywhere while maintaining high academic standards.  

          Each of our services is designed to inspire confidence, nurture talent, and prepare students for a brighter future in technology, craftsmanship, and lifelong learning.
        </p>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col items-center bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Icon */}
              <div className="w-16 h-16 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full mb-4">
                {service.icon && <service.icon size={28} />}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-slate-900 mb-2">{service.title}</h3>

              {/* Description */}
              <p className="text-slate-600 text-center mb-4">{service.description}</p>

              {/* Logo if exists */}
              {service.logo && (
                <img
                  src={service.logo}
                  alt={service.title}
                  className="h-10 object-contain mt-2"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
