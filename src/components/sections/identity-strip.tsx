"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { profile } from "@/content/profile";
import { useSiteContext } from "@/components/providers/site-context";

gsap.registerPlugin(ScrollTrigger);

export const IdentityStrip = () => {
  const { resolveText } = useSiteContext();
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".identity-copy",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ref.current,
            start: "top 80%"
          }
        }
      );
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section className="identity-strip section-shell" id="identity-strip" ref={ref}>
      <div className="content-grid">
        <p className="identity-copy">{resolveText(profile.intro)}</p>
      </div>
    </section>
  );
};
