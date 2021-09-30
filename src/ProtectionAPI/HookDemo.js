// @flow
import * as React from "react";

import { useMonitoring, useMonitoringAlerts } from "@levelcredit/js-react-levelcredit";
import injectSheet from "react-jss/lib/injectSheet";

type HookDemoProps = {| classes: { Code: string }, display_token: string |};

const styles = {
  Code: {
    padding: "10px 15px",
    background: "#eee",
    border: "1px solid #999",
  },
};

function HookDemo(props: HookDemoProps): React.Node {
  const classes = props.classes;
  const [monitoring] = useMonitoring();
  const [alerts] = useMonitoringAlerts();

  return (
    <>
      <div className="HookDemo" style={{ margin: "30px 0" }}>
        <h2>React Hook Demo (useMonitoring)</h2>
        <pre className={classes.Code}>
          <code style={{ whiteSpace: "pre-wrap" }}>
            {(monitoring && JSON.stringify(monitoring, null, 2)) || "no_monitoring"}
          </code>
        </pre>
      </div>
      <div className="HookDemo" style={{ margin: "30px 0" }}>
        <h2>React Hook Demo (useMonitoringAlerts)</h2>
        <pre className={classes.Code}>
          <code style={{ whiteSpace: "pre-wrap" }}>{(alerts && JSON.stringify(alerts, null, 2)) || "no_alerts"}</code>
        </pre>
      </div>
    </>
  );
}

export default (injectSheet(styles)(HookDemo): any);
