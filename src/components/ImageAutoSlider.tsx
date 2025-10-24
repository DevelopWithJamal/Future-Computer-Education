import React from "react";

export const ImageAutoSlider = () => {
  const imageModules = import.meta.glob("../assets/slider/*.jpg", { eager: true });
  const images = Object.values(imageModules).map((mod: any) => mod.default);

  const duplicatedImages = [...images, ...images];

  return (
    <div className="w-full   overflow-hidden relative flex items-center justify-center py-8">
      <div className="mask-gradient w-full max-w-6xl ">
        <div className="flex animate-scroll gap-6">
          {duplicatedImages.map((img, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-48 h-48 md:w-64 md:h-44 lg:w-80 lg:h-50 rounded- overflow-hidden shadow-2xl"
            >
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover "
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .animate-scroll {
          display: flex;
          gap: 1.5rem;
          width: max-content;
          animation: scroll 200s linear infinite;
        }
        .mask-gradient {
          -webkit-mask: linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%);
          mask: linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%);
        }
      `}</style>
    </div>
  );
};
