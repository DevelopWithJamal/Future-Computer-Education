'use client'

import { SplineScene } from "@/components/ui/splite"
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"

export function SplineSceneBasic() {
  return (
    <Card className="w-full h-auto md:h-[650px] bg-gray-950 relative overflow-hidden rounded-2xl shadow-2xl">
      {/* Glowing Spotlight */}
      <Spotlight
        className="-top-32 left-0 md:left-60 md:-top-10"
        fill="cyan"
      />

      <div className="flex flex-col md:flex-row h-full items-center justify-center text-center md:text-left">
        {/* Left Content */}
        <div className="flex-1 p-6 md:p-10 z-10 flex flex-col justify-center items-center md:items-start">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-cyan-300 via-white to-blue-400 leading-snug md:leading-tight">
            Gloriya — Robotics & Future Technology
          </h1>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-300 max-w-full sm:max-w-md md:max-w-lg">
            Join our <span className="text-cyan-400 font-semibold">Robotics course</span> with Gloriya, the intelligent white robot. 
            Learn through interactive 3D projects, AI-assisted guidance, and cutting-edge tools that make robotics, coding, 
            and technology engaging and inspiring. Build skills for the future with hands-on learning and innovative lessons.
          </p>
        </div>

        {/* Right 3D Scene (Robot Enlarged) */}
        <div className="flex-1 relative w-full mt-8 md:mt-0 flex items-center justify-center">
          <div className="w-full h-[200px] sm:h-[500px] md:h-[650px] lg:h-[500px] scale-125 md:scale-150 transition-transform duration-700">
            <SplineScene 
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full rounded-2xl"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 to-transparent pointer-events-none rounded-2xl" />
        </div>
      </div>
    </Card>
  )
}
