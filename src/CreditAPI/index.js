// @flow
import * as React from "react";
import CreditAPIScoreDemo from "./score/CreditAPIScoreDemo";
import CreditAPIInsightsDemo from "./insights/CreditAPIInsightsDemo";

export default function CreditAPIDemo(): React.Node {
  return (
    <>
      <CreditAPIInsightsDemo />
      <hr style={{ margin: "30px 0" }} />
      <CreditAPIScoreDemo />
    </>
  );
}
