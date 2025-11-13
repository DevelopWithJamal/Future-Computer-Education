import {
  Briefcase,
  Book,
  Cpu,
  Globe,
  Code,
  Users,
  Palette,
  Calculator,
  Laptop,
  Phone,
  MessageCircle,
} from "lucide-react";
import { motion } from "framer-motion";

// ✅ Phone Number
const PHONE_NUMBER = "+919363706033";

// ✅ Helper: WhatsApp Link Generator
const getWhatsAppLink = (course: string) =>
  `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(
    `Hello! 👋 I’m interested in the course "${course}" at Alagappa University (Challenge Study Centre, Nagapattinam). Please share more details.`
  )}`;

// ✅ Course Data
const ugCourses = [
  { title: "B.A (TAMIL)", icon: Book, desc: "Explore Tamil literature, culture, and communication." },
  { title: "B.A (ENGLISH)", icon: Book, desc: "Develop expertise in English language and communication." },
  { title: "B.SC (MATHEMATICS)", icon: Cpu, desc: "Strengthen analytical and quantitative problem-solving skills." },
  { title: "B.SC (COMPUTER SCIENCE)", icon: Code, desc: "Learn programming, data structures, and system design." },
  { title: "B.COM (COMPUTER APPLICATION)", icon: Cpu, desc: "Blend commerce with IT and business application tools." },
  { title: "B.B.A", icon: Briefcase, desc: "Gain essential knowledge in business and management." },
  { title: "B.COM", icon: Briefcase, desc: "Build a strong foundation in finance, accounts, and business." },
];

const mbaSpecializations = [
  "Human Resource Management",
  "Marketing Management",
  "Financial Management",
  "International Business",
  "Corporate Secretaryship",
  "Project Management",
  "Corporate Management",
  "Banking and Finance",
  "Hospital Management",
  "Tourism Management",
  "Education Management",
  "Retail Management",
  "Technology Management",
  "Logistics Management",
  "System Management",
  "Co-Operative Management",
];

const diplomaCourses = [
  { title: "AI & Machine Learning", icon: Cpu, desc: "Master AI techniques, data science, and intelligent systems." },
  { title: "Computer Applications", icon: Code, desc: "Develop computer skills and application software knowledge." },
  { title: "Cyber Security", icon: Globe, desc: "Learn to protect systems and networks from cyber threats." },
  { title: "Montessori Education", icon: Users, desc: "Train to nurture young minds with Montessori methods." },
];

const certificateCourses = [
  { title: "Astrology (Tamil Medium)", icon: Globe, desc: "Learn the science of astrology in Tamil medium." },
  { title: "C Programming", icon: Code, desc: "Understand programming fundamentals using C language." },
  { title: "Computer Fundamentals", icon: Laptop, desc: "Gain basic computer literacy and digital knowledge." },
  { title: "Gender Studies", icon: Users, desc: "Study gender roles, equality, and empowerment." },
  { title: "GST", icon: Calculator, desc: "Learn Goods and Services Tax for business professionals." },
  { title: "Library and Information Science (LIS)", icon: Book, desc: "Train to manage libraries and information systems." },
  { title: "Office Automation", icon: Briefcase, desc: "Enhance productivity using modern office tools." },
  { title: "Web Designing", icon: Palette, desc: "Create responsive and beautiful websites." },
];

// ✅ Course Card Component
function CourseCard({
  title,
  desc,
  Icon,
  color,
}: {
  title: string;
  desc: string;
  Icon: React.ElementType;
  color?: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className="group bg-white/80 backdrop-blur-lg border border-gray-200 rounded-2xl shadow-md hover:shadow-xl p-6 flex flex-col justify-between text-center transition-all duration-300"
    >
      <div className="flex flex-col items-center">
        <div
          className={`w-16 h-16 flex items-center justify-center mb-4 rounded-full ${
            color || "bg-blue-100"
          } group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon
            size={28}
            className={`${color ? "text-white" : "text-blue-600"}`}
          />
        </div>
        <h3 className="font-semibold text-lg text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-4">{desc}</p>
      </div>
      <a
        href={getWhatsAppLink(title)}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-green-600 transition-colors"
      >
        <MessageCircle size={16} /> Enquire on WhatsApp
      </a>
    </motion.div>
  );
}

// ✅ Reusable Section
function CourseSection({
  title,
  courses,
  color,
}: {
  title: string;
  courses: { title: string; desc?: string; icon?: React.ElementType }[];
  color: string;
}) {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-blue-900">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {courses.map((course, i) => (
          <motion.div
            key={course.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05, duration: 0.4 }}
            viewport={{ once: true }}
          >
            <CourseCard
              title={course.title}
              desc={course.desc || "Explore your career path with us."}
              Icon={course.icon || Briefcase}
              color={color}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ✅ Optional Contact Placeholder
function Contact() {
  return (
    <div className="bg-blue-900 text-white py-10 text-center">
      <h3 className="text-2xl font-semibold mb-2">Get in Touch</h3>
      <p>Call us at <span className="font-bold">{PHONE_NUMBER}</span> or chat on WhatsApp for details.</p>
    </div>
  );
}

// ✅ Main Component
export default function AlagappaUniversity() {
  return (
    <section className="relative w-full bg-gradient-to-b from-white via-blue-50 to-blue-100 overflow-hidden">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-md shadow-md border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center px-6 md:px-10">
          <div className="flex items-center gap-3">
            <img
              src="https://da.alagappauniversity.ac.in/Assets/img/logo/home_logo.png"
              alt="Alagappa University Logo"
              className="w-12 h-12 object-contain"
            />
            <div>
              <h1 className="text-lg md:text-xl font-bold text-blue-900">
                Alagappa University
              </h1>
              <p className="text-sm text-gray-600 font-medium">
                Challenge Study Centre - Nagapattinam
              </p>
              <span className="text-xs text-green-700 font-semibold bg-green-100 px-2 py-0.5 rounded-full">
                Offline Centre
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-2 md:mt-0">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="flex items-center gap-2 text-blue-700 font-semibold hover:text-blue-900"
            >
              <Phone size={18} /> {PHONE_NUMBER}
            </a>
            <a
              href={getWhatsAppLink("General Enquiry")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 text-white px-3 py-1.5 rounded-full hover:bg-green-600 transition-colors"
            >
              <MessageCircle size={16} /> WhatsApp
            </a>
          </div>
        </div>
      </header>

      {/* Main Body */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 text-center pt-28">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
          Distance & Online Admission Centre
        </h2>
        <p className="text-slate-700 mb-2 font-medium">
          A+ Grade by NAAC (CGPA: 3.64) • Category-I University by MHRD-UGC
        </p>

        <CourseSection title="Undergraduate (UG) Courses" courses={ugCourses} color="bg-blue-600" />
        <CourseSection
          title="MBA Specializations (2 Years)"
          courses={mbaSpecializations.map((spec) => ({
            title: spec,
            icon: Briefcase,
            desc: "Specialize in your chosen MBA field.",
          }))}
          color="bg-indigo-600"
        />
        <CourseSection title="Diploma Courses" courses={diplomaCourses} color="bg-green-600" />
        <CourseSection title="Certificate Courses" courses={certificateCourses} color="bg-purple-600" />

        {/* Location */}
        <div className="mt-16 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Challenge Study Centre - Nagapattinam
          </h2>
          <p className="text-slate-700">
            Neela Mela Vadam Pokki Street, Near Devi Theatre (Professional Courier Upstairs)
          </p>
        </div>
      </div>

      <Contact />
    </section>
  );
}
