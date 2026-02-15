"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { getAudioController } from "@/lib/audio";
import { detectDeviceTier, getMotionPresetByTier } from "@/lib/device-tier";
import type { DeviceTier, Locale, LocalizedText, MotionPreset } from "@/types/content";

interface SiteContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  resolveText: (text: LocalizedText) => string;
  deviceTier: DeviceTier;
  motionPreset: MotionPreset;
  audioPlaying: boolean;
  audioUnavailable: boolean;
  unlockAudio: () => Promise<boolean>;
  toggleAudio: () => Promise<boolean>;
}

const SiteContext = createContext<SiteContextValue | null>(null);

export const SiteProvider = ({ children }: { children: React.ReactNode }) => {
  const [locale, setLocale] = useState<Locale>("zh");
  const [deviceTier, setDeviceTier] = useState<DeviceTier>(() => detectDeviceTier());
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [audioUnavailable, setAudioUnavailable] = useState(false);

  useEffect(() => {
    const handleResize = () => setDeviceTier(detectDeviceTier());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const unlockAudio = async (): Promise<boolean> => {
    const controller = getAudioController();
    const success = await controller.unlockAndPlay();
    setAudioPlaying(success);
    setAudioUnavailable(!success && controller.isFailed());
    return success;
  };

  const toggleAudio = async (): Promise<boolean> => {
    const controller = getAudioController();
    const playing = await controller.toggle();
    setAudioPlaying(playing);
    setAudioUnavailable(controller.isFailed());
    return playing;
  };

  const value = useMemo<SiteContextValue>(
    () => ({
      locale,
      setLocale,
      toggleLocale: () => setLocale((prev) => (prev === "zh" ? "en" : "zh")),
      resolveText: (text: LocalizedText) => text[locale],
      deviceTier,
      motionPreset: getMotionPresetByTier(deviceTier),
      audioPlaying,
      audioUnavailable,
      unlockAudio,
      toggleAudio
    }),
    [audioPlaying, audioUnavailable, deviceTier, locale]
  );

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
};

export const useSiteContext = (): SiteContextValue => {
  const context = useContext(SiteContext);
  if (!context) {
    throw new Error("useSiteContext must be used within SiteProvider.");
  }

  return context;
};
