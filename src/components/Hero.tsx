import { ChevronRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className=" w-full pt-40  bg-gradient-to-b from-white to-blue-50  ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-stretch gap-12 px-4">
        {/* Left: Content */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="inline-flex mb-10 items-center space-x-2 px-5 py-2 bg-blue-50 border border-blue-200 rounded-lg text-blue-700 text-sm font-medium">
            <Sparkles size={16} />
            <span>World-Class IT & Robotics Training</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Future Computer
            <br />
            Education
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Empowering the next generation of innovators with cutting-edge skills in AI, Robotics, and Advanced Technology.
          </p>
          <div className="flex flex-row gap-4 mb-10">
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
          <div className="flex flex-row gap-6">
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
          <video
            src="/videos/hero.mp4" // Update path as needed
            autoPlay
            muted
            loop
            playsInline
            className="w-full max-w-md rounded-[12px] shadow-lg object-cover bg-black"
          />
        </div>
      </div>
    </section>
  );
}
