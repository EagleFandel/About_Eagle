import { resolveResumeText } from "@/content/resume";
import type { ResumeLocale, ResumeProjectItem } from "@/types/resume";
import styles from "@/app/resume/resume.module.css";

interface ProjectSectionProps {
  locale: ResumeLocale;
  projects: ResumeProjectItem[];
}

export const ProjectSection = ({ locale, projects }: ProjectSectionProps) => {
  return (
    <section className={styles.section} data-animate="section">
      <div className={styles.sectionHeading}>
        <p className={styles.sectionIndex}>02</p>
        <h3>{locale === "zh" ? "代表项目" : "Selected Projects"}</h3>
      </div>
      <div className={styles.projectList}>
        {projects.map((project) => (
          <article className={styles.projectCard} key={project.id}>
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
        ))}
      </div>
    </section>
  );
};
