// @flow
import * as React from "react";
import HookDemo from "./HookDemo";
import MonitoringAlertDemo from "./MonitoringAlertDemo";

export default function ProtectionAPIDemo(): React.Node {
  return (
    <>
      <MonitoringAlertDemo />
      <HookDemo />
    </>
  );
}
