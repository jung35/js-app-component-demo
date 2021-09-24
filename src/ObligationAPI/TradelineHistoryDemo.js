// @flow
import * as React from "react";

import { TradelineHistory } from "@levelcredit/js-react-levelcredit";
import injectSheet from "react-jss/lib/injectSheet";
import useURLParam from "../hooks/useURLParam";
import URLParamInput from "../components/URLParamInput";

type TradelineHistoryDemoProps = { classes: any };

const TRADELINE_HISTORY_TYPE_URL_PARAM = "thtup";
const TRADELINE_HISTORY_ID_URL_PARAM = "thiup";
const TRADELINE_HISTORY_DATA_STYLE_PARAM = "thids";

function TradelineHistoryDemo(props: TradelineHistoryDemoProps): React.Node {
  const classes = props.classes;
  const [obligation_type, setObligationType] = useURLParam(TRADELINE_HISTORY_TYPE_URL_PARAM, "contracts");
  const [obligation_id, setObligationID] = useURLParam(TRADELINE_HISTORY_ID_URL_PARAM);
  const [data_style, setDataStyle] = useURLParam(TRADELINE_HISTORY_DATA_STYLE_PARAM, "last-24-months");

  const onChangeObligationType = React.useCallback(
    function (e) {
      setObligationType(e.target.value);
    },
    [setObligationType]
  );

  const onChangeDataStyle = React.useCallback(
    function (e) {
      setDataStyle(e.target.value);
    },
    [setDataStyle]
  );

  return (
    <div className="TradelineHistoryDemo" style={{ margin: "30px 0" }}>
      <h2>Tradeline History Component Demo (&lt;TradelineHistory /&gt;)</h2>

      {obligation_type && obligation_id && (
        <div style={{ margin: "30px auto", width: 500 }}>
          <TradelineHistory
            classes={classes}
            obligation={obligation_type}
            obligation_id={obligation_id}
            data_style={data_style}
          />
        </div>
      )}

      <div className="custom-changes">
        <label style={{ display: "block", margin: "15px 0" }}>
          ObligationType
          <select
            onChange={onChangeObligationType}
            value={obligation_type}
            style={{ fontSize: 16, padding: "5px 15px", border: "1px solid #999", width: "100%" }}
          >
            {["contracts", "leases", "utilities"].map(function (value) {
              return (
                <option key={value} value={value}>
                  {value}
                </option>
              );
            })}
          </select>
        </label>

        <URLParamInput label="Obligation ID" param_value={obligation_id} onUpdate={setObligationID} />

        <label style={{ display: "block", margin: "15px 0" }}>
          DataStyle
          <select
            onChange={onChangeDataStyle}
            value={data_style}
            style={{ fontSize: 16, padding: "5px 15px", border: "1px solid #999", width: "100%" }}
          >
            {["last-24-months", "last-24-datasets", "all"].map(function (value) {
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

const styles = {};

export default (injectSheet(styles)(TradelineHistoryDemo): any);
