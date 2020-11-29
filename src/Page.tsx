import React from "react";
import { Links } from "./Links";
import { SizeControls } from "./SizeControls";
import { Counter } from "./Counter";
import { CounterControls } from "./CounterControls";

export function Page({ title }: { title: string }) {
  return (
    <div className="App">
      <div className="App-header">
        <h4>{title}</h4>
        <SizeControls />
        <Counter />
        <CounterControls />
        <Links />
      </div>
    </div>
  );
}
