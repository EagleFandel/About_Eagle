"use client";

import { profile } from "@/content/profile";
import { getMessage } from "@/i18n/messages";
import { useSiteContext } from "@/components/providers/site-context";

export const FootnoteSection = () => {
  const { locale, resolveText, toggleLocale, toggleAudio, audioPlaying, audioUnavailable } = useSiteContext();

  return (
    <footer className="footnote-section section-shell" id="footnote">
      <div className="content-grid footnote-layout">
        <div>
          <p className="footnote-text">{resolveText(profile.educationFootnote)}</p>
          <p className="footnote-text">{resolveText(profile.location)}</p>
        </div>
        <div className="footnote-controls">
          <button type="button" onClick={toggleLocale} aria-label={getMessage(locale, "localeSwitch")}>
            {getMessage(locale, "localeSwitch")}: {locale.toUpperCase()}
          </button>
          <button
            type="button"
            onClick={toggleAudio}
            disabled={audioUnavailable}
            aria-label="Toggle ambient audio"
          >
            {audioUnavailable
              ? "Audio Unavailable"
              : audioPlaying
                ? getMessage(locale, "soundOn")
                : getMessage(locale, "soundOff")}
          </button>
        </div>
      </div>
    </footer>
  );
};
