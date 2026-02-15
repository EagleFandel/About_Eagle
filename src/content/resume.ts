import type { ResumeData, ResumeLocale, ResumeText } from "@/types/resume";

export const resolveResumeText = (text: ResumeText, locale: ResumeLocale): string => text[locale];

export const resumeData: ResumeData = {
  basics: {
    name: {
      zh: "赵轩灿",
      en: "Xuancan Zhao"
    },
    headline: {
      zh: "全栈工程师 / 技术创新创始人 / AI & XR 实践者",
      en: "Full-Stack Engineer / Innovation Founder / AI & XR Builder"
    },
    summary: {
      zh: "我专注于 AI Agent、XR 交互和软硬件融合系统，擅长将创意在高压周期内转化为可交付产品。过去两年中，我持续在黑客松、开源社区与真实场景中完成从系统设计到落地验证的全链路实践，并获得多项技术竞赛奖项。",
      en: "I focus on AI agents, XR interaction, and hardware-software integrated systems. I specialize in turning ambitious ideas into production-ready prototypes under tight timelines. Across hackathons, open-source communities, and real deployments, I have repeatedly delivered end-to-end technical execution and won multiple innovation awards."
    },
    location: {
      zh: "上海，中国",
      en: "Shanghai, China"
    },
    email: "quinceyleone41@gmail.com",
    phone: "+86 18101645271",
    github: "https://github.com/EagleFandel",
    avatarPath: "/images/avatar.jpg"
  },
  impactMetrics: [
    {
      id: "awards",
      label: {
        zh: "核心奖项",
        en: "Major Awards"
      },
      value: 6
    },
    {
      id: "leadership",
      label: {
        zh: "领导角色",
        en: "Leadership Roles"
      },
      value: 4
    },
    {
      id: "featured-projects",
      label: {
        zh: "代表项目",
        en: "Featured Projects"
      },
      value: 6
    }
  ],
  experiences: [
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
          zh: "联合创办预计 1000+ 人参与的社会创新黑客松与科技展会，聚焦女性科技参与和技术共创。",
          en: "Co-founded a large-scale social innovation hackathon and expo expected to host 1,000+ participants, focused on women in technology."
        },
        {
          zh: "策划并执行工作坊与 Mini Hackathon 系列，构建活动预热与社区沉淀机制。",
          en: "Designed and executed workshop and mini-hackathon programs to build sustained community engagement."
        },
        {
          zh: "主导外联合作与资源整合，搭建多方协作的科技创新网络。",
          en: "Led external partnerships and ecosystem coordination to establish a multi-stakeholder innovation network."
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
          zh: "带领技术团队构建新一代职业智能导航平台，项目获 WaytoAGI 黑客松一等奖。",
          en: "Led engineering delivery for a next-generation AI career navigation platform, winning 1st place at WaytoAGI Hackathon."
        },
        {
          zh: "设计并实现 AI Agent 系统，项目晋级 AI Agent 2025 半决赛。",
          en: "Designed and implemented the core AI agent architecture, advancing to AI Agent 2025 semifinals."
        },
        {
          zh: "负责全栈架构设计与关键模块开发，覆盖产品从 0 到 1 阶段。",
          en: "Owned full-stack architecture and core modules across the 0-to-1 product phase."
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
          zh: "推广 AR/XR 技术在教育和创意场景的应用，协助完成技术传播活动。",
          en: "Promoted AR/XR applications across education and creative domains through technical outreach."
        },
        {
          zh: "参与生态共建并指导学生开展创新项目实践。",
          en: "Contributed to ecosystem building and mentored students on innovation projects."
        }
      ]
    },
    {
      id: "openkylin",
      org: {
        zh: "openKylin / OpenAtom",
        en: "openKylin / OpenAtom"
      },
      title: {
        zh: "社区成员 / 推广大使",
        en: "Community Contributor / Evangelist"
      },
      period: {
        zh: "2025.07 - 2026.07",
        en: "Jul 2025 - Jul 2026"
      },
      highlights: [
        {
          zh: "参与开源社区建设与技术推广，持续贡献项目与文档内容。",
          en: "Contributed to open-source community operations, technical evangelism, and project documentation."
        },
        {
          zh: "推动国产操作系统生态传播与开发者协作。",
          en: "Supported developer collaboration and ecosystem outreach for domestic operating systems."
        }
      ]
    }
  ],
  projects: [
    {
      id: "eth-adhd",
      name: {
        zh: "ETH 黑客松 - ADHD 治疗 Web3 应用",
        en: "ETH Hackathon - Web3 ADHD Therapy Incentive App"
      },
      event: {
        zh: "ETH Hackathon 2025",
        en: "ETH Hackathon 2025"
      },
      period: {
        zh: "2025.10.18 - 2025.10.21",
        en: "Oct 18-21, 2025"
      },
      role: {
        zh: "系统设计与全栈实现",
        en: "System Designer & Full-Stack Developer"
      },
      highlights: [
        {
          zh: "设计并开发基于区块链的 ADHD 治疗激励系统。",
          en: "Built a blockchain-based incentive system for ADHD treatment engagement."
        },
        {
          zh: "通过智能合约实现行为追踪与奖励机制。",
          en: "Implemented user behavior tracking and reward mechanisms via smart contracts."
        },
        {
          zh: "探索 Web3 与医疗健康场景融合的可行性。",
          en: "Validated Web3 integration pathways for healthcare use cases."
        }
      ],
      stack: ["Web3", "Smart Contract", "Full-Stack", "HealthTech"],
      outcome: {
        zh: "完成可运行原型并通过赛事评审展示。",
        en: "Delivered a working prototype and demonstrated it successfully in competition review."
      }
    },
    {
      id: "meow-piano",
      name: {
        zh: "《喵喵琴》XR & AI 音乐交互项目",
        en: "Meow Piano - XR & AI Music Interaction"
      },
      event: {
        zh: "WorldRemix XR 2025 Hackathon · 上海站",
        en: "WorldRemix XR 2025 Hackathon · Shanghai"
      },
      period: {
        zh: "2025.07",
        en: "Jul 2025"
      },
      role: {
        zh: "核心交互逻辑与技术负责人",
        en: "Lead for Core Interaction Logic"
      },
      highlights: [
        {
          zh: "使用 Apple Vision Pro 与 Unity 构建 XR 音乐体验。",
          en: "Built an XR music interaction experience with Apple Vision Pro and Unity."
        },
        {
          zh: "实现音频转八音阶交互系统，主导核心算法与交互设计。",
          en: "Implemented an audio-to-scale interaction engine and led interaction architecture."
        }
      ],
      stack: ["Unity", "Vision Pro", "XR", "Interactive Audio"],
      outcome: {
        zh: "获得 WorldRemix XR 2025 总赛道第一名。",
        en: "Won 1st place in the WorldRemix XR 2025 overall track."
      }
    },
    {
      id: "silent-bridge",
      name: {
        zh: "《默语之桥》AI + 硬件公益平台",
        en: "Silent Bridge - AI + Hardware Accessibility Platform"
      },
      event: {
        zh: "REBUILD-Z 2025 硬件黑客松",
        en: "REBUILD-Z 2025 Hardware Hackathon"
      },
      period: {
        zh: "2025",
        en: "2025"
      },
      role: {
        zh: "系统方案设计与产品实现",
        en: "System Architect & Product Builder"
      },
      highlights: [
        {
          zh: "设计国际手语教学平台，融合 AI 识别与硬件交互。",
          en: "Designed an international sign-language learning platform with AI recognition and hardware interaction."
        },
        {
          zh: "完成核心流程闭环，支撑公益场景应用验证。",
          en: "Delivered an end-to-end workflow that validated practical accessibility use cases."
        }
      ],
      stack: ["Computer Vision", "Embedded", "Interaction Design"],
      outcome: {
        zh: "获 REBUILD-Z AI+硬件方向一等奖。",
        en: "Won 1st place in the REBUILD-Z AI + Hardware track."
      }
    },
    {
      id: "jump-mecha",
      name: {
        zh: "《跃动机灵》六足机器人开源平台",
        en: "Jump Mecha - Open-Source Hexapod Platform"
      },
      event: {
        zh: "REBUILD-Z 2025 硬件黑客松",
        en: "REBUILD-Z 2025 Hardware Hackathon"
      },
      period: {
        zh: "2025",
        en: "2025"
      },
      role: {
        zh: "核心固件与系统架构负责人",
        en: "Firmware & System Architecture Lead"
      },
      highlights: [
        {
          zh: "实现 Tripod/Ripple 等多种稳定步态与动作锚定体系。",
          en: "Implemented multiple stable gait systems such as Tripod and Ripple with action anchoring."
        },
        {
          zh: "搭建分层解耦架构，整合 BLE 通信与端侧语音交互，解决多舵机同步抖动问题。",
          en: "Designed a decoupled layered architecture integrating BLE and edge voice interaction, solving multi-servo synchronization jitter."
        },
        {
          zh: "完成 PCB 焊接调试与开源文档全链路交付。",
          en: "Completed PCB soldering/debugging and full open-source documentation delivery."
        }
      ],
      stack: ["Firmware", "BLE", "Embedded", "Robotics"],
      outcome: {
        zh: "获 REBUILD-Z 架构师方向三等奖。",
        en: "Received 3rd prize in the REBUILD-Z architecture track."
      }
    },
    {
      id: "heritage-ar",
      name: {
        zh: "《文物探秘》AR & AI 文物识别系统",
        en: "Cultural Relic Explorer - AR & AI Recognition System"
      },
      event: {
        zh: "GOGC 2024 全球开源极客嘉年华",
        en: "GOGC 2024 Global Open Source Festival"
      },
      period: {
        zh: "2024.07",
        en: "Jul 2024"
      },
      role: {
        zh: "AR 系统开发",
        en: "AR System Developer"
      },
      highlights: [
        {
          zh: "使用 Rokid Station Pro 与 Unity/C# 构建文物识别与 AR 讲解系统。",
          en: "Built an AI-based cultural relic recognition and AR guidance system with Rokid Station Pro and Unity/C#."
        },
        {
          zh: "推动项目创意由企业优化并在博物馆场景落地。",
          en: "Contributed to concept refinement and supported museum-level deployment."
        }
      ],
      stack: ["Unity", "C#", "AR", "AI Recognition"],
      outcome: {
        zh: "获 GOGC 最佳实践奖。",
        en: "Won the GOGC Best Practice Award."
      }
    },
    {
      id: "blog-platform",
      name: {
        zh: "个人技术博客与校园许愿墙",
        en: "Personal Tech Blog & Campus Interaction Platform"
      },
      event: {
        zh: "个人项目",
        en: "Personal Project"
      },
      period: {
        zh: "2021",
        en: "2021"
      },
      role: {
        zh: "独立开发与运维",
        en: "Solo Developer & Operator"
      },
      highlights: [
        {
          zh: "独立完成服务器部署、域名绑定与站点运维。",
          en: "Completed independent server deployment, domain setup, and platform operations."
        },
        {
          zh: "基于 WordPress 构建技术博客与校园互动系统。",
          en: "Built and maintained a technical blog and campus interaction portal using WordPress."
        }
      ],
      stack: ["Linux", "WordPress", "Server Ops", "Web Development"],
      outcome: {
        zh: "持续稳定运行并支撑校园社区互动。",
        en: "Maintained stable operation and supported campus community engagement."
      }
    }
  ],
  awards: [
    {
      id: "agent-young-dev",
      year: "2025",
      title: {
        zh: "AI Agent 2025 组委会",
        en: "AI Agent 2025 Committee"
      },
      detail: {
        zh: "《简职》优秀 00 后开发者奖",
        en: "Jiancareer - Outstanding Gen-Z Developer Award"
      }
    },
    {
      id: "rebuild-first",
      year: "2025",
      title: {
        zh: "REBUILD-Z 2025 硬件黑客松",
        en: "REBUILD-Z 2025 Hardware Hackathon"
      },
      detail: {
        zh: "《默语之桥》AI+硬件方向一等奖",
        en: "Silent Bridge - 1st Prize in AI + Hardware Track"
      }
    },
    {
      id: "rebuild-arch",
      year: "2025",
      title: {
        zh: "REBUILD-Z 2025 硬件黑客松",
        en: "REBUILD-Z 2025 Hardware Hackathon"
      },
      detail: {
        zh: "《跃动机灵》架构师方向三等奖",
        en: "Jump Mecha - 3rd Prize in Architecture Track"
      }
    },
    {
      id: "worldremix-first",
      year: "2025",
      title: {
        zh: "WorldRemix XR 2025 Hackathon",
        en: "WorldRemix XR 2025 Hackathon"
      },
      detail: {
        zh: "《喵喵琴》总赛道第一名",
        en: "Meow Piano - 1st Place Overall"
      }
    },
    {
      id: "gogc-best",
      year: "2024",
      title: {
        zh: "GOGC 2024 全球开源极客嘉年华",
        en: "GOGC 2024 Global Open Source Festival"
      },
      detail: {
        zh: "《文物探秘》最佳实践奖",
        en: "Cultural Relic Explorer - Best Practice Award"
      }
    },
    {
      id: "lanqiao",
      year: "2024",
      title: {
        zh: "第十四届蓝桥杯",
        en: "14th Lanqiao Cup"
      },
      detail: {
        zh: "Python 中级创意编程组二等奖",
        en: "2nd Prize, Intermediate Python Creative Programming"
      }
    }
  ],
  skillGroups: [
    {
      id: "software",
      label: {
        zh: "软件工程",
        en: "Software Engineering"
      },
      skills: ["Python", "C/C++", "JavaScript", "TypeScript", "React", "Next.js"]
    },
    {
      id: "ai",
      label: {
        zh: "AI 与智能体",
        en: "AI & Agents"
      },
      skills: ["AI/ML", "AI Agent Design", "Prompt Engineering", "Data Pipelines"]
    },
    {
      id: "xr",
      label: {
        zh: "XR 与交互",
        en: "XR & Interaction"
      },
      skills: ["AR/XR", "Unity", "Vision Pro", "Interactive Prototyping"]
    },
    {
      id: "hardware",
      label: {
        zh: "硬件与系统",
        en: "Hardware & Systems"
      },
      skills: ["Embedded Development", "BLE", "Firmware", "PCB Debugging"]
    },
    {
      id: "platform",
      label: {
        zh: "平台与运维",
        en: "Platform & Ops"
      },
      skills: ["Linux", "Database", "Cloud Computing", "Git", "Cybersecurity"]
    }
  ],
  education: [
    {
      id: "high-school",
      school: {
        zh: "上海市高中在读",
        en: "High School Student in Shanghai"
      },
      program: {
        zh: "计算机科学与创新实践",
        en: "Computer Science & Innovation Practice"
      },
      period: {
        zh: "在读",
        en: "Current"
      },
      detail: {
        zh: "持续参与黑客松、开源社区与跨学科技术实践。",
        en: "Actively involved in hackathons, open-source communities, and interdisciplinary technology practice."
      }
    },
    {
      id: "ecnu-td4",
      school: {
        zh: "华东师范大学计算机学院实践工作站",
        en: "ECNU School of Computer Science Practice Station"
      },
      program: {
        zh: "4-bit TD4 计算机制作（优秀学员）",
        en: "4-bit TD4 Computer Build (Outstanding Trainee)"
      },
      period: {
        zh: "2025.07 - 2025.12",
        en: "Jul 2025 - Dec 2025"
      },
      detail: {
        zh: "在导师指导下独立完成 TD4 计算机制作与调试。",
        en: "Independently completed TD4 computer fabrication and debugging under faculty guidance."
      }
    }
  ],
  languages: [
    {
      id: "chinese",
      language: {
        zh: "中文",
        en: "Chinese"
      },
      level: {
        zh: "母语",
        en: "Native"
      }
    },
    {
      id: "english",
      language: {
        zh: "英文",
        en: "English"
      },
      level: {
        zh: "高级",
        en: "Advanced"
      }
    }
  ],
  updatedAt: "2026-02-12",
  version: "Resume v2.0 Editorial"
};
