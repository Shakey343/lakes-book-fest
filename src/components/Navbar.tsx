const Navbar = () => {
  return (
    <nav className="fixed h-[440px] top-[160px] right-[40px] border border-fire-red z-40 text-silver font-aldelphi font-bold text-[20px]">
      <a href="#who" className="flex justify-end items-center w-[140px] h-[60px] group absolute top-[10px] -left-0 -translate-x-[100%]">
        <div className="hidden group-hover:block group-hover:bg-fire-red rounded-full px-3 mr-3 transition-all">Who</div>
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
        <div className="hidden group-hover:block group-hover:bg-fire-red rounded-full px-3 mr-3 transition-all">History</div>
        <div className="w-[10px] h-[10px] bg-fire-red rounded-full translate-x-[5px] group-hover:w-[20px] group-hover:h-[20px] group-hover:translate-x-[10px] transition-all"></div>
      </a>
      <a href="#schools" className="flex justify-end items-center w-[140px] h-[60px] group absolute top-[250px] -left-0 -translate-x-[100%]">
        <div className="hidden group-hover:block group-hover:bg-fire-red rounded-full px-3 mr-3 transition-all">Schools</div>
        <div className="w-[10px] h-[10px] bg-fire-red rounded-full translate-x-[5px] group-hover:w-[20px] group-hover:h-[20px] group-hover:translate-x-[10px] transition-all"></div>
      </a>
      <a href="#support" className="flex justify-end items-center w-[140px] h-[60px] group absolute top-[310px] -left-0 -translate-x-[100%]">
        <div className="hidden group-hover:block group-hover:bg-fire-red rounded-full px-3 mr-3 transition-all">Support</div>
        <div className="w-[10px] h-[10px] bg-fire-red rounded-full translate-x-[5px] group-hover:w-[20px] group-hover:h-[20px] group-hover:translate-x-[10px] transition-all"></div>
      </a>
      <a href="#contact" className="flex justify-end items-center w-[140px] h-[60px] group absolute top-[370px] -left-0 -translate-x-[100%]">
        <div className="hidden group-hover:block group-hover:bg-fire-red rounded-full px-3 mr-3 transition-all">Contact</div>
        <div className="w-[10px] h-[10px] bg-fire-red rounded-full translate-x-[5px] group-hover:w-[20px] group-hover:h-[20px] group-hover:translate-x-[10px] transition-all"></div>
      </a>
      {/* <a href="#who" className="group">
        <div className="absolute w-[10px] h-[10px] bg-fire-red rounded-full top-[50px] -left-1/2 -translate-x-2/4 group-hover:w-[20px] group-hover:h-[20px] group-hover:top-[45px] transition-all">
          <p className="absolute right-10 -top-[6px] text-white hidden group-hover:block transition-all">who</p>
        </div>
      </a>
      <a href="#festival">
        <div className="absolute w-[10px] h-[10px] bg-fire-red rounded-full top-[120px] -left-1/2 -translate-x-2/4 hover:w-[20px] hover:h-[20px] hover:top-[115px] transition-all"></div>
      </a>
      <a href="#location">
        <div className="absolute w-[10px] h-[10px] bg-fire-red rounded-full top-[190px] -left-1/2 -translate-x-2/4 hover:w-[20px] hover:h-[20px] hover:top-[185px] transition-all"></div>
      </a>
      <a href="#cartmel">
        <div className="absolute w-[10px] h-[10px] bg-fire-red rounded-full top-[260px] -left-1/2 -translate-x-2/4 hover:w-[20px] hover:h-[20px] hover:top-[255px] transition-all"></div>
      </a>
      <a href="#schools">
        <div className="absolute w-[10px] h-[10px] bg-fire-red rounded-full top-[330px] -left-1/2 -translate-x-2/4 hover:w-[20px] hover:h-[20px] hover:top-[325px] transition-all"></div>
      </a>
      <a href="support">
        <div className="absolute w-[10px] h-[10px] bg-fire-red rounded-full top-[400px] -left-1/2 -translate-x-2/4 hover:w-[20px] hover:h-[20px] hover:top-[395px] transition-all"></div>
      </a> */}
    </nav>
  );
};

export default Navbar;
