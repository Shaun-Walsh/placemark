import { Venue } from "./venue.js";

export const venueMongoStore = {
    async getAllVenues() {
    const venues = await Venue.find().lean();
    return venues;
  },  

  async addVenue(venueTypeId, venue) {
    venue.venueTypeId = venueTypeId;
    const newVenue = new Venue(venue);
    const venueObj = await newVenue.save();
    return this.getVenueById(venueObj._id);
  },

  async getVenuesById(id) {
    const tracks = await Track.find({ playlistid: id }).lean();
    return tracks;
  },

  async getVenuesByVenueTypeId(id) {
    const venues = await Venue.find({ venueTypeid: id }).lean();
    return venues;
  },

  async getVenueById(id) {
    if (Mongoose.isValidObjectId(id)) {
      const venue = await Venue.findOne({ _id: id }).lean();
      return venue;
    }
    return null;
  },

  async deleteVenue(id) {
    try {
      await Venue.deleteOne({ _id: id });
    } catch (error) {
      console.log("bad id");
    }
  },

  async deleteAllVenues() {
    await Venue.deleteMany({});
  },

  async updateVenue(venue, updatedVenue) {
    const venueDoc = await Venue.findOne({ _id: track._id });
    venueDoc.title = updatedVenue.title;
    venueDoc.type = updatedVenue.type;
    venueDoc.contact = updatedVenue.contact;
    venueDoc.location = updatedVenue.location;
    venueDoc.description = updatedVenue.description;
    await venueDoc.save();
  },
};


