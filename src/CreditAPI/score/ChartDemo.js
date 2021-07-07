// @flow
import * as React from "react";
import injectSheet from "react-jss";

import { ScoreChart } from "@levelcredit/js-react-levelcredit";

type ChartDemoProps = {| display_token: string, classes: any |};

// custom css
const styles = {
  XAxis: {
    fontSize: 12,
    fill: "red",
    textAnchor: "end",
    x: 0,
    y: 0,
    transform: "rotate(-35deg) translate(0, 15px)",
  },
  Line: {
    "& path": { stroke: "green" },
    "& circle": { stroke: "green" },
  },
};

function ChartDemo(props: ChartDemoProps): React.Node {
  const classes = props.classes;
  const [parse_style, setParseStyle] = React.useState("12-scores");

  const onChangeParseStyle = React.useCallback(function (e) {
    setParseStyle(e.target.value);
  }, []);

  return (
    <div className="ChartDemo" style={{ margin: "30px 0" }}>
      <h2>Chart Component Demo (&lt;ScoreChart /&gt;)</h2>

      <ScoreChart display_token={props.display_token} dataParseStyle={parse_style} classes={classes} />

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

export default (injectSheet(styles)(ChartDemo): any);
