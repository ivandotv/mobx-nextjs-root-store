import { RootStore } from "./RootStore";
import { makeAutoObservable } from "mobx";

export function sizeSwitcherStoreFactory(root: RootStore) {
  return makeAutoObservable({
    makeStopwatchSmall: () => {
      root.stopwatchStore.size = "SMALL";
    },
    makeStopwatchBig: () => {
      root.stopwatchStore.size = "BIG";
    },
  });
}
