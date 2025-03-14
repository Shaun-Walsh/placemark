import { db } from "../models/db.js";

export const venueTypeController = {
  index: {
    handler: async function (request, h) {
      const venueType = await db.venueTypeStore.getVenueTypeById(request.params.id);
      const viewData = {
        title: "Venue Type",
        venueType: venueType,
      };
      return h.view("venueType-view", viewData);
    },
  },

  addVenue: {
    handler: async function (request, h) {
      const venue = await db.venueTypeStore.getVenueById(request.params.id);
      const newVenue = {
        title: request.payload.title,
        type: request.payload.artist,
        contact: Number(request.payload.contact),
      };
      await db.venueStore.addVenue(venueType._id, newVenue);
      return h.redirect(`/venueType/${venueType._id}`);
    },
  },
};
