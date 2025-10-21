import { Code, Brain, Database, Cpu, Globe, Smartphone, ShoppingBasket } from 'lucide-react';
import { useEffect, useState } from 'react';
import { ImageAutoSlider } from './ImageAutoSlider';
import BasicCourses from './BasicCourses';

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
      title: 'Python Programming',
      description:
        'Learn Python from basics to advanced concepts, including data structures, OOP, and libraries like NumPy and Pandas.',
      duration: '3 months',
      level: 'Beginner to Advanced',
      color: 'bg-green-500',
    },
    {
      icon: Code,
      title: 'Java Programming',
      description:
        'Master Java fundamentals, object-oriented programming, and build scalable applications.',
      duration: '3 months',
      level: 'Beginner to Advanced',
      color: 'bg-orange-500',
    },
    {
      icon: Code,
      title: 'C++ Programming',
      description:
        'Develop problem-solving and system-level programming skills using C++.',
      duration: '3 months',
      level: 'Beginner to Advanced',
      color: 'bg-blue-500',
    },
    {
      icon: Brain,
      title: 'AI & Generative AI',
      description:
        'Explore artificial intelligence, machine learning, deep learning, and generative AI models to create intelligent solutions.',
      duration: '4 months',
      level: 'Intermediate',
      color: 'bg-purple-500',
    },
    {
      icon: Database,
      title: 'SQL & Databases',
      description:
        'Learn SQL, database design, queries, and data management for applications and analytics.',
      duration: '2 months',
      level: 'Beginner to Advanced',
      color: 'bg-yellow-500',
    },
    {
      icon: Brain,
      title: 'Data Science & Analytics',
      description:
        'Perform data analysis, visualization, and predictive modeling using Python, R, and tools like Power BI.',
      duration: '4 months',
      level: 'Intermediate',
      color: 'bg-teal-500',
    },
    {
      icon: Globe,
      title: 'Full Stack Development',
      description:
        'Become a complete developer with frontend, backend, databases, and deployment skills.',
      duration: '4 months',
      level: 'Advanced',
      color: 'bg-blue-400',
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description:
        'Create native and cross-platform mobile applications for Android and iOS using modern frameworks.',
      duration: '3 months',
      level: 'Intermediate',
      color: 'bg-pink-500',
    },
    {
      icon: Cpu,
      title: 'Robotics & IoT',
      description:
        'Build robots, program microcontrollers, work with sensors, and create IoT solutions.',
      duration: '3 months',
      level: 'Beginner to Advanced',
      color: 'bg-red-500',
    },
    {
      icon: Database,
      title: 'Power BI',
      description:
        'Learn to create interactive dashboards, reports, and visual insights using Power BI.',
      duration: '3 months',
      level: 'Intermediate',
      color: 'bg-indigo-500',
    },
    {
      icon: ShoppingBasket,
      title: 'E-Commerce & Digital Skills',
      description:
        'Learn to build e-commerce websites, integrate payment gateways, and optimize online business solutions.',
      duration: '3 months',
      level: 'Intermediate',
      color: 'bg-yellow-600',
    },
    {
      icon: Code,
      title: 'CAD & Computer Design',
      description:
        'Master Computer-Aided Design tools and create professional mechanical, electrical, and architectural designs.',
      duration: '3 months',
      level: 'Intermediate',
      color: 'bg-cyan-500',
    },
  ];

  return (
    <>
     <section id="courses" className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Our <span className="text-gray-900">Premium Courses</span>
          </h2>
          <p
            className={`text-xl text-gray-600 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
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
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
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

                <p className="text-gray-600 mb-4 leading-relaxed">{course.description}</p>

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
      <BasicCourses></BasicCourses>

      {/* Courses Image Slider */}
      <section className="py-20 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-12">Our Courses Gallery</h2>
        <ImageAutoSlider />
      </section>
    </section>
    </>
   
  );
}
