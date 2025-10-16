import { Link } from 'react-router-dom';
import { ChevronRight, Sparkles } from 'lucide-react';
import heroVideo from '../video/hero.mp4';

export default function Hero() {
  const whatsappNumber = '+919363706033';

  return (
    <section
      id="home"
      className="w-full pt-32 md:pt-30 bg-gradient-to-b from-white to-blue-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6 md:px-10">
        {/* Left: Content */}
        <div className="flex-1 flex flex-col justify-center text-center md:text-left">
          {/* Tagline */}
          <div className="inline-flex mb-8 items-center space-x-2 px-5 py-2 bg-blue-50 border border-blue-200 rounded-lg text-blue-700 text-sm font-medium mx-auto md:mx-0">
            <Sparkles size={16} />
            <span>World-Class IT & Robotics Training</span>
          </div>

          {/* Main Text */}
          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-slate-900 mb-6">
            Future Computer Education
          </h1>

          <p className="text-lg md:text-xl text-slate-700 mb-10 max-w-2xl mx-auto md:mx-0">
            Empowering the next generation of innovators with cutting-edge skills in AI,
            Robotics, and Advanced Technology.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mb-12">
            <Link
              to="/courses"
              className="group px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg flex items-center justify-center space-x-2 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30 transition-all duration-300"
            >
              <span>Explore Courses</span>
              <ChevronRight
                size={20}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </Link>

            {/* WhatsApp Button */}
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-6 py-3 border-2 border-green-500 text-green-500 rounded-lg font-semibold text-lg hover:bg-green-50 hover:shadow-md transition-all duration-300"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
                className="w-6 h-6 mr-2"
                loading="lazy"
              />
              Get in Touch
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center md:justify-start gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">500+</div>
              <div className="text-slate-600 mt-2 font-medium">Students Trained</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">15+</div>
              <div className="text-slate-600 mt-2 font-medium">Expert Trainers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">100%</div>
              <div className="text-slate-600 mt-2 font-medium">Placement Support</div>
            </div>
          </div>
        </div>

        {/* Right: Video */}
        <div className="flex-1 flex items-center justify-center mt-10 md:mt-0">
          <div className="relative w-full max-w-xl aspect-video rounded-2xl overflow-hidden shadow-xl border border-blue-100">
            <video
              src={heroVideo}
              autoPlay
              muted
              loop
              playsInline
              preload="none"        // <-- lazy loading video
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
