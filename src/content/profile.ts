import type { LocalizedText } from "@/types/content";
import { resumeData } from "@/content/resume";

const primaryEducation = resumeData.education[0];
const advancedPractice = resumeData.education[1];

export const profile = {
  name: resumeData.basics.name,
  headline: resumeData.basics.headline,
  statement: {
    zh: "AI Native 青年极客，联合发起 She Nicest，曾任简职 CTO，参与词灵等 AI Agent 项目。探索具身智能、AGI、脑机接口与超语言表达系统。",
    en: "AI Native young builder, She Nicest co-founder, former JianCareer CTO, and contributor to AI agent projects like Cling. Exploring embodied AI, AGI, BCI, and post-linear language systems."
  } satisfies LocalizedText,
  intro: resumeData.basics.summary,
  location: resumeData.basics.location,
  email: resumeData.basics.email,
  email2: resumeData.basics.email2,
  phone: resumeData.basics.phone,
  github: resumeData.basics.github,
  identityTags: [
    "AI Native Builder",
    "Build in Public",
    "She Nicest Co-Founder",
    "JianCareer CTO",
    "XbotPark Explorer",
    "Open Source Builder"
  ],
  capabilityClusters: resumeData.skillGroups.map((group) => ({
    id: group.id,
    label: group.label,
    items: group.skills
  })),
  metrics: resumeData.impactMetrics,
  ctaLine: {
    zh: "如果你也在寻找 AI、产品与真实场景之间的下一次 0→1，我们可以一起把它做出来。",
    en: "If you are exploring the next zero-to-one between AI, product, and real-world needs, let's build it together."
  } satisfies LocalizedText,
  educationFootnote: {
    zh: `教育：${primaryEducation.school.zh} · ${primaryEducation.program.zh}；${advancedPractice.school.zh} · ${advancedPractice.program.zh}。`,
    en: `Education: ${primaryEducation.school.en} · ${primaryEducation.program.en}; ${advancedPractice.school.en} · ${advancedPractice.program.en}.`
  } satisfies LocalizedText
};
