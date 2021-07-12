// @flow
import * as React from "react";

import { AccountSummary } from "@levelcredit/js-react-levelcredit";
import injectSheet from "react-jss/lib/injectSheet";

type AccountSummaryDemoProps = { display_token: string, classes: any };

function AccountSummaryDemo(props: AccountSummaryDemoProps): React.Node {
  const classes = props.classes;

  return (
    <div className="AccountSummaryDemo" style={{ margin: "30px 0" }}>
      <h2>Account Summary Component Demo (&lt;AccountSummary /&gt;)</h2>

      <AccountSummary display_token={props.display_token} classes={classes} />
    </div>
  );
}

const styles = {
  SummaryItem: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    minHeight: 89,
    width: "50%",

    "@media (min-width: 600px)": { width: "33.33%" },

    "& + &": {
      "&:nth-child(even)": {
        width: "calc(50% - 1.5px)",
        borderLeft: "1px solid #ccc",

        "@media (min-width: 600px)": {
          width: "33.33%",
          borderLeft: 0,

          "&:not(:nth-child(4))": {
            borderLeft: "1px solid #ccc",
            width: "calc(33.33% - 1.5px)",
          },
        },
      },

      "@media (min-width: 600px)": {
        "&:not(:nth-child(4))": {
          borderLeft: "1px solid #ccc",
          width: "calc(33.33% - 1.5px)",
        },
      },
    },
  },
};

export default (injectSheet(styles)(AccountSummaryDemo): any);
