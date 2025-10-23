import { useEffect, useState } from 'react';

interface Partner {
  name: string;
  logo: string;
  description: string;
}

export default function Partners() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('partners');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const partners: Partner[] = [
    {
      name: 'TNSKILL',
      logo: 'https://www.tnskill.tn.gov.in/wp-content/uploads/2025/02/tnskill-logo-250x125-1.png',
      description:
        'Enhancing employability with skill development programs across diverse sectors.',
    },
    {
      name: 'Naan Mudhalvan',
      logo: 'https://naanmudhalvan.tn.gov.in/_nuxt/img/logo.cda70ae.svg',
      description:
        'Upskilling and career guidance through specialized programs in emerging technologies.',
    },
    {
      name: 'Vetri Nichayam',
      logo: 'https://www.tnskill.tn.gov.in/wp-content/uploads/2024/05/NM_Vetri-Nichayam-e1751281172977.png',
      description:
        'Structured programs and practical training to ensure employability for students and professionals.',
    },
  ];

  return (
    <section
      id="partners"
      className="py-24 relative overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #ffffff, #f9f9f9)',
      }}
    >
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-extrabold mb-4 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Our <span className="text-blue-900">Government Partners</span>
          </h2>
          <p
            className={`text-lg md:text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Collaborating with top government initiatives to provide world-class training
            and skill development programs for students and professionals.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, idx) => (
            <div
              key={idx}
              className={`group relative bg-white rounded-3xl p-8 border border-gray-200 hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-500 flex flex-col items-center text-center ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              {/* Gradient Circle behind Logo */}
              <div className="w-36 h-36 rounded-full bg-gradient-to-tr from-white to-gray-200 flex items-center justify-center mb-6 shadow-lg transform transition-transform duration-300 group-hover:scale-105">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-28 max-h-28 object-contain"
                  loading="lazy"
                />
              </div>

              {/* Name */}
              <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                {partner.name}
              </h3>

              <div className="h-1 w-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">{partner.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
