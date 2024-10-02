import FeatherImg from "./assets/gold_feather.png";
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
        <Button className="border mt-7 w-fit bg-jonquil text-night">
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

        <div className="flex px-[80px] pt-[80px] pb-[120px] bg-silver text-night">
          <div>
            <h2 className="relative text-[54px] font-light">
              The Festival
              <div className="absolute right-[76.7px] -top-[5.8px] w-[5.2px] h-[5.2px] rounded-full bg-fire-red"></div>
            </h2>
            <h3 className="text-[30px] font-light leading-loose">
              12th-14th June, 20<span className="text-jonquil font-medium">26</span>
            </h3>
          </div>
        </div>

        <div></div>

        <div></div>

        <div></div>
      </main>

      <div></div>
    </div>
  );
}

export default App;
