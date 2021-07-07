// @flow
import * as React from "react";

export default function useDisplayToken(token_key: string): [string, (display_token: string) => void] {
  const params = React.useMemo(function () {
    return new URLSearchParams(window.location.search);
  }, []);

  const [display_token, setDisplayToken] = React.useState(params.get(token_key) || "");

  const onUpdateToken = React.useCallback(function (display_token) {
    setDisplayToken(display_token);
  }, []);

  React.useEffect(
    function () {
      const updated_params = new URLSearchParams(window.location.search);

      updated_params.set(token_key, display_token);
      window.history.pushState(null, "", `/?${updated_params.toString()}`);
    },
    [display_token, token_key]
  );

  return [display_token, onUpdateToken];
}
