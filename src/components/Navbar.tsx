import { NavLink } from "react-router";
import Container from "./Container";
import FeatherImg from "../assets/gold_feather.png";
import NavbarMenu from "./NavbarMenu";

const Navbar = () => {
  const scrollToTop = () => {
    // console.log("to the top!");
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav className="fixed top-0 w-full flex flex-col justify-center bg-night z-30">
      <Container className="flex justify-between h-[80px] items-center relative">
        <NavLink to={"/"} className="py-2 z-10" onClick={scrollToTop}>
          <div className="flex gap-2">
            <img src={FeatherImg} alt="" className="w-[50px]" />
            <span className="text-white hidden lg:block">
              The Lake District
              <br /> Book Festival
            </span>
          </div>
        </NavLink>
        <NavbarMenu scrollToTop={scrollToTop} />
      </Container>
    </nav>
  );
};

export default Navbar;
