
import React, { useState,useEffect } from 'react';
import { PROJECTS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectCard: React.FC<{ project: typeof PROJECTS[0], index: number }> = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // On mobile, content is always "active/hovered" style
  const showContent = isMobile || isHovered;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative h-[500px] overflow-hidden rounded-3xl bg-neutral-950 border border-white/5 cursor-pointer"
    >
      {/* Live Project Preview (Iframe) */}
      <div className="absolute inset-0 z-0 bg-neutral-900">
        <iframe 
          src={project.liveUrl} 
          title={project.title}
          className={`w-full h-full border-0 transition-opacity duration-700 pointer-events-none ${isMobile ? 'opacity-50' : 'opacity-50 group-hover:opacity-100'}`}
          loading="lazy"
          scrolling="no"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none"></div>
      </div>

      {/* Content */}
      <div className="absolute inset-0 z-10 p-6 md:p-10 flex flex-col justify-end">
        <div className="mb-6 flex flex-wrap gap-2">
          {project.tech.map(t => (
            <span key={t} className="px-3 py-1 text-[9px] border border-red-600/30 bg-red-600/10 text-red-500 font-black uppercase tracking-widest rounded-full">
              {t}
            </span>
          ))}
        </div>
        
        <h3 className={`text-3xl font-black text-white mb-4 tracking-tighter uppercase transition-colors ${showContent ? 'text-red-500' : ''}`}>
          {project.title}
        </h3>
        
        <motion.p 
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: showContent ? "auto" : 0, opacity: showContent ? 1 : 0 }}
          className="text-neutral-400 text-sm leading-relaxed mb-6 overflow-hidden"
        >
          {project.description}
        </motion.p>
        
        <div className="flex items-center gap-8">
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-[10px] font-black uppercase tracking-widest text-white hover:text-red-500 flex items-center gap-2 transition-colors">
            Live Demo <span className="text-lg">↗</span>
          </a>
        </div>
      </div>

      {/* Hover Glow */}
      <div className={`absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent transition-opacity ${showContent ? 'opacity-100' : 'opacity-0'}`}></div>
      <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent transition-opacity ${showContent ? 'opacity-100' : 'opacity-0'}`}></div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xs font-black text-red-600 uppercase tracking-[0.4em] mb-6">Deliveries</h2>
          <h3 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter">CLIENTS & <br/><span className="text-neutral-600">DELIVERIES.</span></h3>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-md text-neutral-500 text-lg leading-relaxed font-medium border-l border-red-600 pl-8"
        >
          Successful digital transformations and high-impact deliveries for our valued partners.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-32 text-center"
      >
        <button className="group relative px-12 py-6 bg-transparent border border-white/10 text-white font-black uppercase tracking-[0.2em] rounded-full hover:border-red-600 transition-all overflow-hidden">
          <span className="relative z-10 group-hover:text-white">View Full Archive</span>
          <div className="absolute inset-0 bg-red-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
        </button>
      </motion.div>
    </div>
  );
};

export default Projects;
