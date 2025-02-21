import { v4 } from "uuid";

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
    return venueTypes.find((venueType) => venueType._id === id);
  },

  async deleteVenueTypeById(id) {
    const index = venueTypes.findIndex((venueType) => venueType._id === id);
    venueTypes.splice(index, 1);
  },

  async deleteAllVenueTpes() {
    venueTypes = [];
  },
};
