import FeatherImg from "./assets/gold_feather.png";
import mapImg from "./assets/map.png";
import cartmelImg from "./assets/cartmel_priory.png";
import bookImg from "./assets/school_book.png";
import Button from "./components/Button";
import WhoCards from "./components/WhoCards";
import Navbar from "./components/Navbar";
import Subscribe from "./components/Subscribe";

function App() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-evenly py-[160px] px-[80px] relative bg-night text-white">
        <h1 className="text-[98px] z-10">
          The Lake District
          <br /> Book Festival
        </h1>
        <p className="quote my-8 leading-none text-silver z-10">
          Bringing the world to the Lakes
          <br /> & the Lakes to the world
        </p>
        <Button
          className="mt-7 w-fit bg-jonquil text-night hover:bg-night"
          href="mailto:festivalproducer@lakedistrictbookfestival.co.uk"
          initialWord="Questions?"
          hoverWord="Email us"
        />
        <img
          src={FeatherImg}
          alt=""
          className="absolute top-[120px] right-[100px] w-[500px]"
        />
      </div>

      <main>
        <div
          className="flex justify-evenly px-[80px] pt-[80px] pb-[120px] bg-map-grey"
          id="who"
        >
          <WhoCards />
        </div>

        <div
          className="flex flex-col px-[80px] pt-[80px] pb-[120px] bg-silver text-night"
          id="festival"
        >
          <div className="mb-[60px] leading-none">
            <h2 className="relative text-[54px] font-light">
              The Festival
              <div className="absolute left-[208px] top-[10.5px] w-[4px] h-[4px] rounded-full bg-fire-red"></div>
            </h2>
            <p className="text-[31px] font-bold font-adelphi">
              12<sup>th</sup>-14<sup>th</sup> June, 20
              <span className="text-fire-red font-bold">26</span>
            </p>
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

        <div
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
        </div>

        <div
          className="px-[80px] py-[40px] h-[580px] relative overflow-hidden"
          id="cartmel"
        >
          <div className="flex flex-col gap-[40px]">
            <h2 className="text-[44px] font-light">About Cartmel</h2>
            <p className="quote">A thimble full of diamonds</p>
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

        <div
          className="p-[80px] pb-[120px] bg-map-grey relative flex flex-col gap-[60px]"
          id="schools"
        >
          <h2 className="text-white font-light text-[44px]">
            The Schools Programme
          </h2>
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

        <div
          className="bg-grey flex flex-col items-center gap-[100px] px-[80px] py-[160px]"
          id="support"
        >
          <h2 className="text-[88px] font-light text-silver">Support <span className="text-fire-red font-bold">us</span></h2>
          <div className="flex flex-col gap-[80px] w-full">
            <div className="flex justify-between w-full px-[176px]">
              <a
                className="flex flex-col items-center justify-center gap-[8px] h-[360px] w-[360px] rounded-full bg-light-grey border-2 border-jonquil group hover:border-8 transition-all relative"
                href="/downloadable_patron_and_sponsorship_information.pdf"
                download
              >
                <p className="text-[24px] group-hover:text-[22px] transition-all">
                  Become a
                </p>
                <p className="font-semibold text-[48px] group-hover:text-[50px] transition-all text-center">
                  founding patron
                </p>
                <div className="flex flex-col items-center justify-center gap-[10px] absolute rounded-full -left-[150px] -top-[100px] bg-jonquil h-[240px] w-[240px]">
                  <p className="text-center text-[32px] font-semibold">
                    3-year subscription
                  </p>
                  <p className="text-center">£1500 p.a. per couple</p>
                </div>
              </a>
              <a
                className="flex flex-col items-center justify-center gap-[8px] h-[360px] w-[360px] rounded-full bg-light-grey border-2 border-night group hover:border-8 transition-all"
                href="/downloadable_patron_and_sponsorship_information.pdf"
                download
              >
                <p className="text-[24px] group-hover:text-[22px] transition-all">
                  Become a
                </p>
                <p className="font-semibold text-[48px] group-hover:text-[50px] transition-all text-center">
                  business sponsor
                </p>
              </a>
            </div>
            <div className="flex flex-col justify-center gap-[30px] w-full">
              <div className="flex justify-evenly px-[80px] w-full">
                <div className="flex flex-col items-center justify-center gap-[10px]">
                  <h3 className="font-bold text-[40px] tracking-tight text-black-olive">
                    PRIORITY
                  </h3>
                  <p className="text-silver text-[32px] font-light">booking</p>
                </div>
                <div className="h-[84px] border border-silver"></div>
                <div className="flex flex-col items-center justify-center gap-[10px]">
                  <h3 className="font-bold text-[40px] tracking-tight text-black-olive">
                    FREE
                  </h3>
                  <p className="text-silver text-[32px] font-light">tickets</p>
                </div>
                <div className="h-[84px] border border-silver"></div>
                <div className="flex flex-col items-center justify-center gap-[10px]">
                  <h3 className="font-bold text-[40px] tracking-tight text-black-olive">
                    PRIORITY
                  </h3>
                  <p className="text-silver text-[32px] font-light">parking</p>
                </div>
              </div>
              <div className="flex justify-evenly px-[260px] w-full">
                <div className="flex flex-col items-center justify-center gap-[10px]">
                  <h3 className="font-bold text-[40px] tracking-tight text-black-olive">
                    GREEN ROOM
                  </h3>
                  <p className="text-silver text-[32px] font-light">entry</p>
                </div>
                <div className="h-[84px] border border-silver"></div>
                <div className="flex flex-col items-center justify-center gap-[10px]">
                  <h3 className="font-bold text-[40px] tracking-tight text-black-olive">
                    CORPORATE
                  </h3>
                  <p className="text-silver text-[32px] font-light">
                    hospitality
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Button
            className="w-fit bg-jonquil text-night hover:bg-grey"
            href="mailto:festivalproducer@lakedistrictbookfestival.co.uk"
            initialWord="Questions?"
            hoverWord="Email us"
          />
        </div>
      </main>

      <div
        className="px-[80px] py-[32px] bg-night/80 flex justify-between h-[300px]"
        id="contact"
      >
        <div className="text-jonquil w-1/3">
          <h2 className="text-[32px] font-light mb-[20px]">Contact us</h2>
          <p className="leading-relaxed">
            The Lake District Book Festival
            <br />
            Kelleth Old Hall
            <br />
            Penrith
            <br />
            CA10 3UG
          </p>
        </div>
        <div className="flex flex-col justify-end gap-[6px] items-center text-white w-1/3">
          <p className="font-light text-silver">
            ©️ 2024 The Lake District Book Festival.
          </p>
          <p>
            Made with ❤️ by{" "}
            <a
              href="https://github.com/Shakey343"
              target="_blank"
              className="font-medium hover:text-jonquil transition-all"
            >
              Jake Pople
            </a>
          </p>
        </div>
        <div className="text-jonquil w-1/3 flex flex-col items-end">
          <Subscribe />
        </div>
      </div>
    </div>
  );
}

export default App;
