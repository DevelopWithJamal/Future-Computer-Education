'use client';

import { Quote, Award, Target, Heart, MessageCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import SplineDemo from './SplineDemo';

export default function Founder() {
  const [isVisible, setIsVisible] = useState(false);
  const whatsappNumber = '+919363706033';
  const founderName = 'Mohamed Saleem';

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('founder');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Hello ${founderName}, I would like to discuss a query regarding Future Computer Education.`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <section
      id="founder"
      className="relative py-24 bg-gradient-to-br from-white via-blue-50 to-cyan-100 overflow-hidden"
    >
      {/* Background glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan-300/30 blur-3xl"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4 text-gray-900">
            Meet Our{' '}
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Visionary Founder
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Driving innovation and excellence — shaping the future of technology and education.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Founder Card */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative bg-white rounded-3xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-gray-100"
          >
            <div className="w-full aspect-square rounded-2xl overflow-hidden mb-6">
              <img
                className="w-full h-full object-cover rounded-2xl transform hover:scale-105 transition-transform duration-500"
                src="/logo/md.jpg"
                alt={founderName}
              />
            </div>

            <div className="text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{founderName}</h3>
              <p className="text-cyan-600 mb-4 text-sm md:text-base">
                Founder & Head of Operations
              </p>

              <div className="flex justify-center space-x-6 text-gray-700 text-sm md:text-base mb-6">
                <div className="flex items-center space-x-2">
                  <Award size={18} className="text-yellow-500" />
                  <span>MCA Graduate</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Target size={18} className="text-blue-500" />
                  <span>15+ Years Experience</span>
                </div>
              </div>

              {/* WhatsApp Button */}
              <motion.button
                onClick={handleWhatsAppClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="w-full py-3 bg-green-500 text-white rounded-xl font-semibold 
                           hover:bg-green-600 transition-all duration-300 shadow-lg shadow-green-400/40
                           flex items-center justify-center space-x-2"
              >
                <MessageCircle size={20} />
                <span>Contact Founder Directly</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Founder Message + Stats */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
            className="space-y-6"
          >
            {/* Quote */}
            <div className="bg-white/70 backdrop-blur-xl border border-gray-100 rounded-2xl p-6 shadow-md">
              <Quote className="text-cyan-500 mb-4" size={32} />
              <p className="text-gray-700 text-lg italic leading-relaxed">
                "Education isn’t just about teaching technology; it’s about empowering minds
                to think, create, and innovate. Our mission is to bridge the gap between
                theoretical knowledge and real-world application."
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-4 text-center shadow">
                <Heart className="text-pink-500 mx-auto mb-2" size={24} />
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-700">Lives Impacted</div>
              </div>
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-4 text-center shadow">
                <Award className="text-yellow-600 mx-auto mb-2" size={24} />
                <div className="text-2xl font-bold text-gray-900">10+</div>
                <div className="text-sm text-gray-700">Awards Won</div>
              </div>
              <div className="bg-gradient-to-br from-cyan-50 to-blue-100 rounded-xl p-4 text-center shadow">
                <Target className="text-cyan-600 mx-auto mb-2" size={24} />
                <div className="text-2xl font-bold text-gray-900">98%</div>
                <div className="text-sm text-gray-700">Success Rate</div>
              </div>
            </div>

            {/* Mission */}
            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-6 border border-cyan-100 shadow">
              <h4 className="text-xl font-semibold mb-3 text-cyan-700">Our Mission</h4>
              <p className="text-gray-700 leading-relaxed text-base">
                To create a generation of innovators who are not just skilled professionals,
                but compassionate problem-solvers — contributing meaningfully to society
                through technology, robotics, and AI.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Spline Section */}
        <motion.div
          className="mt-24"
          initial={{ opacity: 0, y: 60 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
        >
          <SplineDemo />
        </motion.div>
      </div>
    </section>
  );
}
