import { VenueSpec } from "../models/joi-schemas.js";
import { db } from "../models/db.js";

export const venueController = {
    index: {
        handler: async function (request, h) {
          const venueType = await db.venueTypeStore.getVenueTypeById(request.params.id);
          const venue = await db.venueStore.getVenueById(request.params.venueid);
          const viewData = {
            title: "Edit Venue",
            venueType: venueType,
            venue: venue,
          };
          return h.view("venue-view", viewData);
        },
      },

    update: {
        validate: {
          payload: VenueSpec,
          options: { abortEarly: false },
          failAction: function (request, h, error) {
            return h.view("venue-view", { title: "Edit venue error", errors: error.details }).takeover().code(400);
          },
        },
        handler: async function (request, h) {
          const venue = await db.venueStore.getVenueById(request.params.venueid);
          const newVenue = {
            title: request.payload.title,
                type: request.payload.type,
                contact: Number(request.payload.contact),
                lat: Number(request.payload.lat),
                long: Number(request.payload.long),
                description: request.payload.description,
          };
          await db.venueStore.updateVenue(venue, newVenue);
          return h.redirect(`/venueType/${request.params.id}`);
        },
      },
}