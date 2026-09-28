import { useEffect, useRef } from "react";

interface HeroVideoProps {
  fading: boolean;
  onLoaded: () => void;
}

const videoUrl =
  "https://res.cloudinary.com/dov7jlxo5/video/upload/v1785679695/web_main_page_cwpxna.mp4";

// First frame of the video, shown while loading or if autoplay is blocked
const posterUrl =
  "https://res.cloudinary.com/dov7jlxo5/video/upload/so_0,q_auto,w_1280/v1785679695/web_main_page_cwpxna.jpg";

// Don't hold the intro hostage if the video never becomes playable
const LOAD_FALLBACK_MS = 3000;

const HeroVideo = ({ fading, onLoaded }: HeroVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const onLoadedRef = useRef(onLoaded);
  onLoadedRef.current = onLoaded;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // React sets `muted` as a property but never as an attribute, and iOS
    // (Safari and Chrome, both WebKit) won't autoplay without it.
    video.muted = true;
    video.defaultMuted = true;
    video.setAttribute("muted", "");

    const fallbackTimer = setTimeout(() => onLoadedRef.current(), LOAD_FALLBACK_MS);

    // Autoplay can still be blocked (e.g. iOS Low Power Mode), but a user
    // gesture is always allowed to start playback.
    const playOnInteraction = () => {
      video.play().catch(() => {});
      removeInteractionListeners();
    };
    const removeInteractionListeners = () => {
      window.removeEventListener("pointerdown", playOnInteraction);
      window.removeEventListener("touchend", playOnInteraction);
      window.removeEventListener("keydown", playOnInteraction);
    };

    video.play().catch(() => {
      onLoadedRef.current();
      window.addEventListener("pointerdown", playOnInteraction);
      window.addEventListener("touchend", playOnInteraction);
      window.addEventListener("keydown", playOnInteraction);
    });

    return () => {
      clearTimeout(fallbackTimer);
      removeInteractionListeners();
    };
  }, []);

  return (
    <>
      <div className="fixed inset-0 z-0 bg-night" />
      <div
        className={`
          fixed inset-0 z-0 overflow-hidden pointer-events-none
          transition-opacity duration-[2000ms]
          ${fading ? "opacity-30" : "opacity-100"}
        `}
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          loop
          preload="auto"
          poster={posterUrl}
          onCanPlay={onLoaded}
          className="hero-video h-full w-full scale-125 object-cover"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default HeroVideo;
