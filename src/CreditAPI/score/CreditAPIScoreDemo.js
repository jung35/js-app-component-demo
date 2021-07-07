// @flow
import * as React from "react";
import ScoreDemo from "./ScoreDemo";
import ChartDemo from "./ChartDemo";
import HookDemo from "./HookDemo";
import useDisplayToken from "../useDisplayToken";
import DisplayTokenInput from "../DisplayTokenInput";

const SCORE_DISPLAY_TOKEN_PARAM = "sdt";

export default function CreditAPIScoresDemo(): React.Node {
  //  score display token
  const [display_token, setDisplayToken] = useDisplayToken(SCORE_DISPLAY_TOKEN_PARAM);

  return (
    <div className="CreditAPIDemo">
      <DisplayTokenInput label="Score Display Token" display_token={display_token} onUpdate={setDisplayToken} />

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
