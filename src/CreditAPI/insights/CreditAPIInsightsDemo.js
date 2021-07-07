// @flow
import * as React from "react";
import useDisplayToken from "../useDisplayToken";
import DisplayTokenInput from "../DisplayTokenInput";
import HookDemo from "./HookDemo";
import AccountSummaryDemo from "./AccountSummaryDemo";

const INSIGHTS_DISPLAY_TOKEN_PARAM = "idt";

export default function CreditAPIInsightsDemo(): React.Node {
  //  insights display token
  const [display_token, setDisplayToken] = useDisplayToken(INSIGHTS_DISPLAY_TOKEN_PARAM);

  return (
    <div className="CreditAPIDemo">
      <DisplayTokenInput label="Insights Display Token" display_token={display_token} onUpdate={setDisplayToken} />

      {display_token && (
        <>
          <hr style={{ margin: "30px 0" }} />
          <AccountSummaryDemo display_token={display_token} />
          <hr />
          <HookDemo display_token={display_token} />
        </>
      )}
    </div>
  );
}
