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

const AUTH_TOKEN_PARAM = "atop";
const AUTH_TYPE_PARAM = "atyp";

function App() {
  const [auth_type, setAuthType] = useURLParam(AUTH_TYPE_PARAM, "header-authorization");
  const [auth_token, setAuthToken] = useURLParam(AUTH_TOKEN_PARAM);

  const onChangeAuthType = React.useCallback(
    function (e) {
      setAuthType(e.target.value);
    },
    [setAuthType]
  );

  return (
    <div id="App" style={{ maxWidth: 700, margin: "auto" }}>
      <label style={{ display: "block", margin: "15px 0" }}>
        Auth Token Type
        <select
          onChange={onChangeAuthType}
          value={auth_type}
          style={{ fontSize: 16, padding: "5px 15px", border: "1px solid #999", width: "100%" }}
        >
          {["header-authorization", "header-sid"].map(function (value) {
            return (
              <option key={value} value={value}>
                {value}
              </option>
            );
          })}
        </select>
      </label>

      <URLParamInput label="User Auth Token" param_value={auth_token} onUpdate={setAuthToken} />

      <hr style={{ margin: "30px 0" }} />

      <LevelCreditProvider env={LC_ENV} api_url={LC_API_URL} auth_token={auth_token} auth_type={auth_type}>
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
