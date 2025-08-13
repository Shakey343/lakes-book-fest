import Container from "./Container";
import smallFeatherImg from "../assets/small_gold_feather.jpg";

const FestivalSection = () => {
  return (
    <Container
      className="flex flex-col pt-[80px] pb-[120px] bg-silver text-night"
      id="festival"
    >
      <div className="mb-[60px] leading-none flex flex-col items-center md:items-start">
        <h2 className="relative text-[54px] font-light">
          The Festival
          <div className="absolute left-[208px] top-[10.5px] w-[4px] h-[4px] rounded-full bg-fire-red"></div>
        </h2>
        <p className="text-[31px] font-bold font-adelphi">
          12<sup>th</sup>-14<sup>th</sup> June, 20
          <span className="text-fire-red font-bold">26</span>
        </p>
      </div>
      <div className="xl:mx-auto relative">
        <img
          src={smallFeatherImg}
          alt=""
          className="absolute hidden lg:block w-[80px] left-[656px] -top-[8px] xl:w-[100px] xl:left-[800px] xl:-top-[8px]"
        />
        <img
          src={smallFeatherImg}
          alt=""
          className="absolute hidden lg:block w-[80px] left-[494px] top-[66px] xl:w-[100px] xl:left-[600px] xl:top-[80px]"
        />
        <img
          src={smallFeatherImg}
          alt=""
          className="absolute hidden lg:block w-[80px] left-[656px] top-[136px] xl:w-[100px] xl:left-[800px] xl:top-[170px]"
        />
        <img
          src={smallFeatherImg}
          alt=""
          className="absolute hidden lg:block w-[80px] left-[534px] top-[208px] xl:w-[100px] xl:left-[654px] xl:top-[258px]"
        />
        <img
          src={smallFeatherImg}
          alt=""
          className="absolute hidden lg:block w-[80px] left-[764px] -bottom-[2px] xl:w-[100px] xl:left-[934px] xl:-bottom-[6px]"
        />
        <p className="text-center md:text-left text-[18px] lg:text-[36px] xl:text-[44px] leading-loose">
          <span className="text-jonquil">Opening drinks party</span> in{" "}
          <a
            href="https://cartmelpriory.org.uk/"
            target="_blank"
            className="hover:text-fire-red"
          >
            Cartmel Priory
          </a>
          <br />
          Local, national & <span className="text-jonquil">world voices</span>
          <br />
          <span className="text-jonquil">High-level</span> panels, interviews &
          debates
          <br />
          Festival bookshop -{" "}
          <a href="https://vereybooks.co.uk/" target="_blank">
            <span className="text-jonquil hover:text-fire-red">
              Verey Books
            </span>
          </a>
          <br />
          <span className="text-jonquil">Delicious food & drink</span> from
          across the county
        </p>
      </div>
    </Container>
  );
};

export default FestivalSection;
