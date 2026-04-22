import type { ProjectCard } from "@/types/content";
import { resumeData } from "@/content/resume";

export const selectedProjects: ProjectCard[] = resumeData.projects.map((project) => ({
  id: project.id,
  title: project.name,
  meta: {
    zh: `${project.event.zh} · ${project.period.zh}`,
    en: `${project.event.en} · ${project.period.en}`
  },
  role: project.role,
  impact: project.highlights[0] ?? project.outcome,
  award: project.outcome,
  stack: project.stack
}));
