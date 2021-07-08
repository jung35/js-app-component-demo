// @flow
import * as React from "react";

import { HardInquiry } from "@levelcredit/js-react-levelcredit";
import injectSheet from "react-jss/lib/injectSheet";

type HardInquiryDemoProps = { display_token: string, classes: any };

function HardInquiryDemo(props: HardInquiryDemoProps): React.Node {
  const classes = props.classes;

  return (
    <div className="HardInquiryDemo" style={{ margin: "30px 0" }}>
      <h2>Hard Inquiry Component Demo (&lt;HardInquiry /&gt;)</h2>

      <HardInquiry display_token={props.display_token} classes={classes} />
    </div>
  );
}

const styles = {};

export default (injectSheet(styles)(HardInquiryDemo): any);
