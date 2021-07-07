// @flow
import * as React from "react";

import { useScore } from "@levelcredit/js-react-levelcredit";
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
  const [scores, setScores] = React.useState(null);
  const fetchScores = useScore();

  React.useEffect(
    function () {
      (async function () {
        setScores(null);
        const scores = await fetchScores(props.display_token);
        setScores(scores);
      })();
    },
    [fetchScores, props.display_token]
  );

  return (
    <div className="HookDemo" style={{ margin: "30px 0" }}>
      <h2>React Hook Demo (useScore)</h2>
      <pre className={classes.Code}>
        <code>{(scores && JSON.stringify(scores, null, 2)) || "no_scores"}</code>
      </pre>
    </div>
  );
}

export default (injectSheet(styles)(HookDemo): any);
