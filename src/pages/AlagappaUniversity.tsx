import { Briefcase, Book, Cpu, Globe, Code, Users, Palette, Calculator, Laptop } from 'lucide-react';
import Contact from '../components/Contact';

// UG Courses
const ugCourses = [
  { title: 'B.A (TAMIL)', icon: Book },
  { title: 'B.A (ENGLISH)', icon: Book },
  { title: 'B.SC (MATHEMATICS)', icon: Cpu },
  { title: 'B.SC (COMPUTER SCIENCE)', icon: Code },
  { title: 'B.COM (COMPUTER APPLICATION)', icon: Cpu },
  { title: 'B.B.A', icon: Briefcase },
  { title: 'B.COM', icon: Briefcase },
];

// MBA Specializations
const mbaSpecializations = [
  'Human Resource Management',
  'Marketing Management',
  'Financial Management',
  'International Business',
  'Corporator Secretaryship',
  'Project Management',
  'Corporate Management',
  'Banking and Finance',
  'Hospital Management',
  'Tourism Management',
  'Education Management',
  'Retail Management',
  'Technology Management',
  'Logistics Management',
  'System Management',
  'Co-Operative Management',
];

// Diploma Courses
const diplomaCourses = [
  { title: 'AI & Machine Learning', icon: Cpu },
  { title: 'Computer Applications', icon: Code },
  { title: 'Cyber Security', icon: Globe },
  { title: 'Montessori Education', icon: Users },
];

// Certificate Courses
const certificateCourses = [
  { title: 'Astrology (Tamil Medium)', icon: Globe },
  { title: 'C Programming', icon: Code },
  { title: 'Computer Fundamentals', icon: Laptop },
  { title: 'Gender Studies', icon: Users },
  { title: 'GST', icon: Calculator },
  { title: 'Library and Information Science (LIS)', icon: Book },
  { title: 'Office Automation', icon: Briefcase },
  { title: 'Web Designing', icon: Palette },
];

export default function AlagappaUniversity() {
  return (
    <section
      id="alagappa"
      className="w-full pt-32 md:pt-40 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
          Alagappa University - Distance and Online Admission Centre
        </h1>
        <p className="text-slate-700 mb-4">
          A+ Grade by NAAC (CGPA: 3.64), Category-I University by MHRD - UGC, Nagapattinam Centre
        </p>
        <p className="text-slate-800 mb-12 font-medium">
          📞 93 63 70 60 33 | 📞 97 88 56 23 33
        </p>

        {/* UG Courses */}
        <h2 className="text-3xl font-bold mb-6 text-blue-900">UG Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {ugCourses.map((course) => (
            <div
              key={course.title}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center"
            >
              <course.icon size={36} className="text-blue-600 mb-4" />
              <h3 className="font-semibold text-lg">{course.title}</h3>
            </div>
          ))}
        </div>

        {/* MBA Specializations */}
        <h2 className="text-3xl font-bold mb-6 text-blue-900">MBA Specializations (2 Years)</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {mbaSpecializations.map((spec) => (
            <div
              key={spec}
              className="bg-white rounded-2xl shadow-lg p-4 hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center"
            >
              <Briefcase size={24} className="text-blue-600 mb-2" />
              <h3 className="font-semibold text-lg">{spec}</h3>
            </div>
          ))}
        </div>

        {/* Diploma Courses */}
        <h2 className="text-3xl font-bold mb-6 text-blue-900">Diploma Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {diplomaCourses.map((course) => (
            <div
              key={course.title}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center"
            >
              <course.icon size={36} className="text-green-600 mb-4" />
              <h3 className="font-semibold text-lg">{course.title}</h3>
            </div>
          ))}
        </div>

        {/* Certificate Courses */}
        <h2 className="text-3xl font-bold mb-6 text-blue-900">Certificate Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {certificateCourses.map((course) => (
            <div
              key={course.title}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center"
            >
              <course.icon size={36} className="text-purple-600 mb-4" />
              <h3 className="font-semibold text-lg">{course.title}</h3>
            </div>
          ))}
        </div>

        {/* Location */}
        <h2 className="text-2xl font-bold mb-4 text-slate-900">
          Challenge Study Centre - Nagapattinam
        </h2>
        <p className="text-slate-700 mb-6">
          Neela Mela Vadam Pokki Street, (Near Devi Theatre - Professional Courier Upstairs)
        </p>
      </div>

      <Contact />
    </section>
  );
}
