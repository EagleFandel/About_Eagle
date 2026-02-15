import { resolveResumeText } from "@/content/resume";
import type { ResumeAwardItem, ResumeLocale, ResumeMetric, ResumeMode } from "@/types/resume";
import { CountUp } from "@/components/motion/count-up";
import styles from "@/app/resume/resume.module.css";

interface AwardsSectionProps {
  locale: ResumeLocale;
  mode: ResumeMode;
  awards: ResumeAwardItem[];
  metrics: ResumeMetric[];
}

export const AwardsSection = ({ locale, mode, awards, metrics }: AwardsSectionProps) => {
  return (
    <section className={styles.section} data-animate="section">
      <div className={styles.sectionHeading}>
        <p className={styles.sectionIndex}>03</p>
        <h3>{locale === "zh" ? "奖项与影响力" : "Awards & Impact"}</h3>
      </div>
      <div className={styles.awardsLayout}>
        <div className={styles.metricsRow}>
          {metrics.map((metric) => (
            <article className={styles.metricCard} key={metric.id}>
              <p className={styles.metricValue}>
                {mode === "editorial" ? <CountUp value={metric.value} /> : metric.value}
              </p>
              <p className={styles.metricLabel}>{resolveResumeText(metric.label, locale)}</p>
            </article>
          ))}
        </div>
        <div className={styles.timeline}>
          {awards.map((award) => (
            <article className={styles.timelineItem} data-animate="timeline-item" key={award.id}>
              <p className={styles.timelineYear}>{award.year}</p>
              <h4>{resolveResumeText(award.title, locale)}</h4>
              <p>{resolveResumeText(award.detail, locale)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
