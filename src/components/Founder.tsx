import { Quote, Award, Target, Heart } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Founder() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('founder');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="founder"
      className="py-20 bg-gray-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            Meet Our{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Visionary Founder
            </span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div
            className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 delay-300 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl blur-xl opacity-30"></div>
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-cyan-500/30 shadow-2xl">
                <div className="w-full aspect-square bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center text-8xl font-bold mb-6">
                  <img className='rounded-lg' src="/public/logo/md.jpg" alt="" />
                </div>

                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2 text-yellow-200">Mohamed Saleem</h3>
                  <p className="text-cyan-400 mb-4">
                    Founder & Head of Operations
                  </p>
                  <div className="flex justify-center space-x-4 text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Award size={16} />
                      <span className="text-sm">PhD in AI</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Target size={16} />
                      <span className="text-sm">15+ Years</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
                <Quote className="text-cyan-400 mb-4" size={32} />
                <p className="text-lg text-gray-300 leading-relaxed italic">
                  "Education is not just about teaching technology, it's about
                  empowering minds to think, create, and innovate. Our mission
                  is to bridge the gap between theoretical knowledge and
                  real-world application, preparing students for the challenges
                  of tomorrow."
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 text-center">
                  <Heart className="text-gray-900 mx-auto mb-2" size={24} />
                  <div className="text-2xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600">Lives Impacted</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 text-center">
                  <Award className="text-gray-900 mx-auto mb-2" size={24} />
                  <div className="text-2xl font-bold text-gray-900">10+</div>
                  <div className="text-sm text-gray-600">Awards Won</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 text-center">
                  <Target className="text-gray-900 mx-auto mb-2" size={24} />
                  <div className="text-2xl font-bold text-gray-900">98%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/30">
                <h4 className="text-xl font-semibold mb-3 text-cyan-400">
                  Our Mission
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  To create a generation of tech innovators who are not just
                  skilled professionals but problem solvers who can contribute
                  meaningfully to society through technology, robotics, and
                  artificial intelligence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
