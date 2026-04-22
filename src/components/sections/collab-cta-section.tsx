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
        </div>
        <div className="contact-card">
          <span>{locale === "zh" ? "联系方式" : "Contact"}</span>
          <ul className="contact-list">
            <li>
              <span>Email</span>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            {profile.email2 ? (
              <li>
                <span>Email 2</span>
                <a href={`mailto:${profile.email2}`}>{profile.email2}</a>
              </li>
            ) : null}
            <li>
              <span>Phone</span>
              <a href={`tel:${profile.phone.replace(/[^\d+]/g, "")}`}>{profile.phone}</a>
            </li>
            <li>
              <span>GitHub</span>
              <a href={profile.github} target="_blank" rel="noreferrer">
                EagleFandel
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
