// @flow
import * as React from "react";

import { useInsights } from "@levelcredit/js-react-levelcredit";
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
  const [insights, setInsights] = React.useState(null);
  const fetchInsights = useInsights();

  React.useEffect(
    function () {
      (async function () {
        setInsights(null);
        const insights = await fetchInsights(props.display_token);
        setInsights(insights);
      })();
    },
    [fetchInsights, props.display_token]
  );

  return (
    <div className="HookDemo" style={{ margin: "30px 0" }}>
      <h2>React Hook Demo (useInsights)</h2>
      <pre className={classes.Code}>
        <code>{(insights && JSON.stringify(insights, null, 2)) || "no_insights"}</code>
      </pre>
    </div>
  );
}

export default (injectSheet(styles)(HookDemo): any);
