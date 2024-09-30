// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import "./App.css";
import WhoCards from "./components/WhoCards";

function App() {
  return (
    <div>
      <div className="flex flex-col justify-evenly py-[160px] px-[80px] relative bg-night text-white">
        <h1 className="text-[98px]">
          The Lake District
          <br /> Book Festival
        </h1>
        <h2 className="quote my-8 leading-none text-silver">
          Bringing the world to the Lakes
          <br /> & the Lakes to the world
        </h2>
        <button className="border mt-7">Support Us</button>
        <img src="" alt="" className="absolute" />
      </div>

      <main>
        <div className="flex">
          <WhoCards />
        </div>

        <div></div>

        <div></div>

        <div></div>

        <div></div>
      </main>

      <div></div>
    </div>
  );
}

export default App;
