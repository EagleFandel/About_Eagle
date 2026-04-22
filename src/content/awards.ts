import type { ExperienceRole, LocalizedText } from "@/types/content";
import { resumeData } from "@/content/resume";

export const awardsTimeline: Array<{
  id: string;
  year: string;
  title: LocalizedText;
  detail: LocalizedText;
}> = resumeData.awards.map(({ id, year, title, detail }) => ({ id, year, title, detail }));

export const roleTimeline: ExperienceRole[] = resumeData.experiences;
