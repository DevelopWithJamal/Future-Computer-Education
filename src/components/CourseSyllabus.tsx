import React, { useState } from "react";
import { Download, FileText, Eye, X, ArrowLeft } from "lucide-react";

const courses = [
  { name: "AutoCAD", syllabus: "/syllabus/autocad.pdf" },
  { name: "Tailoring", syllabus: "/syllabus/tailoring.pdf" },
  { name: "Hardware & Networking", syllabus: "/syllabus/hardware-network.pdf" },
];

export default function CourseSyllabus() {
  const [selectedCourse, setSelectedCourse] = useState<any>(null);
  const [isBack, setIsBack] = useState(false);

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-white via-sky-50 to-blue-100">
      {/* Background glow */}
      <div className="absolute -top-40 -left-32 w-96 h-96 bg-blue-200 rounded-full blur-[120px] opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-cyan-200 rounded-full blur-[140px] opacity-50"></div>

      <div className="relative max-w-6xl mx-auto px-6 text-center z-10">
        {/* Title */}
        <h2 className="text-5xl font-extrabold mb-4 text-gray-900 drop-shadow-sm">
          Course <span className="text-blue-600">Syllabus</span>
        </h2>
        <p className="text-gray-600 mb-16 text-lg">
          Browse and download professional course syllabi — crafted for modern learners.
        </p>

        {/* Course Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {courses.map((course, index) => (
            <div
              key={index}
              className="group bg-white/60 backdrop-blur-lg border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 p-8 flex flex-col items-center"
            >
              <div className="bg-gradient-to-tr from-blue-100 to-cyan-100 p-4 rounded-full mb-5 group-hover:from-cyan-200 group-hover:to-blue-200 transition-all shadow-inner">
                <FileText className="w-8 h-8 text-blue-700" />
              </div>

              <h3 className="text-xl font-semibold mb-6 text-gray-900">{course.name}</h3>

              <div className="flex gap-4">
                <button
                  onClick={() => setSelectedCourse(course)}
                  className="flex items-center gap-2 bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-blue-50 transition"
                >
                  <Eye className="w-4 h-4" />
                  View
                </button>

                <a
                  href={course.syllabus}
                  download
                  className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:opacity-90 text-white px-4 py-2 rounded-lg transition"
                >
                  <Download className="w-4 h-4" />
                  Download
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PDF Viewer Modal */}
      {selectedCourse && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-md flex flex-col items-center justify-center z-50 animate-fadeIn">
          <div className="w-[95%] h-[90%] bg-white/90 rounded-2xl overflow-hidden flex flex-col border border-gray-200 shadow-2xl relative">
            
            {/* Navbar */}
            <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-blue-100 to-cyan-100 border-b border-gray-200 shadow-sm">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    setIsBack(true);
                    setTimeout(() => {
                      setSelectedCourse(null);
                      setIsBack(false);
                    }, 200);
                  }}
                  className="flex items-center gap-2 bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 px-3 py-2 rounded-lg transition"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </button>
                <h3 className="text-lg font-semibold text-gray-800 tracking-wide">
                  {selectedCourse.name} — Syllabus
                </h3>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={selectedCourse.syllabus}
                  download
                  className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:opacity-90 text-white px-4 py-2 rounded-lg transition"
                >
                  <Download className="w-4 h-4" />
                  Download
                </a>
                <button
                  onClick={() => setSelectedCourse(null)}
                  className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full transition"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* PDF Viewer */}
            <iframe
              src={selectedCourse.syllabus}
              title="PDF Viewer"
              className={`w-full h-full flex-grow transition-all duration-500 ${
                isBack ? "opacity-0 translate-y-4" : "opacity-100"
              }`}
            ></iframe>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.97); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
