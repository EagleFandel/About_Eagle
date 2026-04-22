"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { selectedProjects } from "@/content/projects";
import { getMessage } from "@/i18n/messages";
import { useSiteContext } from "@/components/providers/site-context";

gsap.registerPlugin(ScrollTrigger);

export const SelectedWorksSection = () => {
  const { locale, resolveText, motionPreset } = useSiteContext();
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !trackRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".work-card");
      const maxScroll = cards.length - 1;

      const horizontalTween = gsap.to(trackRef.current, {
        xPercent: -100 * maxScroll,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1.2,
          anticipatePin: 1,
          end: () => `+=${window.innerWidth * cards.length * motionPreset.pinDuration}`,
          invalidateOnRefresh: true
        }
      });

      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0.5, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: card,
              containerAnimation: horizontalTween,
              start: "left 75%"
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [motionPreset.pinDuration]);

  return (
    <section className="works-section section-shell" id="selected-works" ref={sectionRef}>
      <div className="section-head content-grid">
        <p className="section-kicker">03 / WORKS</p>
        <h2>{getMessage(locale, "selectedWorks")}</h2>
      </div>
      <div className="works-scroller">
        <div className="works-track" ref={trackRef}>
          {selectedProjects.map((project, index) => (
            <article className="work-card" key={project.id}>
              <div className="work-index">{String(index + 1).padStart(2, "0")}</div>
              <h3>{resolveText(project.title)}</h3>
              {project.meta ? <p className="work-meta">{resolveText(project.meta)}</p> : null}
              <p className="work-role">{resolveText(project.role)}</p>
              <p className="work-impact">{resolveText(project.impact)}</p>
              {project.award ? <p className="work-award">{resolveText(project.award)}</p> : null}
              <ul className="stack-list">
                {project.stack.map((stackTag) => (
                  <li key={`${project.id}-${stackTag}`}>{stackTag}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
