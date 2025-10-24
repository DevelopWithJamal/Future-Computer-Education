import { Link } from 'react-router-dom';
import { ChevronRight, Sparkles, MessageCircle, TrendingUp } from 'lucide-react';
import heroVideo from '../video/hero.mp4';

export default function Hero() {
  const whatsappNumber = '+919363706033';

  // Calculate the height: 100vh minus the fixed header height (80px)
  const heroHeightStyle = {
    minHeight: 'calc(100vh - 80px)',
  };

  return (
    <section
      id="home"
      // 1. MODERN LIGHT BACKGROUND
      className="w-full bg-gradient-to-br from-white via-blue-50 to-white overflow-hidden flex items-center"
      style={heroHeightStyle} // Apply the calculated height here
    >
      {/* Container ensures proper max-width and internal spacing */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6 md:px-10 py-16 md:py-0 w-full">
        
        {/* Content Section (Order 1 on Desktop) */}
        <div className="flex-1 flex flex-col justify-center text-center md:text-left order-2 md:order-1">
          
          {/* Tagline */}
          <div className="inline-flex mb-6 items-center space-x-2 px-5 py-2 bg-blue-100 border border-blue-300 rounded-lg text-blue-700 text-sm font-medium mx-auto md:mx-0 shadow-md">
            <Sparkles size={16} />
            <span>IT & Robotics Training for the Future</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-gray-900 mb-6">
            Pioneering <span className="text-blue-600">Innovation</span> <br className="hidden md:inline" /> in Tech Education
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-blue-700 mb-8 max-w-2xl mx-auto md:mx-0">
            Empowering the next generation of innovators with cutting-edge skills in AI, Robotics, Data Science, and Advanced Technology.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mb-10">
            {/* Primary CTA: Explore Courses */}
            <Link
              to="/courses"
              className="group px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold text-lg flex items-center justify-center space-x-2 
                         hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-300 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>Start Your Journey</span>
              <ChevronRight
                size={20}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </Link>

            {/* Secondary CTA: WhatsApp */}
            <a
              href={`https://wa.me/${whatsappNumber.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-6 py-4 border-2 border-green-500 text-green-600 rounded-xl font-semibold text-lg bg-white
                         hover:bg-green-50 transition-all duration-300 hover:shadow-md"
            >
              <MessageCircle size={20} className="mr-2" />
              <span className='hidden sm:inline'>Message Us Now</span>
              <span className='inline sm:hidden'>Contact</span>
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center md:justify-start gap-x-12 gap-y-6 mt-4 pt-4 border-t border-blue-200">
            {[
              { value: '1000+', label: 'Students Trained' },
              { value: '25+', label: 'Expert Trainers' },
              { value: '100%', label: 'Career Support' },
            ].map((stat) => (
              <div key={stat.label} className="text-center md:text-left flex items-center space-x-3">
                <TrendingUp size={24} className="text-green-600/80 hidden sm:block" />
                <div>
                    <div className="text-3xl font-extrabold text-gray-900">{stat.value}</div>
                    <div className="text-blue-700 mt-0.5 font-medium text-sm">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Section (Order 2 on Desktop) */}
        <div className="flex-1 flex items-center justify-center mt-10 md:mt-0 order-1 md:order-2">
          <div className="relative w-full max-w-xl aspect-video rounded-3xl overflow-hidden shadow-2xl shadow-blue-300/60 border border-blue-100">
            <video
              src={heroVideo}
              autoPlay
              muted
              loop
              playsInline
              preload="none"
              className="w-full h-full object-cover"
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-white/5 shadow-[inset_0_0_80px_rgba(255,255,255,0.4)] pointer-events-none" />
          </div>
        </div>

      </div>
    </section>
  );
}