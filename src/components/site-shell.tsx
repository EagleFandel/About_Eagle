"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SmoothScroll } from "@/components/motion/smooth-scroll";
import { HeroSection } from "@/components/sections/hero-section";
import { IdentityStrip } from "@/components/sections/identity-strip";
import { SelectedWorksSection } from "@/components/sections/selected-works-section";
import { CapabilitySystemSection } from "@/components/sections/capability-system-section";
import { ImpactAwardsSection } from "@/components/sections/impact-awards-section";
import { RolesCommunitySection } from "@/components/sections/roles-community-section";
import { CollabCTASection } from "@/components/sections/collab-cta-section";
import { FootnoteSection } from "@/components/sections/footnote-section";

gsap.registerPlugin(ScrollTrigger);

export const SiteShell = () => {
  useEffect(() => {
    const animations = gsap.utils.toArray<HTMLElement>(".section-head");
    animations.forEach((node) => {
      gsap.fromTo(
        node,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          scrollTrigger: {
            trigger: node,
            start: "top 86%"
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <SmoothScroll />
      <main className="page-shell">
        <HeroSection />
        <IdentityStrip />
        <SelectedWorksSection />
        <CapabilitySystemSection />
        <ImpactAwardsSection />
        <RolesCommunitySection />
        <CollabCTASection />
        <FootnoteSection />
      </main>
    </>
  );
};
