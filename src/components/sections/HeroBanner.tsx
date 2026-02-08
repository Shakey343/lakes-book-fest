import Button from "../Button";
import Container from "../Container";
import FeatherImg from "../../assets/gold_feather.png";
import { useEffect, useState } from "react";
import Navbar from "../Navbar";
import NavbarMenu from "../NavbarMenu";

const HeroBanner = () => {
  const [scrolling, setScrolling] = useState(false);
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

  return (
    <>
      {scrolling && <Navbar />}
      <Container className="flex flex-col justify-evenly py-[160px] relative bg-night text-white">
        <div className="flex self-end items-center absolute top-0 h-[80px]">
          <NavbarMenu />
        </div>
        <h1 className="text-[80px] lg:text-[98px]">
          The Lake District
          <br /> Book Festival
        </h1>
        <p className="quote my-8 leading-none text-silver text-[28px] sm:text-[36px]">
          Bringing the world to the Lakes
          <br /> & the Lakes to the world
        </p>
        <Button
          href="https://events.lakedistrictbookfestival.co.uk/"
          target="_blank"
          initialWord="Buy tickets"
          hoverWord="Click here"
          className="mt-20 sm:mt-7 w-fit bg-jonquil text-night hover:bg-night self-center sm:self-auto"
        />
        <img
          src={FeatherImg}
          alt="Lake district book festival feather"
          className="absolute top-[120px] right-0 lg:right-[60px] w-[300px] md:w-[400px] lg:w-[400px]"
        />
        <div className="absolute left-4 bottom-56 sm:left-auto sm:right-10 sm:bottom-40 md:right-16 md:bottom-16 lg:right-28 lg:bottom-20 w-fit flex flex-col md:gap-2 text-left md:text-right">
          <p className="text-lg md:text-3xl font-adelphi">
            12<sup>th</sup>-14<sup>th</sup> June, 20
            <span className="text-fire-red font-bold">26</span>
          </p>
          <p className="text-xl md:text-4xl font-thin mb-4">Cartmel Racecourse</p>
        </div>
      </Container>
    </>
  );
};

export default HeroBanner;
