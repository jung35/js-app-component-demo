// @flow
import ReactDOM from "react-dom";
import React from "react";

import { LevelCreditProvider } from "@levelcredit/js-react-levelcredit";
import ScoreAPIDemo from "./ScoreAPI";

function App() {
  return (
    <div id="App">
      <LevelCreditProvider api_url="https://ba9b8322-f77f-4a31-b1e8-0516ca73d542.mock.pstmn.io">
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
