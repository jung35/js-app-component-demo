// @flow
import * as React from "react";

import { AccountStatus } from "@levelcredit/js-react-levelcredit";
import injectSheet from "react-jss/lib/injectSheet";

type AccountStatusDemoProps = { display_token: string, classes: any };

function AccountStatusDemo(props: AccountStatusDemoProps): React.Node {
  const classes = props.classes;

  return (
    <div className="AccountStatusDemo" style={{ margin: "30px 0" }}>
      <h2>Account Status Component Demo (&lt;AccountStatus /&gt;)</h2>

      <div style={{ textAlign: "center" }}>
        <AccountStatus display_token={props.display_token} classes={classes} />
      </div>
    </div>
  );
}

const styles = {};

export default (injectSheet(styles)(AccountStatusDemo): any);
