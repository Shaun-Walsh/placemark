import { userMemStore } from "./mem/user-mem-store.js";
import { venueTypeMemStore } from "./mem/venueType-mem-store.js";
import { venueMemStore } from "./mem/venue-mem-store.js";

export const db = {
  userStore: null,
  venueTypeStore: null,
  venueStore: null,

  init() {
    this.userStore = userMemStore;
    this.venueTypeStore = venueTypeMemStore;
    this.venueStore = venueMemStore;
  },
};
