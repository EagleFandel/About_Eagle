"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
}

export const MagneticButton = ({ children, className, onClick, href }: MagneticButtonProps) => {
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    const handleMove = (event: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;

      gsap.to(element, {
        x: x * 0.16,
        y: y * 0.22,
        duration: 0.35,
        ease: "power2.out"
      });
    };

    const handleLeave = () => {
      gsap.to(element, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.35)" });
    };

    element.addEventListener("mousemove", handleMove);
    element.addEventListener("mouseleave", handleLeave);

    return () => {
      element.removeEventListener("mousemove", handleMove);
      element.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <a
      ref={ref}
      className={className}
      href={href}
      onClick={(event) => {
        if (!href) {
          event.preventDefault();
        }
        onClick?.();
      }}
    >
      {children}
    </a>
  );
};
