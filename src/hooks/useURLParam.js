// @flow
import * as React from "react";
import { useHistory } from "react-router-dom";

export default function useURLParam(
  param_key: string,
  default_value?: string
): [string, (param_value: string) => void] {
  const history = useHistory();
  const params = new URLSearchParams(history.location.search);

  const [param_value, setDisplayToken] = React.useState(params.get(param_key) || default_value || "");

  const onUpdateToken = React.useCallback(function (param_value) {
    setDisplayToken(param_value);
  }, []);

  React.useEffect(
    function () {
      const updated_params = new URLSearchParams(history.location.search);

      updated_params.set(param_key, param_value);
      history.push({ ...history.location, search: updated_params.toString() });
    },
    [param_value, param_key, history]
  );

  return [param_value, onUpdateToken];
}
