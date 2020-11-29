import { observer } from "mobx-react-lite";
import React, { useCallback } from "react";
import {
  useCounterStore,
  useSizeSwitcherStore,
} from "./providers/RootStoreProvider";

export const SizeControls = observer(function SizeControls() {
  const switchStore = useSizeSwitcherStore();
  const stopwatchStore = useCounterStore();

  const switchToBig = useCallback(() => {
    return switchStore.makeStopwatchBig();
  }, [switchStore]);

  const switchToSmall = useCallback(() => {
    return switchStore.makeStopwatchSmall();
  }, [switchStore]);

  return (
    <div className="buttons-wrap">
      <button disabled={stopwatchStore.size === "BIG"} onClick={switchToBig}>
        Big
      </button>
      <button
        disabled={stopwatchStore.size === "SMALL"}
        onClick={switchToSmall}
      >
        Small
      </button>
    </div>
  );
});
