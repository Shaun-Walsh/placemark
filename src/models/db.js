import { userMemStore } from "./mem/user-mem-store.js";
import { venueTypeMemStore } from "./mem/venueType-mem-store.js";
import { venueMemStore } from "./mem/venue-mem-store.js";

import { userJsonStore } from "./json/user-json-store.js";
import { venueTypeJsonStore } from "./json/venueType-json-store.js";
import { venueJsonStore } from "./json/venue-json-store.js";

import { connectMongo } from "./mongo/connect.js";
import { userMongoStore } from "./mongo/user-mongo-store.js";
import { venueTypeMongoStore } from "./mongo/venueType-mongo-store.js";
import { venueMongoStore } from "./mongo/venue-mongo-store.js";

export const db = {
  userStore: null,
  venueTypeStore: null,
  venueStore: null,

  init(storeType) {
    switch (storeType) {
      case "json":
        this.userStore = userJsonStore;
        this.venueTypeStore = venueTypeJsonStore;
        this.venueStore = venueJsonStore;
        break;
      case "mongo":
          this.userStore = userMongoStore;
          this.venueTypeStore = venueTypeMongoStore;
          this.venueStore = venueMongoStore;
          connectMongo();
          break;
      default:
        this.userStore = userMemStore;
        this.venueTypeStore = venueTypeMemStore;
        this.venueStore = venueMemStore;
    }
  },
};
