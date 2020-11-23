import React, { createContext, ReactNode, useContext } from "react";
import { StopwatchStore } from "../stores/StopwatchStore";
import { RootStore, RootStoreHydration } from "../stores/RootStore";
import { sizeSwitcherStoreFactory } from "../stores/SizeSwitcherStore";
import { enableStaticRendering } from "mobx-react-lite";

enableStaticRendering(typeof window === "undefined");

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

export function RootStoreProvider({
  children,
  hydrationData,
}: {
  children: ReactNode;
  hydrationData?: RootStoreHydration;
}) {
  const store = initializeStore(hydrationData);

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
}

function initializeStore(initialData?: RootStoreHydration) {
  const _store =
    store ?? new RootStore(StopwatchStore, sizeSwitcherStoreFactory);

  if (initialData) {
    console.log("initial data - hydrate");
    _store.hydrate(initialData);
  }
  // For SSG and SSR always create a new store
  if (typeof window === "undefined") return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
}
