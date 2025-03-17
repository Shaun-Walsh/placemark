// import { userMemStore } from "./mem/user-mem-store.js";
// import { venueTypeMemStore } from "./mem/venueType-mem-store.js";
// import { venueMemStore } from "./mem/venue-mem-store.js";

import { userJsonStore } from "./json/user-json-store.js";
import { venueTypeJsonStore } from "./json/venueType-json-store.js";
import { venueJsonStore } from "./json/venue-json-store.js";

export const db = {
  userStore: null,
  venueTypeStore: null,
  venueStore: null,

  init() {
    this.userStore = userJsonStore;
    this.venueTypeStore = venueTypeJsonStore;
    this.venueStore = venueJsonStore;
  },
};
