import React from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import RemoteApp from "remote/App";

function HostApp() {
  console.log("host app", React.useState);
  const [count, setCount] = React.useState(0);

  return (
    <React.Suspense fallback="Loading App...">
      <div className="App">
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite (Host)</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>

        <RemoteApp />
      </div>
    </React.Suspense>
  );
}

export default HostApp;
