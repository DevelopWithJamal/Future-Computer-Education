import React, { useState } from "react";
import { Download, FileText, Eye, X } from "lucide-react";

const courses = [
  {
    name: "AutoCAD",
    syllabus: "/syllabus/autocad.pdf",
  },
  {
    name: "Tailoring",
    syllabus: "/syllabus/tailoring.pdf",
  },
  {
    name: "Hardware & Networking",
    syllabus: "/syllabus/hardware-network.pdf",
  },
];

export default function CourseSyllabus() {
  const [selectedPdf, setSelectedPdf] = useState(null);

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 via-white to-gray-50 text-center relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          📘 Course Syllabus
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          View or download detailed course syllabus directly from this page.
        </p>

        {/* Course Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-center"
            >
              <FileText className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-5">{course.name}</h3>

              <div className="flex gap-3">
                {/* View Button */}
                <button
                  onClick={() => setSelectedPdf(course.syllabus)}
                  className="flex items-center gap-2 bg-gray-100 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition"
                >
                  <Eye className="w-4 h-4" />
                  View
                </button>

                {/* Download Button */}
                <a
                  href={course.syllabus}
                  download
                  className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
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
      {selectedPdf && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white w-[90%] h-[90%] rounded-2xl shadow-2xl relative overflow-hidden">
            {/* Close Button */}
            <button
              onClick={() => setSelectedPdf(null)}
              className="absolute top-4 right-4 bg-gray-800 text-white p-2 rounded-full hover:bg-red-600 transition"
            >
              <X className="w-5 h-5" />
            </button>

            {/* PDF iframe */}
            <iframe
              src={selectedPdf}
              title="PDF Viewer"
              className="w-full h-full rounded-2xl"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}
