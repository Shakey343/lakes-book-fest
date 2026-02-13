import Container from "../Container";
import mapImg from "../../assets/map.png";

const LocationSection = () => {
  return (
    <Container
      className="py-[100px] sm:py-[40px] min-h-[800px] bg-map-grey relative"
      id="location"
    >
      <div className="absolute top-0 left-0 bg-map-grey sm:w-[470px] h-full z-10"></div>
      <div className="z-20 relative w-fit bg-map-grey sm:bg-none p-8 sm:px-0 mx-auto sm:mx-0">
        <h2 className="text-[44px] font-thin mb-[60px] leading-none">
          Location &<br /> Links
        </h2>
        <div className="flex flex-col gap-[30px]">
          <div className="flex flex-col gap-[10px]">
            <h3 className="text-[32px] font-bold font-adelphi">
              Closest Train Stations
            </h3>
            <ul className="leading-relaxed">
              <li>Cark-in-Cartmel · 5 minutes drive</li>
              <li>Oxenholme · 30 minutes</li>
              <li>Lancaster · 40 minutes</li>
            </ul>
          </div>
          <div className="flex flex-col gap-[10px]">
            <h3 className="text-[32px] font-bold font-adelphi">By Car</h3>
            <ul className="leading-relaxed">
              <li>M6 J36 · 15 miles</li>
              <li>Manchester · 85 miles</li>
              <li>Newcastle · 120 miles</li>
              <li>Edinburgh · 160 miles</li>
              <li>London · 280 miles</li>
            </ul>
          </div>
          <div className="flex flex-col gap-[10px]">
            <h3 className="text-[32px] font-bold font-adelphi">By Train</h3>
            <ul className="leading-relaxed">
              <li>London-Cark · 3h45-4h15</li>
            </ul>
          </div>
        </div>
      </div>
      <img
        src={mapImg}
        alt="A partial map of cumbria, showing the local train stations and festival location"
        className="absolute right-0 top-0 min-h-[800px] h-full overflow-hidden object-cover object-right"
      />
    </Container>
  );
};

export default LocationSection;
