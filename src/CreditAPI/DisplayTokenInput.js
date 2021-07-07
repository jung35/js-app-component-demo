// @flow
import * as React from "react";
import injectSheet from "react-jss/lib/injectSheet";

type DisplayTokenInputProps = {
  classes: { DisplayToken: String, UpdateButton: String },
  display_token: string,
  label: React.Node,
  onUpdate: (display_token: string) => void,
};

function DisplayTokenInput(props: DisplayTokenInputProps): React.Node {
  const display_token = props.display_token;
  const classes = props.classes;
  const label = props.label;
  const onUpdate = props.onUpdate;

  const [temp_token, setTempToken] = React.useState(display_token);

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

      {display_token !== temp_token && (
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

export default (injectSheet(styles)(DisplayTokenInput): any);
