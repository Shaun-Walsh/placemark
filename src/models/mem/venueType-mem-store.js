import { v4 } from "uuid";
import { venueMemStore } from "./venue-mem-store.js";

let venueTypes = [];

export const venueTypeMemStore = {
  async getAllVenueTypes() {
    return venueTypes;
  },

  async addVenueType(venueType) {
    venueType._id = v4();
    venueTypes.push(venueType);
    return venueType;
  },

  async getVenueTypeById(id) {
    const list = venueTypes.find((venueType) => venueType._id === id);
    list.venues = await venueMemStore.getVenuesByVenueTypeId(list._id);
    return list;
  },

  async getPlaylistById(id) {
    const list = playlists.find((playlist) => playlist._id === id);
    list.tracks = await trackMemStore.getTracksByPlaylistId(list._id);
    return list;
  },

  async deleteVenueTypeById(id) {
    const index = venueTypes.findIndex((venueType) => venueType._id === id);
    venueTypes.splice(index, 1);
  },

  async deleteAllVenueTpes() {
    venueTypes = [];
  },
};
