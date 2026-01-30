
import { Project, SkillCategory } from './types';

export const PROJECTS: Project[] = [
  {
    id: '7',
    title: 'Honest Graphics & Printers',
    description: 'High-quality print solutions featuring a dual light/dark theme, lightweight 3D physics engine, and secure e-commerce functionality with Google OAuth.',
    tech: ['React', 'Google OAuth', 'Dual Theme', 'Lightweight 3D Physics', 'E-commerce', 'Security'],
    imageUrl: '',
    liveUrl: 'https://honestprinters.in/',
    githubUrl: '#'
  },
  {
    id: '1',
    title: 'Adarsh Dham',
    description: 'Full-stack ashram management portal featuring booking calendars and a real-time tree-view system.',
    tech: ['React', 'Node.js', 'AWS EC2', 'Elastic IP', 'PWA'],
    imageUrl: '',
    liveUrl: 'https://adarshdham.com/',
    githubUrl: '#' // Not provided, keeping placeholder
  },
  {
    id: '2',
    title: 'Chatorzzz',
    description: 'A wholesale B2B E-commerce platform specialized for food products.',
    tech: ['E-commerce', 'Web Development'],
    imageUrl: '',
    liveUrl: 'https://chatorzzz.in/',
    githubUrl: '#'
  },
  {
    id: '4',
    title: 'Jyotidham Toronto',
    description: 'International Ashram Portal featuring dynamic content updates and Google Maps API integration.',
    tech: ['React', 'Maps API', 'Dynamic Content'],
    imageUrl: '',
    liveUrl: 'https://jyotidham.ca/',
    githubUrl: '#'
  },
  {
    id: '3',
    title: 'Rotary Club Sanskriti',
    description: 'Dynamic organization website with a full admin panel, CRUD operations, and automated email services.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'Tailwind'],
    imageUrl: '',
    liveUrl: 'https://www.rotaryclubsanskritimoradabad.org/',
    githubUrl: '#'
  },
  {
    id: '5',
    title: 'House of Specials',
    description: 'Business showcase website with automated email systems and scalable AWS deployment.',
    tech: ['Static Site', 'AWS EC2', 'Email Automation'],
    imageUrl: '',
    liveUrl: 'https://houseofspecials.in/',
    githubUrl: '#'
  },
  {
    id: '6',
    title: 'CODE++',
    description: 'DSA programming platform integrated with Judge0 API for code execution.',
    tech: ['MERN Stack', 'Tailwind', 'Judge0 API'],
    imageUrl: '',
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
