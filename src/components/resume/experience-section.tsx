import { resolveResumeText } from "@/content/resume";
import type { ResumeExperienceItem, ResumeLocale } from "@/types/resume";
import styles from "@/app/resume/resume.module.css";

interface ExperienceSectionProps {
  locale: ResumeLocale;
  items: ResumeExperienceItem[];
}

export const ExperienceSection = ({ locale, items }: ExperienceSectionProps) => {
  return (
    <section className={styles.section} data-animate="section">
      <div className={styles.sectionHeading}>
        <p className={styles.sectionIndex}>01</p>
        <h3>{locale === "zh" ? "核心经历" : "Core Experience"}</h3>
      </div>
      <div className={styles.experienceList}>
        {items.map((item) => (
          <article className={styles.experienceCard} key={item.id}>
            <div className={styles.cardHead}>
              <div>
                <p className={styles.orgName}>{resolveResumeText(item.org, locale)}</p>
                <h4>{resolveResumeText(item.title, locale)}</h4>
              </div>
              <p className={styles.periodTag}>{resolveResumeText(item.period, locale)}</p>
            </div>
            <ul>
              {item.highlights.map((highlight, index) => (
                <li key={`${item.id}-${index}`}>{resolveResumeText(highlight, locale)}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};
