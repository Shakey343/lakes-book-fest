import cartmelImg from "./assets/cartmel_priory.png";
import bookImg from "./assets/school_book.png";
import downloadImg from "./assets/download.png";
import Button from "./components/Button";
import WhoCards from "./components/WhoCards";
import Navbar from "./components/Navbar";
import Subscribe from "./components/Subscribe";
import Socials from "./components/Socials";
import Container from "./components/Container";
import Banner from "./components/Banner";
import FestivalSection from "./components/FestivalSection";
import LocationSection from "./components/LocationSection";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Banner />

        <Container
          className="flex justify-evenly pt-[80px] pb-[120px] bg-map-grey"
          id="who"
        >
          <WhoCards />
        </Container>

        <FestivalSection />

        <LocationSection />

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
          className="hidden bg-grey flex flex-col items-center gap-[100px] px-[80px] py-[160px]"
          id="support"
        >
          <h2 className="text-[88px] font-light text-silver">
            Support <span className="text-fire-red font-bold">us</span>
          </h2>
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
                <img
                  className="hidden group-hover:block absolute bottom-2 w-[80px]"
                  src={downloadImg}
                  alt=""
                />
                <div className="flex flex-col items-center justify-center gap-[10px] absolute rounded-full -left-[150px] -top-[100px] bg-jonquil h-[240px] w-[240px]">
                  <p className="text-center text-[32px] font-semibold">
                    3-year subscription
                  </p>
                  <p className="text-center">£1500 p.a. per couple</p>
                </div>
              </a>
              <a
                className="flex flex-col items-center justify-center gap-[8px] h-[360px] w-[360px] rounded-full bg-light-grey border-2 border-night group hover:border-8 transition-all relative"
                href="/downloadable_patron_and_sponsorship_information.pdf"
                download
              >
                <p className="text-[24px] group-hover:text-[22px] transition-all">
                  Become a
                </p>
                <p className="font-semibold text-[48px] group-hover:text-[50px] transition-all text-center">
                  business sponsor
                </p>
                <img
                  className="hidden group-hover:block absolute bottom-2 w-[80px]"
                  src={downloadImg}
                  alt=""
                />
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
        <div className="flex flex-col justify-between gap-[6px] items-center text-white w-1/3">
          <Socials />
          <div className="text-center">
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
        </div>
        <div className="text-jonquil w-1/3 flex flex-col items-end">
          <Subscribe />
        </div>
      </div>
    </div>
  );
}

export default App;
