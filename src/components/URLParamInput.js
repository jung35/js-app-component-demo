// @flow
import * as React from "react";
import injectSheet from "react-jss/lib/injectSheet";

type URLParamInputProps = {
  classes: { DisplayToken: String, UpdateButton: String },
  param_value: string,
  label: React.Node,
  onUpdate: (param_value: string) => void,
};

function URLParamInput(props: URLParamInputProps): React.Node {
  const param_value = props.param_value;
  const classes = props.classes;
  const label = props.label;
  const onUpdate = props.onUpdate;

  const [temp_token, setTempToken] = React.useState(param_value);

  const onChangeToken = React.useCallback(function (e) {
    const value = e.target.value;
    setTempToken(value);
  }, []);

  const onClickUpdate = React.useCallback(
    function (e) {
      e.preventDefault();

      onUpdate(temp_token);
    },
    [onUpdate, temp_token]
  );

  return (
    <>
      <label>
        {label}
        <input onChange={onChangeToken} value={temp_token} className={classes.DisplayToken} />
      </label>

      {param_value !== temp_token && (
        <button className={classes.UpdateButton} onClick={onClickUpdate}>
          Update token
        </button>
      )}
    </>
  );
}

const styles = {
  DisplayToken: {
    fontSize: 16,
    padding: "5px 15px",
    border: "1px solid #999",
    width: "calc(100% - 32px)",
  },
  UpdateButton: {
    display: "block",
    background: "#fff",
    padding: "5px 15px",
    fontSize: 16,
    border: "1px solid #999",
    width: "calc(100%)",
    cursor: "pointer",
    margin: "15px 0 0",
  },
};

export default (injectSheet(styles)(URLParamInput): any);
