// @flow
import * as React from "react";

export default function useURLParam(
  param_key: string,
  default_value?: string
): [string, (param_value: string) => void] {
  const params = React.useMemo(function () {
    return new URLSearchParams(window.location.search);
  }, []);

  const [param_value, setDisplayToken] = React.useState(params.get(param_key) || default_value || "");

  const onUpdateToken = React.useCallback(function (param_value) {
    setDisplayToken(param_value);
  }, []);

  React.useEffect(
    function () {
      const updated_params = new URLSearchParams(window.location.search);

      updated_params.set(param_key, param_value);
      window.history.pushState(null, "", `/?${updated_params.toString()}`);
    },
    [param_value, param_key]
  );

  return [param_value, onUpdateToken];
}
