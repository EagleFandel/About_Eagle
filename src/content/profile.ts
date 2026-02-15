import type { LocalizedText } from "@/types/content";

export const profile = {
  name: {
    zh: "赵轩灿",
    en: "Xuancan Zhao"
  } satisfies LocalizedText,
  headline: {
    zh: "硬核工程师 / 技术型创新创始人",
    en: "Hardcore Engineer / Technical Innovation Founder"
  } satisfies LocalizedText,
  statement: {
    zh: "我构建 AI Agent、XR 交互和全栈产品，把创意快速转化为可运行的系统。",
    en: "I build AI agent systems, XR interactions, and full-stack products that turn ideas into working systems fast."
  } satisfies LocalizedText,
  intro: {
    zh: "从黑客松到真实场景落地，我持续用工程能力、产品视角和社区组织力推动技术创新。",
    en: "From hackathons to real-world deployment, I push innovation through engineering depth, product thinking, and community leadership."
  } satisfies LocalizedText,
  location: {
    zh: "上海，中国",
    en: "Shanghai, China"
  } satisfies LocalizedText,
  email: "quinceyleone41@gmail.com",
  github: "https://github.com/EagleFandel",
  identityTags: [
    "AI Agent Systems",
    "XR Interactive Computing",
    "Full-Stack Product Engineering",
    "Hackathon-Proven Builder"
  ],
  capabilityClusters: [
    {
      id: "core-stack",
      label: {
        zh: "核心工程栈",
        en: "Core Engineering Stack"
      } satisfies LocalizedText,
      items: ["Python", "C/C++", "TypeScript", "Next.js", "React"]
    },
    {
      id: "intelligence",
      label: {
        zh: "智能系统",
        en: "Intelligent Systems"
      } satisfies LocalizedText,
      items: ["AI Agent", "ML", "PromptOps", "Data Pipelines"]
    },
    {
      id: "spatial",
      label: {
        zh: "空间与交互",
        en: "Spatial & Interaction"
      } satisfies LocalizedText,
      items: ["AR/XR", "Unity", "Vision Pro", "Sensor Interaction"]
    },
    {
      id: "hardware",
      label: {
        zh: "硬件系统",
        en: "Hardware Systems"
      } satisfies LocalizedText,
      items: ["Embedded", "BLE", "Firmware", "PCB Debugging"]
    }
  ],
  metrics: [
    {
      id: "awards",
      label: {
        zh: "竞赛与奖项",
        en: "Awards & Rankings"
      } satisfies LocalizedText,
      value: 12
    },
    {
      id: "projects",
      label: {
        zh: "已交付项目",
        en: "Shipped Projects"
      } satisfies LocalizedText,
      value: 20
    },
    {
      id: "roles",
      label: {
        zh: "核心角色",
        en: "Leadership Roles"
      } satisfies LocalizedText,
      value: 4
    }
  ],
  ctaLine: {
    zh: "让我们一起做一个会被记住的技术作品",
    en: "Let's build something unforgettable."
  } satisfies LocalizedText,
  educationFootnote: {
    zh: "教育：上海高中在读，长期参与高校实验室实践与技术社区协作。",
    en: "Education: High school student in Shanghai, with ongoing lab practice and active open-source community collaboration."
  } satisfies LocalizedText
};
