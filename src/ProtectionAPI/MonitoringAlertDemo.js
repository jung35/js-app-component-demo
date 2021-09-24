// @flow
import * as React from "react";

import { MonitoringAlert } from "@levelcredit/js-react-levelcredit";
import injectSheet from "react-jss/lib/injectSheet";

type MonitoringAlertDemoProps = { classes: any };

function MonitoringAlertDemo(props: MonitoringAlertDemoProps): React.Node {
  const classes = props.classes;

  return (
    <div className="MonitoringAlertDemo" style={{ margin: "30px 0" }}>
      <h2>Monitoring Alert Component Demo (&lt;MonitoringAlert /&gt;)</h2>

      <div style={{ margin: "30px auto", width: 500 }}>
        <MonitoringAlert classes={classes} />
      </div>
    </div>
  );
}

const styles = {};

export default (injectSheet(styles)(MonitoringAlertDemo): any);
