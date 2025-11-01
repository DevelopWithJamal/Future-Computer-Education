import { Code, Brain, Database, Cpu, Globe, Smartphone, ShoppingBasket } from "lucide-react";
import { useEffect, useState } from "react";
import BasicCourses from "./BasicCourses";

export default function Courses() {
  const [isVisible, setIsVisible] = useState(false);
  const whatsappNumber = "+919994707665";

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setIsVisible(true)),
      { threshold: 0.2 }
    );
    const section = document.getElementById("courses");
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const handleWhatsApp = (course: string) => {
    const msg = encodeURIComponent(`Hello, I am interested in the "${course}" course.`);
    window.open(`https://wa.me/${whatsappNumber}?text=${msg}`, "_blank");
  };

  const courses = [
    { icon: Code, title: "Python Programming", description: "Learn Python from basics to advanced with data structures, OOP, and libraries like NumPy & Pandas.", duration: "3 months", level: "Beginner to Advanced", color: "from-blue-400 to-sky-500" },
    { icon: Code, title: "Java Programming", description: "Master Java fundamentals, OOP, and backend development using modern frameworks.", duration: "3 months", level: "Beginner to Advanced", color: "from-orange-400 to-red-500" },
    { icon: Code, title: "C++ Programming", description: "Enhance your problem-solving and system-level coding skills with C++.", duration: "3 months", level: "Beginner to Advanced", color: "from-indigo-400 to-blue-600" },
    { icon: Brain, title: "AI & Generative AI", description: "Explore AI, ML, DL, and generative models like ChatGPT and Stable Diffusion.", duration: "4 months", level: "Intermediate", color: "from-purple-500 to-indigo-600" },
    { icon: Database, title: "SQL & Databases", description: "Master SQL, data modeling, and relational database design for modern applications.", duration: "2 months", level: "Beginner to Advanced", color: "from-yellow-400 to-amber-500" },
    { icon: Brain, title: "Data Science & Analytics", description: "Perform data visualization, predictive analytics, and storytelling with Power BI.", duration: "4 months", level: "Intermediate", color: "from-teal-400 to-cyan-500" },
    { icon: Globe, title: "Full Stack Development", description: "Become a complete developer mastering frontend, backend, databases, and deployment.", duration: "4 months", level: "Advanced", color: "from-blue-400 to-indigo-600" },
    { icon: Smartphone, title: "Mobile App Development", description: "Build cross-platform mobile apps for Android & iOS using Flutter or React Native.", duration: "3 months", level: "Intermediate", color: "from-pink-400 to-rose-600" },
    { icon: Cpu, title: "Robotics & IoT", description: "Design robots, work with Arduino/Raspberry Pi, and create IoT-powered solutions.", duration: "3 months", level: "All Levels", color: "from-red-400 to-rose-500" },
    { icon: Database, title: "Power BI", description: "Create dashboards and business reports with Power BI & Excel integration.", duration: "3 months", level: "Intermediate", color: "from-indigo-400 to-blue-700" },
    { icon: ShoppingBasket, title: "E-Commerce & Digital Skills", description: "Learn to build online stores, manage SEO, and run ad campaigns effectively.", duration: "3 months", level: "Intermediate", color: "from-yellow-500 to-orange-600" },
    { icon: Code, title: "CAD & Computer Design", description: "Master CAD tools for mechanical, architectural, and 3D modeling design.", duration: "3 months", level: "Intermediate", color: "from-cyan-400 to-sky-600" },
  ];

  return (
    <section
      id="courses"
      className="relative py-20 bg-gradient-to-b from-white via-blue-50/30 to-white overflow-hidden"
    >
      {/* Floating gradient lights */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl animate-float-delay"></div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Header */}
        <h2
          className={`text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Premium <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Technology Courses</span>
        </h2>
        <p
          className={`text-lg md:text-xl text-gray-600 mt-4 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Crafted by industry professionals — tailored to shape your future.
        </p>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
          {courses.map((course, i) => (
            <div
              key={i}
              className={`group bg-white/70 backdrop-blur-xl border border-gray-100 shadow-[0_8px_24px_rgba(0,0,0,0.05)] rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${course.color} flex items-center justify-center rounded-2xl mb-5 group-hover:scale-110 transition-transform duration-500`}
              >
                <course.icon size={36} className="text-white" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">{course.title}</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">{course.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 text-sm bg-gray-100 border border-gray-200 rounded-full text-gray-700">
                  {course.duration}
                </span>
                <span className="px-3 py-1 text-sm bg-gray-100 border border-gray-200 rounded-full text-gray-700">
                  {course.level}
                </span>
              </div>

              <button
                onClick={() => handleWhatsApp(course.title)}
                className="w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300"
              >
                Enquire on WhatsApp
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Floating animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(20px); }
        }
        @keyframes float-delay {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float-delay 10s ease-in-out infinite;
        }
      `}</style>

      <BasicCourses />
    </section>
  );
}
