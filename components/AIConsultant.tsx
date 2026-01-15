
import React, { useState, useRef, useEffect } from 'react';
import { getAIResponse } from '../services/geminiService';

const AIConsultant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'ai', text: string}[]>([
    { role: 'ai', text: "Hello. I'm Armaan's digital consultant. How can I help you evaluate his expertise today?" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsTyping(true);

    const aiResponse = await getAIResponse(userMsg);
    setMessages(prev => [...prev, { role: 'ai', text: aiResponse }]);
    setIsTyping(false);
  };

  return (
  <>
      {/* Trigger Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-[100] group relative w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-2xl shadow-red-600/40 hover:scale-110 active:scale-95 transition-all"
      >
        <div className="absolute inset-0 bg-red-600 rounded-full animate-ping opacity-20"></div>
        {isOpen ? (
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 w-[calc(100vw-2rem)] max-w-sm sm:max-w-md max-h-[80vh] md:w-[400px] md:h-[500px] md:bottom-20 md:right-8 bg-neutral-900 border border-white/10 rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          <div className="p-6 bg-neutral-800/50 border-b border-white/5 flex items-center gap-4">
            <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
               <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h4 className="text-white font-black uppercase text-xs tracking-widest">AI Consultant</h4>
              <p className="text-[10px] text-green-500 font-bold uppercase animate-pulse">Armaan.AI.v1 (Online)</p>
            </div>
          </div>

          <div 
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-6 space-y-4"
          >
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed ${
                  m.role === 'user' 
                    ? 'bg-red-600 text-white rounded-br-none' 
                    : 'bg-neutral-800 text-neutral-300 rounded-bl-none'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-neutral-800 p-4 rounded-2xl rounded-bl-none">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-neutral-500 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-neutral-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                    <div className="w-1.5 h-1.5 bg-neutral-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="px-4 pb-2 flex gap-2 overflow-x-auto no-scrollbar mask-gradient">
            {[
              "Tell me about Adarsh Dham",
              "What is your tech stack?",
              "Do you know Machine Learning?",
              "How can I hire you?",
              "What is Armaan's experience with Node.js?",
              "Can you tell me about the Chatorzzz project?",
              "What cloud platforms does Armaan use?",
              "What are Armaan's favorite frontend technologies?",
              "What kind of databases does Armaan work with?",
              "What are your long-term career goals?",
              "Can you describe your development workflow?",
              "What is your approach to problem-solving?",
              "Do you have experience with mobile development?",
              "What frameworks are you proficient in?"
            ].map((suggestion) => (
              <button
                key={suggestion}
                onClick={() => {
                  setMessages(prev => [...prev, { role: 'user', text: suggestion }]);
                  setIsTyping(true);
                  getAIResponse(suggestion).then(res => {
                    setMessages(prev => [...prev, { role: 'ai', text: res }]);
                    setIsTyping(false);
                  });
                }}
                className="whitespace-nowrap px-3 py-1.5 bg-neutral-800 border border-white/10 rounded-full text-[10px] text-neutral-400 hover:bg-neutral-700 hover:text-white transition-colors flex-shrink-0"
              >
                {suggestion}
              </button>
            ))}
          </div>

          <form onSubmit={handleSend} className="p-4 bg-neutral-800/50 border-t border-white/5 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about my tech stack..."
              className="flex-1 bg-neutral-950 border border-white/10 rounded-full px-4 py-2 text-sm text-white focus:outline-none focus:border-red-600 transition-colors"
            />
            <button 
              type="submit"
              className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AIConsultant;
