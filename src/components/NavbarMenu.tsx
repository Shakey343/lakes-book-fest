import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import cn from "../utils/cn";
import classNames from "classnames";

interface NavbarMenuItemsProps {
  scrollToTop?: () => void;
  toggleMenu: () => void;
}

const NavbarMenuItems: React.FC<NavbarMenuItemsProps> = ({ scrollToTop, toggleMenu }) => {
  const scrollAndCloseMenu = () => {
    scrollToTop!()
    toggleMenu!()
  }

  return (
    <>
      <NavLink
        to={"/about"}
        onClick={scrollAndCloseMenu}
        className={({ isActive }) =>
          isActive
            ? "text-2xl md:text-base text-fire-red py-2 border-b-2 border-fire-red"
            : "text-2xl md:text-base text-white py-2 hover:text-fire-red/80"
        }
      >
        About
      </NavLink>
      <NavLink
        to={"/events"}
        onClick={scrollAndCloseMenu}
        className={({ isActive }) =>
          isActive
            ? "text-2xl md:text-base text-fire-red py-2 border-b-2 border-fire-red"
            : "text-2xl md:text-base text-white py-2 hover:text-fire-red/80"
        }
      >
        Events
      </NavLink>
      <NavLink
        to={"/schools"}
        onClick={scrollAndCloseMenu}
        className={({ isActive }) =>
          isActive
            ? "text-2xl md:text-base text-fire-red py-2 border-b-2 border-fire-red"
            : "text-2xl md:text-base text-white py-2 hover:text-fire-red/80"
        }
      >
        Schools Programme
      </NavLink>
      <NavLink
        to={"/support"}
        onClick={scrollAndCloseMenu}
        className={({ isActive }) =>
          isActive
            ? "text-2xl md:text-base text-fire-red py-2 border-b-2 border-fire-red"
            : "text-2xl md:text-base text-white py-2 hover:text-fire-red/80"
        }
      >
        Support Us
      </NavLink>
      <a href="#contact" className={"text-2xl md:text-base text-white py-2 hover:text-fire-red/80"}>
        Contact
      </a>
    </>
  );
};

interface NavbarMenuProps {
  scrollToTop?: () => void;
}

const NavbarMenu: React.FC<NavbarMenuProps> = ({ scrollToTop }) => {
  const [opened, setOpened] = useState(false);

  const toggleMenu = () => {
    setOpened((prevState) => !prevState);
  };

  useEffect(() => {
    if (opened) {
      document.body.classList.add("stop-scrolling");
    } else {
      document.body.classList.remove("stop-scrolling");
    }
  }, [opened]);

  return (
    <>
      <div className="md:hidden block">
        <div
          className={classNames(
            "tham tham-e-squeeze tham-w-6 absolute right-6 top-[25px] z-40",
            {
              "tham-active": opened,
            }
          )}
          onClick={toggleMenu}
        >
          <div className="tham-box">
            <div
              className={cn("tham-inner", opened ? "bg-white" : "bg-white")}
            />
          </div>
        </div>
        {opened && (
          <>
            <div className="fixed top-0 h-screen w-screen bg-black/40 transition-all z-40"></div>
            <div className="fixed right-0 top-0 w-screen md:w-1/3 h-screen bg-night transition-all px-[48px] pt-[120px] font-sans flex flex-col">
              <NavbarMenuItems scrollToTop={scrollToTop} toggleMenu={toggleMenu} />
            </div>
          </>
        )}
      </div>
      <div className="hidden md:flex gap-8">
        <NavbarMenuItems scrollToTop={scrollToTop} toggleMenu={toggleMenu} />
      </div>
    </>
  );
};

export default NavbarMenu;
