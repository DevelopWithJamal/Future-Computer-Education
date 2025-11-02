import { Code, Brain, Database, Cpu, Globe, Smartphone, ShoppingBasket } from "lucide-react";
import { motion } from "framer-motion";
import BasicCourses from "./BasicCourses";

export default function Courses() {
  const whatsappNumber = "+919994707665";

  const handleWhatsApp = (course: string) => {
    const msg = encodeURIComponent(`Hello, I am interested in the "${course}" course.`);
    window.open(`https://wa.me/${whatsappNumber}?text=${msg}`, "_blank");
  };

  const courses = [
    {
      icon: Code,
      title: "Python Programming",
      description:
        "Master Python from basics to advanced, including data structures, OOP, and powerful libraries like NumPy & Pandas.",
      duration: "3 months",
      level: "Beginner to Advanced",
      color: "from-cyan-400 to-blue-500",
    },
    {
      icon: Code,
      title: "Java Programming",
      description: "Learn Java from scratch with OOP concepts and backend frameworks like Spring Boot.",
      duration: "3 months",
      level: "Intermediate",
      color: "from-orange-400 to-red-500",
    },
    {
      icon: Code,
      title: "C++ Programming",
      description: "Enhance problem-solving and logical thinking with one of the most powerful languages.",
      duration: "3 months",
      level: "Beginner to Advanced",
      color: "from-sky-400 to-indigo-500",
    },
    {
      icon: Brain,
      title: "AI & Generative AI",
      description:
        "Build the future with Artificial Intelligence, Machine Learning, and Generative AI tools like ChatGPT.",
      duration: "4 months",
      level: "Advanced",
      color: "from-purple-500 to-indigo-700",
    },
    {
      icon: Database,
      title: "SQL & Databases",
      description:
        "Understand database design, normalization, and query optimization in SQL and MySQL.",
      duration: "2 months",
      level: "Intermediate",
      color: "from-yellow-400 to-amber-600",
    },
    {
      icon: Globe,
      title: "Full Stack Development",
      description:
        "Learn MERN Stack, APIs, authentication, and cloud deployment for production-ready apps.",
      duration: "4 months",
      level: "Advanced",
      color: "from-blue-400 to-indigo-600",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "Build beautiful, cross-platform mobile apps using Flutter and React Native.",
      duration: "3 months",
      level: "Intermediate",
      color: "from-pink-400 to-rose-600",
    },
    {
      icon: Cpu,
      title: "Robotics & IoT",
      description:
        "Integrate sensors, microcontrollers, and IoT technologies to build smart systems.",
      duration: "3 months",
      level: "All Levels",
      color: "from-red-400 to-rose-600",
    },
    {
      icon: ShoppingBasket,
      title: "E-Commerce & Digital Skills",
      description:
        "Develop, market, and manage online businesses with SEO and ad campaign expertise.",
      duration: "3 months",
      level: "Intermediate",
      color: "from-yellow-500 to-orange-600",
    },
    {
      icon: Database,
      title: "Power BI & Data Visualization",
      description:
        "Create stunning dashboards, reports, and business intelligence insights with Power BI.",
      duration: "3 months",
      level: "Intermediate",
      color: "from-teal-400 to-cyan-500",
    },
    {
      icon: Code,
      title: "CAD & Computer Design",
      description: "Design with precision using AutoCAD and 3D tools for architecture and engineering.",
      duration: "3 months",
      level: "Intermediate",
      color: "from-cyan-400 to-blue-600",
    },
  ];

  // Motion Variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section
      id="courses"
      className="relative py-24 bg-gradient-to-br from-white via-blue-50 to-cyan-50 overflow-hidden"
    >
      {/* Soft Ambient Glows */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-cyan-200/30 blur-[180px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-300/30 blur-[180px] rounded-full" />

      <div className="relative z-10 container mx-auto px-6">
        {/* Header Motion */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Explore Our{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 text-transparent bg-clip-text">
              Premium Courses
            </span>
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            Learn with passion. Build real-world projects. Become industry-ready.
          </p>
        </motion.div>

        {/* Animated Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {courses.map((course, index) => (
            <motion.div
              key={index}
              variants={card}
              whileHover={{
                y: -8,
                scale: 1.03,
                rotateX: 2,
                rotateY: -2,
                boxShadow: "0px 15px 30px rgba(56,189,248,0.25)",
              }}
              transition={{ type: "spring", stiffness: 150, damping: 12 }}
              className="group relative bg-white/80 backdrop-blur-lg border border-gray-100 shadow-md rounded-3xl p-8 transition-all duration-500 hover:shadow-2xl hover:border-cyan-300"
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 bg-gradient-to-br ${course.color} flex items-center justify-center rounded-2xl mb-5 shadow-lg shadow-cyan-200/40`}
              >
                <course.icon size={34} className="text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{course.title}</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">{course.description}</p>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-5">
                <span className="px-3 py-1 text-sm bg-cyan-50 border border-cyan-100 rounded-full text-cyan-700">
                  {course.duration}
                </span>
                <span className="px-3 py-1 text-sm bg-blue-50 border border-blue-100 rounded-full text-blue-700">
                  {course.level}
                </span>
              </div>

              {/* WhatsApp CTA */}
              <motion.button
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleWhatsApp(course.title)}
                className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300"
              >
                Enquire on WhatsApp
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Basic Courses Section */}
      <div className="mt-24">
        <BasicCourses />
      </div>
    </section>
  );
}
