import type { ProjectCard } from "@/types/content";

export const selectedProjects: ProjectCard[] = [
  {
    id: "jiancareer",
    title: {
      zh: "Jiancareer 简职",
      en: "Jiancareer"
    },
    role: {
      zh: "CTO / 联合创始人",
      en: "CTO / Co-Founder"
    },
    impact: {
      zh: "我主导 AI Agent 系统与全栈架构，带队获得 WaytoAGI 黑客松一等奖，并在 AI Agent 赛事中晋级半决赛。",
      en: "I led the AI agent architecture and full-stack delivery, earning 1st prize at WaytoAGI Hackathon and reaching the AI Agent semifinal stage."
    },
    award: {
      zh: "WaytoAGI 黑客松一等奖",
      en: "WaytoAGI Hackathon - 1st Prize"
    },
    stack: ["AI Agent", "Next.js", "TypeScript", "Node.js", "Product Strategy"]
  },
  {
    id: "meow-piano",
    title: {
      zh: "《喵喵琴》XR & AI 音乐交互",
      en: "Meow Piano - XR & AI Music Interaction"
    },
    role: {
      zh: "核心交互与技术主导",
      en: "Interaction & Core Tech Lead"
    },
    impact: {
      zh: "我负责核心逻辑与交互设计，实现音频转八音阶系统，最终获得 WorldRemix XR 2025 总赛道第一名。",
      en: "I led core logic and interaction design, shipping an audio-to-scale interaction system and winning 1st place in the WorldRemix XR 2025 main track."
    },
    award: {
      zh: "WorldRemix XR 2025 总赛道第一名",
      en: "WorldRemix XR 2025 - 1st Place Overall"
    },
    stack: ["Unity", "Vision Pro", "XR Interaction", "AI Audio Mapping"]
  },
  {
    id: "silent-bridge",
    title: {
      zh: "《默语之桥》AI + 硬件公益平台",
      en: "Silent Bridge - AI + Hardware for Accessibility"
    },
    role: {
      zh: "系统设计与产品实现",
      en: "System Architect & Product Implementer"
    },
    impact: {
      zh: "我负责 AI 识别和硬件交互链路，构建国际手语教学方案，获得 REBUILD-Z 2025 AI+硬件方向一等奖。",
      en: "I designed the AI recognition + hardware interaction pipeline for sign-language learning, winning 1st prize in REBUILD-Z 2025 AI + Hardware track."
    },
    award: {
      zh: "REBUILD-Z 2025 AI+硬件方向一等奖",
      en: "REBUILD-Z 2025 - AI + Hardware 1st Prize"
    },
    stack: ["Computer Vision", "Embedded", "Interaction Design", "Accessibility Tech"]
  }
];
