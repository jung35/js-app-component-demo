// @flow
import * as React from "react";
import HookDemo from "./HookDemo";
import AccountSummaryDemo from "./AccountSummaryDemo";
import CreditBalanceDemo from "./CreditBalanceDemo";
import CreditUtilizationDemo from "./CreditUtilizationDemo";
import HardInquiryDemo from "./HardInquiryDemo";
import LoanTypeDemo from "./LoanTypeDemo";
import AccountStatusDemo from "./AccountStatusDemo";

type CreditAPIInsightsDemoProps = { display_token: string };

export default function CreditAPIInsightsDemo(props: CreditAPIInsightsDemoProps): React.Node {
  const display_token = props.display_token;

  return (
    <div className="CreditAPIDemo">
      {display_token && (
        <>
          <hr style={{ margin: "30px 0" }} />
          <AccountStatusDemo display_token={display_token} />
          <hr />
          <LoanTypeDemo display_token={display_token} />
          <hr />
          <HardInquiryDemo display_token={display_token} />
          <hr />
          <CreditUtilizationDemo display_token={display_token} />
          <hr />
          <CreditBalanceDemo display_token={display_token} />
          <hr />
          <AccountSummaryDemo display_token={display_token} />
          <hr />
          <HookDemo display_token={display_token} />
        </>
      )}
    </div>
  );
}
