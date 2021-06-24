// @flow
import * as React from "react";
import injectSheet from "react-jss";

import { ScoreAPIScore } from "@levelcredit/js-react-levelcredit";

type ScoreDemoProps = {| display_token: string, classes: any |};

const styles = {
  SimpleScoreDisplay: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    flexWrap: "wrap",
    // custom css
    width: "100%",
    maxWidth: 300,
    margin: { top: 30, right: "auto", bottom: 30, left: "auto" },
    border: "1px solid #ccc",
    borderRadius: 3,
    padding: 20,
  },
};

function ScoreDemo(props: ScoreDemoProps): React.Node {
  const classes = props.classes;
  const [parse_style, setParseStyle] = React.useState("pie" /* "simple" */);

  const onChangeParseStyle = React.useCallback(function (e) {
    setParseStyle(e.target.value);
  }, []);

  return (
    <div className="ScoreDemo" style={{ margin: "30px 0" }}>
      <h2>Score Component Demo (&lt;ScoreAPIScore /&gt;)</h2>

      <ScoreAPIScore
        display_token={props.display_token}
        dataDisplayStyle={parse_style}
        classes={{ SimpleScoreDisplay: classes.SimpleScoreDisplay }}
      />

      <div className="custom-changes">
        <label>
          Display Style
          <select
            onChange={onChangeParseStyle}
            value={parse_style}
            style={{ fontSize: 16, padding: "5px 15px", border: "1px solid #999", width: "100%" }}
          >
            {["simple", "pie"].map(function (value) {
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

export default (injectSheet(styles)(ScoreDemo): any);
