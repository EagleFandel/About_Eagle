import type { ResumeData, ResumeLocale, ResumeText } from "@/types/resume";

export const resolveResumeText = (text: ResumeText, locale: ResumeLocale): string => text[locale];

export const resumeData: ResumeData = {
  basics: {
    name: {
      zh: "赵轩灿",
      en: "Xuancan Zhao"
    },
    headline: {
      zh: "AI Native Founder / Product Engineer / Zero-to-One Builder",
      en: "AI Native Founder / Product Engineer / Zero-to-One Builder"
    },
    summary: {
      zh: "AI Native 青年极客，坚信 Build in Public 与终生学习。我联合发起了全国规模最大的女性黑客松 She Nicest（她构未来），已在上海、北京、深圳落地多场百人活动并构建千人开发者社区。曾任简职 CTO，参与词灵等 AI Agent 项目技术开发。探索方向：具身智能、通用人工智能、脑机接口、语言的底层重构与超语言表达系统。追求成为超级个体，打通创业全链路（技术、产品、市场）。",
      en: "AI Native young builder passionate about Build in Public and lifelong learning. Co-founded She Nicest, China's largest women's hackathon brand with 1,000+ developer community. Former CTO of JianCareer, contributed to AI agent projects like Cling. Exploring embodied AI, AGI, brain-computer interfaces, and foundational language restructuring beyond linear text. Aspiring to become a super-individual with full-stack entrepreneurship skills across technology, product, and market."
    },
    location: {
      zh: "上海，中国",
      en: "Shanghai, China"
    },
    email: "quinceyleone41@gmail.com",
    email2: "2170257193@qq.com",
    phone: "+86 18101645271",
    github: "https://github.com/EagleFandel",
    avatarPath: "/images/avatar.jpg"
  },
  impactMetrics: [
    {
      id: "community",
      label: {
        zh: "开发者社区",
        en: "Developer Community"
      },
      value: 1000
    },
    {
      id: "hackathons",
      label: {
        zh: "黑客松落地",
        en: "Hackathons Executed"
      },
      value: 3
    },
    {
      id: "awards",
      label: {
        zh: "核心奖项",
        en: "Major Awards"
      },
      value: 7
    },
    {
      id: "leadership",
      label: {
        zh: "领导角色",
        en: "Leadership Roles"
      },
      value: 4
    }
  ],
  experiences: [
    {
      id: "xbotpark-project",
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
          en: "Selected into Professor Li Zexiang's XbotPark entrepreneurship program, participating in hardware startup incubation."
        },
        {
          zh: "负责从用户需求调研、产品定义、原型验证到市场测试的 0→1 全流程探索。",
          en: "Led full-cycle 0→1 exploration from user research and product definition to prototyping and market validation."
        },
        {
          zh: "参与供应链对接、产品迭代与商业化路径验证。",
          en: "Contributed to supply chain coordination, product iteration, and commercialization pathway validation."
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
          zh: "作为首个「Z世代+女性主体+科技创造」黑客松厂牌联合创始人，过去一年落地3场大型女性黑客松（上海、北京、深圳）+ 4场技术工作坊，2100+人报名、500+人实际参与、300+可演示项目。",
          en: "As co-founder of the first hackathon brand focused on Gen-Z women in tech, helped execute 3 large-scale hackathons (Shanghai, Beijing, Shenzhen) and 4 workshops with 2,100+ sign-ups, 500+ participants, and 300+ demo projects."
        },
        {
          zh: "负责黑客松与技术工作坊的策划统筹，担任技术工作坊导师，涵盖赛事规则设计、协作生态搭建与现场执行全流程。",
          en: "Led planning and coordination for hackathons and technical workshops as mentor, covering event design, ecosystem building, and on-site execution."
        },
        {
          zh: "参与品牌方赞助商务对接，整合多方资源搭建科技创新生态，推动科技、人文与商业的创新融合。",
          en: "Participated in sponsor business development and partnerships, integrating resources to build an ecosystem bridging technology, humanity, and business innovation."
        },
        {
          zh: "搭建并运营覆盖上海、北京、深圳、杭州的社群网络，私域用户1.3万+，公域内容曝光200万+。",
          en: "Built and operated community networks across Shanghai, Beijing, Shenzhen, and Hangzhou with 13,000+ private users and 2M+ content impressions."
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
          zh: "AI 智能模拟人类行为在浏览器中自动填写网申表单，实现简历润色、生成与一键自动投递功能。",
          en: "Built AI system that simulates human behavior in browser to automatically fill job application forms, supporting resume optimization, generation, and one-click auto-apply."
        },
        {
          zh: "负责 AI Agent 核心架构搭建，实现浏览器自动化网申插件（调用 Chrome Debug API + LLM），优化职岗匹配。",
          en: "Architected core AI agent system with browser automation using Chrome Debug API + LLM, optimizing job-position matching."
        },
        {
          zh: "带领技术团队构建新一代职业智能导航平台，服务 500 个种子用户，项目获 WaytoAGI 黑客松一等奖。",
          en: "Led engineering team to build next-gen AI career platform serving 500 seed users, winning 1st prize at WaytoAGI Hackathon."
        },
        {
          zh: "设计并实现 AI Agent 系统，项目晋级 AI Agent 2025 半决赛。",
          en: "Designed and implemented AI agent system, advancing to AI Agent 2025 semifinals."
        }
      ]
    },
    {
      id: "xuanyuan-zhichuang",
      org: {
        zh: "轩辕智创",
        en: "Xuanyuan Innovation Hub"
      },
      title: {
        zh: "创始人",
        en: "Founder"
      },
      period: {
        zh: "2023 - 至今",
        en: "2023 - Present"
      },
      highlights: [
        {
          zh: "创办学生创业学习小组，带领团队用项目制方式学习技术、发现真实需求、培养商业嗅觉。",
          en: "Founded a student entrepreneurship learning group, leading the team to learn technology through projects, discover real needs, and develop business acumen."
        },
        {
          zh: "发现校园原创明信片需求空白，24小时内完成调研、设计、印刷、分发全流程，售出2000+张，收入约3500元。",
          en: "Identified unmet demand for original campus postcards, completed full-cycle execution from research to distribution in 24 hours, selling 2,000+ copies with ~3,500 yuan revenue."
        },
        {
          zh: "策划并执行千人规模非遗文化集市活动，统筹活动设计、资源协调与现场运营。",
          en: "Planned and executed a thousand-person intangible cultural heritage market event, overseeing event design, resource coordination, and on-site operations."
        },
        {
          zh: "推动 AI × 非遗文化创新方向，探索龙狮 IP 陪伴玩具与 XR 皮影戏数字化体验。",
          en: "Pioneered AI × intangible cultural heritage innovation, exploring lion dance IP companion toys and XR shadow puppetry digital experiences."
        }
      ]
    }
  ],
  projects: [
    {
      id: "xijiayun-glucose-management",
      section: "代表项目",
      name: {
        zh: "希家云｜二型「瘦糖」人群血糖管理方案",
        en: "Xijia Cloud | Glucose Management for Lean Type-2 Users"
      },
      event: {
        zh: "2026 XbotPark 硬科技创业冬令营（松山湖总部）",
        en: "2026 XbotPark Hard-Tech Winter Entrepreneurship Camp"
      },
      period: {
        zh: "2026.01.26 - 2026.02.08",
        en: "Jan 26, 2026 - Feb 8, 2026"
      },
      role: {
        zh: "核心成员｜用户研究与问题定义",
        en: "Core Member | User Research & Problem Definition"
      },
      highlights: [
        {
          zh: "完成 20+ 用户与 5+ 医师/专家的深访，提炼二型「瘦糖」人群在办公场景中的核心控糖痛点。",
          en: "Interviewed 20+ users and 5+ experts to identify core glucose-management pain points for lean type-2 users in office contexts."
        },
        {
          zh: "基于用户旅程图拆解从起床到睡前的关键行为链路，定位监测、饮食、运动和睡眠之间的系统性矛盾。",
          en: "Mapped day-long behavior journeys to surface systemic conflicts among monitoring, nutrition, exercise, and sleep."
        },
        {
          zh: "提出 3 条 HMW 方向：办公时低负担增肌训练、餐后活动降糖效率提升、饮食碳水-蛋白质配比优化。",
          en: "Defined three HMW tracks: low-friction muscle training at work, higher post-meal glucose-lowering efficiency, and better carb-protein intake optimization."
        }
      ],
      stack: ["User Research", "Journey Mapping", "Problem Framing", "HealthTech"],
      outcome: {
        zh: "在 XbotPark 冬令营结营仪式获二等奖。",
        en: "Won Second Prize at the XbotPark Winter Camp Final Demo."
      }
    },

    {
      id: "cling-word",
      section: "代表项目",
      name: {
        zh: "词灵（Cling）智能背单词系统",
        en: "Cling - AI-Powered Vocabulary Learning System"
      },
      event: {
        zh: "词灵（Cling）打造语言学习新范式",
        en: "Cling - Redefining Language Learning"
      },
      period: {
        zh: "2025.10 - 2025.12",
        en: "Oct 2025 - Dec 2025"
      },
      role: {
        zh: "产品与开发",
        en: "Product & Development"
      },
      highlights: [
        {
          zh: "打造无限推词模式和造句学习的智能背英文单词系统，采用 AI 智能组句引擎生成语境化例句。",
          en: "Built an AI-powered vocabulary learning system with unlimited word-push and sentence-based learning, using AI sentence generation for contextual examples."
        },
        {
          zh: "通过智能调控与个性化策略，打造符合人脑记忆规律的动态学习体验。",
          en: "Developed adaptive algorithms that personalize learning strategies based on memory retention patterns."
        },
        {
          zh: "在小范围视频推广下，获得 1 万+ 用户。",
          en: "Achieved 10,000+ users through limited video promotion."
        }
      ],
      stack: ["AI/NLP", "Python", "Mobile App", "Personalization Engine"],
      outcome: {
        zh: "成功获得 1 万+ 用户。",
        en: "10,000+ users achieved."
      }
    },

    {
      id: "nomo-platform",
      section: "代表项目",
      name: {
        zh: "NOMO - 开发者一键部署平台",
        en: "NOMO - One-Click Developer Deployment Platform"
      },
      event: {
        zh: "个人项目",
        en: "Personal Project"
      },
      period: {
        zh: "2025.12",
        en: "Dec 2025"
      },
      role: {
        zh: "独立开发者",
        en: "Solo Developer"
      },
      highlights: [
        {
          zh: "打造面向开发者的一键部署与托管平台，支持 Git 仓库或 ZIP 上传完成应用上线，兼容 Node.js、Python、Go、Rust 等主流技术栈。",
          en: "Built a one-click deployment and hosting platform for developers, supporting Git repo or ZIP upload with runtime support for Node.js, Python, Go, and Rust."
        },
        {
          zh: "基于 Coolify 自建部署系统，结合 Supabase 与自研服务，构建完整开发者基础设施（部署、监控、日志、数据库、限流）。",
          en: "Self-built deployment system on Coolify with Supabase and custom services, providing complete developer infrastructure including deployment, monitoring, logging, database, and rate limiting."
        },
        {
          zh: "目标：消灭 DevOps，让开发者提交代码即可上线。",
          en: "Mission: eliminate DevOps complexity so developers can ship code with one click."
        }
      ],
      stack: ["Coolify", "Supabase", "DevOps", "Cloud Infrastructure", "Node.js", "Python"],
      outcome: {
        zh: "完成可运行原型并完成内测。",
        en: "Delivered working prototype with internal testing."
      }
    },

    {
      id: "meow-piano",
      section: "代表项目",
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
      section: "代表项目",
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
      section: "代表项目",
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
        zh: "步态算法贡献者",
        en: "Gait Algorithm Contributor"
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
      id: "e2e-full-testing",
      section: "开源项目",
      name: {
        zh: "E2E Full Testing Framework",
        en: "E2E Full Testing Framework"
      },
      event: {
        zh: "开源项目",
        en: "Open Source Project"
      },
      period: {
        zh: "2025",
        en: "2025"
      },
      role: {
        zh: "核心开发者",
        en: "Core Developer"
      },
      highlights: [
        {
          zh: "打造顶级 E2E 前后端全自动化全量测试框架，支持前端 UI/UX 双端测试、桌面+移动端验收、后端 API 测试（正常+异常+AI接口）。",
          en: "Built a comprehensive E2E full-stack automated testing framework supporting frontend UI/UX testing, desktop and mobile acceptance, backend API testing, and AI interface testing."
        },
        {
          zh: "实现 AI 决策/执行能力测试与 HTML 可视化报告，核心理念是「不验证对，只找错」的找茬思维。",
          en: "Implemented AI decision and execution capability testing with HTML visual reports, centered on the 'find faults, not correctness' philosophy."
        }
      ],
      stack: ["Testing Framework", "Automation", "Python", "API Testing"],
      outcome: {
        zh: "开源项目，GitHub 公开可用。",
        en: "Open source project available on GitHub."
      }
    },

    {
      id: "opensource-analyzer",
      section: "开源项目",
      name: {
        zh: "Open Source Analyzer",
        en: "Open Source Analyzer"
      },
      event: {
        zh: "开源项目",
        en: "Open Source Project"
      },
      period: {
        zh: "2025",
        en: "2025"
      },
      role: {
        zh: "开发者",
        en: "Developer"
      },
      highlights: [
        {
          zh: "分析开源代码库学习思路与架构模式，帮助快速切入陌生代码库，建立全局认知、追踪核心路径、理解设计决策。",
          en: "Analyzed open source codebases to learn patterns and architectures, enabling rapid understanding of unfamiliar codebases with global awareness, core path tracing, and design decision comprehension."
        },
        {
          zh: "聚焦高价值模块，从功能点出发深入，实现工程补丁、先跑通代码、理解大型项目的工程实践。",
          en: "Focused on high-value modules, diving deep from functional points to implement patches, get code running, and understand engineering practices in large projects."
        }
      ],
      stack: ["Code Analysis", "Architecture Patterns", "Documentation"],
      outcome: {
        zh: "开源项目，帮助开发者高效学习开源代码库。",
        en: "Open source project helping developers efficiently learn from open source codebases."
      }
    },

  ],
  awards: [
    {
      id: "xbotpark-winter-camp-second-prize-2026",
      year: "2026",
      title: {
        zh: "2026 XbotPark 硬科技创业冬令营",
        en: "2026 XbotPark Hard-Tech Winter Entrepreneurship Camp"
      },
      detail: {
        zh: "希家云（大健康·血糖管理）结营二等奖",
        en: "Team Xijia Cloud (HealthTech Glucose Management) - Second Prize"
      }
    },
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
      skills: ["AI Agent Design", "RAG", "MCP", "Multi-Agent", "Prompt Engineering", "Vector Database"]
    },
    {
      id: "ai-tools",
      label: {
        zh: "AI 开发工具",
        en: "AI Development Tools"
      },
      skills: ["Cursor", "Claude Code", "GitHub Copilot", "MCP Server", "Agent Skills", "Vibe Coding"]
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
  updatedAt: "2026-04-17",
  version: "Resume v2.2 Editorial"
};
