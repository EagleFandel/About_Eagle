"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { profile } from "@/content/profile";
import { getMessage } from "@/i18n/messages";
import { KineticHeading } from "@/components/motion/kinetic-heading";
import { MagneticButton } from "@/components/motion/magnetic-button";
import { ParticleField } from "@/components/motion/particle-field";
import { useSiteContext } from "@/components/providers/site-context";

export const HeroSection = () => {
  const { locale, resolveText, motionPreset, unlockAudio, toggleAudio, audioPlaying, audioUnavailable, toggleLocale } =
    useSiteContext();
  const [entered, setEntered] = useState(false);

  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const tagsRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (!subtitleRef.current || !tagsRef.current) {
      return;
    }

    const timeline = gsap.timeline();
    timeline
      .fromTo(
        subtitleRef.current,
        {
          opacity: 0,
          y: 24,
          filter: "blur(10px)"
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.1,
          ease: "power2.out"
        }
      )
      .fromTo(
        tagsRef.current.children,
        {
          opacity: 0,
          y: 18
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          duration: 0.9
        },
        "-=0.45"
      );

    return () => {
      timeline.kill();
    };
  }, [locale]);

  const onEnter = async () => {
    await unlockAudio();
    setEntered(true);
    const next = document.getElementById("identity-strip");
    next?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="hero-section section-shell" id="hero">
      <ParticleField particleCount={motionPreset.particleCount} />
      <div className="floating-controls">
        <button type="button" className="ghost-control" onClick={toggleLocale} aria-label="Switch language">
          {locale.toUpperCase()}
        </button>
        <button
          type="button"
          className="ghost-control"
          aria-label="Toggle audio"
          disabled={audioUnavailable}
          onClick={async () => {
            if (!entered) {
              await onEnter();
              return;
            }
            await toggleAudio();
          }}
        >
          {audioUnavailable ? "NO AUDIO" : audioPlaying ? "SOUND ON" : "SOUND OFF"}
        </button>
      </div>
      <div className="hero-overlay-grid" aria-hidden />
      <div className="hero-content content-grid">
        <div className="hero-main">
          <p className="hero-kicker">{resolveText(profile.headline)}</p>
          <KineticHeading text={resolveText(profile.name)} />
          <p className="hero-subtitle" ref={subtitleRef}>
            {resolveText(profile.statement)}
          </p>
          <div className="hero-cta-row">
            <MagneticButton className="primary-button" onClick={onEnter}>
              {getMessage(locale, "enterWithSound")}
            </MagneticButton>
            <span className="scroll-tip">{getMessage(locale, "scrollToExplore")}</span>
          </div>
        </div>
        <ul className="hero-tags" ref={tagsRef}>
          {profile.identityTags.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};
