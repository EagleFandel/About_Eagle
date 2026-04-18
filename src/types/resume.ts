export type ResumeMode = "editorial" | "ats";

export type ResumeLocale = "zh" | "en";

export interface ResumeText {
  zh: string;
  en: string;
}

export interface ResumeBasics {
  name: ResumeText;
  headline: ResumeText;
  summary: ResumeText;
  location: ResumeText;
  email: string;
  email2?: string;
  phone: string;
  github: string;
  avatarPath: string;
}

export interface ResumeExperienceItem {
  id: string;
  org: ResumeText;
  title: ResumeText;
  period: ResumeText;
  highlights: ResumeText[];
}

export interface ResumeProjectItem {
  id: string;
  section?: string;
  name: ResumeText;
  event: ResumeText;
  period: ResumeText;
  role: ResumeText;
  highlights: ResumeText[];
  stack: string[];
  outcome: ResumeText;
}

export interface ResumeAwardItem {
  id: string;
  year: string;
  title: ResumeText;
  detail: ResumeText;
}

export interface ResumeSkillGroup {
  id: string;
  label: ResumeText;
  skills: string[];
}

export interface ResumeEducationItem {
  id: string;
  school: ResumeText;
  program: ResumeText;
  period: ResumeText;
  detail: ResumeText;
}

export interface ResumeLanguageItem {
  id: string;
  language: ResumeText;
  level: ResumeText;
}

export interface ResumeMetric {
  id: string;
  label: ResumeText;
  value: number;
}

export interface ResumeData {
  basics: ResumeBasics;
  impactMetrics: ResumeMetric[];
  experiences: ResumeExperienceItem[];
  projects: ResumeProjectItem[];
  awards: ResumeAwardItem[];
  skillGroups: ResumeSkillGroup[];
  education: ResumeEducationItem[];
  languages: ResumeLanguageItem[];
  updatedAt: string;
  version: string;
}
