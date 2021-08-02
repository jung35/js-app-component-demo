// @flow
import ReactDOM from "react-dom";
import React from "react";

import { LevelCreditProvider } from "@levelcredit/js-react-levelcredit";
import CreditAPIDemo from "./CreditAPI";
import ObligationAPIDemo from "./ObligationAPI";
import useURLParam from "./hooks/useURLParam";
import URLParamInput from "./components/URLParamInput";

const LC_ENV = process.env.LC_ENV || undefined;
const LC_API_URL = process.env.LC_API_URL || undefined;

const SID_TOKEN_PARAM = "sid";

function App() {
  const [sid, setSID] = useURLParam(SID_TOKEN_PARAM);

  return (
    <div id="App" style={{ maxWidth: 700, margin: "auto" }}>
      <URLParamInput label="User Auth Token" param_value={sid} onUpdate={setSID} />
      <hr style={{ margin: "30px 0" }} />
      <LevelCreditProvider env={LC_ENV} api_url={LC_API_URL} auth_token={sid}>
        <ObligationAPIDemo />
        <hr style={{ margin: "30px 0" }} />
        <CreditAPIDemo />
      </LevelCreditProvider>
    </div>
  );
}

const root = document.getElementById("root");

if (root) {
  ReactDOM.render(<App />, root);
}
