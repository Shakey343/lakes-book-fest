// const OldNavbar = () => {
//   return (
//     <nav className="hidden lg:block fixed h-[500px] top-[100px] right-[40px] border-[.5px] border-fire-red z-40 text-silver font-adelphi font-bold text-[20px]">
//       <a href="#who" className="flex justify-end items-center w-[140px] h-[60px] group absolute top-[10px] -left-0 -translate-x-[100%]">
//         <div className="hidden group-hover:block group-hover:bg-fire-red rounded-full px-3 mr-3 transition-all">Us</div>
//         <div className="w-[10px] h-[10px] bg-fire-red rounded-full translate-x-[5px] group-hover:w-[20px] group-hover:h-[20px] group-hover:translate-x-[10px] transition-all"></div>
//       </a>
//       <a href="#festival" className="flex justify-end items-center w-[140px] h-[60px] group absolute top-[70px] -left-0 -translate-x-[100%]">
//         <div className="hidden group-hover:block group-hover:bg-fire-red rounded-full px-3 mr-3 transition-all">Festival</div>
//         <div className="w-[10px] h-[10px] bg-fire-red rounded-full translate-x-[5px] group-hover:w-[20px] group-hover:h-[20px] group-hover:translate-x-[10px] transition-all"></div>
//       </a>
//       <a href="#location" className="flex justify-end items-center w-[140px] h-[60px] group absolute top-[130px] -left-0 -translate-x-[100%]">
//         <div className="hidden group-hover:block group-hover:bg-fire-red rounded-full px-3 mr-3 transition-all">Location</div>
//         <div className="w-[10px] h-[10px] bg-fire-red rounded-full translate-x-[5px] group-hover:w-[20px] group-hover:h-[20px] group-hover:translate-x-[10px] transition-all"></div>
//       </a>
//       <a href="#cartmel" className="flex justify-end items-center w-[140px] h-[60px] group absolute top-[190px] -left-0 -translate-x-[100%]">
//         <div className="hidden group-hover:block group-hover:bg-fire-red rounded-full px-3 mr-3 transition-all">Cartmel</div>
//         <div className="w-[10px] h-[10px] bg-fire-red rounded-full translate-x-[5px] group-hover:w-[20px] group-hover:h-[20px] group-hover:translate-x-[10px] transition-all"></div>
//       </a>
//       <a href="#schools" className="flex justify-end items-center w-[140px] h-[60px] group absolute top-[250px] -left-0 -translate-x-[100%]">
//         <div className="hidden group-hover:block group-hover:bg-fire-red rounded-full px-3 mr-3 transition-all">Schools</div>
//         <div className="w-[10px] h-[10px] bg-fire-red rounded-full translate-x-[5px] group-hover:w-[20px] group-hover:h-[20px] group-hover:translate-x-[10px] transition-all"></div>
//       </a>
//       <a href="#support" className="flex justify-end items-center w-[140px] h-[60px] group absolute top-[310px] -left-0 -translate-x-[100%]">
//         <div className="hidden group-hover:block group-hover:bg-fire-red rounded-full px-3 mr-3 transition-all">Invest</div>
//         <div className="w-[10px] h-[10px] bg-fire-red rounded-full translate-x-[5px] group-hover:w-[20px] group-hover:h-[20px] group-hover:translate-x-[10px] transition-all"></div>
//       </a>
//       <a href="#otherWho" className="flex justify-end items-center w-[140px] h-[60px] group absolute top-[370px] -left-0 -translate-x-[100%]">
//         <div className="hidden group-hover:block group-hover:bg-fire-red rounded-full px-3 mr-3 transition-all">Advisors</div>
//         <div className="w-[10px] h-[10px] bg-fire-red rounded-full translate-x-[5px] group-hover:w-[20px] group-hover:h-[20px] group-hover:translate-x-[10px] transition-all"></div>
//       </a>
//       <a href="#contact" className="flex justify-end items-center w-[140px] h-[60px] group absolute top-[430px] -left-0 -translate-x-[100%]">
//         <div className="hidden group-hover:block group-hover:bg-fire-red rounded-full px-3 mr-3 transition-all">Contact</div>
//         <div className="w-[10px] h-[10px] bg-fire-red rounded-full translate-x-[5px] group-hover:w-[20px] group-hover:h-[20px] group-hover:translate-x-[10px] transition-all"></div>
//       </a>
//     </nav>
//   );
// };

import { NavLink } from "react-router";
import Container from "./Container";
import FeatherImg from "../assets/gold_feather.png";
import NavbarMenu from "./NavbarMenu";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full h-[80px] flex flex-col justify-center bg-night z-50">
      <Container className="flex justify-between items-center relative">
        <NavLink to={"/"} className="py-2">
          <div className="flex gap-2">
            <img src={FeatherImg} alt="" className="w-[50px]" />
            <span className="z-10 text-white">
              The Lake District
              <br /> Book Festival
            </span>
          </div>
        </NavLink>
        <NavbarMenu />
      </Container>
    </nav>
  );
};

export default Navbar;
