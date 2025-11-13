import { ChevronRight, Sparkles, MessageCircle, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import heroVideoMp4 from "../video/hero.mp4";
import heroVideoWebm from "../video/hero.webm";
import Gloriya from "./Gloriya";

export default function Hero() {
  const whatsappNumber = "+919994707665";

  const heroHeightStyle = {
    minHeight: "calc(100vh - 80px)",
  };

  const handleScrollToCourses = () => {
    const section = document.getElementById("courses");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section
        id="home"
        className="w-full bg-gradient-to-br from-white via-blue-50 to-white overflow-hidden flex items-center"
        style={heroHeightStyle}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6 md:px-10 py-16 md:py-0 w-full">

          {/* Left Side – Text Content */}
          <motion.div
            className="flex-1 flex flex-col justify-center text-center md:text-left order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >

            {/* Tagline */}
            <motion.div
              className="inline-flex mb-6 items-center space-x-2 px-5 py-2 bg-blue-100 border border-blue-300 rounded-lg text-blue-700 text-sm font-medium mx-auto md:mx-0 shadow-md"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <Sparkles size={16} />
              <span>IT & Robotics Training for the Future</span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-gray-900 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Pioneering <span className="text-blue-600">Innovation</span>{" "}
              <br className="hidden md:inline" /> in Tech Education
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-lg md:text-xl text-blue-700 mb-8 max-w-2xl mx-auto md:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Empowering the next generation of innovators with cutting-edge
              skills in AI, Robotics, Data Science, and Advanced Technology.
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.8 }}
            >
              <button
                onClick={handleScrollToCourses}
                className="group px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold text-lg flex items-center justify-center space-x-2 
                hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-300 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>Start Your Journey</span>
                <ChevronRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </button>

              <a
                href={`https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(
                  "Hi Future Computer Education, I’m interested in your courses. Please share more details!"
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-6 py-4 border-2 border-green-500 text-green-600 rounded-xl font-semibold text-lg bg-white
                hover:bg-green-50 transition-all duration-300 hover:shadow-md"
              >
                <MessageCircle size={20} className="mr-2" />
                <span className="hidden sm:inline">Message Us Now</span>
                <span className="inline sm:hidden">Contact</span>
              </a>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              className="flex flex-wrap justify-center md:justify-start gap-x-12 gap-y-6 mt-4 pt-4 border-t border-blue-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.8 }}
            >
              {[
                { value: "1000+", label: "Students Trained" },
                { value: "25+", label: "Expert Trainers" },
                { value: "100%", label: "Career Support" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center md:text-left flex items-center space-x-3"
                >
                  <TrendingUp
                    size={24}
                    className="text-green-600/80 hidden sm:block"
                  />
                  <div>
                    <div className="text-3xl font-extrabold text-gray-900">
                      {stat.value}
                    </div>
                    <div className="text-blue-700 mt-0.5 font-medium text-sm">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side – Video Section */}
          <motion.div
            className="flex-1 flex items-center justify-center mt-10 md:mt-0 order-1 md:order-2"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <div
              className="relative w-full max-w-xl aspect-video rounded-3xl overflow-hidden shadow-lg border border-blue-100"
              style={{ willChange: "transform" }}
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
                style={{
                  filter: "brightness(1.05)",
                  transform: "translateZ(0)",
                }}
                poster="/video/poster.jpg"
              >
                <source src={heroVideoWebm} type="video/webm" />
                <source src={heroVideoMp4} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Overlay */}
              <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px] pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Extra Section */}
      <Gloriya />
    </>
  );
}
