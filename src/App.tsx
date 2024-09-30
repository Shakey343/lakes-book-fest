// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import WhoCards from "./components/WhoCards";

function App() {
  return (
    <div>

      <div className="flex flex-col justify-evenly py-[160px] px-[80px] relative">
        <h1>The Lake District Book Festival</h1>
        <h2>Bringing the world to the Lakes & the Lakes to the world</h2>
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
