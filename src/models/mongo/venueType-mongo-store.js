import Mongoose from "mongoose";
import { VenueType } from "./venueType.js";
import { venueMongoStore } from "./venue-mongo-store.js";

export const venueTypeMongoStore = {
  async getAllVenueTypes() {
    const venueTypes = await VenueType.find().lean();
    return venueTypes;
  },

  async getVenueTypeById(id) {
    if (Mongoose.isValidObjectId(id)) {
      const venueType = await VenueType.findOne({ _id: id }).lean();
      if (venueType) {
        venueType.venues = await venueMongoStore.getVenuesByVenueTypeId(venueType._id);
      }
      return venueType;
    }
    return null;
  },

  async addVenueType(venueType) {
    const newVenueType = new VenueType(venueType);
    const venueTypeObj = await newVenueType.save();
    return this.getVenueTypeById(venueTypeObj._id);
  },

  async getUserVenueTypes(id) {
    const venueType = await VenueType.find({ userid: id }).lean();
    return venueType;
  },

  async deleteVenueTypeById(id) {
    try {
      await VenueType.deleteOne({ _id: id });
    } catch (error) {
      console.log("bad id");
    }
  },

  async deleteAllVenueTypes() {
    await VenueType.deleteMany({});
  },

  async updateVenueType(updatedVenueType) {
    const venueTypeDoc = await VenueType.findOne({ _id: updatedVenueType._id });
    venueTypeDoc.title = updatedVenueType.title;
    venueTypeDoc.img = updatedVenueType.img;
    await venueTypeDoc.save();
  },

  // Count the number of venue types
  async totalVenueTypes() {
    const venueTypes = await VenueType.find().lean();
    return venueTypes.length;
  },

  //count the number of venues
  async totalVenues() {
    const venues = await venueMongoStore.getAllVenues();
    return venues.length;
  }
};
