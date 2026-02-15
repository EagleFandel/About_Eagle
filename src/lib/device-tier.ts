import type { DeviceTier, MotionPreset } from "@/types/content";

const presets: Record<DeviceTier, MotionPreset> = {
  high: {
    heroIntensity: 1,
    particleCount: 4800,
    blurAmount: 14,
    pinDuration: 1.4
  },
  mid: {
    heroIntensity: 0.82,
    particleCount: 3000,
    blurAmount: 10,
    pinDuration: 1.2
  },
  low: {
    heroIntensity: 0.62,
    particleCount: 1800,
    blurAmount: 6,
    pinDuration: 1
  }
};

export const detectDeviceTier = (): DeviceTier => {
  if (typeof window === "undefined") {
    return "high";
  }

  const prefersReduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduce) {
    return "low";
  }

  const width = window.innerWidth;
  const cores = navigator.hardwareConcurrency ?? 4;
  const memory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 4;

  if (width < 520 || cores <= 4 || memory <= 4) {
    return "low";
  }

  if (width < 1024 || cores <= 8 || memory <= 8) {
    return "mid";
  }

  return "high";
};

export const getMotionPresetByTier = (tier: DeviceTier): MotionPreset => presets[tier];
