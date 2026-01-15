
import { Project, SkillCategory } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Adarsh Dham',
    description: 'Full-stack ashram management portal featuring booking calendars and a real-time tree-view system.',
    tech: ['React', 'Node.js', 'AWS EC2', 'Elastic IP', 'PWA'],
    imageUrl: 'https://images.unsplash.com/photo-1544256718-3bcf237f3974?auto=format&fit=crop&q=80&w=800', // Placeholder using abstract/tech feel
    liveUrl: 'https://adarshdham.com/',
    githubUrl: '#' // Not provided, keeping placeholder
  },
  {
    id: '2',
    title: 'Chatorzzz',
    description: 'A wholesale B2B E-commerce platform specialized for food products.',
    tech: ['E-commerce', 'Web Development'],
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=800',
    liveUrl: 'https://chatorzzz.in/',
    githubUrl: '#'
  },
  {
    id: '3',
    title: 'Rotary Club Sanskriti',
    description: 'Dynamic organization website with a full admin panel, CRUD operations, and automated email services.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'Tailwind'],
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
    liveUrl: 'https://www.rotaryclubsanskritimoradabad.org/',
    githubUrl: '#'
  },
  {
    id: '4',
    title: 'Jyotidham Toronto',
    description: 'International Ashram Portal featuring dynamic content updates and Google Maps API integration.',
    tech: ['React', 'Maps API', 'Dynamic Content'],
    imageUrl: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80&w=800',
    liveUrl: 'https://jyotidham.ca/',
    githubUrl: '#'
  },
  {
    id: '5',
    title: 'House of Specials',
    description: 'Business showcase website with automated email systems and scalable AWS deployment.',
    tech: ['Static Site', 'AWS EC2', 'Email Automation'],
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
    liveUrl: 'https://houseofspecials.in/',
    githubUrl: '#'
  },
  {
    id: '6',
    title: 'CODE++',
    description: 'DSA programming platform integrated with Judge0 API for code execution.',
    tech: ['MERN Stack', 'Tailwind', 'Judge0 API'],
    imageUrl: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=800',
    liveUrl: 'https://codeplusplus-lake.vercel.app/',
    githubUrl: '#'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend Development',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Three.js', 'Spline']
  },
  {
    title: 'Backend & Database',
    skills: ['Node.js', 'Express', 'MongoDB', 'SQL', 'REST APIs', 'AWS']
  },
  {
    title: 'Machine Learning',
    skills: ['Data Science', 'Python', 'ML Algorithms', 'Deep Learning', 'Pandas', 'NumPy']
  },
  {
    title: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'AWS EC2', 'Vercel', 'Postman', 'VS Code']
  }
];
