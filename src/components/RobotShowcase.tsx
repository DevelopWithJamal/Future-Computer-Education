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
      color: 'bg-gray-900',
    },
    {
      icon: Cpu,
      name: 'Industrial Automation Bot',
      description:
        'Precision-engineered robot for manufacturing and assembly line operations',
      features: ['High Accuracy', 'Safety Sensors', 'Multi-Axis Control'],
      color: 'bg-gray-800',
    },
    {
      icon: Zap,
      name: 'AI Vision System',
      description:
        'Computer vision platform for real-time image processing and analysis',
      features: ['Object Tracking', 'Facial Recognition', 'Pattern Detection'],
      color: 'bg-gray-700',
    },
    {
      icon: Radio,
      name: 'IoT Smart Controller',
      description:
        'Integrated system for controlling and monitoring smart devices remotely',
      features: ['WiFi/Bluetooth', 'Cloud Integration', 'Real-time Monitoring'],
      color: 'bg-gray-600',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveRobot((prev) => (prev + 1) % robots.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [robots.length]);

  return (
    <section id="robots" className="py-20 bg-gray-50 relative overflow-hidden">

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our{' '}
            <span className="text-gray-900">
              Robot Showcase
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
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
                    className={`w-64 h-64 ${robot.color} rounded-3xl flex items-center justify-center relative shadow-2xl`}
                  >
                    <robot.icon size={120} className="text-white z-10" />

                    <div className="absolute -top-2 -right-2 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg animate-bounce border-2 border-gray-900">
                      <span className="text-2xl font-bold text-gray-900">AI</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <div
                className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-gray-300 transition-all duration-500 shadow-lg"
              >
                <h3 className="text-3xl font-bold mb-4 text-gray-900">
                  {robots[activeRobot].name}
                </h3>
                <p className="text-gray-600 text-lg mb-6">
                  {robots[activeRobot].description}
                </p>

                <div className="space-y-3">
                  <h4 className="text-gray-900 font-semibold mb-2">
                    Key Features:
                  </h4>
                  {robots[activeRobot].features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 text-gray-300"
                    >
                      <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
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
                        ? 'bg-gray-900'
                        : 'bg-gray-300 hover:bg-gray-400'
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
