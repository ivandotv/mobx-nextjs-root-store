import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { useCounterStore } from "./providers/RootStoreProvider";

export const Counter = observer(function Counter() {
  const store = useCounterStore();

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
      {store.counter}
    </div>
  );
});
