import React, { useEffect, useRef } from "react";

export const ImageAutoSlider = () => {
  const imageModules = import.meta.glob("../assets/slider/*.jpg", { eager: true });
  const images = Object.values(imageModules).map((mod: any) => mod.default);
  const trackRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const isPaused = useRef(false);

  const loopImages = [...images, ...images];

  useEffect(() => {
    let scrollAmount = 0;
    const scrollSpeed = 2; // adjust smooth speed
    const track = trackRef.current;

    const scroll = () => {
      if (!isPaused.current && track) {
        scrollAmount += scrollSpeed;
        if (scrollAmount >= track.scrollWidth / 2) {
          scrollAmount = 0;
        }
        track.scrollLeft = scrollAmount;
      }
      animationRef.current = requestAnimationFrame(scroll);
    };

    animationRef.current = requestAnimationFrame(scroll);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-50 via-white to-slate-100 overflow-hidden">
      {/* Floating gradient lights */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[28rem] h-[28rem] bg-blue-300/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-cyan-300/20 rounded-full blur-3xl animate-float-delay"></div>
      </div>

      <div className="relative container mx-auto px-6 text-center z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
          <span className="relative inline-block">
            Our <span className="text-blue-600">Modern Showcase</span>
            <span className="absolute left-0 -bottom-2 w-full h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 rounded-full animate-gradient-flow"></span>
          </span>
        </h2>

        <div
          ref={trackRef}
          className="flex gap-8 overflow-x-scroll scrollbar-hide cursor-grab active:cursor-grabbing pb-10"
          onMouseEnter={() => (isPaused.current = true)}
          onMouseLeave={() => (isPaused.current = false)}
        >
          {loopImages.map((img, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-72 h-52 md:w-96 md:h-64 rounded-2xl overflow-hidden 
                         bg-white/10 backdrop-blur-md border border-gray-200 hover:border-blue-400/60
                         shadow-[0_6px_20px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)]
                         transition-all duration-700 hover:scale-105 group"
            >
              {/* Image */}
              <img
                src={img}
                alt={`Showcase ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                decoding="async"
              />

              {/* Overlay lighting */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Reflection */}
              <div className="absolute bottom-[-45%] left-0 right-0 h-1/2 overflow-hidden opacity-50 group-hover:opacity-60 transition-opacity duration-500">
                <img
                  src={img}
                  alt=""
                  className="w-full h-full object-cover scale-y-[-1] opacity-40 blur-sm"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(20px); }
        }
        @keyframes float-delay {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes gradient-flow {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float-delay 7s ease-in-out infinite;
        }
        .animate-gradient-flow {
          background-size: 200% auto;
          animation: gradient-flow 4s linear infinite;
        }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
};
