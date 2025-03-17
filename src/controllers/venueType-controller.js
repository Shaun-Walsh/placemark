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
      const venueType = await db.venueTypeStore.getVenueTypeById(request.params.id);
      const newVenue = {
        title: request.payload.title,
        type: request.payload.type,
        contact: Number(request.payload.contact),
        location: request.payload.location,
        description: request.payload.description,
      };
      await db.venueStore.addVenue(venueType._id, newVenue);
      return h.redirect(`/venueType/${venueType._id}`);
    },
  },

  deleteVenue: {
    handler: async function (request, h) {
      const venueType = await db.venueTypeStore.getVenueTypeById(request.params.id);
      await db.venueStore.deleteVenue(request.params.venueid);
      return h.redirect(`/venueType/${venueType._id}`);
    },
  },
};
