import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
// Assuming ImageAutoSlider is a component that renders the secondary slider gallery
import { ImageAutoSlider } from './ImageAutoSlider'; 

export default function Gallery() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // NOTE: In a real app, this array would contain image URLs
  const images = [
    { title: 'Modern Computer Lab', description: 'State-of-the-art facilities with latest hardware' },
    { title: 'Robotics Workshop', description: 'Hands-on training with advanced robotics kits' },
    { title: 'AI Training Session', description: 'Interactive learning with expert instructors' },
    { title: 'Student Projects', description: 'Innovative solutions built by our students' },
    { title: 'Coding Classroom', description: 'Collaborative learning environment' },
    { title: 'Lab Section', description: 'Collaborative learning environment' } 
  ];
  
  const totalSlides = images.length;

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000);

    return () => clearInterval(timer);
  }, [totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    // FIX: Use <main> with padding (pt-28) to respect the fixed header on a dedicated route
    <main className="pt-28 bg-gray-900 relative min-h-screen">
      
      {/* 🌟 MAIN INTERACTIVE SLIDER SECTION 🌟 */}
      <section id="main-gallery" className="py-12 md:py-20 bg-gray-900 relative overflow-hidden">
        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl text-white md:text-5xl font-extrabold mb-4">
              Our{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Labs & Facilities
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Experience world-class infrastructure designed for excellence
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl shadow-cyan-500/20 border border-cyan-500/50">
              
              {/* SLIDE CONTENT */}
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                  }`}
                >
                  <div className="w-full h-full bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 pointer-events-none"></div>

                    <div className="text-center z-10 p-8">
                      <div className="w-32 h-32 md:w-48 md:h-48 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl mx-auto mb-6 flex items-center justify-center text-6xl md:text-8xl font-bold text-white shadow-xl">
                        {index + 1}
                      </div>
                      
                      <h2 className="text-3xl text-white md:text-4xl font-bold mb-4">
                        {image.title}
                      </h2>
                      <p className="text-lg md:text-xl text-gray-300">
                        {image.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons and Dots (Omitted for brevity, remain unchanged) */}
            <button
              onClick={prevSlide}
              aria-label="Previous slide"
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-gray-900/80 backdrop-blur-sm border border-cyan-500/30 rounded-full flex items-center justify-center text-cyan-400 hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:scale-110 z-20"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={nextSlide}
              aria-label="Next slide"
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-gray-900/80 backdrop-blur-sm border border-cyan-500/30 rounded-full flex items-center justify-center text-cyan-400 hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:scale-110 z-20"
            >
              <ChevronRight size={24} />
            </button>

            <div className="flex justify-center mt-6 space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-blue-600 w-8' : 'bg-gray-300 hover:bg-blue-400 w-3'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 🌟 SECONDARY SLIDER SECTION (ImageAutoSlider) 🌟 */}
      <section className="py-20 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Student and Event Highlights</h2>
        <ImageAutoSlider /> 
      </section>
      
    </main>
  );
}