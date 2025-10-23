'use client'

import { Quote, Award, Target, Heart } from 'lucide-react';
import { useEffect, useState } from 'react';
import SplineDemo from './SplineDemo';

export default function Founder() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('founder');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="founder"
      className="pt-20 bg-gray-900 relative overflow-hidden" // removed bottom padding
    >
      {/* Background circles for subtle depth */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl animate-pulse-slow"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Title */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-extrabold mb-4 transition-all duration-1000 tracking-wide ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            } text-white`}
          >
            Meet Our{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Visionary Founder
            </span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
            Driving innovation and excellence, shaping the future of technology and education.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div
            className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Founder Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl blur-xl opacity-30"></div>
              <div className="relative bg-gray-800 rounded-3xl p-8 border border-cyan-500/30 shadow-2xl hover:shadow-3xl transition-shadow duration-500">
                <div className="w-full aspect-square rounded-2xl overflow-hidden mb-6">
                  <img
                    className="w-full h-full object-cover rounded-lg"
                    src="/logo/md.jpg"
                    alt="Founder"
                  />
                </div>

                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2 text-yellow-300">Mohamed Saleem</h3>
                  <p className="text-cyan-400 mb-4 text-sm md:text-base">
                    Founder & Head of Operations
                  </p>
                  <div className="flex justify-center space-x-6 text-gray-400 text-sm md:text-base">
                    <div className="flex items-center space-x-2">
                      <Award size={16} />
                      <span>PhD in AI</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Target size={16} />
                      <span>15+ Years</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Founder Message + Stats */}
            <div className="space-y-6">
              <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 shadow-md hover:shadow-lg transition-shadow duration-500">
                <Quote className="text-cyan-400 mb-4" size={32} />
                <p className="text-gray-300 text-base md:text-lg italic leading-relaxed">
                  "Education is not just about teaching technology, it's about empowering minds
                  to think, create, and innovate. Our mission is to bridge the gap between
                  theoretical knowledge and real-world application, preparing students for the
                  challenges of tomorrow."
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
                  <Heart className="text-red-500 mx-auto mb-2" size={24} />
                  <div className="text-2xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600">Lives Impacted</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
                  <Award className="text-yellow-500 mx-auto mb-2" size={24} />
                  <div className="text-2xl font-bold text-gray-900">10+</div>
                  <div className="text-sm text-gray-600">Awards Won</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
                  <Target className="text-cyan-500 mx-auto mb-2" size={24} />
                  <div className="text-2xl font-bold text-gray-900">98%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/30 shadow-sm hover:shadow-md transition-shadow duration-300">
                <h4 className="text-xl font-semibold mb-3 text-cyan-400">
                  Our Mission
                </h4>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  To create a generation of tech innovators who are not just skilled professionals
                  but problem solvers contributing meaningfully to society through technology,
                  robotics, and artificial intelligence.
                </p>
              </div>
            </div>
          </div>
        </div>
              <SplineDemo />
      </div>

    </section>
  );
}
