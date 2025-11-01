import { useEffect, useState } from 'react';
import { Monitor, Scissors, Network } from 'lucide-react';

interface Skill {
  title: string;
  icon: React.ReactNode;
  description: string;
}

export default function SkillTraining() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('skills');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const skills: Skill[] = [
    {
      title: 'AutoCAD',
      icon: <Monitor size={28} />,
      description: 'Professional 2D & 3D drafting skills for engineering and design projects.',
    },
    {
      title: 'Tailoring',
      icon: <Scissors size={28} />,
      description: 'Hands-on stitching, designing, and garment making techniques.',
    },
    {
      title: 'Hardware & Networking',
      icon: <Network size={28} />,
      description: 'Learn computer hardware assembly, system troubleshooting, and network setup with practical sessions.',
    },
  ];

  return (
    <section id="skills" className="py-24 bg-white/90 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-extrabold mb-4 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Our <span className="text-blue-900">Skill Training Courses</span>
          </h2>
          <p
            className={`text-lg md:text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            We provide government-approved skill training programs to empower students with practical skills.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className={`group relative bg-white rounded-3xl p-8 border border-gray-200 hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-500 flex flex-col items-center text-center ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              {/* Gradient Circle with Icon */}
              <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-blue-100 to-purple-100 flex items-center justify-center mb-6 shadow-lg transform transition-transform duration-300 group-hover:scale-105">
                {skill.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                {skill.title}
              </h3>
              <div className="h-1 w-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
