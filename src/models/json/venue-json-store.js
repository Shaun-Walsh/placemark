import { v4 } from "uuid";
import { db } from "./store-utils.js";

export const venueJsonStore = {
  async getAllVenues() {
    await db.read();
    return db.data.venues;
  },

  async addVenue(venueTypeId, venue) {
    await db.read();
    venue._id = v4();
    venue.venueTypeId = venueTypeId;
    db.data.venues.push(venue);
    await db.write();
    return venue;
  },

  async getVenuesByVenueTypeId(id) {
    await db.read();
    let foundVenues = db.data.venues.filter((venue) => venue.venueTypeId === id);
    if (!foundVenues) {
      foundVenues = null;
    }
    return foundVenues;
  },

  async getVenueById(id) {
    await db.read();
    let foundVenues = db.data.venues.find((venue) => venue._id === id);
    if (!foundVenues) {
      foundVenues = null;
    }  
    return foundVenues;
  },

  async getVenueTypeVenues(venueTypeId) {
    await db.read();
    let foundVenues = venues.filter((venue) => venue.venueTypeId === venueTypeId);
    if (!foundVenues) {
      foundVenues = null;
    }
    return foundVenues;
  },

  async deleteVenue(id) {
    await db.read();
    const index = db.data.venues.findIndex((venue) => venue._id === id);
    if (index !== -1) db.data.venues.splice(index, 1);
    await db.write();
  },

  async deleteAllVenues() {
    db.data.venues = [];
    await db.write();
  },

  async updateVenue(venue, updatedVenue) {
    venue.title = updatedVenue.title;
    venue.type = updatedVenue.type;
    venue.contact = updatedVenue.contact;
    venue.location = updatedVenue.location;
    venue.description = updatedVenue.description;
    await db.write();
  },
};
