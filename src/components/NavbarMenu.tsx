import { NavLink } from "react-router";

const NavbarMenu = () => {
  return (
    <div className="flex gap-8">
      <NavLink
        to={"/about"}
        className={({ isActive }) =>
          isActive
            ? "text-fire-red py-2 border-b-2 border-fire-red"
            : "text-white py-2 hover:text-fire-red/80"
        }
      >
        About
      </NavLink>
      <NavLink
        to={"/events"}
        className={({ isActive }) =>
          isActive
            ? "text-fire-red py-2 border-b-2 border-fire-red"
            : "text-white py-2 hover:text-fire-red/80"
        }
      >
        Events
      </NavLink>
      <NavLink
        to={"/schools"}
        className={({ isActive }) =>
          isActive
            ? "text-fire-red py-2 border-b-2 border-fire-red"
            : "text-white py-2 hover:text-fire-red/80"
        }
      >
        Schools Programme
      </NavLink>
      <NavLink
        to={"/support"}
        className={({ isActive }) =>
          isActive
            ? "text-fire-red py-2 border-b-2 border-fire-red"
            : "text-white py-2 hover:text-fire-red/80"
        }
      >
        Support Us
      </NavLink>
      <a href="#contact" className={"text-white py-2 hover:text-fire-red/80"}>
        Contact
      </a>
    </div>
  );
};

export default NavbarMenu;
