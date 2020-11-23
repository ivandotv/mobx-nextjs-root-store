import React from "react";
import { Stopwatch } from "./Stopwatch";
import { RootStoreProvider } from "./providers/RootStoreProvider";
import { SizeControls } from "./SizeControls";
import { StopwatchControls } from "./StopwatchControls";

export function Page() {
  return (
    <RootStoreProvider>
      <div className="App">
        <div className="App-header">
          <SizeControls />
          <Stopwatch />
          <StopwatchControls />
        </div>
      </div>
    </RootStoreProvider>
  );
}
