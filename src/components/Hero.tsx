import { ChevronRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-white"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 px-5 py-2 bg-blue-50 border border-blue-200 rounded-lg text-blue-700 text-sm font-medium">
            <Sparkles size={16} />
            <span>World-Class IT & Robotics Training</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-semibold leading-tight text-slate-900">
            Future Computer
            <br />
            Education
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal">
            Empowering the next generation of innovators with cutting-edge skills in AI, Robotics, and Advanced Technology
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <a
              href="#courses"
              className="group px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg flex items-center space-x-2 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30 transition-all duration-300"
            >
              <span>Explore Courses</span>
              <ChevronRight
                size={20}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-transparent border-2 border-blue-600 text-blue-600 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto pt-12">
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
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-blue-600 rounded-full p-1">
          <div className="w-1.5 h-3 bg-blue-600 rounded-full mx-auto animate-scroll"></div>
        </div>
      </div>
    </section>
  );
}
