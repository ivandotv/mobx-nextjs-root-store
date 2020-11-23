import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { useStopwatchStore } from "./providers/RootStoreProvider";

export const Stopwatch = observer(function Stopwatch(props) {
  const store = useStopwatchStore();

  useEffect(() => {
    const id = setTimeout(() => {
      store.start();
    }, 1000);

    return () => {
      clearTimeout(id);
      store.stop();
    };
  }, [store]);

  return (
    <div className={store.size === "BIG" ? "big" : "small"}>
      {store.timeString}
    </div>
  );
});
