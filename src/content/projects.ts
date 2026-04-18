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
    id: "xijia-cloud",
    title: {
      zh: "希家云｜血糖管理方案",
      en: "Xijia Cloud | Glucose Management"
    },
    role: {
      zh: "核心成员｜用户研究与问题定义",
      en: "Core Member | User Research & Problem Definition"
    },
    impact: {
      zh: "入选 XbotPark 冬令营，完成 20+ 用户与 5+ 医师深访，提炼二型「瘦糖」人群核心控糖痛点，HMW 问题定义。",
      en: "Selected into XbotPark Winter Camp. Interviewed 20+ users and 5+ experts to define glucose management pain points for lean type-2 users."
    },
    award: {
      zh: "XbotPark 冬令营二等奖",
      en: "XbotPark Winter Camp - Second Prize"
    },
    stack: ["User Research", "Journey Mapping", "Problem Framing", "HealthTech"]
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
  }
];
