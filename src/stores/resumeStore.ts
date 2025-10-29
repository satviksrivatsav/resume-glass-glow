import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid';
import { ResumeData, defaultResumeData, CustomSection } from '@/types/resume';

interface ResumeStore {
  resumeData: ResumeData;
  updatePersonalInfo: (data: Partial<ResumeData['personalInfo']>) => void;
  updateSettings: (settings: Partial<ResumeData['settings']>) => void;
  addEducation: () => void;
  updateEducation: (id: string, education: Partial<ResumeData['education'][0]>) => void;
  deleteEducation: (id: string) => void;
  addWorkExperience: () => void;
  updateWorkExperience: (id: string, experience: Partial<ResumeData['workExperience'][0]>) => void;
  deleteWorkExperience: (id: string) => void;
  addProject: () => void;
  updateProject: (id: string, project: Partial<ResumeData['projects'][0]>) => void;
  deleteProject: (id: string) => void;
  addSkill: () => void;
  updateSkill: (id: string, skill: Partial<ResumeData['skills'][0]>) => void;
  deleteSkill: (id: string) => void;
  addCustomSection: () => void;
  updateCustomSection: (id: string, section: Partial<CustomSection>) => void;
  deleteCustomSection: (id: string) => void;
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
  
  addEducation: () =>
    set((state) => ({
      resumeData: {
        ...state.resumeData,
        education: [
          ...state.resumeData.education,
          { id: uuidv4(), school: '', degree: '', field: '', startDate: '', endDate: '', gpa: '', description: '' },
        ],
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
  
  addWorkExperience: () =>
    set((state) => ({
      resumeData: {
        ...state.resumeData,
        workExperience: [
          ...state.resumeData.workExperience,
          { id: uuidv4(), company: '', position: '', startDate: '', endDate: '', current: false, location: '', description: '' },
        ],
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
  
  addProject: () =>
    set((state) => ({
      resumeData: {
        ...state.resumeData,
        projects: [
          ...state.resumeData.projects,
          { id: uuidv4(), name: '', startDate: '', endDate: '', technologies: '', link: '', description: '' },
        ],
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
  
  addSkill: () =>
    set((state) => ({
      resumeData: {
        ...state.resumeData,
        skills: [...state.resumeData.skills, { id: uuidv4(), category: '', items: '' }],
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

  addCustomSection: () =>
    set((state) => ({
      resumeData: {
        ...state.resumeData,
        customSections: [
          ...state.resumeData.customSections,
          { id: uuidv4(), title: 'New Section', description: '' },
        ],
      },
    })),
  
  updateCustomSection: (id, section) =>
    set((state) => ({
      resumeData: {
        ...state.resumeData,
        customSections: state.resumeData.customSections.map((item) =>
          item.id === id ? { ...item, ...section } : item
        ),
      },
    })),

  deleteCustomSection: (id) =>
    set((state) => ({
      resumeData: {
        ...state.resumeData,
        customSections: state.resumeData.customSections.filter((item) => item.id !== id),
      },
    })),
  
  resetResume: () => set({ resumeData: defaultResumeData }),
}));