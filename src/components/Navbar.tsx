const Navbar = () => {
  return (
    <nav className="fixed h-[440px] top-[160px] right-[40px] border border-fire-red z-40 text-silver font-aldelphi font-bold text-[20px]">
      <a href="#who" className="flex justify-end items-center w-[140px] h-[60px] group absolute top-[10px] -left-0 -translate-x-[100%]">
        <div className="hidden group-hover:block group-hover:bg-fire-red rounded-full px-3 mr-3 transition-all">Us</div>
        <div className="w-[10px] h-[10px] bg-fire-red rounded-full translate-x-[5px] group-hover:w-[20px] group-hover:h-[20px] group-hover:translate-x-[10px] transition-all"></div>
      </a>
      <a href="#festival" className="flex justify-end items-center w-[140px] h-[60px] group absolute top-[70px] -left-0 -translate-x-[100%]">
        <div className="hidden group-hover:block group-hover:bg-fire-red rounded-full px-3 mr-3 transition-all">Festival</div>
        <div className="w-[10px] h-[10px] bg-fire-red rounded-full translate-x-[5px] group-hover:w-[20px] group-hover:h-[20px] group-hover:translate-x-[10px] transition-all"></div>
      </a>
      <a href="#location" className="flex justify-end items-center w-[140px] h-[60px] group absolute top-[130px] -left-0 -translate-x-[100%]">
        <div className="hidden group-hover:block group-hover:bg-fire-red rounded-full px-3 mr-3 transition-all">Location</div>
        <div className="w-[10px] h-[10px] bg-fire-red rounded-full translate-x-[5px] group-hover:w-[20px] group-hover:h-[20px] group-hover:translate-x-[10px] transition-all"></div>
      </a>
      <a href="#cartmel" className="flex justify-end items-center w-[140px] h-[60px] group absolute top-[190px] -left-0 -translate-x-[100%]">
        <div className="hidden group-hover:block group-hover:bg-fire-red rounded-full px-3 mr-3 transition-all">Cartmel</div>
        <div className="w-[10px] h-[10px] bg-fire-red rounded-full translate-x-[5px] group-hover:w-[20px] group-hover:h-[20px] group-hover:translate-x-[10px] transition-all"></div>
      </a>
      <a href="#schools" className="flex justify-end items-center w-[140px] h-[60px] group absolute top-[250px] -left-0 -translate-x-[100%]">
        <div className="hidden group-hover:block group-hover:bg-fire-red rounded-full px-3 mr-3 transition-all">Schools</div>
        <div className="w-[10px] h-[10px] bg-fire-red rounded-full translate-x-[5px] group-hover:w-[20px] group-hover:h-[20px] group-hover:translate-x-[10px] transition-all"></div>
      </a>
      <a href="#support" className="flex justify-end items-center w-[140px] h-[60px] group absolute top-[310px] -left-0 -translate-x-[100%]">
        <div className="hidden group-hover:block group-hover:bg-fire-red rounded-full px-3 mr-3 transition-all">Invest</div>
        <div className="w-[10px] h-[10px] bg-fire-red rounded-full translate-x-[5px] group-hover:w-[20px] group-hover:h-[20px] group-hover:translate-x-[10px] transition-all"></div>
      </a>
      <a href="#contact" className="flex justify-end items-center w-[140px] h-[60px] group absolute top-[370px] -left-0 -translate-x-[100%]">
        <div className="hidden group-hover:block group-hover:bg-fire-red rounded-full px-3 mr-3 transition-all">Contact</div>
        <div className="w-[10px] h-[10px] bg-fire-red rounded-full translate-x-[5px] group-hover:w-[20px] group-hover:h-[20px] group-hover:translate-x-[10px] transition-all"></div>
      </a>
    </nav>
  );
};

export default Navbar;
