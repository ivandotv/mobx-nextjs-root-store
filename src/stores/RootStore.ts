import { StopwatchStore } from "./StopwatchStore";
import { sizeSwitcherStoreFactory } from "./SizeSwitcherStore";

export class RootStore {
  stopwatchStore: StopwatchStore;
  sizeSwitcherStore: ReturnType<typeof sizeSwitcherStoreFactory>;

  constructor(
    StopwatchClass: typeof StopwatchStore,
    colorSwitcher: typeof sizeSwitcherStoreFactory
  ) {
    this.stopwatchStore = new StopwatchClass(this);
    this.sizeSwitcherStore = colorSwitcher(this);
  }
}
