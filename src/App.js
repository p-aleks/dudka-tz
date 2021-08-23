import Packages from "./components/Packages";
import './index.scss';
import React from "react";

function App() {
  return (
      <main>
          <div className="side-panel">
              <div className="side-panel-logo">
                  <span>lo</span>
                  <span>go</span>
              </div>
          </div>
          <Packages />
      </main>
  );
}

export default App;
