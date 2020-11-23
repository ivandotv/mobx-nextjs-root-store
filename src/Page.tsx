import React from "react";
import { Links } from "./Links";
import { SizeControls } from "./SizeControls";
import { Stopwatch } from "./Stopwatch";
import { StopwatchControls } from "./StopwatchControls";

export function Page({ title }: { title: string }) {
  return (
    <div className="App">
      <div className="App-header">
        <h4>{title}</h4>
        <SizeControls />
        <Stopwatch />
        <StopwatchControls />
        <Links />
      </div>
    </div>
  );
}
