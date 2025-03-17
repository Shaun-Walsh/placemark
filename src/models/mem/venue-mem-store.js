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
    return venues.find((venue) => venue._id === id);
  },

  async getVenueTypeVenues(venueTypeId) {
    return venues.filter((venue) => venue.Venuetypeid === venueTypeId);
  },

  async deleteVenue(id) {
    const index = venues.findIndex((venue) => venue._id === id);
    venues.splice(index, 1);
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
