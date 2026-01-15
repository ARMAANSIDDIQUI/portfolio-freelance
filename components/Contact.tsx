
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormState({ name: '', email: '', message: '' });
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-xs font-black text-red-600 uppercase tracking-[0.5em] mb-8 italic">Transmission</h2>
        <h3 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter mb-10 leading-tight">
          READY TO <br />
          <span className="text-neutral-600">EVOLVE?</span>
        </h3>
        <p className="text-neutral-400 text-xl leading-relaxed mb-12 max-w-md">
          Available for technical advisory, architectural reviews, and high-impact full-stack contracts.
        </p>

        <div className="space-y-8">
          <div>
            <div className="text-[10px] uppercase tracking-widest font-black text-red-600 mb-2">Direct Channel</div>
            <a href="mailto:armaansiddiqui.pms@gmail.com" className="text-2xl font-black hover:text-red-500 transition-colors">armaansiddiqui.pms@gmail.com</a>
          </div>
          <div className="flex gap-6">
             <a href="https://github.com/ARMAANSIDDIQUI" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-red-600 hover:bg-red-600 transition-all group">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
             </a>
             <a href="https://www.linkedin.com/in/armaan-siddiqui-6902ba294" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-red-600 hover:bg-red-600 transition-all group">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
             </a>
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="bg-neutral-900 border border-white/5 p-10 md:p-14 rounded-[2.5rem] relative overflow-hidden"
      >
        {/* <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/5 blur-3xl"></div> */}
        
        {submitted ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="py-20 text-center"
          >
            <div className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(255,0,0,0.4)]">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h4 className="text-3xl font-black mb-4 uppercase">Encoded & Sent.</h4>
            <p className="text-neutral-500 mb-10">Armaan will review your transmission shortly.</p>
            <button 
              onClick={() => setSubmitted(false)}
              className="px-8 py-3 border border-white/10 text-[10px] font-black uppercase tracking-widest hover:border-red-600 transition-all"
            >
              Reset Protocol
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-10">
            <div className="space-y-2 group">
              <label className="text-[10px] uppercase tracking-[0.3em] font-black text-neutral-600 group-focus-within:text-red-600 transition-colors">Identification</label>
              <input 
                required
                type="text" 
                value={formState.name}
                onChange={(e) => setFormState({...formState, name: e.target.value})}
                className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-red-600 transition-all placeholder:text-neutral-800 text-lg font-medium"
                placeholder="Full Name / Organization"
              />
            </div>
            
            <div className="space-y-2 group">
              <label className="text-[10px] uppercase tracking-[0.3em] font-black text-neutral-600 group-focus-within:text-red-600 transition-colors">Encryption Key (Email)</label>
              <input 
                required
                type="email" 
                value={formState.email}
                onChange={(e) => setFormState({...formState, email: e.target.value})}
                className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-red-600 transition-all placeholder:text-neutral-800 text-lg font-medium"
                placeholder="you@domain.com"
              />
            </div>

            <div className="space-y-2 group">
              <label className="text-[10px] uppercase tracking-[0.3em] font-black text-neutral-600 group-focus-within:text-red-600 transition-colors">Objective</label>
              <textarea 
                required
                rows={4}
                value={formState.message}
                onChange={(e) => setFormState({...formState, message: e.target.value})}
                className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-red-600 transition-all placeholder:text-neutral-800 resize-none text-lg font-medium"
                placeholder="Mission parameters..."
              />
            </div>
            
            <button 
              disabled={isSubmitting}
              type="submit"
              className="w-full py-8 bg-red-600 text-white font-black uppercase tracking-[0.3em] rounded-2xl hover:bg-red-700 transition-all flex items-center justify-center gap-4 disabled:opacity-50 shadow-[0_10px_40px_rgba(255,0,0,0.2)] hover:shadow-[0_10px_60px_rgba(255,0,0,0.4)] group"
            >
              {isSubmitting ? (
                <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                <>Initiate Sync <span className="text-2xl group-hover:translate-x-2 transition-transform">→</span></>
              )}
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
};

export default Contact;
