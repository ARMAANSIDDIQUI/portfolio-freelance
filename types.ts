
export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  imageUrl: string;
  liveUrl: string;
  githubUrl: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export enum Section {
  HERO = 'hero',
  ABOUT = 'about',
  PROJECTS = 'projects',
  CONTACT = 'contact'
}
