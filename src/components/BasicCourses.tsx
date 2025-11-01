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
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-xl transition-all duration-300 z-50"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
          <path d="M12 0C5.373 0 0 5.373 0 12a11.94 11.94 0 0 0 1.6 6L0 24l6.2-1.63A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm6.21 17.49c-.26.74-1.52 1.4-2.09 1.49-.55.08-1.24.11-2.01-.13-.47-.15-1.08-.35-1.86-.69-3.26-1.42-5.38-4.76-5.55-4.98-.16-.22-1.32-1.76-1.32-3.36 0-1.6.83-2.38 1.13-2.71.3-.33.65-.41.86-.41.22 0 .43 0 .62.01.2.01.46-.07.73.55.27.64.93 2.22 1.01 2.38.08.16.13.34.02.55-.11.21-.16.34-.32.53-.16.19-.33.43-.47.58-.15.16-.3.34-.13.66.16.33.72 1.18 1.54 1.91 1.06.95 1.95 1.25 2.28 1.4.33.14.52.12.7-.07.18-.19.81-.94 1.03-1.27.22-.33.43-.27.73-.16.3.11 1.93.91 2.26 1.07.33.16.55.25.63.39.08.14.08.81-.18 1.55z"/>
        </svg>
      </a>
    </section>
  );
}
