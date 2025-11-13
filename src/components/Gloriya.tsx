import React from "react";
import { motion } from "framer-motion";

const Gloriya: React.FC = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-gradient-to-b from-white via-blue-50 to-blue-100 text-slate-900 px-6 py-20">
      {/* ===== Background Decorative Blur Circles ===== */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-300/30 blur-3xl rounded-full animate-pulse" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-400/30 blur-3xl rounded-full animate-pulse delay-2000" />

      {/* ===== Title ===== */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="text-4xl md:text-6xl font-extrabold mb-4 text-center leading-tight"
      >
        Meet{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-sky-600 to-blue-700 drop-shadow-[0_0_25px_rgba(6,182,212,0.6)]">
          Gloriya 🤖
        </span>
      </motion.h1>

      {/* ===== Description ===== */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.9 }}
        className="max-w-2xl text-center text-slate-600 mb-10 text-lg md:text-xl leading-relaxed"
      >
        Gloriya is our AI-powered teaching companion — combining intelligence,
        energy, and motivation to transform learning into an interactive
        experience. She speaks, inspires, and brings futuristic education to
        life!
      </motion.p>

      {/* ===== Video Showcase ===== */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="relative group w-full max-w-4xl"
      >
        {/* Outer Glow Animation */}
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.6, 0.9, 0.6],
          }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="absolute inset-0 rounded-3xl blur-2xl bg-gradient-to-tr from-cyan-400/40 via-sky-300/30 to-blue-500/30 -z-10"
        />

        {/* Video Frame */}
        <div className="rounded-3xl overflow-hidden border border-cyan-500/30 shadow-[0_0_50px_rgba(56,189,248,0.4)] bg-white/70 backdrop-blur-2xl p-3 flex justify-center transition-all duration-500 hover:scale-105">
          <video
            src="/videos/gloriya.mp4" // ✅ Make sure the path is correct: public/videos/gloriya.mp4
            controls
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            style={{
              width: "100%",
              maxHeight: "480px",
              borderRadius: "1rem",
              objectFit: "contain",
            }}
            className="shadow-[0_0_40px_rgba(56,189,248,0.3)]"
          >
            <source src="/videos/gloriya.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </motion.div>

      {/* ===== Tagline ===== */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="mt-10 text-center text-xl md:text-2xl font-semibold bg-gradient-to-r from-cyan-600 via-sky-500 to-blue-600 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(56,189,248,0.5)]"
      >
        “Gloriya — The Voice of Future Computer Education”
      </motion.p>

      {/* ===== CTA Button ===== */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="mt-8 px-8 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-lg font-semibold shadow-lg hover:shadow-xl hover:brightness-110 transition-all"
        onClick={() => alert("Coming soon! Gloriya AI is preparing to launch 🚀")}
      >
        🚀 Meet Gloriya Now
      </motion.button>
    </section>
  );
};

export default Gloriya;
