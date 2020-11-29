import { RootStore } from "./RootStore";
import { makeAutoObservable } from "mobx";

export function sizeSwitcherStoreFactory(root: RootStore) {
  return makeAutoObservable({
    makeStopwatchSmall: () => {
      root.counterStore.size = "SMALL";
    },
    makeStopwatchBig: () => {
      root.counterStore.size = "BIG";
    },
  });
}
