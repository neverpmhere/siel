import { useState, Suspense, useRef, useEffect } from "react";
import { lainPages } from "../lain/lainPages";
import "../lain/lain.css";

function Lain({ onBack }) {
  const [page, setPage] = useState("love");
  const [soundOn, setSoundOn] = useState(false);
  const [volume, setVolume] = useState(0.35);

  const audioRef = useRef(null);

  const current = lainPages[page];
  const PageComponent = current.component;
  const audioSrc = current.audio;

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !audioSrc) return;

    audio.volume = volume;
    audio.loop = true;

    if (soundOn) {
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  }, [soundOn, audioSrc]);

  function goTo(pageName) {
    if (lainPages[pageName]) {
      setPage(pageName);
    }
  }

  function toggleSound() {
  setSoundOn((prev) => !prev);
  }

  function handleVolume(e) {
    const value = Number(e.target.value);
    setVolume(value);

    if (audioRef.current) {
      audioRef.current.volume = value;
    }
  }

  return (
    <div className="lain-root">
      <div className="lain-sound">
        <button className="lain-icon" type="button" onClick={toggleSound}>
          {soundOn ? (
            <svg viewBox="0 0 24 24">
              <path className="speaker-fill" d="M4 9v6h4l5 5V4L8 9H4z" />
              <path d="M16 8.5c1.2 1.2 1.8 2.3 1.8 3.5s-.6 2.3-1.8 3.5" />
              <path d="M18.5 6c1.8 1.8 2.8 3.8 2.8 6s-1 4.2-2.8 6" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24">
              <path className="speaker-fill" d="M4 9v6h4l5 5V4L8 9H4z" />
              <path d="M18 9l4 4" />
              <path d="M22 9l-4 4" />
            </svg>
          )}
        </button>

        <div className="lain-volume">
          <input
            className="lain-slider"
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolume}
          />
        </div>
      </div>

      <button className="lain-back" type="button" onClick={onBack}>
        <svg viewBox="0 0 24 24">
          <path d="M6 6l12 12" />
          <path d="M18 6L6 18" />
        </svg>
      </button>

      <Suspense fallback={null}>
        <PageComponent goTo={goTo} />
      </Suspense>

      {audioSrc && <audio ref={audioRef} src={audioSrc} key={audioSrc} />}
    </div>
  );
}

export default Lain;