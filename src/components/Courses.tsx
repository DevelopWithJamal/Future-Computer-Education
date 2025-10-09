import { Code, Brain, Database, Cpu, Globe, Smartphone } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Courses() {
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

    const section = document.getElementById('courses');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const courses = [
    {
      icon: Code,
      title: 'Web Development',
      description:
        'Master HTML, CSS, JavaScript, React, Node.js, and build modern responsive websites and web applications.',
      duration: '6 months',
      level: 'Beginner to Advanced',
      color: 'from-cyan-500 to-blue-600',
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description:
        'Dive into artificial intelligence, neural networks, deep learning, and create intelligent systems.',
      duration: '8 months',
      level: 'Intermediate',
      color: 'from-blue-500 to-indigo-600',
    },
    {
      icon: Cpu,
      title: 'Robotics & IoT',
      description:
        'Build robots, program microcontrollers, work with sensors, and create IoT solutions for real-world problems.',
      duration: '7 months',
      level: 'Beginner to Advanced',
      color: 'from-indigo-500 to-purple-600',
    },
    {
      icon: Database,
      title: 'Data Science',
      description:
        'Learn data analysis, visualization, statistics, and machine learning to extract insights from data.',
      duration: '6 months',
      level: 'Intermediate',
      color: 'from-purple-500 to-pink-600',
    },
    {
      icon: Globe,
      title: 'Full Stack Development',
      description:
        'Become a complete developer with frontend, backend, databases, and deployment skills.',
      duration: '10 months',
      level: 'Advanced',
      color: 'from-pink-500 to-rose-600',
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description:
        'Create native and cross-platform mobile applications for Android and iOS using modern frameworks.',
      duration: '5 months',
      level: 'Intermediate',
      color: 'from-rose-500 to-orange-600',
    },
  ];

  return (
    <section id="courses" className="py-20 bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            Our{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Premium Courses
            </span>
          </h2>
          <p
            className={`text-xl text-gray-400 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            Industry-relevant curriculum designed to make you job-ready
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-bl-full"></div>

              <div className="p-6 relative z-10">
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${course.color} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                >
                  <course.icon size={32} className="text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {course.title}
                </h3>

                <p className="text-gray-400 mb-4 leading-relaxed">
                  {course.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm">
                    {course.duration}
                  </span>
                  <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm">
                    {course.level}
                  </span>
                </div>

                <button className="w-full py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-xl text-cyan-400 font-semibold hover:from-cyan-500 hover:to-blue-500 hover:text-white transition-all duration-300">
                  Learn More
                </button>
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
