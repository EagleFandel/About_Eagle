import { resolveResumeText } from "@/content/resume";
import type { ResumeEducationItem, ResumeLanguageItem, ResumeLocale } from "@/types/resume";
import styles from "@/app/resume/resume.module.css";

interface EducationSectionProps {
  locale: ResumeLocale;
  education: ResumeEducationItem[];
  languages: ResumeLanguageItem[];
}

export const EducationSection = ({ locale, education, languages }: EducationSectionProps) => {
  return (
    <section className={styles.section} data-animate="section">
      <div className={styles.sectionHeading}>
        <p className={styles.sectionIndex}>05</p>
        <h3>{locale === "zh" ? "教育与语言" : "Education & Languages"}</h3>
      </div>

      <div className={styles.eduGrid}>
        <div className={styles.eduList}>
          {education.map((item) => (
            <article className={styles.eduCard} key={item.id}>
              <div className={styles.cardHead}>
                <div>
                  <p className={styles.orgName}>{resolveResumeText(item.school, locale)}</p>
                  <h4>{resolveResumeText(item.program, locale)}</h4>
                </div>
                <p className={styles.periodTag}>{resolveResumeText(item.period, locale)}</p>
              </div>
              <p className={styles.eduDetail}>{resolveResumeText(item.detail, locale)}</p>
            </article>
          ))}
        </div>

        <div className={styles.languageCard}>
          <h4>{locale === "zh" ? "语言能力" : "Languages"}</h4>
          <ul>
            {languages.map((item) => (
              <li key={item.id}>
                <span>{resolveResumeText(item.language, locale)}</span>
                <strong>{resolveResumeText(item.level, locale)}</strong>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
