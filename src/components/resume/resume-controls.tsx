"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { ResumeLocale, ResumeMode } from "@/types/resume";
import styles from "@/app/resume/resume.module.css";

interface ResumeControlsProps {
  locale: ResumeLocale;
  mode: ResumeMode;
}

export const ResumeControls = ({ locale, mode }: ResumeControlsProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const applyQuery = (nextLocale: ResumeLocale, nextMode: ResumeMode) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("lang", nextLocale);
    params.set("mode", nextMode);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className={styles.controls} data-print-hidden>
      <div className={styles.controlGroup} aria-label="Language Switch">
        <button
          type="button"
          className={locale === "zh" ? styles.controlActive : styles.controlButton}
          onClick={() => applyQuery("zh", mode)}
        >
          中文
        </button>
        <button
          type="button"
          className={locale === "en" ? styles.controlActive : styles.controlButton}
          onClick={() => applyQuery("en", mode)}
        >
          EN
        </button>
      </div>

      <div className={styles.controlGroup} aria-label="Resume Mode Switch">
        <button
          type="button"
          className={mode === "editorial" ? styles.controlActive : styles.controlButton}
          onClick={() => applyQuery(locale, "editorial")}
        >
          Editorial
        </button>
        <button
          type="button"
          className={mode === "ats" ? styles.controlActive : styles.controlButton}
          onClick={() => applyQuery(locale, "ats")}
        >
          ATS
        </button>
      </div>

      <button type="button" className={styles.printButton} onClick={() => window.print()}>
        {locale === "zh" ? "打印 / 导出 PDF" : "Print / Export PDF"}
      </button>
    </div>
  );
};
