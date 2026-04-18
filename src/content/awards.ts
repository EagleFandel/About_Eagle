import type { ExperienceRole, LocalizedText } from "@/types/content";

export const awardsTimeline: Array<{
  year: string;
  title: LocalizedText;
  detail: LocalizedText;
}> = [
  {
    year: "2026",
    title: {
      zh: "2026 XbotPark 硬科技创业冬令营",
      en: "2026 XbotPark Hard-Tech Winter Camp"
    },
    detail: {
      zh: "希家云（大健康·血糖管理）结营二等奖",
      en: "Xijia Cloud - Second Prize"
    }
  },
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
      zh: "REBUILD-Z 2025 硬件黑客松",
      en: "REBUILD-Z 2025 Hardware Hackathon"
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
      zh: "《简职》优秀 00 后开发者奖",
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
    id: "xbotpark",
    org: {
      zh: "XbotPark 松山湖国际机器人研究院",
      en: "XbotPark Robotics Base"
    },
    title: {
      zh: "创业探索成员",
      en: "Entrepreneurship Explorer"
    },
    period: {
      zh: "2026.01 - 至今",
      en: "Jan 2026 - Present"
    },
    highlights: [
      {
        zh: "入选李泽湘教授创办的 XbotPark 创业体系，参与硬件创业项目孵化。",
        en: "Selected into Professor Li Zexiang's XbotPark entrepreneurship program."
      },
      {
        zh: "负责从用户需求调研、产品定义、原型验证到市场测试的 0→1 全流程探索。",
        en: "Led full-cycle 0→1 exploration from user research to market validation."
      }
    ]
  },
  {
    id: "she-nicest",
    org: {
      zh: "SHE NICEST 她构未来",
      en: "SHE NICEST"
    },
    title: {
      zh: "联合创始人 / 技术主创",
      en: "Co-Founder / Technical Lead"
    },
    period: {
      zh: "2025.12 - 至今",
      en: "Dec 2025 - Present"
    },
    highlights: [
      {
        zh: "全国规模最大女性黑客松厂牌联合创始人，落地3场大型女性黑客松，2100+人报名、500+人参与。",
        en: "Co-founded China's largest women's hackathon brand with 2,100+ sign-ups and 500+ participants."
      },
      {
        zh: "搭建并运营覆盖上海、北京、深圳、杭州的社群网络，私域用户1.3万+，公域曝光200万+。",
        en: "Built community networks across 4 cities with 13,000+ private users and 2M+ impressions."
      }
    ]
  },
  {
    id: "jiancareer",
    org: {
      zh: "Jiancareer 简职",
      en: "Jiancareer"
    },
    title: {
      zh: "CTO / 联合创始人",
      en: "CTO / Co-Founder"
    },
    period: {
      zh: "2025.07 - 至今",
      en: "Jul 2025 - Present"
    },
    highlights: [
      {
        zh: "主导 AI Agent 系统与全栈架构，获 WaytoAGI 黑客松一等奖，晋级 AI Agent 2025 半决赛。",
        en: "Led AI agent architecture winning WaytoAGI Hackathon 1st prize and reaching AI Agent 2025 semifinals."
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
        zh: "推广 AR/XR 在教育与创意领域的应用，参与生态建设并指导学生开展创新实践。",
        en: "Promoted AR/XR in education and creative workflows, coached student innovation projects."
      }
    ]
  }
];
