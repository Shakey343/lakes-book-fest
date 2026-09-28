import Container from "../Container";
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

      <Container className="relative z-10 flex flex-wrap justify-evenly bg-silver" id="who">
        <WhoCards />
      </Container>
    </>
  );
};

export default HomePage;
