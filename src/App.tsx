import FeatherImg from "./assets/gold_feather.png";
import mapImg from "./assets/map.png";
import cartmelImg from "./assets/cartmel_priory.png";
import bookImg from "./assets/school_book.png";
import Button from "./components/Button";
import WhoCards from "./components/WhoCards";

function App() {
  return (
    <div>
      <div className="flex flex-col justify-evenly py-[160px] px-[80px] relative bg-night text-white">
        <h1 className="text-[98px] z-10">
          The Lake District
          <br /> Book Festival
        </h1>
        <h2 className="quote my-8 leading-none text-silver z-10">
          Bringing the world to the Lakes
          <br /> & the Lakes to the world
        </h2>
        <Button className="mt-7 w-fit bg-jonquil text-night">
          Support Us
        </Button>
        <img
          src={FeatherImg}
          alt=""
          className="absolute top-[120px] right-[100px] w-[500px]"
        />
      </div>

      <main>
        <div className="flex justify-evenly px-[80px] pt-[80px] pb-[120px] bg-map-grey">
          <WhoCards />
        </div>

        <div className="flex flex-col px-[80px] pt-[80px] pb-[120px] bg-silver text-night">
          <div className="w-fit mb-[60px] leading-none">
            <h2 className="relative text-[54px] font-light">
              The Festival
              <div className="absolute right-[76.7px] top-[7px] w-[5.2px] h-[5.2px] rounded-full bg-fire-red"></div>
            </h2>
            <h3 className="text-[30px] font-light">
              12th-14th June, 20
              <span className="text-jonquil font-medium">26</span>
            </h3>
          </div>
          <div className="mx-auto">
            <p className="text-[44px] leading-loose">
              <span className="text-jonquil">Opening drinks party</span> in
              Cartmel Priory
              <br />
              Local, national &{" "}
              <span className="text-jonquil">world voices</span>
              <br />
              <span className="text-jonquil">High-level</span> panels,
              interviews & debates
              <br />
              Festival bookshop -{" "}
              <span className="text-jonquil">Verey Books</span>
              <br />
              <span className="text-jonquil">Delicious food & drink</span> from
              across the county
            </p>
          </div>
        </div>

        <div className="px-[80px] py-[40px] h-[800px] bg-map-grey relative">
          <div className="absolute top-0 left-0 bg-map-grey w-[470px] h-full z-10"></div>
          <div className="z-20 relative w-fit">
            <h2 className="text-[44px] text-white font-light mb-[40px]">
              Location &<br /> Links
            </h2>
            <div className="flex flex-col gap-[30px]">
              <div className="flex flex-col gap-[10px]">
                <h3 className="text-[32px] font-light">
                  Closest Train Stations
                </h3>
                <ul className="leading-relaxed">
                  <li>Cark in Cartmel - 5 minutes drive</li>
                  <li>Oxenholme - 30 minutes</li>
                  <li>Lancaster - 40 minutes</li>
                </ul>
              </div>
              <div className="flex flex-col gap-[10px]">
                <h3 className="text-[32px] font-light">By Car</h3>
                <ul className="leading-relaxed">
                  <li>Cark in Cartmel - 5 minutes drive</li>
                  <li>Oxenholme - 30 minutes</li>
                  <li>Lancaster - 40 minutes</li>
                </ul>
              </div>
              <div className="flex flex-col gap-[10px]">
                <h3 className="text-[32px] font-light">By Train</h3>
                <ul className="leading-relaxed">
                  <li>Cark in Cartmel - 5 minutes drive</li>
                  <li>Oxenholme - 30 minutes</li>
                  <li>Lancaster - 40 minutes</li>
                </ul>
              </div>
            </div>
          </div>
          <img
            src={mapImg}
            alt="A partial map of cumbria, showing the local train stations and festival location"
            className="absolute right-0 top-0 h-[800px] overflow-hidden object-cover object-right"
          />
        </div>

        <div className="px-[80px] py-[40px] h-[580px] relative overflow-hidden">
          <div className="flex flex-col gap-[40px]">
            <h2 className="text-[44px] font-light">About Cartmel</h2>
            <h3 className="quote">A thimble full of diamonds</h3>
            <ul className="py-[60px] list-disc list-inside marker:text-fire-red">
              <li>Cartmel Priory (est. 1189)</li>
              <li>A host of pubs, cafés and artisanal food shops</li>
              <li>
                L'Enclume (Michelin 3-star restaurant, Head Chef Simon Rogan)
              </li>
              <li>Cartmel Sticky Toffee Pudding</li>
            </ul>
          </div>
          <img
            src={cartmelImg}
            alt=""
            className="absolute right-[80px] -top-[51px] h-[800px] object-cover"
          />
        </div>

        <div className="p-[80px] pb-[120px] bg-map-grey relative flex flex-col gap-[60px]">
          <h3 className="text-white font-light text-[44px]">
            The Schools Programme
          </h3>
          <div className="text-[28px] leading-loose tracking-wide">
            <p>
              <span className="text-silver">Bringing authors to schools</span>{" "}
              in Cartmel & surrounding area
            </p>
            <p>
              Bringing schools{" "}
              <span className="text-silver">to the festival</span>
            </p>
            <p>
              <span className="text-silver">Shining a light on</span> the
              decline in the teaching of the Humanities
            </p>
            <p>
              Helping to address{" "}
              <span className="text-silver">local educational deprivation</span>
            </p>
          </div>
          <img
            src={bookImg}
            alt=""
            className="h-[450px] absolute right-[80px] top-[22px]"
          />
        </div>

        <div className="bg-grey flex flex-col items-center gap-[100px] px-[80px] py-[160px]">
          <h2 className="text-[88px] font-light text-silver">Support us</h2>
          <div className="flex flex-col gap-[80px] w-full">
            <div className="flex justify-between w-full px-[176px]">
              <a className="flex flex-col items-center justify-center gap-[8px] h-[360px] w-[360px] rounded-full bg-light-grey border-2 border-jonquil group hover:border-8 transition-all" href="#">
                <p className="text-[24px] group-hover:text-[22px] transition-all">Become a</p>
                <p className="font-semibold text-[48px] group-hover:text-[50px] transition-all text-center">
                  founding patron
                </p>
              </a>
              <a className="flex flex-col items-center justify-center gap-[8px] h-[360px] w-[360px] rounded-full bg-light-grey border-2 border-night group hover:border-8 transition-all" href="#">
                <p className="text-[24px] group-hover:text-[22px] transition-all">Become a</p>
                <p className="font-semibold text-[48px] group-hover:text-[50px] transition-all text-center">
                  business sponsor
                </p>
              </a>
            </div>
            <div className="flex flex-col justify-center gap-[30px] w-full">
              <div className="flex justify-evenly px-[80px] w-full">
                <div className="flex flex-col items-center justify-center gap-[10px]">
                  <h3 className="font-bold text-[40px] tracking-tight text-black-olive">PRIORITY</h3>
                  <p>booking</p>
                </div>
                <div className="h-[84px] border border-silver"></div>
                <div className="flex flex-col items-center justify-center gap-[10px]">
                  <h3 className="font-bold text-[40px] tracking-tight text-black-olive">FREE</h3>
                  <p>tickets</p>
                </div>
                <div className="h-[84px] border border-silver"></div>
                <div className="flex flex-col items-center justify-center gap-[10px]">
                  <h3 className="font-bold text-[40px] tracking-tight text-black-olive">PRIORITY</h3>
                  <p>parking</p>
                </div>
              </div>
              <div className="flex justify-evenly px-[260px] w-full">
                <div className="flex flex-col items-center justify-center gap-[10px]">
                  <h3 className="font-bold text-[40px] tracking-tight text-black-olive">GREEN ROOM</h3>
                  <p>entry</p>
                </div>
                <div className="h-[84px] border border-silver"></div>
                <div className="flex flex-col items-center justify-center gap-[10px]">
                  <h3 className="font-bold text-[40px] tracking-tight text-black-olive">CORPORATE</h3>
                  <p>hospitality</p>
                </div>
              </div>
            </div>
          </div>
          <Button className="w-fit bg-jonquil text-night">
            More details
          </Button>
        </div>
      </main>

      <div></div>
    </div>
  );
}

export default App;
