import Container from "../Container";
import FoundingMessage from "../FoundingMessage";
import AdvisoryPanel from "../sections/AdvisoryPanel";
import EventsSection from "../sections/EventsSection";
// import FoodVendorSection from "../sections/FoodVendorSection";
import HeroBanner from "../sections/HeroBanner";
import WhoCards from "../sections/WhoCards";

const HomePage = () => {
  return (
    <>
      <HeroBanner />

      <EventsSection />

      {/* <FoodVendorSection /> */}

      <Container
        className="relative z-10 flex flex-wrap justify-evenly gap-y-[60px] pt-[80px] pb-[120px] bg-silver"
        id="who"
      >
        <WhoCards />
      </Container>

      <AdvisoryPanel />

      <FoundingMessage />
    </>
  );
};

export default HomePage;
