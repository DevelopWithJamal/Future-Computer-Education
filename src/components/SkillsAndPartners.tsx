import { Laptop, Scissors, Cpu, Pencil } from 'lucide-react';
import tnSkillLogo from '../assets/tnskill-logo.png';
import vetriLogo from '../assets/vetri-logo.png'; // Add your Vetri Nichayam logo in assets

interface Course {
  name: string;
  description: string;
  icon: JSX.Element;
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
      description: 'Learn professional tailoring and garment making.',
      icon: <Scissors size={28} className="text-blue-600" />,
    },
    {
      name: 'Computer CAD Training',
      description: 'Master CAD software for engineering and design.',
      icon: <Pencil size={28} className="text-blue-600" />,
    },
    {
      name: 'Computer Fundamentals',
      description: 'Basic computer skills for office and IT jobs.',
      icon: <Laptop size={28} className="text-blue-600" />,
    },
    {
      name: 'Advanced Computer Courses',
      description: 'Programming, AI, Robotics, and more.',
      icon: <Cpu size={28} className="text-blue-600" />,
    },
  ];

  const partners: Partner[] = [
    { name: 'TN Skill', logo: tnSkillLogo, link: 'https://candidate.tnskill.tn.gov.in/skillwallet/' },
    { name: 'Vetri Nichayam', logo: vetriLogo, link: 'https://vetri-nichayam.example.com' }, // replace with actual link
  ];

  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-blue-900 mb-6">
          Skill-Based Training & Partners
        </h2>
        <p className="text-blue-700 mb-12 max-w-2xl mx-auto">
          Future Computer Education proudly partners with TN Skill and Vetri Nichayam to provide students with high-quality skill-based training programs leading to career growth and entrepreneurship.
        </p>

        {/* Partners Logos */}
        <div className="flex justify-center items-center gap-10 mb-16 flex-wrap">
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105"
            >
              <img src={partner.logo} alt={partner.name} className="rounded-md h-24" />
            </a>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-blue-200 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-4 flex justify-center">{course.icon}</div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">{course.name}</h3>
              <p className="text-blue-700">{course.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
