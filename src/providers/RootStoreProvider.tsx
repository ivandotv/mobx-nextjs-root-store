import React, { createContext, ReactNode, useContext } from "react";
import { StopwatchStore } from "../stores/StopwatchStore";
import { RootStore } from "../stores/RootStore";
import { sizeSwitcherStoreFactory } from "../stores/SizeSwitcherStore";

let store: RootStore;
const StoreContext = createContext<RootStore | undefined>(undefined);

export function useRootStore() {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error("useRootStore must be used within RootStoreProvider");
  }

  return context;
}

export function useStopwatchStore() {
  const { stopwatchStore } = useRootStore();
  return stopwatchStore;
}

export function useSizeSwitcherStore() {
  const { sizeSwitcherStore } = useRootStore();
  return sizeSwitcherStore;
}

export function RootStoreProvider({ children }: { children: ReactNode }) {
  const root = store ?? new RootStore(StopwatchStore, sizeSwitcherStoreFactory);

  return <StoreContext.Provider value={root}>{children}</StoreContext.Provider>;
}
