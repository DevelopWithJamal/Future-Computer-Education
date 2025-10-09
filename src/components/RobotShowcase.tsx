import { useState, useEffect } from 'react';
import { Bot, Cpu, Zap, Radio } from 'lucide-react';

export default function RobotShowcase() {
  const [activeRobot, setActiveRobot] = useState(0);

  const robots = [
    {
      icon: Bot,
      name: 'Humanoid Assistant',
      description:
        'Advanced AI-powered humanoid robot capable of complex interactions and task automation',
      features: ['Voice Recognition', 'Object Detection', 'Autonomous Navigation'],
      color: 'from-cyan-500 to-blue-600',
    },
    {
      icon: Cpu,
      name: 'Industrial Automation Bot',
      description:
        'Precision-engineered robot for manufacturing and assembly line operations',
      features: ['High Accuracy', 'Safety Sensors', 'Multi-Axis Control'],
      color: 'from-blue-500 to-indigo-600',
    },
    {
      icon: Zap,
      name: 'AI Vision System',
      description:
        'Computer vision platform for real-time image processing and analysis',
      features: ['Object Tracking', 'Facial Recognition', 'Pattern Detection'],
      color: 'from-indigo-500 to-purple-600',
    },
    {
      icon: Radio,
      name: 'IoT Smart Controller',
      description:
        'Integrated system for controlling and monitoring smart devices remotely',
      features: ['WiFi/Bluetooth', 'Cloud Integration', 'Real-time Monitoring'],
      color: 'from-purple-500 to-pink-600',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveRobot((prev) => (prev + 1) % robots.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [robots.length]);

  return (
    <section id="robots" className="py-20 bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Robot Showcase
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore cutting-edge robotics and AI projects built by our students
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-96 flex items-center justify-center">
              {robots.map((robot, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${
                    index === activeRobot
                      ? 'opacity-100 scale-100 rotate-0'
                      : 'opacity-0 scale-50 rotate-45'
                  }`}
                >
                  <div
                    className={`w-64 h-64 bg-gradient-to-br ${robot.color} rounded-3xl flex items-center justify-center relative shadow-2xl`}
                    style={{
                      boxShadow:
                        index === activeRobot
                          ? '0 0 60px rgba(34, 211, 238, 0.4)'
                          : 'none',
                    }}
                  >
                    <div className="absolute inset-0 bg-white/10 rounded-3xl animate-pulse"></div>
                    <robot.icon size={120} className="text-white z-10" />

                    <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                      <span className="text-2xl font-bold">AI</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <div
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 transition-all duration-500"
                style={{
                  borderColor:
                    activeRobot === 0
                      ? 'rgba(34, 211, 238, 0.5)'
                      : 'rgba(75, 85, 99, 1)',
                }}
              >
                <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  {robots[activeRobot].name}
                </h3>
                <p className="text-gray-300 text-lg mb-6">
                  {robots[activeRobot].description}
                </p>

                <div className="space-y-3">
                  <h4 className="text-cyan-400 font-semibold mb-2">
                    Key Features:
                  </h4>
                  {robots[activeRobot].features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 text-gray-300"
                    >
                      <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex space-x-3">
                {robots.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveRobot(index)}
                    className={`flex-1 h-2 rounded-full transition-all duration-300 ${
                      index === activeRobot
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500'
                        : 'bg-gray-700 hover:bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
