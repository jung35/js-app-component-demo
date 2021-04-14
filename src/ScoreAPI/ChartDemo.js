// @flow
import * as React from "react";

import { ScoreAPIChart } from "@levelcredit/js-react-levelcredit";

type ChartDemoProps = {| display_token: string |};

export default function ChartDemo(props: ChartDemoProps): React.Node {
  const [parse_style, setParseStyle] = React.useState("12-scores");

  const onChangeParseStyle = React.useCallback(function (e) {
    setParseStyle(e.target.value);
  }, []);

  return (
    <div className="ChartDemo" style={{ margin: "30px 0" }}>
      <h2>Chart Component Demo (&lt;ScoreAPIChart /&gt;)</h2>

      <ScoreAPIChart display_token={props.display_token} dataParseStyle={parse_style} />

      <div className="custom-changes">
        <label>
          Parse Style
          <select
            onChange={onChangeParseStyle}
            value={parse_style}
            style={{ fontSize: 16, padding: "5px 15px", border: "1px solid #999", width: "100%" }}
          >
            {["11-months-past", "12-scores"].map(function (value) {
              return (
                <option key={value} value={value}>
                  {value}
                </option>
              );
            })}
          </select>
        </label>
      </div>
    </div>
  );
}
