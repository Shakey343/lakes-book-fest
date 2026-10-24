import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import cn from "../utils/cn";
import classNames from "classnames";
import Button from "./Button";

// Anchors match the section ids in FestivalGuideSection.tsx.
const guideLinks = [
  { to: "/guide#plan", label: "Plan your visit" },
  { to: "/guide#day", label: "On the day" },
  { to: "/guide#info", label: "Festival Information" },
  { to: "/guide#getting-here", label: "Getting here" },
  { to: "/guide#around", label: "Around Cartmel" },
  { to: "/guide#faqs", label: "FAQs" },
];

interface GuideMenuItemProps {
  scrollAndCloseMenu: () => void;
  toggleMenu: () => void;
}

const GuideMenuItem: React.FC<GuideMenuItemProps> = ({
  scrollAndCloseMenu,
  toggleMenu,
}) => {
  const [open, setOpen] = useState(false);

  const onItemClick = () => {
    document.body.classList.remove("stop-scrolling");
    setOpen(false);
    (document.activeElement as HTMLElement | null)?.blur();
    toggleMenu();
  };

  return (
    <div
      // md:py-4 / md:-my-4 stretch the hover area to the full 80px bar without
      // changing layout, so the panel (top-full) sits flush with the bar and the
      // pointer never leaves the group on its way down. No overlay on the link.
      className="group relative flex flex-wrap items-center gap-2 md:py-4 md:-my-4"
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          setOpen(false);
          (document.activeElement as HTMLElement | null)?.blur();
        }
      }}
    >
      <NavLink
        to="/guide"
        onClick={scrollAndCloseMenu}
        className={({ isActive }) =>
          isActive
            ? "text-2xl md:text-sm xl:text-base text-fire-red py-2 border-b-2 border-fire-red"
            : "text-2xl md:text-sm xl:text-base text-white py-2 hover:text-fire-red/80"
        }
      >
        Festival Guide
      </NavLink>

      <button
        type="button"
        aria-expanded={open}
        aria-label="Festival Guide sections"
        onClick={() => setOpen((prev) => !prev)}
        className="p-2 text-white hover:text-jonquil focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jonquil"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 12 12"
          className={cn(
            "h-3 w-3 transition-transform",
            open && "rotate-180",
            "md:group-hover:rotate-180 md:group-focus-within:rotate-180",
          )}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M2 4l4 4 4-4" />
        </svg>
      </button>

      <ul
        className={cn(
          "basis-full pl-4 pb-2",
          "md:absolute md:top-full md:left-0 md:z-40 md:min-w-[240px] md:basis-auto md:bg-night md:border-t-2 md:border-jonquil md:pl-0 md:py-2 md:shadow-lg",
          open
            ? "block"
            : "hidden md:group-hover:block md:group-focus-within:block",
        )}
      >
        {guideLinks.map((link) => (
          <li key={link.to}>
            <Link
              to={link.to}
              onClick={onItemClick}
              className="block py-2 text-xl md:px-5 md:text-sm xl:text-base text-white hover:text-jonquil focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jonquil"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

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

  const scrollToContact = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    document.body.classList.remove("stop-scrolling");
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
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

      <GuideMenuItem
        scrollAndCloseMenu={scrollAndCloseMenu}
        toggleMenu={toggleMenu}
      />

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
        onClick={scrollToContact}
        className="text-2xl md:text-sm xl:text-base text-white py-2 hover:text-fire-red/80"
      >
        Contact
      </a>

      <Button
        href="https://events.lakedistrictbookfestival.co.uk/checkout/new-session/store/71646/chk/202e?ref=store-widget&show_search_filter=true&show_date_filter=true&show_sort=true&show_event_filter=false"
        target="_blank"
        initialWord="Join Us"
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
