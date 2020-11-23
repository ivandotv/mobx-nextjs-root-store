import {
  action,
  computed,
  makeObservable,
  observable,
  runInAction,
} from "mobx";
import { formatDate } from "../utils";
import { RootStore } from "./RootStore";

export type StopwatchHydration = {
  startTime: number;
  size: "BIG" | "SMALL";
};

export class StopwatchStore {
  root: RootStore;
  size: "BIG" | "SMALL" = "SMALL";
  state: "STOPPED" | "STARTED" | "PAUSED" = "STOPPED";
  lastUpdate: number = 0;
  offset = 0;
  timer: number | undefined;

  constructor(root: RootStore) {
    this.root = root;
    makeObservable(this, {
      start: action,
      pause: action,
      resume: action,
      stop: action,
      hydrate: action,
      timeString: computed,
      size: observable,
      state: observable,
      lastUpdate: observable,
    });
  }

  start() {
    const timezoneOffset = new Date().getTimezoneOffset() * 60 * 1000;
    this.offset = timezoneOffset;
    this.lastUpdate = this.lastUpdate ? this.lastUpdate : Date.now();
    this.startInterval();
  }

  resume() {
    this.offset = Date.now() - this.lastUpdate;
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
        this.lastUpdate = Date.now() - this.offset;
      });
    }, 10);
  }

  get timeString() {
    return formatDate(new Date(this.lastUpdate));
  }

  hydrate(data?: StopwatchHydration) {
    if (data) {
      this.lastUpdate = data.startTime;
      this.size = data.size;
    }
  }
}
