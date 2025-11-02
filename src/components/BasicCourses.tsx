import {
  FileText,
  Calculator,
  Image,
  Keyboard,
  Globe,
  Database,
  Shield,
  BarChart,
  Monitor,
  Layers,
  Video,
  Cpu,
  Network,
  ShoppingBag,
  Code,
  Mic,
  PenTool,
  UserCog,
} from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function BasicCourses() {
  const [isVisible, setIsVisible] = useState(false);
  const whatsappNumber = "+919994707665";

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.1 }
    );

    const section = document.getElementById("basic-courses");
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const handleWhatsAppClick = (courseName: string) => {
    const url = `https://wa.me/${whatsappNumber}?text=Hi,%20I%20am%20interested%20in%20the%20${encodeURIComponent(
      courseName
    )}%20course.`;
    window.open(url, "_blank");
  };

  const courses = [
    { icon: Monitor, title: "Basic Computer Fundamentals", description: "Introduction to computers, hardware, software, Windows OS, and essential tools.", duration: "1 Month", level: "Beginner" },
    { icon: FileText, title: "MS Office (Word, Excel, PowerPoint)", description: "Master Microsoft Office tools used in schools, offices, and business environments.", duration: "2 Months", level: "Beginner to Intermediate" },
    { icon: Calculator, title: "Tally Prime with GST", description: "Learn accounting, invoicing, inventory management, and GST operations with Tally.", duration: "2 Months", level: "Beginner to Intermediate" },
    { icon: BarChart, title: "Advanced Excel", description: "Formulas, charts, pivot tables, dashboards, and automation with Excel functions.", duration: "1.5 Months", level: "Intermediate" },
    { icon: Image, title: "Photoshop & CorelDRAW", description: "Design flyers, posters, and graphics for print and digital media.", duration: "2 Months", level: "Beginner to Intermediate" },
    { icon: Layers, title: "DTP (Desktop Publishing)", description: "PageMaker, Photoshop, and CorelDRAW for book design, magazines, and layouts.", duration: "2 Months", level: "Intermediate" },
    { icon: Globe, title: "Internet, Email & Online Tools", description: "Learn internet basics, Google tools, video conferencing, and email communication.", duration: "1 Month", level: "Beginner" },
    { icon: Keyboard, title: "Typing Practice (English)", description: "Improve typing accuracy and speed for competitive exams and office jobs.", duration: "1 Month", level: "Beginner" },
    { icon: Shield, title: "Cyber Security Awareness", description: "Understand online privacy, fraud prevention, password protection, and safe browsing.", duration: "1 Month", level: "Beginner" },
    { icon: Video, title: "Video Editing (Filmora, Premiere Pro)", description: "Edit and create professional videos for YouTube, events, and marketing projects.", duration: "2 Months", level: "Intermediate" },
    { icon: Mic, title: "Digital Marketing", description: "Learn SEO, social media marketing, email campaigns, and Google Ads for businesses.", duration: "2 Months", level: "Intermediate" },
    { icon: Cpu, title: "Computer Hardware & Networking", description: "Understand assembling, troubleshooting, and networking fundamentals (LAN/Wi-Fi).", duration: "3 Months", level: "Intermediate" },
    { icon: Database, title: "MS Access & Database Basics", description: "Create databases, forms, queries, and reports using MS Access for data management.", duration: "1 Month", level: "Beginner" },
    { icon: ShoppingBag, title: "E-Commerce & Online Business", description: "Start an online store, use marketplaces like Amazon & Flipkart, and handle payments.", duration: "1.5 Months", level: "Intermediate" },
    { icon: PenTool, title: "Canva & Modern Design Tools", description: "Use Canva, Figma, and online design tools for social media and marketing creatives.", duration: "1 Month", level: "Beginner" },
    { icon: Code, title: "Basic HTML & Web Design", description: "Learn HTML, CSS, and build simple responsive web pages for personal projects.", duration: "1.5 Months", level: "Beginner" },
    { icon: Network, title: "Cloud Tools & Google Workspace", description: "Master Google Drive, Docs, Sheets, and collaboration tools for productivity.", duration: "1 Month", level: "Beginner" },
    { icon: UserCog, title: "Personality & Soft Skills", description: "Develop communication, confidence, teamwork, and interview preparation skills.", duration: "1 Month", level: "All Levels" },
  ];

  return (
    <section id="basic-courses" className="py-20 bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6"
        >
          <span className="text-blue-600">Basic</span> Computer Courses
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto"
        >
          Master the digital world — from typing and office tools to web design and cybersecurity.
        </motion.p>

        {/* Courses Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              whileHover={{ scale: 1.03 }}
              className="relative p-6 bg-white/70 backdrop-blur-xl border border-slate-200 rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-tr from-blue-500 to-cyan-400 rounded-2xl text-white shadow-md mb-4 group-hover:scale-110 transition-transform duration-300">
                  <course.icon size={32} />
                </div>

                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {course.title}
                </h3>

                <p className="text-slate-600 text-sm mb-4">{course.description}</p>

                <div className="flex gap-2 justify-center text-sm mb-4">
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full">
                    {course.duration}
                  </span>
                  <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full">
                    {course.level}
                  </span>
                </div>

                <button
                  onClick={() => handleWhatsAppClick(course.title)}
                  className="px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full text-sm font-semibold shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
                >
                  Enquire on WhatsApp
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating WhatsApp button */}
     
    </section>
  );
}
