import { observer } from "mobx-react-lite";
import React, { useCallback } from "react";
import { useRootStore } from "./providers/RootStoreProvider";

export const CounterControls = observer(function CounterControls() {
  const { counterStore: stopwatchStore } = useRootStore();

  const pause = useCallback(() => {
    return stopwatchStore.pause();
  }, [stopwatchStore]);

  const resume = useCallback(() => {
    return stopwatchStore.resume();
  }, [stopwatchStore]);

  return (
    <div className="buttons-wrap">
      <button
        disabled={
          stopwatchStore.state === "STOPPED" ||
          stopwatchStore.state === "PAUSED"
        }
        onClick={pause}
      >
        PAUSE
      </button>
      <button
        disabled={
          stopwatchStore.state === "STARTED" ||
          stopwatchStore.state === "STOPPED"
        }
        onClick={resume}
      >
        RESUME
      </button>
    </div>
  );
});
