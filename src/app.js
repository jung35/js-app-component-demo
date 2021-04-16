// @flow
import ReactDOM from "react-dom";
import React from "react";

import { LevelCreditProvider } from "@levelcredit/js-react-levelcredit";
import ScoreAPIDemo from "./ScoreAPI";

const LC_ENV = process.env.LC_ENV || undefined;
const LC_API_URL = process.env.LC_API_URL || undefined;

function App() {
  return (
    <div id="App">
      <LevelCreditProvider env={LC_ENV} api_url={LC_API_URL}>
        <div className="AppChart" style={{ maxWidth: 700, margin: "auto" }}>
          <ScoreAPIDemo />
        </div>
      </LevelCreditProvider>
    </div>
  );
}

const root = document.getElementById("root");

if (root) {
  ReactDOM.render(<App />, root);
}
