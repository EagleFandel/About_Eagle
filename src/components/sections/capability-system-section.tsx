"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { profile } from "@/content/profile";
import { getMessage } from "@/i18n/messages";
import { useSiteContext } from "@/components/providers/site-context";

gsap.registerPlugin(ScrollTrigger);

export const CapabilitySystemSection = () => {
  const { locale, resolveText } = useSiteContext();
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".cap-cluster",
        { opacity: 0, y: 34 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          scrollTrigger: {
            trigger: ref.current,
            start: "top 72%"
          }
        }
      );

      gsap.fromTo(
        ".cap-link",
        { strokeDashoffset: 200, opacity: 0.24 },
        {
          strokeDashoffset: 0,
          opacity: 1,
          duration: 1.4,
          stagger: 0.1,
          scrollTrigger: {
            trigger: ref.current,
            start: "top 75%"
          }
        }
      );
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section className="capability-section section-shell" id="capability-system" ref={ref}>
      <div className="section-head content-grid">
        <p className="section-kicker">04 / SYSTEM</p>
        <h2>{getMessage(locale, "capabilitySystem")}</h2>
      </div>
      <div className="capability-layout content-grid">
        <div className="capability-core">
          <span>AI AGENTS</span>
          <span>PRODUCT SYSTEMS</span>
        </div>
        <svg viewBox="0 0 1000 420" className="capability-lines" aria-hidden>
          <line className="cap-link" x1="500" y1="210" x2="130" y2="85" />
          <line className="cap-link" x1="500" y1="210" x2="870" y2="85" />
          <line className="cap-link" x1="500" y1="210" x2="130" y2="330" />
          <line className="cap-link" x1="500" y1="210" x2="870" y2="330" />
        </svg>
        <div className="capability-clusters">
          {profile.capabilityClusters.map((cluster) => (
            <article className="cap-cluster" key={cluster.id}>
              <h3>{resolveText(cluster.label)}</h3>
              <ul>
                {cluster.items.map((item) => (
                  <li key={`${cluster.id}-${item}`}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
