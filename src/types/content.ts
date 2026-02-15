export type Locale = "zh" | "en";

export interface LocalizedText {
  zh: string;
  en: string;
}

export interface ProjectCard {
  id: string;
  title: LocalizedText;
  role: LocalizedText;
  impact: LocalizedText;
  award?: LocalizedText;
  stack: string[];
}

export interface ExperienceRole {
  id: string;
  org: LocalizedText;
  title: LocalizedText;
  period: LocalizedText;
  highlights: LocalizedText[];
}

export interface MotionPreset {
  heroIntensity: number;
  particleCount: number;
  blurAmount: number;
  pinDuration: number;
}

export type DeviceTier = "high" | "mid" | "low";
