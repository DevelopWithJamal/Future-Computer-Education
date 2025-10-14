import { Monitor, Users, Award, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('about');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Monitor,
      title: 'Online & Offline Learning',
      description:
        'Flexible learning modes to suit your schedule. Attend live online sessions or join our state-of-the-art physical labs.',
      color: 'bg-blue-600',
    },
    {
      icon: Users,
      title: 'Expert Trainers',
      description:
        'Learn from industry professionals with 10+ years of experience in AI, robotics, and software development.',
      color: 'bg-red-500',
    },
    {
      icon: Award,
      title: '100% Placement Support',
      description:
        'Comprehensive career guidance, mock interviews, and dedicated placement assistance to launch your tech career.',
      color: 'bg-slate-800',
    },
    {
      icon: Zap,
      title: 'Hands-On Projects',
      description:
        'Build real-world projects and gain practical experience with cutting-edge technologies and robotics kits.',
      color: 'bg-blue-700',
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-50 relative overflow-hidden">

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            Why Choose{' '}
            <span className="text-slate-900">
              Future Computer Education
            </span>
          </h2>
          <p
            className={`text-xl text-slate-600 max-w-2xl mx-auto transition-all duration-1000 delay-200 font-normal ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            We provide world-class training with a perfect blend of theory and practical knowledge
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div
                className={`w-14 h-14 rounded-xl ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon size={28} className="text-white" />
              </div>

              <h3 className="text-xl font-semibold mb-3 text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                {feature.title}
              </h3>

              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
