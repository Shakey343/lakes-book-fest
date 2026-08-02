import { useEffect, useState } from "react";

const HeroVideo = () => {
  const [loaded, setLoaded] = useState(false);
  const [fading, setFading] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (!loaded || fading) return;

    const handleMove = () => {
      setFading(true);
    };

    window.addEventListener("mousemove", handleMove, { once: true });

    const beginFade = () => setFading(true);

    window.addEventListener("pointermove", beginFade, {
      once: true,
    });

    window.addEventListener("pointerdown", beginFade, {
      once: true,
    });

    window.addEventListener("keydown", beginFade, {
      once: true,
    });

    return () => window.removeEventListener("mousemove", handleMove);
  }, [loaded, fading]);

  useEffect(() => {
    if (!fading) return;

    const timeout = setTimeout(() => {
      setHidden(true);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [fading]);

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  useEffect(() => {
    if (prefersReducedMotion) {
      setHidden(true);
    }
  }, [prefersReducedMotion]);

  const videoUrl =
    "https://res.cloudinary.com/dov7jlxo5/video/upload/v1785679695/web_main_page_cwpxna.mp4";

  return (
    !hidden && (
      <div
        className={`
            fixed inset-0 z-50
            transition-opacity duration-[2000ms]
            ${fading ? "opacity-0" : "opacity-100"}
        `}
      >
        <video
          autoPlay
          muted
          playsInline
          onCanPlay={() => setLoaded(true)}
          onEnded={() => setFading(true)}
          className="h-full w-full object-cover"
        >
          <source src={videoUrl} />
        </video>
      </div>
    )
  );
};

export default HeroVideo;
