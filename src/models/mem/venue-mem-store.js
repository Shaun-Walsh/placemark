import { v4 } from "uuid";

let venues = [];

export const venueMemStore = {
  async getAllVenues() {
    return venues;
  },

  async addVenue(venueTypeId, venue) {
    venue._id = v4();
    venue.venueTypeId = venueTypeId;
    venues.push(venue);
    return venue;
  },

  async getVenuesByVenueTypeId(id) {
    return venues.filter((venue) => venue.venueTypeId === id);
  },

  async getVenueById(id) {
    let foundVenue = venues.find((venue) => venue._id === id);
    if (!foundVenue) {
      foundVenue = null;
    }
    return foundVenue;
  },

  async getVenueTypeVenues(venueTypeId) {
    let foundVenues = venues.filter((venue) => venue.venueTypeId === venueTypeId);
    if (!foundVenues) {
      foundVenues = null;
    }
    return foundVenues;
  },

  async deleteVenue(id) {
    const index = venues.findIndex((venue) => venue._id === id);
    if (index !== -1) venues.splice(index, 1);
  },

  async deleteAllVenues() {
    venues = [];
  },

  async updateVenue(venue, updatedVenue) {
    venue.title = updatedVenue.title;
    venue.type = updatedVenue.type;
    venue.contact = updatedVenue.contact;
  },
};
