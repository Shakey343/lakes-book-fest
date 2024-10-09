import bookImg from "../assets/school_book.png";

const SchoolsSection = () => {
  return (
    <div
      className="p-[80px] pb-[120px] bg-map-grey relative flex flex-col gap-[60px]"
      id="schools"
    >
      <h2 className="text-white font-light text-[44px]">
        The Schools Programme
      </h2>
      <div className="text-[28px] leading-loose tracking-wide">
        <p>
          <span className="text-silver">Bringing authors to schools</span> in
          Cartmel & surrounding area
        </p>
        <p>
          Bringing schools <span className="text-silver">to the festival</span>
        </p>
        <p>
          <span className="text-silver">Shining a light on</span> the decline in
          the teaching of the Humanities
        </p>
        <p>
          Helping to address{" "}
          <span className="text-silver">local educational deprivation</span>
        </p>
      </div>
      <img
        src={bookImg}
        alt=""
        className="h-[450px] absolute right-[80px] top-[22px]"
      />
    </div>
  );
};

export default SchoolsSection;
