import { Monitor, Users, Award, Zap } from "lucide-react";
import { useEffect, useState } from "react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = document.getElementById("about");
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setIsVisible(entry.isIntersecting));
      },
      { threshold: 0.2 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Monitor,
      title: "Online & Offline Learning",
      description:
        "Flexible learning modes to suit your schedule — attend live online sessions or experience hands-on training in our smart labs.",
      colorFrom: "from-blue-500",
      colorTo: "to-purple-500",
    },
    {
      icon: Users,
      title: "Expert Trainers",
      description:
        "Learn directly from certified professionals with 10+ years of real-world expertise in AI, full-stack, and robotics.",
      colorFrom: "from-green-400",
      colorTo: "to-blue-500",
    },
    {
      icon: Award,
      title: "100% Placement Support",
      description:
        "We guide you from learning to earning — resume building, interview practice, and career placement support.",
      colorFrom: "from-yellow-400",
      colorTo: "to-orange-500",
    },
    {
      icon: Zap,
      title: "Hands-On Projects",
      description:
        "Gain real-world experience by working on live projects using modern technologies and robotics kits.",
      colorFrom: "from-pink-500",
      colorTo: "to-red-500",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-24 bg-gradient-to-b from-gray-50 via-white to-gray-100 overflow-hidden"
    >
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.15),transparent_60%)]"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Why Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-500 drop-shadow-sm">
              Future Computer Education
            </span>
          </h2>
          <p
            className={`text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Learn from the best and prepare for your dream tech career through
            expert mentoring, modern labs, and future-focused training.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`group relative bg-white/80 backdrop-blur-xl border border-gray-200 rounded-3xl p-8 hover:shadow-[0_10px_30px_rgba(59,130,246,0.15)] hover:-translate-y-2 transition-all duration-500 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${idx * 120}ms` }}
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 mb-6 rounded-2xl flex items-center justify-center bg-gradient-to-br ${feature.colorFrom} ${feature.colorTo} shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon size={30} className="text-white" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-center leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Gradient Glow Bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-48 bg-gradient-to-t from-blue-100/40 to-transparent rounded-t-full blur-3xl"></div>
    </section>
  );
}
