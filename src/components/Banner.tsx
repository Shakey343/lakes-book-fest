import Button from "./Button";
import Container from "./Container";
import FeatherImg from "../assets/gold_feather.png";

const Banner = () => {
  return (
    <Container className="flex flex-col justify-evenly py-[160px] relative bg-night text-white">
      <h1 className="text-[80px] lg:text-[98px] z-10">
        The Lake District
        <br /> Book Festival
      </h1>
      <p className="quote my-8 leading-none text-silver z-10 text-[28px] sm:text-[36px]">
        Bringing the world to the Lakes
        <br /> & the Lakes to the world
      </p>
      <Button
        className="mt-7 w-fit bg-jonquil text-night hover:bg-night self-center sm:self-auto"
        href="mailto:festivalproducer@lakedistrictbookfestival.co.uk"
        initialWord="Questions?"
        hoverWord="Email us"
      />
      <img
        src={FeatherImg}
        alt=""
        className="absolute top-[120px] right-0 lg:right-[100px] w-[300px] md:w-[400px] lg:w-[500px]"
      />
    </Container>
  );
};

export default Banner;
