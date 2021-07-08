// @flow
import * as React from "react";

import { CreditUtilization } from "@levelcredit/js-react-levelcredit";
import injectSheet from "react-jss/lib/injectSheet";

type CreditUtilizationDemoProps = { display_token: string, classes: any };

function CreditUtilizationDemo(props: CreditUtilizationDemoProps): React.Node {
  const classes = props.classes;

  return (
    <div className="CreditUtilizationDemo" style={{ margin: "30px 0" }}>
      <h2>Credit Utilization Component Demo (&lt;CreditUtilization /&gt;)</h2>

      <CreditUtilization display_token={props.display_token} classes={classes} />
    </div>
  );
}

const styles = {};

export default (injectSheet(styles)(CreditUtilizationDemo): any);
