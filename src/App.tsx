import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import About from './components/About';
 
import Courses from './components/Courses';
import Gallery from './components/Gallery';
import RobotShowcase from './components/RobotShowcase';
import Founder from './components/Founder';
// @ts-ignore
import Contact from './components/Contact';
import FloatingButtons from './components/FloatingButtons';
import AlagappaUniversity from './pages/AlagappaUniversity';
import SkillsAndPartners from './components/SkillsAndPartners';
import SplineDemo from './components/SplineDemo';
import Hero from './components/Hero';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    
    <Router>
      <Navigation scrolled={scrolled} />
      <Routes>
        {/* Home page */}
        <Route
          path="/"
          element={
            <>
            <Hero></Hero>
              <SplineDemo />
              <About />
              <Founder />
              <SkillsAndPartners scrolled={scrolled} /> 
             
          
              <Courses /> 
              <Gallery />
              <RobotShowcase />
             
              <Contact />
              <FloatingButtons />
            </>
          }
        />

        {/* Alagappa University page */}
        <Route path="/alagappa" element={<AlagappaUniversity />} />
      </Routes>
    </Router>
  );
}

export default App;
