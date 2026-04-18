"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { ResumeBasics, ResumeLocale, ResumeMode } from "@/types/resume";
import { resolveResumeText } from "@/content/resume";
import { ResumeControls } from "@/components/resume/resume-controls";
import styles from "@/app/resume/resume.module.css";

interface ResumeHeaderProps {
  basics: ResumeBasics;
  locale: ResumeLocale;
  mode: ResumeMode;
}

export const ResumeHeader = ({ basics, locale, mode }: ResumeHeaderProps) => {
  const [avatarFailed, setAvatarFailed] = useState(false);

  return (
    <header className={styles.header} data-animate="title">
      <div className={styles.headerTop}>
        <Link href="/" className={styles.homeLink} data-print-hidden>
          {locale === "zh" ? "返回主页" : "Back to Site"}
        </Link>
        <ResumeControls locale={locale} mode={mode} />
      </div>

      <div className={styles.identityWrap}>
        <div className={styles.avatarWrap}>
          {!avatarFailed ? (
            <Image
              src={basics.avatarPath}
              alt={locale === "zh" ? "个人头像" : "Profile avatar"}
              width={140}
              height={140}
              className={styles.avatarImage}
              onError={() => setAvatarFailed(true)}
              unoptimized
            />
          ) : null}
          <div className={styles.avatarFallback} aria-hidden={!avatarFailed}>
            <span>XC</span>
            <p>{locale === "zh" ? "头像占位" : "Avatar Placeholder"}</p>
          </div>
        </div>

        <div className={styles.identityMain}>
          <p className={styles.kicker}>{mode === "editorial" ? "Editorial Resume" : "ATS Resume"}</p>
          <h1>{resolveResumeText(basics.name, locale)}</h1>
          <h2>{resolveResumeText(basics.headline, locale)}</h2>
          <p className={styles.contactLine}>
            <a href={`mailto:${basics.email}`}>{basics.email}</a>
            {basics.email2 && (
              <>
                <span> | </span>
                <a href={`mailto:${basics.email2}`}>{basics.email2}</a>
              </>
            )}
            <span> | </span>
            <a href={`tel:${basics.phone.replace(/\s+/g, "")}`}>{basics.phone}</a>
            <span> | </span>
            <a href={basics.github} target="_blank" rel="noreferrer">
              {basics.github}
            </a>
            <span> | </span>
            <span>{resolveResumeText(basics.location, locale)}</span>
          </p>
        </div>
      </div>
    </header>
  );
};
