import Button from "../Button";
import Container from "../Container";
import FeatherImg from "../../assets/gold_feather.png";
import { useEffect, useLayoutEffect, useState } from "react";
import Navbar from "../Navbar";
import NavbarMenu from "../NavbarMenu";
import HeroVideo from "../HeroVideo";
import cn from "../../utils/cn";

const HERO_INTRO_SEEN_KEY = "heroIntroSeen";

const hasSeenHeroIntro = () => {
  try {
    return sessionStorage.getItem(HERO_INTRO_SEEN_KEY) === "true";
  } catch {
    return false;
  }
};

const HeroBanner = () => {
  const [scrolling, setScrolling] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [fading, setFading] = useState(hasSeenHeroIntro);
  const [videoFading, setVideoFading] = useState(hasSeenHeroIntro);
  // const [scrollTop, setScrollTop] = useState(0);
  // const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 640) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!loaded || fading) return;

    let longTimer: ReturnType<typeof setTimeout> | null = null;
    let shortTimer: ReturnType<typeof setTimeout> | null = null;

    const triggerFade = () => {
      if (longTimer) clearTimeout(longTimer);
      if (shortTimer) clearTimeout(shortTimer);
      setFading(true);
      setVideoFading(true);
      try {
        sessionStorage.setItem(HERO_INTRO_SEEN_KEY, "true");
      } catch {
        // ignore (e.g. storage disabled)
      }
    };

    const handleContinuousInteraction = () => {
      setVideoFading(true);
      if (longTimer) return;
      longTimer = setTimeout(triggerFade, 4000);
    };

    const handleDiscreteInteraction = () => {
      if (shortTimer) return;
      shortTimer = setTimeout(triggerFade, 300);
    };

    window.addEventListener("mousemove", handleContinuousInteraction);
    window.addEventListener("pointermove", handleContinuousInteraction);
    window.addEventListener("pointerdown", handleDiscreteInteraction);
    window.addEventListener("keydown", handleDiscreteInteraction);
    window.addEventListener("wheel", handleDiscreteInteraction);
    window.addEventListener("touchmove", handleDiscreteInteraction);

    return () => {
      if (longTimer) clearTimeout(longTimer);
      if (shortTimer) clearTimeout(shortTimer);
      window.removeEventListener("mousemove", handleContinuousInteraction);
      window.removeEventListener("pointermove", handleContinuousInteraction);
      window.removeEventListener("pointerdown", handleDiscreteInteraction);
      window.removeEventListener("keydown", handleDiscreteInteraction);
      window.removeEventListener("wheel", handleDiscreteInteraction);
      window.removeEventListener("touchmove", handleDiscreteInteraction);
    };
  }, [loaded, fading]);

  useEffect(() => {
    if (fading) {
      document.body.classList.remove("stop-scrolling");
      return;
    }

    document.body.classList.add("stop-scrolling");

    return () => {
      document.body.classList.remove("stop-scrolling");
    };
  }, [fading]);

  useLayoutEffect(() => {
    document.body.classList.toggle("hero-video-fading", videoFading);

    return () => {
      document.body.classList.remove("hero-video-fading");
    };
  }, [videoFading]);

  return (
    <>
      {scrolling && <Navbar />}
      <Container className={cn("flex flex-col justify-evenly pt-40 pb-32 sm:py-40 relative bg-night text-white", fading ? "overflow-hidden" : "overflow-visible")}>
        <HeroVideo fading={videoFading} onLoaded={() => setLoaded(true)} />

        <div
          className={`flex self-end items-center absolute top-0 h-20 transition-opacity duration-[2000ms] ${
            fading ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <NavbarMenu />
        </div>

        <h1
          className={`text-[80px] lg:text-[98px] relative z-10 origin-top-left drop-shadow-[0_4px_14px_rgba(0,0,0,0.75)] transition-transform duration-[2000ms] ${
            fading ? "scale-100" : "lg:scale-125"
          }`}
        >
          The Lake District
          <br /> Book Festival
        </h1>

        <p
          className={`hidden sm:block quote my-8 leading-none text-jonquil text-[18px] sm:text-[24px] relative z-10 transition-opacity duration-[2000ms] ${
            fading ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          Bringing the world to the Lakes
          <br /> & the Lakes to the world
        </p>

        <Button
          href="https://events.lakedistrictbookfestival.co.uk/checkout/new-session/store/71646/chk/202e?ref=store-widget&show_search_filter=true&show_date_filter=true&show_sort=true&show_event_filter=false"
          target="_blank"
          initialWord="Become a Friend"
          hoverWord="Buy Membership"
          className={`mt-28 sm:mt-7 w-fit bg-jonquil text-night hover:bg-night self-center sm:self-auto relative z-10 transition-opacity duration-[2000ms] ${
            fading ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        />

        <p
          className={`absolute -bottom-60 left-0 right-0 text-center text-sm sm:text-base text-white/80 z-10 transition-opacity duration-1000 ${
            fading
              ? "opacity-0 pointer-events-none"
              : "opacity-100"
          }`}
        >
          Tap the screen to continue
        </p>

        <img
          src={FeatherImg}
          alt="Lake district book festival feather"
          className="absolute top-[120px] right-0 lg:right-[60px] w-[300px] md:w-[400px] lg:w-[400px] z-10"
        />

        <div
          className={`absolute left-4 bottom-48 sm:left-auto sm:right-10 sm:bottom-40 md:right-16 md:bottom-12 lg:right-28 lg:bottom-20 w-fit flex flex-col md:gap-2 text-left sm:text-right z-10 drop-shadow-[0_4px_10px_rgba(0,0,0,0.75)] origin-top-left sm:origin-top-right transition-transform duration-[2000ms] ${
            fading ? "scale-100" : "scale-125"
          }`}
        >
          <p className="text-lg md:text-3xl font-adelphi font-bold">
            11<sup>th</sup>-13<sup>th</sup> June, 20
            <span className="text-fire-red font-black">27</span>
          </p>

          <p className="text-xl text-jonquil md:text-4xl mb-4">
            Cartmel Racecourse
          </p>
        </div>
      </Container>
    </>
  );
};

export default HeroBanner;
