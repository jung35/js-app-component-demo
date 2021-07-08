// @flow
import * as React from "react";

import { CreditBalance } from "@levelcredit/js-react-levelcredit";
import injectSheet from "react-jss/lib/injectSheet";

type CreditBalanceDemoProps = { display_token: string, classes: any };

function CreditBalanceDemo(props: CreditBalanceDemoProps): React.Node {
  const classes = props.classes;

  return (
    <div className="CreditBalanceDemo" style={{ margin: "30px 0" }}>
      <h2>Credit Balance Component Demo (&lt;CreditBalance /&gt;)</h2>

      <CreditBalance display_token={props.display_token} classes={classes} />
    </div>
  );
}

const styles = {};

export default (injectSheet(styles)(CreditBalanceDemo): any);
