"use client";

import { profile } from "@/content/profile";
import { getMessage } from "@/i18n/messages";
import { MagneticButton } from "@/components/motion/magnetic-button";
import { useSiteContext } from "@/components/providers/site-context";

export const CollabCTASection = () => {
  const { locale, resolveText } = useSiteContext();

  return (
    <section className="cta-section section-shell" id="collab-cta">
      <div className="content-grid cta-layout">
        <p className="section-kicker">07 / CONNECT</p>
        <h2>{getMessage(locale, "collabTitle")}</h2>
        <p className="cta-line">{resolveText(profile.ctaLine)}</p>
        <div className="cta-actions">
          <MagneticButton className="primary-button" href={`mailto:${profile.email}`}>
            {getMessage(locale, "emailMe")}
          </MagneticButton>
          <MagneticButton className="secondary-button" href="/resume">
            {locale === "zh" ? "查看简历 / Resume" : "View Resume"}
          </MagneticButton>
          <p className="email-inline">{profile.email}</p>
        </div>
        <div className="social-placeholder">
          <span>{locale === "zh" ? "在线链接" : "Online links"}</span>
          <ul>
            <li>
              <a href={profile.github} target="_blank" rel="noreferrer">
                GitHub / EagleFandel
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
