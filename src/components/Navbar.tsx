import { NavLink, useLocation } from "react-router";
import Container from "./Container";
import FeatherImg from "../assets/gold_feather.png";
import NavbarMenu from "./NavbarMenu";
import { useEffect } from "react";

const Navbar = () => {
  // const scrollToTop = () => {
  //   console.log(window.innerWidth)
  //   if (window.innerWidth < 380) {
  //     window.scrollTo({
  //       top: 0,
  //       left: 0,
  //       behavior: "auto",
  //     });
  //   } else {
  //     window.scrollTo({
  //       top: 0,
  //       left: 0,
  //       behavior: "smooth",
  //     });
  //   }
  // };

  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      const isSmall = window.innerWidth < 480;

      window.scrollTo({
        top: 0,
        behavior: isSmall ? "auto" : "smooth",
      });
    }, [pathname]);

    return;
  }

  return (
    <nav className="fixed top-0 w-full flex flex-col justify-center bg-night z-30">
      <Container className="flex justify-between h-[80px] items-center relative">
        <NavLink to={"/"} className="py-2 z-10" onClick={ScrollToTop}>
          <div className="flex gap-2">
            <img src={FeatherImg} alt="" className="w-[50px]" />
            <span className="text-white hidden lg:block">
              The Lake District
              <br /> Book Festival
            </span>
          </div>
        </NavLink>
        <NavbarMenu scrollToTop={ScrollToTop} />
      </Container>
    </nav>
  );
};

export default Navbar;
