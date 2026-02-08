import Container from "../Container";
import EventsSection from "../sections/EventsSection";
import FoodVendorSection from "../sections/FoodVendorSection";
import HeroBanner from "../sections/HeroBanner";
import WhoCards from "../sections/WhoCards";

const HomePage = () => {
  return (
    <>
      <HeroBanner />

      <EventsSection />

      <FoodVendorSection />

      <Container
        className="flex flex-wrap justify-evenly py-[80px] bg-silver"
        id="who"
      >
        <WhoCards />
      </Container>
    </>
  );
};

export default HomePage;
