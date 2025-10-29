import { create } from 'zustand';
import { ResumeData, defaultResumeData } from '@/types/resume';

interface ResumeStore {
  resumeData: ResumeData;
  updatePersonalInfo: (data: Partial<ResumeData['personalInfo']>) => void;
  updateSettings: (settings: Partial<ResumeData['settings']>) => void;
  addEducation: (education: ResumeData['education'][0]) => void;
  updateEducation: (id: string, education: Partial<ResumeData['education'][0]>) => void;
  deleteEducation: (id: string) => void;
  addWorkExperience: (experience: ResumeData['workExperience'][0]) => void;
  updateWorkExperience: (id: string, experience: Partial<ResumeData['workExperience'][0]>) => void;
  deleteWorkExperience: (id: string) => void;
  addProject: (project: ResumeData['projects'][0]) => void;
  updateProject: (id: string, project: Partial<ResumeData['projects'][0]>) => void;
  deleteProject: (id: string) => void;
  addSkill: (skill: ResumeData['skills'][0]) => void;
  updateSkill: (id: string, skill: Partial<ResumeData['skills'][0]>) => void;
  deleteSkill: (id: string) => void;
  resetResume: () => void;
}

export const useResumeStore = create<ResumeStore>((set) => ({
  resumeData: defaultResumeData,
  
  updatePersonalInfo: (data) =>
    set((state) => ({
      resumeData: {
        ...state.resumeData,
        personalInfo: { ...state.resumeData.personalInfo, ...data },
      },
    })),
  
  updateSettings: (settings) =>
    set((state) => ({
      resumeData: {
        ...state.resumeData,
        settings: { ...state.resumeData.settings, ...settings },
      },
    })),
  
  addEducation: (education) =>
    set((state) => ({
      resumeData: {
        ...state.resumeData,
        education: [...state.resumeData.education, education],
      },
    })),
  
  updateEducation: (id, education) =>
    set((state) => ({
      resumeData: {
        ...state.resumeData,
        education: state.resumeData.education.map((item) =>
          item.id === id ? { ...item, ...education } : item
        ),
      },
    })),
  
  deleteEducation: (id) =>
    set((state) => ({
      resumeData: {
        ...state.resumeData,
        education: state.resumeData.education.filter((item) => item.id !== id),
      },
    })),
  
  addWorkExperience: (experience) =>
    set((state) => ({
      resumeData: {
        ...state.resumeData,
        workExperience: [...state.resumeData.workExperience, experience],
      },
    })),
  
  updateWorkExperience: (id, experience) =>
    set((state) => ({
      resumeData: {
        ...state.resumeData,
        workExperience: state.resumeData.workExperience.map((item) =>
          item.id === id ? { ...item, ...experience } : item
        ),
      },
    })),
  
  deleteWorkExperience: (id) =>
    set((state) => ({
      resumeData: {
        ...state.resumeData,
        workExperience: state.resumeData.workExperience.filter((item) => item.id !== id),
      },
    })),
  
  addProject: (project) =>
    set((state) => ({
      resumeData: {
        ...state.resumeData,
        projects: [...state.resumeData.projects, project],
      },
    })),
  
  updateProject: (id, project) =>
    set((state) => ({
      resumeData: {
        ...state.resumeData,
        projects: state.resumeData.projects.map((item) =>
          item.id === id ? { ...item, ...project } : item
        ),
      },
    })),
  
  deleteProject: (id) =>
    set((state) => ({
      resumeData: {
        ...state.resumeData,
        projects: state.resumeData.projects.filter((item) => item.id !== id),
      },
    })),
  
  addSkill: (skill) =>
    set((state) => ({
      resumeData: {
        ...state.resumeData,
        skills: [...state.resumeData.skills, skill],
      },
    })),
  
  updateSkill: (id, skill) =>
    set((state) => ({
      resumeData: {
        ...state.resumeData,
        skills: state.resumeData.skills.map((item) =>
          item.id === id ? { ...item, ...skill } : item
        ),
      },
    })),
  
  deleteSkill: (id) =>
    set((state) => ({
      resumeData: {
        ...state.resumeData,
        skills: state.resumeData.skills.filter((item) => item.id !== id),
      },
    })),
  
  resetResume: () => set({ resumeData: defaultResumeData }),
}));
