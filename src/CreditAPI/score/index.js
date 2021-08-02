// @flow
import * as React from "react";
import ScoreDemo from "./ScoreDemo";
import ChartDemo from "./ChartDemo";
import HookDemo from "./HookDemo";

type CreditAPIScoresDemoProps = { display_token: string };

export default function CreditAPIScoresDemo(props: CreditAPIScoresDemoProps): React.Node {
  const display_token = props.display_token;

  return (
    <div className="CreditAPIDemo">
      {display_token && (
        <>
          <hr style={{ margin: "30px 0" }} />
          <ScoreDemo display_token={display_token} />
          <hr />
          <ChartDemo display_token={display_token} />
          <hr />
          <HookDemo display_token={display_token} />
        </>
      )}
    </div>
  );
}
