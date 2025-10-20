import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-950 relative overflow-hidden">
      {/* Background Blurs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 md:w-96 md:h-96 bg-cyan-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-blue-500/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Get in{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to start your journey? Contact us today and transform your future
          </p>
        </div>

        {/* Grid: Contact Info + Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            {[
              {
                icon: <Mail size={24} className="text-white" />,
                title: 'Email Us',
                info: 'futurecomputereducationnagai@gmail.co',
                bg: 'bg-gray-900',
              },
              {
                icon: <Phone size={24} className="text-white" />,
                title: 'Call Us',
                info: '+91 99947 07665, +91 99448 62333',
                bg: 'bg-gray-800',
              },
              {
                icon: <MapPin size={24} className="text-white" />,
                title: 'Visit Us',
                info: `346/2, EGS Pillai Road, South Palpannaicherry, Velippalayam, Nagapattinam, Tamil Nadu – 611003, India`,
                bg: 'bg-gray-700',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-2xl p-5 md:p-6 border border-gray-200 hover:border-gray-300 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 flex-shrink-0 ${item.bg} rounded-xl flex items-center justify-center`}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-gray-900">{item.title}</h3>
                    <p className="text-gray-600">{item.info}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Office Hours */}
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-5 md:p-6 border border-cyan-500/30">
              <h4 className="text-lg font-semibold mb-2 text-cyan-400">Office Hours</h4>
              <p className="text-gray-300">Monday - Saturday: 9:00 AM - 7:00 PM</p>
              <p className="text-gray-300">Sunday: Closed</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700">
            <h3 className="text-2xl font-bold mb-6 text-white text-center">Send us a Message</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:outline-none focus:border-cyan-500 transition-all duration-300 text-white placeholder-gray-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:outline-none focus:border-cyan-500 transition-all duration-300 text-white placeholder-gray-500"
              />
              <input
                type="tel"
                placeholder="Your Phone"
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:outline-none focus:border-cyan-500 transition-all duration-300 text-white placeholder-gray-500"
              />
              <select className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:outline-none focus:border-cyan-500 transition-all duration-300 text-white">
                <option>Select a Course</option>
                <option>Web Development</option>
                <option>AI & Machine Learning</option>
                <option>Robotics & IoT</option>
                <option>Data Science</option>
                <option>Full Stack Development</option>
                <option>Mobile App Development</option>
              </select>
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:outline-none focus:border-cyan-500 transition-all duration-300 text-white placeholder-gray-500 resize-none"
              />
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
              >
                <span>Send Message</span>
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>

        {/* Map */}
        <div className="mt-12">
          <h4 className="text-center text-lg font-semibold text-gray-200 mb-4">
            Our Location
          </h4>
          <div className="w-full h-64 md:h-96 rounded-2xl overflow-hidden border border-gray-700">
            <iframe
              title="Future Computer Education Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3548.277468801398!2d79.83627790000001!3d10.799151700000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a556d80ead9b1f7%3A0xbbbfeb481e447ffc!2sFUTURE%20COMPUTER%20EDUCATION!5e1!3m2!1sen!2sin!4v1760414612182!5m2!1sen!2sin"
              width="100%"
              height="100%"
              className="border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-16 text-center text-gray-400 text-sm md:text-base">
        <p>© 2024 Future Computer Education. All rights reserved. | Empowering Future Innovators</p>
      </div>
    </section>
  );
}
