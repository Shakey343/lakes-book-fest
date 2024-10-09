import WhoCards from "./components/WhoCards";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Banner from "./components/Banner";
import FestivalSection from "./components/FestivalSection";
import LocationSection from "./components/LocationSection";
import Footer from "./components/Footer";
import CartmelSection from "./components/CartmelSection";
import SchoolsSection from "./components/SchoolsSection";
import SupportSection from "./components/SupportSection";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Banner />

        <Container
          className="flex flex-wrap justify-evenly pt-[80px] pb-[120px] bg-map-grey"
          id="who"
        >
          <WhoCards />
        </Container>

        <FestivalSection />

        <LocationSection />

        <CartmelSection />

        <SchoolsSection />

        <SupportSection />
      </main>

      <Footer />
    </>
  );
}

export default App;
