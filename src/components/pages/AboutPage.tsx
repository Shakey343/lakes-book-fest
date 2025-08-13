import AdvisoryPanel from "../sections/AdvisoryPanel";
import CartmelSection from "../sections/CartmelSection";
import LocationSection from "../sections/LocationSection";

const AboutPage = () => {
  return (
    <div className="mt-[80px]">
      <CartmelSection />
      <LocationSection />
      <AdvisoryPanel />
    </div>
  )
}

export default AboutPage;
