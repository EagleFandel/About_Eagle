"use client";

import Link from "next/link";
import { useEffect, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { resumeData, resolveResumeText } from "@/content/resume";
import { ResumeHeader } from "@/components/resume/resume-header";
import { ExperienceSection } from "@/components/resume/experience-section";
import { ProjectSection } from "@/components/resume/project-section";
import { AwardsSection } from "@/components/resume/awards-section";
import { SkillsSection } from "@/components/resume/skills-section";
import { EducationSection } from "@/components/resume/education-section";
import type { ResumeLocale, ResumeMode } from "@/types/resume";
import styles from "@/app/resume/resume.module.css";

gsap.registerPlugin(ScrollTrigger);

interface ResumeShellProps {
  locale: ResumeLocale;
  mode: ResumeMode;
  fontClassName: string;
}

export const ResumeShell = ({ locale, mode, fontClassName }: ResumeShellProps) => {
  const lastUpdated = useMemo(() => {
    const date = new Date(resumeData.updatedAt);
    return locale === "zh"
      ? date.toLocaleDateString("zh-CN")
      : date.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "2-digit" });
  }, [locale]);

  useEffect(() => {
    if (mode !== "editorial") {
      return;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        `[data-animate="title"]`,
        {
          opacity: 0,
          y: 28,
          filter: "blur(10px)"
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.2,
          ease: "power3.out"
        }
      );

      gsap.utils.toArray<HTMLElement>(`[data-animate="section"]`).forEach((element, index) => {
        gsap.fromTo(
          element,
          { opacity: 0, y: 26 },
          {
            opacity: 1,
            y: 0,
            duration: 0.86,
            delay: index * 0.02,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 84%"
            }
          }
        );
      });

      gsap.utils.toArray<HTMLElement>(`[data-animate="timeline-item"]`).forEach((element, index) => {
        gsap.fromTo(
          element,
          { opacity: 0.48, x: -14 },
          {
            opacity: 1,
            x: 0,
            duration: 0.62,
            delay: index * 0.04,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 88%"
            }
          }
        );
      });

    });

    return () => {
      ctx.revert();
    };
  }, [locale, mode]);

  return (
    <main className={`${styles.resumeRoot} ${mode === "ats" ? styles.atsMode : styles.editorialMode} ${fontClassName}`}>
      <div className={styles.resumeCanvas}>
        <ResumeHeader basics={resumeData.basics} locale={locale} mode={mode} />

        <section className={styles.summarySection} data-animate="section">
          <div className={styles.sectionHeading}>
            <p className={styles.sectionIndex}>00</p>
            <h3>{locale === "zh" ? "职业摘要" : "Professional Summary"}</h3>
          </div>
          <p className={styles.summaryText}>{resolveResumeText(resumeData.basics.summary, locale)}</p>
        </section>

        <ExperienceSection locale={locale} items={resumeData.experiences} />
        <ProjectSection locale={locale} projects={resumeData.projects} />
        <AwardsSection locale={locale} mode={mode} awards={resumeData.awards} metrics={resumeData.impactMetrics} />
        <SkillsSection locale={locale} groups={resumeData.skillGroups} />
        <EducationSection locale={locale} education={resumeData.education} languages={resumeData.languages} />

        <footer className={styles.footer}>
          <p>
            {locale === "zh" ? "更新于" : "Updated"}: {lastUpdated}
          </p>
          <p>{resumeData.version}</p>
          <Link href="/" data-print-hidden>
            {locale === "zh" ? "返回 Future Craft 首页" : "Return to Future Craft homepage"}
          </Link>
        </footer>
      </div>
    </main>
  );
};
