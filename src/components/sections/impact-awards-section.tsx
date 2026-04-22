"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { awardsTimeline } from "@/content/awards";
import { profile } from "@/content/profile";
import { CountUp } from "@/components/motion/count-up";
import { getMessage } from "@/i18n/messages";
import { useSiteContext } from "@/components/providers/site-context";

gsap.registerPlugin(ScrollTrigger);

export const ImpactAwardsSection = () => {
  const { locale, resolveText } = useSiteContext();
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".timeline-item",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.7,
          scrollTrigger: {
            trigger: ref.current,
            start: "top 70%"
          }
        }
      );
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section className="impact-section section-shell" id="impact-awards" ref={ref}>
      <div className="section-head content-grid">
        <p className="section-kicker">05 / IMPACT</p>
        <h2>{getMessage(locale, "impactAwards")}</h2>
      </div>
      <div className="impact-layout content-grid">
        <div className="metric-grid">
          {profile.metrics.map((metric) => (
            <article key={metric.id} className="metric-card">
              <p className="metric-value">
                <CountUp value={metric.value} />+
              </p>
              <p className="metric-label">{resolveText(metric.label)}</p>
            </article>
          ))}
        </div>
        <div className="timeline">
          {awardsTimeline.map((award) => (
            <article className="timeline-item" key={award.id}>
              <p className="timeline-year">{award.year}</p>
              <h3>{resolveText(award.title)}</h3>
              <p>{resolveText(award.detail)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
