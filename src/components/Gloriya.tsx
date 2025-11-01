import React from "react";

const Gloriya: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#020617] via-[#0f172a] to-[#1e293b] text-white px-6 py-16">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-center">
        Meet{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 drop-shadow-[0_0_25px_rgba(56,189,248,0.8)]">
          Gloriya 🤖
        </span>
      </h1>

      {/* Description */}
      <p className="max-w-2xl text-center text-slate-300 mb-10 text-lg leading-relaxed">
        Gloriya is our AI-powered teaching companion — combining intelligence,
        energy, and motivation to transform learning into an interactive
        experience. She speaks, inspires, and brings futuristic education to
        life!
      </p>

      {/* Portrait Video Showcase */}
      <div className="relative group">
        {/* Outer Neon Aura */}
        <div className="absolute inset-0 rounded-3xl blur-3xl bg-gradient-to-tr from-cyan-500/30 via-sky-400/20 to-blue-600/20 group-hover:opacity-90 opacity-70 transition-all duration-500 -z-10"></div>

        {/* Video Frame */}
        <div className="rounded-3xl overflow-hidden border border-cyan-400/40 shadow-[0_0_40px_rgba(6,182,212,0.5)] bg-slate-900/70 backdrop-blur-xl p-3 flex justify-center transition-all duration-500 hover:shadow-[0_0_60px_rgba(14,165,233,0.6)]">
          <video
            src="/videos/gloriya.mp4" // ensure correct path: public/videos/gloriya.mp4
            controls
            autoPlay
            muted
            loop
            playsInline
            style={{
              height: "500px",
              width: "auto",
              borderRadius: "1rem",
              objectFit: "contain",
            }}
            className="shadow-[0_0_30px_rgba(6,182,212,0.4)]"
          />
        </div>
      </div>

      {/* Tagline */}
      <p className="mt-10 text-center text-xl md:text-2xl font-semibold bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(56,189,248,0.7)]">
        “Gloriya — The Voice of Future Computer Education”
      </p>
    </section>
  );
};

export default Gloriya;
