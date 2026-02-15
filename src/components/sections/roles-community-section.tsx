"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { roleTimeline } from "@/content/awards";
import { getMessage } from "@/i18n/messages";
import { useSiteContext } from "@/components/providers/site-context";

gsap.registerPlugin(ScrollTrigger);

export const RolesCommunitySection = () => {
  const { locale, resolveText } = useSiteContext();
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".role-card",
        {
          y: 28,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.16,
          duration: 0.8,
          scrollTrigger: {
            trigger: ref.current,
            start: "top 76%"
          }
        }
      );
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section className="roles-section section-shell" id="roles-community" ref={ref}>
      <div className="section-head content-grid">
        <p className="section-kicker">06 / ROLES</p>
        <h2>{getMessage(locale, "rolesCommunity")}</h2>
      </div>
      <div className="roles-grid content-grid">
        {roleTimeline.map((role) => (
          <article className="role-card" key={role.id}>
            <p className="role-org">{resolveText(role.org)}</p>
            <h3>{resolveText(role.title)}</h3>
            <p className="role-period">{resolveText(role.period)}</p>
            <ul>
              {role.highlights.map((item, index) => (
                <li key={`${role.id}-${index}`}>{resolveText(item)}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};
