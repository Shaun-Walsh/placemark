import { db } from "../models/db.js";
import { venueSpec } from "../models/joi-schemas.js";

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
    validate: {
      payload: venueSpec,
      options: { abortEarly: false },
      failAction: function (request, h, error) {
        return h.view("venueType-view", { title: "Add venue error", errors: error.details }).takeover().code(400);
      },
    },
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
