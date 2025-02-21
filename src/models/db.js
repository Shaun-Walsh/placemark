import { userMemStore } from "./mem/user-mem-store.js";
import { venueTypeMemStore } from "./mem/venueType-mem-store.js";

export const db = {
  userStore: null,
  venueTypeStore: null,

  init() {
    this.userStore = userMemStore;
    this.venueTypeStore = playlistMemStore;
  },
};
