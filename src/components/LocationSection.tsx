import Container from "./Container";
import mapImg from "../assets/map.png";

const LocationSection = () => {
  return (
    <Container
      className="px-[80px] py-[40px] h-[800px] bg-map-grey relative"
      id="location"
    >
      <div className="absolute top-0 left-0 bg-map-grey w-[470px] h-full z-10"></div>
      <div className="z-20 relative w-fit">
        <h2 className="text-[44px] text-white font-bold mb-[60px] leading-none">
          Location &<br /> Links
        </h2>
        <div className="flex flex-col gap-[30px]">
          <div className="flex flex-col gap-[10px]">
            <h3 className="text-[32px] font-light font-adelphi">
              Closest Train Stations
            </h3>
            <ul className="leading-relaxed">
              <li>Cark-in-Cartmel · 5 minutes drive</li>
              <li>Oxenholme · 30 minutes</li>
              <li>Lancaster · 40 minutes</li>
            </ul>
          </div>
          <div className="flex flex-col gap-[10px]">
            <h3 className="text-[32px] font-light font-adelphi">By Car</h3>
            <ul className="leading-relaxed">
              <li>M6 J36 · 15 miles</li>
              <li>Manchester · 85 miles</li>
              <li>London · 280 miles</li>
            </ul>
          </div>
          <div className="flex flex-col gap-[10px]">
            <h3 className="text-[32px] font-light font-adelphi">By Train</h3>
            <ul className="leading-relaxed">
              <li>London-Cark · 3h45-4h15</li>
            </ul>
          </div>
        </div>
      </div>
      <img
        src={mapImg}
        alt="A partial map of cumbria, showing the local train stations and festival location"
        className="absolute right-0 top-0 h-[800px] overflow-hidden object-cover object-right"
      />
    </Container>
  );
};

export default LocationSection;
