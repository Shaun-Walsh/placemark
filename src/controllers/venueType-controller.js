import { db } from "../models/db.js";
import { VenueSpec } from "../models/joi-schemas.js";
import { imageStore } from "../models/image-store.js";

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
      payload: VenueSpec,
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

  uploadImage: {
    handler: async function (request, h) {
      try {
        const venueType = await db.venueTypeStore.getVenueTypeById(request.params.id);
        const file = request.payload.imagefile;
        if (Object.keys(file).length > 0) {
          const url = await imageStore.uploadImage(request.payload.imagefile);
          venueType.img = url;
          await db.venueTypeStore.updateVenueType(venueType);
        }
        return h.redirect(`/venueType/${venueType._id}`);
      } catch (err) {
        console.log(err);
        return h.redirect(`/venueType/${venueType._id}`);
      }
    },
    payload: {
      multipart: true,
      output: "data",
      maxBytes: 209715200,
      parse: true,
    },
  },
};
