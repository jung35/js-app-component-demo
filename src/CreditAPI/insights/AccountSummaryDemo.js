// @flow
import * as React from "react";

import { AccountSummary } from "@levelcredit/js-react-levelcredit";

type AccountSummaryDemoProps = { display_token: string };

export default function AccountSummaryDemo(props: AccountSummaryDemoProps): React.Node {
  return (
    <div className="AccountSummaryDemo" style={{ margin: "30px 0" }}>
      <h2>Account Summary Component Demo (&lt;AccountSummary /&gt;)</h2>

      <AccountSummary display_token={props.display_token} />
    </div>
  );
}
