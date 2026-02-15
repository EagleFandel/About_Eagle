import type { ExperienceRole, LocalizedText } from "@/types/content";

export const awardsTimeline: Array<{
  year: string;
  title: LocalizedText;
  detail: LocalizedText;
}> = [
  {
    year: "2025",
    title: {
      zh: "WorldRemix XR 2025",
      en: "WorldRemix XR 2025"
    },
    detail: {
      zh: "《喵喵琴》总赛道第一名",
      en: "Meow Piano - 1st Place Overall"
    }
  },
  {
    year: "2025",
    title: {
      zh: "REBUILD-Z 硬件黑客松",
      en: "REBUILD-Z Hardware Hackathon"
    },
    detail: {
      zh: "《默语之桥》AI+硬件方向一等奖",
      en: "Silent Bridge - AI + Hardware 1st Prize"
    }
  },
  {
    year: "2025",
    title: {
      zh: "AI Agent 2025",
      en: "AI Agent 2025"
    },
    detail: {
      zh: "《简职》优秀 00 后开发者奖项",
      en: "Jiancareer - Outstanding Gen-Z Developer Award"
    }
  },
  {
    year: "2024",
    title: {
      zh: "GOGC 全球开源极客嘉年华",
      en: "GOGC Open Source Festival"
    },
    detail: {
      zh: "《文物探秘》最佳实践奖",
      en: "Cultural Relic Explorer - Best Practice Award"
    }
  }
];

export const roleTimeline: ExperienceRole[] = [
  {
    id: "she-nicest",
    org: {
      zh: "She Nicest",
      en: "She Nicest"
    },
    title: {
      zh: "联合创始人",
      en: "Co-Founder"
    },
    period: {
      zh: "2025.12 - 至今",
      en: "Dec 2025 - Present"
    },
    highlights: [
      {
        zh: "策划千人级科技创新活动，聚焦女性科技参与与创新。",
        en: "Co-created a thousand-scale innovation event focused on women in tech."
      },
      {
        zh: "搭建工作坊与 mini hackathon 体系，推动技术普惠。",
        en: "Built workshop and mini-hackathon programs for accessible tech innovation."
      }
    ]
  },
  {
    id: "rokid",
    org: {
      zh: "Rokid",
      en: "Rokid"
    },
    title: {
      zh: "校园大使",
      en: "Campus Ambassador"
    },
    period: {
      zh: "2025.08 - 2026.08",
      en: "Aug 2025 - Aug 2026"
    },
    highlights: [
      {
        zh: "推广 AR/XR 在教育与创意领域的应用。",
        en: "Promoted AR/XR use cases in education and creative workflows."
      },
      {
        zh: "参与生态建设并指导学生开展创新实践。",
        en: "Contributed to ecosystem growth and coached student innovation projects."
      }
    ]
  },
  {
    id: "openkylin",
    org: {
      zh: "openKylin",
      en: "openKylin"
    },
    title: {
      zh: "社区成员 / 推广大使",
      en: "Community Member / Evangelist"
    },
    period: {
      zh: "2025.07 - 2026.07",
      en: "Jul 2025 - Jul 2026"
    },
    highlights: [
      {
        zh: "持续参与开源社区建设与技术传播。",
        en: "Actively contributed to open-source community building and technical outreach."
      }
    ]
  }
];
