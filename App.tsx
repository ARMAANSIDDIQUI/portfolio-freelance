
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AIConsultant from './components/AIConsultant';
import StarShower from './components/StarShower';
import { motion } from 'framer-motion';
import { ToastContainer } from 'react-toastify'; // Added
import 'react-toastify/dist/ReactToastify.css'; // Added

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <>
      <AIConsultant />
      <div className="relative min-h-screen bg-black overflow-x-hidden selection:bg-red-600 selection:text-white">
      <StarShower />
      <Navbar scrolled={scrolled} />
      
      <main>
        <section id="hero">
          <Hero />
        </section>

        <motion.section 
          id="about" 
          className="py-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <About />
        </motion.section>

        <motion.section 
          id="projects" 
          className="py-20 bg-neutral-950/50 backdrop-blur-sm"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <Projects />
        </motion.section>

        <motion.section 
          id="contact" 
          className="py-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <Contact />
        </motion.section>
      </main>

      <footer className="py-10 border-t border-neutral-900 text-center text-neutral-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Armaan Siddiqui. Built for performance.</p>
      </footer>

      {/* Moved ToastContainer to App.tsx to avoid layout issues */}
      <ToastContainer 
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        closeButton={true}
        toastClassName={() => {
          return `relative flex justify-between overflow-hidden cursor-pointer text-white shadow-lg border border-white/5 toast-gradient-border`;
        }}
        bodyClassName="relative z-10 toast-body-dark"
        progressClassName="fantansy-progress-bar"
      />
      </div>
    </>
  );
};

export default App;
