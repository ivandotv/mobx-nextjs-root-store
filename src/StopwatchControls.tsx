import { observer } from "mobx-react-lite";
import React, { useCallback } from "react";
import { useRootStore } from "./providers/RootStoreProvider";

export const StopwatchControls = observer(function StopwatchControls() {
  const { stopwatchStore: clockStore } = useRootStore();

  const pause = useCallback(() => {
    return clockStore.pause();
  }, [clockStore]);

  const resume = useCallback(() => {
    return clockStore.resume();
  }, [clockStore]);

  return (
    <div className="buttons-wrap">
      <button
        disabled={
          clockStore.state === "STOPPED" || clockStore.state === "PAUSED"
        }
        onClick={pause}
      >
        PAUSE
      </button>
      <button
        disabled={
          clockStore.state === "STARTED" || clockStore.state === "STOPPED"
        }
        onClick={resume}
      >
        RESUME
      </button>
    </div>
  );
});
