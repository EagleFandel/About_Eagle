import type { Locale, LocalizedText } from "@/types/content";

export const uiMessages: Record<
  string,
  LocalizedText
> = {
  enterWithSound: {
    zh: "进入并开启声音",
    en: "Enter with Sound"
  },
  soundOn: {
    zh: "声音已开启",
    en: "Sound On"
  },
  soundOff: {
    zh: "声音已关闭",
    en: "Sound Off"
  },
  scrollToExplore: {
    zh: "向下滚动，进入叙事场",
    en: "Scroll to enter the narrative field"
  },
  selectedWorks: {
    zh: "精选项目叙事",
    en: "Selected Works Narrative"
  },
  capabilitySystem: {
    zh: "能力系统图谱",
    en: "Capability System"
  },
  impactAwards: {
    zh: "影响力与奖项",
    en: "Impact & Awards"
  },
  rolesCommunity: {
    zh: "角色与社区",
    en: "Roles & Community"
  },
  collabTitle: {
    zh: "合作邀约",
    en: "Collaboration"
  },
  emailMe: {
    zh: "邮件联系我",
    en: "Email Me"
  },
  socialSoon: {
    zh: "社媒入口（即将更新）",
    en: "Social Portals (Coming Soon)"
  },
  localeSwitch: {
    zh: "语言",
    en: "Language"
  }
};

export const getMessage = (locale: Locale, key: keyof typeof uiMessages): string =>
  uiMessages[key][locale];
