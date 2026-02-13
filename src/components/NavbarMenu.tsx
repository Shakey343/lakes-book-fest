import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import cn from "../utils/cn";
import classNames from "classnames";
import Button from "./Button";

interface NavbarMenuItemsProps {
  scrollToTop?: () => void;
  toggleMenu: () => void;
}

const NavbarMenuItems: React.FC<NavbarMenuItemsProps> = ({
  scrollToTop,
  toggleMenu,
}) => {
  const scrollAndCloseMenu = () => {
    scrollToTop?.();
    toggleMenu();
  };

  return (
    <>
      <NavLink
        to="/"
        onClick={scrollAndCloseMenu}
        className={({ isActive }) =>
          isActive
            ? "text-2xl md:text-sm xl:text-base block md:hidden text-fire-red py-2 border-b-2 border-fire-red"
            : "text-2xl md:text-sm xl:text-base block md:hidden text-white py-2 hover:text-fire-red/80"
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/guide"
        onClick={scrollAndCloseMenu}
        className={({ isActive }) =>
          isActive
            ? "text-2xl md:text-sm xl:text-base text-fire-red py-2 border-b-2 border-fire-red"
            : "text-2xl md:text-sm xl:text-base text-white py-2 hover:text-fire-red/80"
        }
      >
        Local Guide
      </NavLink>

      <NavLink
        to="/schools"
        onClick={scrollAndCloseMenu}
        className={({ isActive }) =>
          isActive
            ? "text-2xl md:text-sm xl:text-base text-fire-red py-2 border-b-2 border-fire-red"
            : "text-2xl md:text-sm xl:text-base text-white py-2 hover:text-fire-red/80"
        }
      >
        Schools Programme
      </NavLink>

      <NavLink
        to="/support"
        onClick={scrollAndCloseMenu}
        className={({ isActive }) =>
          isActive
            ? "text-2xl md:text-sm xl:text-base text-fire-red py-2 border-b-2 border-fire-red"
            : "text-2xl md:text-sm xl:text-base text-white py-2 hover:text-fire-red/80"
        }
      >
        Support Us
      </NavLink>

      <a
        href="#contact"
        onClick={toggleMenu}
        className="text-2xl md:text-sm xl:text-base text-white py-2 hover:text-fire-red/80"
      >
        Contact
      </a>

      <Button
        href="https://events.lakedistrictbookfestival.co.uk/"
        target="_blank"
        initialWord="Buy tickets"
        hoverWord="Click here"
        className="w-fit mt-16 md:mt-0 bg-jonquil md:text-sm xl:text-base text-night hover:bg-night self-center sm:self-auto py-2 px-6"
      />
    </>
  );
};

interface NavbarMenuProps {
  scrollToTop?: () => void;
}

const NavbarMenu: React.FC<NavbarMenuProps> = ({ scrollToTop }) => {
  const [opened, setOpened] = useState(false);

  const toggleMenu = () => setOpened((prev) => !prev);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    if (opened && isMobile) {
      document.body.classList.add("stop-scrolling");
    } else {
      document.body.classList.remove("stop-scrolling");
    }

    return () => {
      document.body.classList.remove("stop-scrolling");
    };
  }, [opened]);

  return (
    <>
      {/* Mobile */}
      <div className="md:hidden block">
        <div
          className={classNames(
            "tham tham-e-squeeze tham-w-6 fixed z-50 right-6 top-[32.5px]",
            { "tham-active": opened },
          )}
          onClick={toggleMenu}
        >
          <div className="tham-box">
            <div className={cn("tham-inner", "bg-white")} />
          </div>
        </div>

        {opened && (
          <>
            {/* <div className="fixed inset-0 bg-black/40 z-40" /> */}
            <div className="fixed right-0 top-0 w-screen h-screen bg-night z-30 px-[48px] pt-[120px] flex flex-col">
              <NavbarMenuItems
                scrollToTop={scrollToTop}
                toggleMenu={toggleMenu}
              />
            </div>
          </>
        )}
      </div>

      {/* Desktop */}
      <div className="hidden md:flex gap-8">
        <NavbarMenuItems scrollToTop={scrollToTop} toggleMenu={toggleMenu} />
      </div>
    </>
  );
};

export default NavbarMenu;
