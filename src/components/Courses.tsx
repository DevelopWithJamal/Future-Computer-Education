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
      duration: '3 months',
      level: 'Beginner to Advanced',
      color: 'bg-gray-900',
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description:
        'Dive into artificial intelligence, neural networks, deep learning, and create intelligent systems.',
      duration: '4 months',
      level: 'Intermediate',
      color: 'bg-red-500',
    },
    {
      icon: Cpu,
      title: 'Robotics & IoT',
      description:
        'Build robots, program microcontrollers, work with sensors, and create IoT solutions for real-world problems.',
      duration: '3 months',
      level: 'Beginner to Advanced',
      color: 'bg-gray-700',
    },
    {
        icon: Database,
        title: 'Power BI',
  description:
    'Learn to create interactive dashboards, reports, and visual insights using Power BI.',
  duration: '6 months',
  level: 'Intermediate',
  color: 'bg-gray-600',     
    },
    {
      icon: Globe,
      title: 'Full Stack Development',
      description:
        'Become a complete developer with frontend, backend, databases, and deployment skills.',
      duration: '4 months',
      level: 'Advanced',
      color: 'bg-gray-500',
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description:
        'Create native and cross-platform mobile applications for Android and iOS using modern frameworks.',
      duration: '5 months',
      level: 'Intermediate',
      color: 'bg-slate-800',
    },
  ];

  return (
    <section id="courses" className="py-20 bg-gray-50 relative overflow-hidden">

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
            <span className="text-gray-900">
              Premium Courses
            </span>
          </h2>
          <p
            className={`text-xl text-gray-600 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${
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
              className={`group relative bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-gray-300 transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-bl-full"></div>

              <div className="p-6 relative z-10">
                <div
                  className={`w-16 h-16 rounded-xl ${course.color} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                >
                  <course.icon size={32} className="text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-3 text-gray-900 transition-colors duration-300">
                  {course.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {course.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-100 border border-gray-300 rounded-full text-gray-700 text-sm">
                    {course.duration}
                  </span>
                  <span className="px-3 py-1 bg-gray-100 border border-gray-300 rounded-full text-gray-700 text-sm">
                    {course.level}
                  </span>
                </div>

                <button className="w-full py-3 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300">
                  Learn More
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
