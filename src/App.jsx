import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center text-center bg-lime-400">
        <div className="flex items-center justify-center space-x-8 mb-12">
          <a href="https://vite.dev" target="_blank">
            <img
              src={viteLogo}
              className="w-24 h-24 animate-spin"
              alt="Vite logo"
              style={{ animationDuration: "5s" }}
            />
          </a>
          <a href="https://react.dev" target="_blank">
            <img
              src={reactLogo}
              className="w-24 h-24 animate-spin"
              alt="React logo"
              style={{ animationDuration: "5s" }}
            />
          </a>
        </div>

        <h1 className="text-blue-400 text-6xl  font-bold mb-16">
          Vite + React
        </h1>
        <div className=" text-sm space-y-6 mb-8">
          <button
            onClick={() => setCount((count) => count + 1)}
            className="bg-lime-100 text-neutral py-2 px-6 rounded-lg text-lg"
          >
            angka ke piro brok {count}
          </button>
          <p className="text-white">
            kanggo edit <code>src/App.jsx</code> dan simpan dan keluar
          </p>
        </div>
        <p className="text-neutral-800">aduhai,mantep brok ya ga brok</p>
      </div>
    </>
  );
}

export default App;
