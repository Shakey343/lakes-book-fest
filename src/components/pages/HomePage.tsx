import Container from "../Container";
import FestivalSection from "../sections/FestivalSection";
import HeroBanner from "../sections/HeroBanner";
import WhoCards from "../sections/WhoCards";

const HomePage = () => {
  return (
    <>
      <HeroBanner />

      <Container
        className="flex flex-wrap justify-evenly pt-[80px] pb-[120px] bg-map-grey"
        id="who"
      >
        <WhoCards />
      </Container>

      <FestivalSection />
    </>
  );
};

export default HomePage;
