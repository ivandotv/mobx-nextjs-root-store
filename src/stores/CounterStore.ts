import {
  action,
  computed,
  makeObservable,
  observable,
  runInAction,
} from "mobx";
import { formatDate } from "../utils";
import { RootStore } from "./RootStore";

export type CounterHydration = {
  start: number;
};

export class CounterStore {
  root: RootStore;
  size: "BIG" | "SMALL" = "SMALL";
  state: "STOPPED" | "STARTED" | "PAUSED" = "STOPPED";
  counter: number = 0;
  timer: number | undefined;

  constructor(root: RootStore) {
    this.root = root;
    makeObservable(this, {
      start: action,
      pause: action,
      resume: action,
      stop: action,
      hydrate: action,
      size: observable,
      state: observable,
      counter: observable,
    });
  }

  start() {
    this.startInterval();
  }

  resume() {
    this.startInterval();
  }

  pause() {
    this.state = "PAUSED";
    clearInterval(this.timer);
  }

  stop() {
    this.state = "STOPPED";
    clearInterval(this.timer);
  }

  protected startInterval() {
    this.state = "STARTED";
    this.timer = window.setInterval(() => {
      runInAction(() => {
        this.counter += 1;
      });
    }, 100);
  }

  hydrate(data?: CounterHydration) {
    if (data) {
      this.counter = data.start;
    }
  }
}
