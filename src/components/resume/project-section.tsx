import { Fragment, useMemo } from "react";
import { resolveResumeText } from "@/content/resume";
import type { ResumeLocale, ResumeProjectItem } from "@/types/resume";
import styles from "@/app/resume/resume.module.css";

interface ProjectSectionProps {
  locale: ResumeLocale;
  projects: ResumeProjectItem[];
}

const SECTION_LABELS: Record<string, { zh: string; en: string }> = {
  "代表项目": { zh: "代表项目", en: "Featured Projects" },
  "开源项目": { zh: "开源项目", en: "Open Source" },
};

export const ProjectSection = ({ locale, projects }: ProjectSectionProps) => {
  // Pre-compute which project indices need section headings inserted
  const headingInsertPoints = useMemo(() => {
    const seen = new Set<string>();
    const points: Map<number, string> = new Map();
    projects.forEach((p, i) => {
      if (p.section && !seen.has(p.section)) {
        seen.add(p.section);
        points.set(i, p.section);
      }
    });
    // Compute section indices in order of first appearance
    const order: string[] = [];
    for (const p of projects) {
      if (p.section && !order.includes(p.section)) order.push(p.section);
    }
    const indexMap: Record<string, string> = {};
    let next = 2;
    for (const s of order) {
      indexMap[s] = String(next).padStart(2, "0");
      next++;
    }
    return { points, indexMap };
  }, [projects]);

  return (
    <section className={styles.section} data-animate="section">
      <div className={styles.projectList}>
        {projects.map((project, i) => (
          <Fragment key={project.id}>
            {headingInsertPoints.points.has(i) && (
              <div className={styles.sectionHeading}>
                <p className={styles.sectionIndex}>
                  {headingInsertPoints.indexMap[headingInsertPoints.points.get(i)!] || "02"}
                </p>
                <h3>
                  {SECTION_LABELS[headingInsertPoints.points.get(i)!]?.[locale] ??
                    headingInsertPoints.points.get(i)}
                </h3>
              </div>
            )}
            <article className={styles.projectCard}>
              <div className={styles.cardHead}>
                <div>
                  <p className={styles.orgName}>{resolveResumeText(project.event, locale)}</p>
                  <h4>{resolveResumeText(project.name, locale)}</h4>
                </div>
                <p className={styles.periodTag}>{resolveResumeText(project.period, locale)}</p>
              </div>
              <p className={styles.projectRole}>{resolveResumeText(project.role, locale)}</p>
              <ul>
                {project.highlights.map((highlight, index) => (
                  <li key={`${project.id}-${index}`}>{resolveResumeText(highlight, locale)}</li>
                ))}
              </ul>
              <div className={styles.stackLine}>
                {project.stack.map((item) => (
                  <span key={`${project.id}-${item}`}>{item}</span>
                ))}
              </div>
              <p className={styles.outcome}>{resolveResumeText(project.outcome, locale)}</p>
            </article>
          </Fragment>
        ))}
      </div>
    </section>
  );
};
