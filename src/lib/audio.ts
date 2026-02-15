const AUDIO_SRC = "/audio/ambient-loop.mp3";

class AmbientAudioController {
  private audio: HTMLAudioElement | null = null;
  private failed = false;
  private unlocked = false;

  private ensureAudio() {
    if (typeof window === "undefined" || this.failed) {
      return null;
    }

    if (!this.audio) {
      const nextAudio = new Audio(AUDIO_SRC);
      nextAudio.loop = true;
      nextAudio.volume = 0.24;
      nextAudio.preload = "auto";
      nextAudio.addEventListener("error", () => {
        this.failed = true;
      });
      this.audio = nextAudio;
    }

    return this.audio;
  }

  public async unlockAndPlay(): Promise<boolean> {
    const target = this.ensureAudio();
    if (!target || this.failed) {
      return false;
    }

    try {
      await target.play();
      this.unlocked = true;
      return true;
    } catch {
      this.failed = true;
      return false;
    }
  }

  public async toggle(): Promise<boolean> {
    const target = this.ensureAudio();
    if (!target || this.failed || !this.unlocked) {
      return false;
    }

    if (target.paused) {
      try {
        await target.play();
        return true;
      } catch {
        this.failed = true;
        return false;
      }
    }

    target.pause();
    return false;
  }

  public isPlaying(): boolean {
    return !!this.audio && !this.audio.paused;
  }

  public isFailed(): boolean {
    return this.failed;
  }
}

const globalKey = "__futureCraftAudioController__";
type WindowWithAudio = Window & {
  [globalKey]?: AmbientAudioController;
};

export const getAudioController = (): AmbientAudioController => {
  if (typeof window === "undefined") {
    return new AmbientAudioController();
  }

  const typedWindow = window as WindowWithAudio;
  if (!typedWindow[globalKey]) {
    typedWindow[globalKey] = new AmbientAudioController();
  }

  return typedWindow[globalKey];
};
