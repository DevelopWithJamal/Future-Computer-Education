import { Briefcase } from 'lucide-react';
import FCELogo from '../assets/future-computer-education-logo.png';
import AlagappaLogo from '../assets/alagappa-logo.png';

// Import course images
import BA_Tamil from '../assets/courses/BA_Tamil.jpg';
import BA_English from '../assets/courses/BA_English.jpg';
import BSc_Math from '../assets/courses/BSc_Math.jpg';
import BSc_Computer from '../assets/courses/BSc_Computer.jpg';
import BCom_Computer from '../assets/courses/BCom_Computer.jpg';
import BBA from '../assets/courses/BBA.jpg';
import BCom from '../assets/courses/BCom.jpg';
 
import Contact from '../components/Contact';

// Similarly import PG, Diploma, Certificate images

const ugCourses = [
  { title: 'B.A (TAMIL)', image: BA_Tamil },
  { title: 'B.A (ENGLISH)', image: BA_English },
  { title: 'B.SC (MATHEMATICS)', image: BSc_Math },
  { title: 'B.SC (COMPUTER SCIENCE)', image: BSc_Computer },
  { title: 'B.COM (COMPUTER APPLICATION)', image: BCom_Computer },
  { title: 'B.B.A', image: BBA },
  { title: 'B.COM', image: BCom },
];

// Add PG, Diploma, Certificate arrays similarly
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

export default function AlagappaUniversity() {
  return (
    <section
      id="alagappa"
      className="w-full pt-32 md:pt-40 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">

        {/* Logos */}
        <div className="flex  justify-center items-center gap-6 mb-6">
         
          <img src={AlagappaLogo} alt="Alagappa University" className="w-[400px]" />
        </div>

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
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{course.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* MBA Specializations */}
        <h2 className="text-3xl font-bold mb-6 text-blue-900">MBA Specializations (2 Years)</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {mbaSpecializations.map((spec) => (
            <div
              key={spec}
              className="bg-white rounded-2xl shadow-lg p-4 hover:shadow-2xl transition-shadow duration-300"
            >
              <Briefcase size={24} className="text-blue-600 mb-2" />
              <h3 className="font-semibold text-lg">{spec}</h3>
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

        {/* Contact Section */}
        
      </div>
       <Contact></Contact> 
    </section>
   
  );
}
