
import React from 'react';
import { SKILL_CATEGORIES } from '../constants';
import { motion } from 'framer-motion';

const SkillCard: React.FC<{ category: typeof SKILL_CATEGORIES[0], index: number }> = ({ category, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="p-8 border border-white/5 bg-neutral-950 rounded-2xl relative group overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 to-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <h4 className="text-white font-black uppercase text-xs tracking-widest mb-6 flex items-center gap-3">
        <span className="w-2 h-2 bg-red-600 rounded-full shadow-[0_0_8px_rgba(255,0,0,0.8)]"></span>
        {category.title}
      </h4>
      
      <ul className="grid grid-cols-2 gap-3">
        {category.skills.map(skill => (
          <li key={skill} className="text-neutral-500 text-xs font-bold group-hover:text-neutral-300 transition-colors">
            {skill}
          </li>
        ))}
      </ul>

      <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-red-600/10 blur-2xl group-hover:bg-red-600/20 transition-all"></div>
    </motion.div>
  );
};

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-20 lg:mb-32">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 lg:mb-0"
        >
          <h2 className="text-xs font-black text-red-600 uppercase tracking-[0.3em] mb-6">Expertise</h2>
          <h3 className="text-4xl md:text-6xl font-black mb-8 md:mb-10 leading-none tracking-tighter">
            Architecting <br />
            <span className="text-neutral-600">The Modern Stack.</span>
          </h3>
          <p className="text-neutral-400 text-lg mb-8 leading-relaxed max-w-lg">
            Software Engineer Intern at <span className="text-white">Gozoom Technologies</span> and a Full-Stack Developer. I am passionate about Machine Learning and exploring the intersection of data and development.
          </p>
          <p className="text-neutral-400 text-lg mb-12 leading-relaxed max-w-lg">
            I build robust solutions with a focus on scalability, performance, and clean architecture.
          </p>
          
          <div className="grid grid-cols-2 gap-6 md:gap-10">
            <div>
              <div className="text-4xl md:text-5xl font-black text-white tracking-tighter">100%</div>
              <div className="text-[10px] uppercase tracking-widest text-red-600 font-black mt-2">Commitment</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black text-white tracking-tighter">24/7</div>
              <div className="text-[10px] uppercase tracking-widest text-red-600 font-black mt-2">Problem Solving</div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {SKILL_CATEGORIES.map((cat, i) => (
            <SkillCard key={cat.title} category={cat} index={i} />
          ))}
        </div>
      </div>

      <div className="border-t border-white/5 pt-20 md:pt-32">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <h2 className="text-[10px] font-black text-red-600 uppercase tracking-[0.4em] mb-4 italic">The Blueprint</h2>
          <h3 className="text-3xl md:text-4xl font-black tracking-tight mb-6 uppercase">How I Build For Scale</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {[
            { step: "01", title: "Strategic Analysis", desc: "Understanding the domain, identifying bottlenecks, and planning for 100x scale from day one." },
            { step: "02", title: "Robust Engineering", desc: "Clean architecture, type-safety, and test-driven development to ensure long-term maintainability." },
            { step: "03", title: "Edge Performance", desc: "Global distribution, intelligent caching, and optimized asset delivery for cinematic speed." }
          ].map((item, i) => (
            <motion.div 
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative p-10 bg-neutral-900/40 rounded-3xl border border-white/5 hover:border-red-600/20 transition-all group"
            >
              <div className="text-5xl font-black text-red-600/10 mb-6 group-hover:text-red-600/30 transition-colors italic">{item.step}</div>
              <h4 className="text-xl font-bold mb-4 uppercase tracking-tighter">{item.title}</h4>
              <p className="text-neutral-500 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
