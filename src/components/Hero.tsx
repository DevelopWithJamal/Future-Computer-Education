import { ChevronRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900"></div>

      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-cyan-400 rounded-full opacity-20"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: Math.random() * 5 + 's',
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm backdrop-blur-sm">
            <Sparkles size={16} />
            <span>World-Class IT & Robotics Training</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
              Future Computer
            </span>
            <br />
            <span className="text-white">Education</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Empowering the next generation of innovators with cutting-edge skills in AI, Robotics, and Advanced Technology
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <a
              href="#courses"
              className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold text-lg flex items-center space-x-2 hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
            >
              <span>Explore Courses</span>
              <ChevronRight
                size={20}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-transparent border-2 border-cyan-500 rounded-full font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto pt-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400">500+</div>
              <div className="text-gray-400 mt-2">Students Trained</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400">15+</div>
              <div className="text-gray-400 mt-2">Expert Trainers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400">100%</div>
              <div className="text-gray-400 mt-2">Placement Support</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full p-1">
          <div className="w-1.5 h-3 bg-cyan-400 rounded-full mx-auto animate-scroll"></div>
        </div>
      </div>
    </section>
  );
}
