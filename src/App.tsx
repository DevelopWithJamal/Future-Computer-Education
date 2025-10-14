import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Courses from './components/Courses';
import Gallery from './components/Gallery';
import RobotShowcase from './components/RobotShowcase';
import Founder from './components/Founder';
import Contact from './components/Contact';
import FloatingButtons from './components/FloatingButtons';
import Navigation from './components/Navigation';
import OurServices from './components/OurServices';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      <Navigation scrolled={scrolled} />
      <Hero />
      <About />
      <OurServices></OurServices>
      <Courses />
      <Gallery />
      <RobotShowcase />
      <Founder />
      <Contact />
      <FloatingButtons />
    </div>
  );
}

export default App;
