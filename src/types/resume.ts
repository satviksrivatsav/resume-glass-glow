export interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
  location: string;
  linkedin?: string;
  website?: string;
  summary: string;
}

export interface Education {
  id: string;
  school: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  description: string;
}

export interface WorkExperience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
}

export interface Project {
  id: string;
  name: string;
  technologies: string;
  startDate: string;
  endDate: string;
  description: string;
  link?: string;
}

export interface Skill {
  id: string;
  category: string;
  items: string;
}

export interface ResumeSettings {
  themeColor: string;
  fontFamily: string;
  fontSize: 'compact' | 'standard' | 'large';
  documentSize: 'letter' | 'a4';
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  education: Education[];
  workExperience: WorkExperience[];
  projects: Project[];
  skills: Skill[];
  settings: ResumeSettings;
}

export const defaultResumeData: ResumeData = {
  personalInfo: {
    name: '',
    email: '',
    phone: '',
    location: '',
    linkedin: '',
    website: '',
    summary: '',
  },
  education: [],
  workExperience: [],
  projects: [],
  skills: [],
  settings: {
    themeColor: '#38bdf8',
    fontFamily: 'Open Sans',
    fontSize: 'standard',
    documentSize: 'letter',
  },
};
