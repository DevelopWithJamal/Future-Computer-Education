import { Laptop, Scissors, Cpu, Pencil } from 'lucide-react';
import tnSkillLogo from '../assets/tnskill-logo.png';
import vetriLogo from '../assets/vetri-logo.png'; // Vetri Nichayam logo in assets

interface Course {
  name: string;
  description: string;
  icon: JSX.Element;
  category: string;
}

interface Partner {
  name: string;
  logo: string;
  link: string;
}

export default function SkillsAndPartners(): JSX.Element {
  const courses: Course[] = [
    {
      name: 'Tailoring Courses',
      description: 'Professional tailoring and garment making with hands-on training.',
      icon: <Scissors size={28} className="text-white" />,
      category: 'Tailoring',
    },
    {
      name: 'Computer CAD Training',
      description: 'Master CAD software for engineering, design, and modeling.',
      icon: <Pencil size={28} className="text-white" />,
      category: 'CAD',
    },
    {
      name: 'Computer Fundamentals',
      description: 'Basic computer skills for office, IT, and career readiness.',
      icon: <Laptop size={28} className="text-white" />,
      category: 'Computers',
    },
    {
      name: 'Advanced Computer Courses',
      description: 'Programming, AI, Robotics, and other advanced technology skills.',
      icon: <Cpu size={28} className="text-white" />,
      category: 'Programming',
    },
  ];

  const partners: Partner[] = [
    { name: 'TN Skill', logo: tnSkillLogo, link: 'https://candidate.tnskill.tn.gov.in/skillwallet/' },
    { name: 'Vetri Nichayam', logo: vetriLogo, link: 'https://vetri-nichayam.example.com' }, // replace with actual link
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">
          Skill-Based Training & Partners
        </h2>
        <p className="text-blue-700 max-w-3xl mx-auto mb-16 text-lg md:text-xl">
          Future Computer Education partners with TN Skill and Vetri Nichayam to provide high-quality skill-based training programs designed for career growth, entrepreneurship, and hands-on expertise.
        </p>

        {/* Partners Carousel */}
        <div className="flex justify-center items-center gap-12 mb-20 flex-wrap">
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-4 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center"
            >
              <img src={partner.logo} alt={partner.name} className="h-24 md:h-28 object-contain" />
            </a>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="group relative bg-white rounded-3xl shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-tr from-blue-400 to-purple-500 rounded-full opacity-20 transform rotate-45"></div>
              <div className="p-6 relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {course.icon}
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2 text-center">{course.name}</h3>
                <p className="text-gray-700 text-center text-sm md:text-base">{course.description}</p>
                <span className="mt-4 inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                  {course.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
