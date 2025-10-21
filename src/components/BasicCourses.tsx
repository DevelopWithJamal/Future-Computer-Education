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
import { useEffect, useState } from "react";

export default function BasicCourses() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById("basic-courses");
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const courses = [
    {
      icon: Monitor,
      title: "Basic Computer Fundamentals",
      description:
        "Introduction to computers, hardware, software, Windows OS, and essential tools.",
      duration: "1 Month",
      level: "Beginner",
    },
    {
      icon: FileText,
      title: "MS Office (Word, Excel, PowerPoint)",
      description:
        "Master Microsoft Office tools used in schools, offices, and business environments.",
      duration: "2 Months",
      level: "Beginner to Intermediate",
    },
    {
      icon: Calculator,
      title: "Tally Prime with GST",
      description:
        "Learn accounting, invoicing, inventory management, and GST operations with Tally.",
      duration: "2 Months",
      level: "Beginner to Intermediate",
    },
    {
      icon: BarChart,
      title: "Advanced Excel",
      description:
        "Formulas, charts, pivot tables, dashboards, and automation with Excel functions.",
      duration: "1.5 Months",
      level: "Intermediate",
    },
    {
      icon: Image,
      title: "Photoshop & CorelDRAW",
      description:
        "Design flyers, posters, and graphics for print and digital media.",
      duration: "2 Months",
      level: "Beginner to Intermediate",
    },
    {
      icon: Layers,
      title: "DTP (Desktop Publishing)",
      description:
        "PageMaker, Photoshop, and CorelDRAW for book design, magazines, and layouts.",
      duration: "2 Months",
      level: "Intermediate",
    },
    {
      icon: Globe,
      title: "Internet, Email & Online Tools",
      description:
        "Learn internet basics, Google tools, video conferencing, and email communication.",
      duration: "1 Month",
      level: "Beginner",
    },
    {
      icon: Keyboard,
      title: "Typing Practice (English & Tamil)",
      description:
        "Improve typing accuracy and speed for competitive exams and office jobs.",
      duration: "1 Month",
      level: "Beginner",
    },
    {
      icon: Shield,
      title: "Cyber Security Awareness",
      description:
        "Understand online privacy, fraud prevention, password protection, and safe browsing.",
      duration: "1 Month",
      level: "Beginner",
    },
    {
      icon: Video,
      title: "Video Editing (Filmora, Premiere Pro)",
      description:
        "Edit and create professional videos for YouTube, events, and marketing projects.",
      duration: "2 Months",
      level: "Intermediate",
    },
    {
      icon: Mic,
      title: "Digital Marketing",
      description:
        "Learn SEO, social media marketing, email campaigns, and Google Ads for businesses.",
      duration: "2 Months",
      level: "Intermediate",
    },
    {
      icon: Cpu,
      title: "Computer Hardware & Networking",
      description:
        "Understand assembling, troubleshooting, and networking fundamentals (LAN/Wi-Fi).",
      duration: "3 Months",
      level: "Intermediate",
    },
    {
      icon: Database,
      title: "MS Access & Database Basics",
      description:
        "Create databases, forms, queries, and reports using MS Access for data management.",
      duration: "1 Month",
      level: "Beginner",
    },
    {
      icon: ShoppingBag,
      title: "E-Commerce & Online Business",
      description:
        "Start an online store, use marketplaces like Amazon & Flipkart, and handle payments.",
      duration: "1.5 Months",
      level: "Intermediate",
    },
    {
      icon: PenTool,
      title: "Canva & Modern Design Tools",
      description:
        "Use Canva, Figma, and online design tools for social media and marketing creatives.",
      duration: "1 Month",
      level: "Beginner",
    },
    {
      icon: Code,
      title: "Basic HTML & Web Design",
      description:
        "Learn HTML, CSS, and build simple responsive web pages for personal projects.",
      duration: "1.5 Months",
      level: "Beginner",
    },
    {
      icon: Network,
      title: "Cloud Tools & Google Workspace",
      description:
        "Master Google Drive, Docs, Sheets, and collaboration tools for productivity.",
      duration: "1 Month",
      level: "Beginner",
    },
    {
      icon: UserCog,
      title: "Personality & Soft Skills",
      description:
        "Develop communication, confidence, teamwork, and interview preparation skills.",
      duration: "1 Month",
      level: "All Levels",
    },
  ];

  return (
    <section id="basic-courses" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
        <h2
          className={`text-4xl md:text-5xl font-bold mb-6 text-gray-900 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Basic <span className="text-blue-600">Computer Courses</span>
        </h2>
        <p
          className={`text-lg text-gray-600 mb-12 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Start from zero and become digitally skilled with practical computer, design, and internet training.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className={`bg-white p-6 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-500 hover:scale-105 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="w-16 h-16 bg-blue-100 text-blue-600 flex items-center justify-center rounded-xl mb-4 mx-auto">
                <course.icon size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <div className="flex justify-center gap-2 text-sm text-gray-700 mb-4">
                <span className="px-3 py-1 bg-gray-100 rounded-full">{course.duration}</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full">{course.level}</span>
              </div>
              <button className="px-6 py-2 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
