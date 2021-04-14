// @flow
import * as React from "react";

import { useScoreAPI } from "@levelcredit/js-react-levelcredit";

type HookDemoProps = {| display_token: string |};

export default function HookDemo(props: HookDemoProps): React.Node {
  const [scores, setScores] = React.useState(null);
  const fetchScores = useScoreAPI();

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
      <h2>React Hook Demo (useScoreAPI)</h2>
      <pre style={{ padding: "10px 15px", background: "#eee", border: "1px solid #999" }}>
        <code>{(scores && JSON.stringify(scores, null, 2)) || "no_scores"}</code>
      </pre>
    </div>
  );
}
