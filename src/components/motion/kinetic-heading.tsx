"use client";

import { useEffect, useMemo, useRef } from "react";
import gsap from "gsap";

interface KineticHeadingProps {
  text: string;
}

export const KineticHeading = ({ text }: KineticHeadingProps) => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const glyphRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const glyphs = useMemo(() => Array.from(text), [text]);

  useEffect(() => {
    const element = headingRef.current;
    if (!element) {
      return;
    }

    const validGlyphs = glyphRefs.current.filter(Boolean);
    const timeline = gsap.timeline();

    timeline.fromTo(
      validGlyphs,
      {
        yPercent: 90,
        opacity: 0,
        filter: "blur(8px)"
      },
      {
        yPercent: 0,
        opacity: 1,
        filter: "blur(0px)",
        stagger: 0.034,
        duration: 1.2,
        ease: "power3.out"
      }
    );

    const handleMove = (event: MouseEvent) => {
      const bounds = element.getBoundingClientRect();
      const normalizedX = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
      const normalizedY = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;

      gsap.to(element, {
        x: normalizedX * 12,
        y: normalizedY * 8,
        duration: 0.45,
        ease: "power2.out"
      });
    };

    const handleLeave = () => {
      gsap.to(element, { x: 0, y: 0, duration: 0.6, ease: "power3.out" });
    };

    element.addEventListener("mousemove", handleMove);
    element.addEventListener("mouseleave", handleLeave);

    return () => {
      timeline.kill();
      element.removeEventListener("mousemove", handleMove);
      element.removeEventListener("mouseleave", handleLeave);
    };
  }, [glyphs]);

  return (
    <h1 className="hero-title" ref={headingRef}>
      {glyphs.map((glyph, index) => (
        <span
          key={`${glyph}-${index}`}
          className="hero-glyph"
          ref={(node) => {
            glyphRefs.current[index] = node;
          }}
        >
          {glyph === " " ? "\u00A0" : glyph}
        </span>
      ))}
    </h1>
  );
};
