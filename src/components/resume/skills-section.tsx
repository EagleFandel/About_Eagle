import { resolveResumeText } from "@/content/resume";
import type { ResumeLocale, ResumeSkillGroup } from "@/types/resume";
import styles from "@/app/resume/resume.module.css";

interface SkillsSectionProps {
  locale: ResumeLocale;
  groups: ResumeSkillGroup[];
}

export const SkillsSection = ({ locale, groups }: SkillsSectionProps) => {
  return (
    <section className={styles.section} data-animate="section">
      <div className={styles.sectionHeading}>
        <p className={styles.sectionIndex}>05</p>
        <h3>{locale === "zh" ? "技能矩阵" : "Skills Matrix"}</h3>
      </div>
      <div className={styles.skillGrid}>
        {groups.map((group) => (
          <article className={styles.skillCard} key={group.id}>
            <h4>{resolveResumeText(group.label, locale)}</h4>
            <ul>
              {group.skills.map((skill) => (
                <li key={`${group.id}-${skill}`}>{skill}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};
