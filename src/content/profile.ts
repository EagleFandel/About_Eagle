import type { LocalizedText } from "@/types/content";

export const profile = {
  name: {
    zh: "赵轩灿",
    en: "Xuancan Zhao"
  } satisfies LocalizedText,
  headline: {
    zh: "AI Native 创始人 / 产品工程师 / 0→1 创业者",
    en: "AI Native Founder / Product Engineer / Zero-to-One Builder"
  } satisfies LocalizedText,
  statement: {
    zh: "我联合发起了全国规模最大的女性黑客松 She Nicest，曾任简职 CTO，参与 XbotPark 硬科技创业孵化。追求：具身智能、AGI、超语言表达系统。",
    en: "Co-founded China's largest women's hackathon brand, former CTO of Jiancareer, XbotPark explorer. Pursuing: embodied AI, AGI, and foundational language systems."
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
    "AI Native Founder",
    "Zero-to-One Builder",
    "Hackathon Champion",
    "Community Organizer"
  ],
  capabilityClusters: [
    {
      id: "software",
      label: {
        zh: "软件工程",
        en: "Software Engineering"
      } satisfies LocalizedText,
      items: ["Python", "C/C++", "TypeScript", "Next.js", "React"]
    },
    {
      id: "ai",
      label: {
        zh: "AI 与智能体",
        en: "AI & Agents"
      } satisfies LocalizedText,
      items: ["AI Agent Design", "RAG", "MCP", "Multi-Agent", "Prompt Engineering"]
    },
    {
      id: "xr",
      label: {
        zh: "XR 与交互",
        en: "XR & Interaction"
      } satisfies LocalizedText,
      items: ["AR/XR", "Unity", "Vision Pro", "Interactive Prototyping"]
    },
    {
      id: "hardware",
      label: {
        zh: "硬件与系统",
        en: "Hardware & Systems"
      } satisfies LocalizedText,
      items: ["Embedded", "BLE", "Firmware", "PCB Debugging"]
    }
  ],
  metrics: [
    {
      id: "community",
      label: {
        zh: "开发者社区",
        en: "Developer Community"
      } satisfies LocalizedText,
      value: 1000
    },
    {
      id: "hackathons",
      label: {
        zh: "黑客松落地",
        en: "Hackathons Executed"
      } satisfies LocalizedText,
      value: 3
    },
    {
      id: "awards",
      label: {
        zh: "核心奖项",
        en: "Major Awards"
      } satisfies LocalizedText,
      value: 7
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
