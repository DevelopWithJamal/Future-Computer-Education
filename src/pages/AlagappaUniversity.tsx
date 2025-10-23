'use client'

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
  'Corporate Secretaryship',
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

function CourseCard({ title, Icon, color }: { title: string; Icon: any; color?: string }) {
  return (
    <div className={`bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center`}>
      <div className={`w-16 h-16 flex items-center justify-center mb-4 rounded-full ${color || 'bg-blue-100'}`}>
        <Icon size={28} className={`${color ? 'text-white' : 'text-blue-600'}`} />
      </div>
      <h3 className="font-semibold text-lg text-gray-900">{title}</h3>
    </div>
  );
}

export default function AlagappaUniversity() {
  return (
    <section id="alagappa" className="w-full pt-28 md:pt-36 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
          Alagappa University - Distance & Online Admission Centre
        </h1>
        <p className="text-slate-700 mb-2">
          A+ Grade by NAAC (CGPA: 3.64), Category-I University by MHRD - UGC, Nagapattinam Centre
        </p>
        <p className="text-slate-800 mb-12 font-medium">
          📞 9363706033 | 📞 9788562333
        </p>

        {/* UG Courses */}
        <h2 className="text-3xl font-bold mb-6 text-blue-900">UG Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {ugCourses.map((course) => (
            <CourseCard key={course.title} title={course.title} Icon={course.icon} />
          ))}
        </div>

        {/* MBA Specializations */}
        <h2 className="text-3xl font-bold mb-6 text-blue-900">MBA Specializations (2 Years)</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {mbaSpecializations.map((spec) => (
            <CourseCard key={spec} title={spec} Icon={Briefcase} color="bg-blue-600" />
          ))}
        </div>

        {/* Diploma Courses */}
        <h2 className="text-3xl font-bold mb-6 text-blue-900">Diploma Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {diplomaCourses.map((course) => (
            <CourseCard key={course.title} title={course.title} Icon={course.icon} color="bg-green-500" />
          ))}
        </div>

        {/* Certificate Courses */}
        <h2 className="text-3xl font-bold mb-6 text-blue-900">Certificate Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {certificateCourses.map((course) => (
            <CourseCard key={course.title} title={course.title} Icon={course.icon} color="bg-purple-500" />
          ))}
        </div>

        {/* Location */}
        <h2 className="text-2xl font-bold mb-2 text-slate-900">
          Challenge Study Centre - Nagapattinam
        </h2>
        <p className="text-slate-700 mb-10">
          Neela Mela Vadam Pokki Street, (Near Devi Theatre - Professional Courier Upstairs)
        </p>
      </div>

      {/* Contact Form */}
      <Contact />
    </section>
  );
}
