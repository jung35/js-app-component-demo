// @flow
import * as React from "react";
import CreditAPIScoreDemo from "./score";
import CreditAPIInsightsDemo from "./insights";
import useURLParam from "../hooks/useURLParam";
import URLParamInput from "../components/URLParamInput";

const CREDIT_DISPLAY_TOKEN_PARAM = "cdt";

export default function CreditAPIDemo(): React.Node {
  const [display_token, setDisplayToken] = useURLParam(CREDIT_DISPLAY_TOKEN_PARAM);

  return (
    <>
      <URLParamInput label="Credit Display Token" param_value={display_token} onUpdate={setDisplayToken} />
      <CreditAPIInsightsDemo display_token={display_token} />
      <CreditAPIScoreDemo display_token={display_token} />
    </>
  );
}
