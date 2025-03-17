import { Venue } from "./venue.js";

export const venueMongoStore = {
  async getVenuesByVenueTypeId(id) {
    const venues = await Venue.find({ venueTypeid: id }).lean();
    return venues;
  },
};
