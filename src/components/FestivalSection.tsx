import Container from "./Container";
import smallFeatherImg from "../assets/small_gold_feather.jpg";

const FestivalSection = () => {
  return (
    <Container
      className="hidden flex flex-col pt-[80px] pb-[120px] bg-silver text-night"
      id="festival"
    >
      <div className="mb-[60px] leading-none">
        <h2 className="relative text-[54px] font-light">
          The Festival
          <div className="absolute left-[208px] top-[10.5px] w-[4px] h-[4px] rounded-full bg-fire-red"></div>
        </h2>
        <p className="text-[31px] font-bold font-adelphi">
          12<sup>th</sup>-14<sup>th</sup> June, 20
          <span className="text-fire-red font-bold">26</span>
        </p>
      </div>
      <div className="mx-auto ">
        <p className="text-[44px] leading-loose relative">
          <img
            src={smallFeatherImg}
            alt=""
            className="absolute w-[100px] h-[100px] right-[32px] -top-[16px]"
          />
          <img
            src={smallFeatherImg}
            alt=""
            className="absolute w-[100px] h-[100px] right-[238px] top-[84px]"
          />
          <img
            src={smallFeatherImg}
            alt=""
            className="absolute w-[100px] h-[100px] right-[32px] top-[170px]"
          />
          <img
            src={smallFeatherImg}
            alt=""
            className="absolute w-[100px] h-[100px] right-[169px] top-[262px]"
          />
          <img
            src={smallFeatherImg}
            alt=""
            className="absolute w-[100px] h-[100px] -right-[100px] -bottom-[10px]"
          />
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
          <a
            href="https://vereybooks.co.uk/"
            target="_blank"
            className="hover:text-fire-red"
          >
            <span className="text-jonquil">Verey Books</span>
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
