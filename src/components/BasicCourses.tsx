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

// NOTE: Removed useState and useEffect (Intersection Observer) for guaranteed visibility

export default function BasicCourses() {
  const whatsappNumber = "+919994707665"; // your WhatsApp number

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
    { icon: Keyboard, title: "Typing Practice (English & Tamil)", description: "Improve typing accuracy and speed for competitive exams and office jobs.", duration: "1 Month", level: "Beginner" },
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
    // Ensured generous mobile padding (px-4)
    <section id="basic-courses" className="py-12 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 text-center">
        {/* Removed all isVisible animation classes */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900">
          Basic <span className="text-blue-600">Computer Courses</span>
        </h2>
        
        {/* Removed all isVisible animation classes */}
        <p className="text-base sm:text-lg text-gray-600 mb-10 sm:mb-12 max-w-2xl mx-auto">
          Start from zero and become digitally skilled with practical computer, design, and internet training.
        </p>

        {/* Explicitly set grid-cols-1 for mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              // Removed isVisible classes and transitionDelay
              className="bg-white p-6 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              onClick={() => handleWhatsAppClick(course.title)}
            >
              <div className="w-16 h-16 bg-blue-100 text-blue-600 flex items-center justify-center rounded-xl mb-4 mx-auto">
                <course.icon size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">{course.description}</p>
              <div className="flex justify-center gap-2 text-sm text-gray-700 mb-4">
                <span className="px-3 py-1 bg-gray-100 rounded-full">{course.duration}</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full">{course.level}</span>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleWhatsAppClick(course.title);
                }}
                className="px-6 py-2 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition text-sm sm:text-base"
              >
                Enquire on WhatsApp
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}