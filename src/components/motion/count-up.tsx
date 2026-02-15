"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface CountUpProps {
  value: number;
}

export const CountUp = ({ value }: CountUpProps) => {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    const holder = { val: 0 };
    const tween = gsap.to(holder, {
      val: value,
      duration: 1.4,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: "top 88%",
        once: true
      },
      onUpdate: () => {
        element.textContent = `${Math.round(holder.val)}`;
      }
    });

    return () => {
      tween.kill();
    };
  }, [value]);

  return <span ref={ref}>0</span>;
};
