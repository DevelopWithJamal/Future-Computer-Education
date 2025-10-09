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
      color: 'from-cyan-500 to-blue-600',
    },
    {
      icon: Users,
      title: 'Expert Trainers',
      description:
        'Learn from industry professionals with 10+ years of experience in AI, robotics, and software development.',
      color: 'from-blue-500 to-indigo-600',
    },
    {
      icon: Award,
      title: '100% Placement Support',
      description:
        'Comprehensive career guidance, mock interviews, and dedicated placement assistance to launch your tech career.',
      color: 'from-indigo-500 to-purple-600',
    },
    {
      icon: Zap,
      title: 'Hands-On Projects',
      description:
        'Build real-world projects and gain practical experience with cutting-edge technologies and robotics kits.',
      color: 'from-purple-500 to-pink-600',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

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
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Future Computer Education
            </span>
          </h2>
          <p
            className={`text-xl text-gray-400 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${
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
              className={`group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon size={28} className="text-white" />
              </div>

              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-cyan-400 transition-colors duration-300">
                {feature.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>

              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
