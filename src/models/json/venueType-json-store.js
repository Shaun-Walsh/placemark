import { v4 } from "uuid";
import { db } from "./store-utils.js";
import { venueJsonStore } from "./venue-json-store.js";

export const venueTypeJsonStore = {
  async getAllVenueTypes() {
    await db.read();
    return db.data.venueTypes;
  },

  async addVenueType(venueType) {
    await db.read();
    venueType._id = v4();
    db.data.venueTypes.push(venueType);
    await db.write();
    return venueType;
  },

  async  getVenueTypeById(id) {
    await db.read();
    const list = db.data.venueTypes.find((venuType) => venueType._id === id);
    list.venues = await venueJsonStore.getVenuesByVenueTypetId(list._id);
    return list;
  },

  async getUserVenueTypes(userid) {
    await db.read();
    return db.data.venueTypes.filter((venueType) => venueType.userid === userid);
  },

  async deleteVenuTypeById(id) {
    await db.read();
    const index = db.data.venuTypes.findIndex((venueType) => venueType._id === id);
    db.data.venueTypes.splice(index, 1);
    await db.write();
  },

  async deleteAllVenueTypes() {
    db.data.venueTypes = [];
    await db.write();
  },
};
