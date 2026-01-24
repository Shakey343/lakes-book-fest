import bookImg from "../../assets/school_book.png";
import Container from "../Container";

const SchoolsSection = () => {
  return (
    <Container
      className="mt-[80px] py-[80px] pb-[120px] bg-map-grey relative flex flex-col gap-[60px] text-center sm:text-left"
      id="schools"
    >
      <h2 className="text-white font-light text-[44px] w-full sm:w-1/2 md:w-full">
        The Schools Programme
      </h2>
      <div className="md:text-[20px] lg:text-[28px] leading-loose tracking-wide w-full lg:w-2/3 xl:w-full">
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
          Partner Schools for 2026-2027 are{" "}
          <span className="text-silver">
            <a href="https://www.cartmelprioryschool.co.uk/" className="hover:opacity-80">
              Cartmel Priory CofE School
            </a>
            ,{" "}
            <a href="https://www.dallamschool.co.uk/" className="hover:opacity-80">
              Dallam School
            </a>
            , Milnthorpe &{" "}
            <a href="https://stbernardsschool.uk/" className="hover:opacity-80">
              St Bernard's Catholic High School
            </a>
            , Barrow-in-Furness
          </span>
        </p>
      </div>
      <img
        src={bookImg}
        alt=""
        className="hidden sm:block h-[250px] lg:h-[450px] absolute right-[60px] top-0 lg:right-[80px] lg:top-[22px]"
      />
    </Container>
  );
};

export default SchoolsSection;
