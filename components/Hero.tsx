
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, MeshDistortMaterial, Sphere } from '@react-three/drei';
import { motion } from 'framer-motion';

const MeshStandardMaterial = 'meshStandardMaterial' as any;
const AmbientLight = 'ambientLight' as any;
const PointLight = 'pointLight' as any;

const TechOrb: React.FC = () => {
  return (
    <Float speed={4} rotationIntensity={1} floatIntensity={2}>
      <Sphere args={[1, 64, 64]} scale={2.2}>
        <MeshDistortMaterial
          color="#ff0000"
          speed={2}
          distort={0.4}
          radius={1}
          emissive="#220000"
          metalness={0.9}
          roughness={0.1}
        />
      </Sphere>
      <Sphere args={[1.2, 32, 32]} scale={2.8}>
        <MeshStandardMaterial
          color="#ff0000"
          wireframe
          transparent
          opacity={0.05}
        />
      </Sphere>
    </Float>
  );
};

const Hero: React.FC = () => {
  const containerVars = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const itemVars = {
    hidden: { y: 40, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 6], fov: 75 }}>
          <AmbientLight intensity={0.4} />
          <PointLight position={[10, 10, 10]} intensity={2} color="#ff0000" />
          <PointLight position={[-10, -10, -10]} intensity={1} color="#330000" />
          <Suspense fallback={null}>
            <TechOrb />
          </Suspense>
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.8} />
        </Canvas>
      </div> */}

      <motion.div 
        variants={containerVars}
        initial="hidden"
        animate="visible"
        className="relative z-10 container mx-auto px-6 text-center"
      >
        <motion.div 
          variants={itemVars}
          className="inline-block px-3 py-1 mb-4 md:mb-8 border border-red-500/40 bg-red-500/10 rounded-full text-[10px] font-black text-red-500 tracking-[0.2em] uppercase"
        >
          Full-Stack & Data Science
        </motion.div>
        
        <motion.h1 
          variants={itemVars}
          className="text-5xl sm:text-7xl md:text-9xl font-black tracking-tighter leading-[0.9] mb-6 md:mb-8"
        >
          ARMAAN <br /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-orange-500 inline-block">SIDDIQUI</span>
        </motion.h1>
        
        <motion.p 
          variants={itemVars}
          className="max-w-2xl mx-auto text-lg md:text-xl text-neutral-400 font-medium mb-8 md:mb-12 leading-relaxed"
        >
          Full-Stack Developer | ML & DS Enthusiast. I build 
          <span className="text-white"> scalable web applications</span> and explore the intersection of data and development.
        </motion.p>

        <motion.div 
          variants={itemVars}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a 
            href="#projects" 
            className="group relative w-full sm:w-auto px-10 py-5 bg-white text-black font-black uppercase tracking-widest rounded-sm overflow-hidden transition-all"
          >
            <span className="relative z-10 transition-colors group-hover:text-white">Our Clients</span>
            <div className="absolute inset-0 bg-red-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </a>
          <a 
            href="#contact" 
            className="w-full sm:w-auto px-10 py-5 border border-white/20 text-white font-black uppercase tracking-widest rounded-sm hover:border-red-600 hover:bg-red-600/5 transition-all"
          >
            Hire Me
          </a>
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-black text-neutral-500">Explore</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-red-600 to-transparent"></div>
      </motion.div>
    </div>
  );
};

export default Hero;
