// @flow
import * as React from "react";
import ChartDemo from "./ChartDemo";
import HookDemo from "./HookDemo";

export default function ScoreAPIDemo(): React.Node {
  const params = React.useMemo(function () {
    return new URLSearchParams(window.location.search);
  }, []);
  //  credit display token
  const [display_token, setDisplayToken] = React.useState(params.get("cdt") || "");
  const [temp_token, setTempToken] = React.useState(params.get("cdt") || "");

  React.useEffect(
    function () {
      params.set("cdt", display_token);
      window.history.pushState(null, "", `/?${params.toString()}`);
    },
    [display_token, params]
  );

  const onChangeToken = React.useCallback(function (e) {
    const value = e.target.value;
    setTempToken(value);
  }, []);

  const onClickUpdate = React.useCallback(
    function (e) {
      e.preventDefault();

      setDisplayToken(temp_token);
    },
    [temp_token]
  );

  return (
    <div className="ScoreAPIDemo">
      <label>
        Credit Display Token
        <input
          onChange={onChangeToken}
          value={temp_token}
          style={{
            fontSize: 16,
            padding: "5px 15px",
            border: "1px solid #999",
            width: "calc(100% - 32px)",
          }}
        />
      </label>
      {display_token !== temp_token && (
        <button
          style={{
            display: "block",
            background: "#fff",
            padding: "5px 15px",
            fontSize: 16,
            border: "1px solid #999",
            width: "calc(100%)",
            cursor: "pointer",
            margin: "15px 0 0",
          }}
          onClick={onClickUpdate}
        >
          Update token
        </button>
      )}

      <hr style={{ margin: "30px 0" }} />

      {display_token && (
        <>
          <ChartDemo display_token={display_token} />
          <hr />
          <HookDemo display_token={display_token} />
        </>
      )}
    </div>
  );
}
