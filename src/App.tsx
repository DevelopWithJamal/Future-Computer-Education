import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';

// COMPONENTS THAT REMAIN ON HOMEPAGE (Scroll Anchors)
import Hero from './components/Hero';
import About from './components/About';
import Founder from './components/Founder';
import SkillTraining from './components/SkillTraining';
import Partners from './components/Partners';
import RobotShowcase from './components/RobotShowcase';
import Courses from './components/Courses'; 

// COMPONENTS FOR DEDICATED ROUTES
import Gallery from './components/Gallery';
// @ts-ignore
import Contact from './components/Contact';
import AlagappaUniversity from './pages/AlagappaUniversity';
import FloatingButtons from './components/FloatingButtons';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <Navigation /> 
      
      <Routes>
        
        {/* =======================================================
           1. HOMEPAGE ROUTE (Scroll-Anchored Sections)
           ======================================================= */}
        <Route
          path="/"
          element={
            <>
              {/* These sections are loaded on the homepage and navigated via scroll anchors */}
              <Hero />             
              <About />            
              <Founder />          
              <SkillTraining />    
              <Partners />         
              <Courses />          
              <RobotShowcase />    
              <FloatingButtons /> 
              <Gallery></Gallery>
              <Contact></Contact>
              
            </>
          }
        />

        {/* =======================================================
           2. DEDICATED PAGE ROUTES
           ======================================================= */}
        
        {/* Alagappa University (Confirmed working) */}
        <Route path="/alagappa" element={<><AlagappaUniversity /><FloatingButtons /></>} />

        {/* GALLERY PAGE (Now correctly routing and rendering content) */}
        <Route path="/gallery" element={<><Gallery /><FloatingButtons /></>} />
        
        {/* Contact Page */}
        <Route path="/contact" element={<><Contact /><FloatingButtons /></>} />

      </Routes>
    </Router>
  );
}

export default App;