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
      colorFrom: 'from-blue-500',
      colorTo: 'to-purple-500',
    },
    {
      icon: Users,
      title: 'Expert Trainers',
      description:
        'Learn from industry professionals with 10+ years of experience in AI, robotics, and software development.',
      colorFrom: 'from-green-400',
      colorTo: 'to-blue-500',
    },
    {
      icon: Award,
      title: '100% Placement Support',
      description:
        'Comprehensive career guidance, mock interviews, and dedicated placement assistance to launch your tech career.',
      colorFrom: 'from-yellow-400',
      colorTo: 'to-orange-500',
    },
    {
      icon: Zap,
      title: 'Hands-On Projects',
      description:
        'Build real-world projects and gain practical experience with cutting-edge technologies and robotics kits.',
      colorFrom: 'from-pink-500',
      colorTo: 'to-red-500',
    },
  ];

  return (
    <section id="about" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-extrabold mb-4 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Why Choose{' '}
            <span className="text-blue-900">Future Computer Education</span>
          </h2>
          <p
            className={`text-lg md:text-xl text-gray-700 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            We provide world-class training with a perfect blend of theory, practical knowledge, and career-focused guidance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`group relative bg-white rounded-3xl p-8 border border-gray-200 hover:shadow-2xl transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div
                className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.colorFrom} ${feature.colorTo} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
              >
                <feature.icon size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-300 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
