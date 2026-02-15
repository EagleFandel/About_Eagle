import { Cormorant_Garamond, IBM_Plex_Mono, Noto_Serif_SC } from "next/font/google";
import type { Metadata } from "next";
import { ResumeShell } from "@/components/resume/resume-shell";
import type { ResumeLocale, ResumeMode } from "@/types/resume";

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--resume-display",
  weight: ["500", "600", "700"]
});

const serifFont = Noto_Serif_SC({
  subsets: ["latin"],
  variable: "--resume-serif",
  weight: ["400", "500", "600", "700"]
});

const monoFont = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--resume-mono",
  weight: ["400", "500"]
});

const parseLocale = (value: string | undefined): ResumeLocale => (value === "en" ? "en" : "zh");

const parseMode = (value: string | undefined): ResumeMode => (value === "ats" ? "ats" : "editorial");

export const metadata: Metadata = {
  title: "Xuancan Zhao | Resume",
  description: "Editorial and ATS-ready bilingual resume."
};

interface ResumePageProps {
  searchParams: Promise<{
    lang?: string;
    mode?: string;
  }>;
}

export default async function ResumePage({ searchParams }: ResumePageProps) {
  const params = await searchParams;
  const locale = parseLocale(params.lang);
  const mode = parseMode(params.mode);
  const fontClassName = `${displayFont.variable} ${serifFont.variable} ${monoFont.variable}`;

  return <ResumeShell locale={locale} mode={mode} fontClassName={fontClassName} />;
}
