import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { useStopwatchStore } from "./providers/RootStoreProvider";

export const Stopwatch = observer(function Stopwatch(props) {
  const store = useStopwatchStore();

  useEffect(() => {
    store.start();
  }, [store]);

  return (
    <div className={store.size === "BIG" ? "big" : "small"}>
      {store.timeString}
    </div>
  );
});
