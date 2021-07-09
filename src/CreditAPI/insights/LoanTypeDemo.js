// @flow
import * as React from "react";

import { LoanType } from "@levelcredit/js-react-levelcredit";
import injectSheet from "react-jss/lib/injectSheet";

type LoanTypeDemoProps = { display_token: string, classes: any };

function LoanTypeDemo(props: LoanTypeDemoProps): React.Node {
  const classes = props.classes;

  return (
    <div className="LoanTypeDemo" style={{ margin: "30px 0" }}>
      <h2>Loan Type Component Demo (&lt;LoanType /&gt;)</h2>

      <LoanType display_token={props.display_token} classes={classes} show_dots_percent={true} />
    </div>
  );
}

const styles = {};

export default (injectSheet(styles)(LoanTypeDemo): any);
