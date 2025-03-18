import Boom from "@hapi/boom";
import { venueTypeSpec } from "../models/joi-schemas.js"
import { db } from "../models/db.js";

export const venueTypeApi = {
  find: {
    auth: false,
    handler: async function (request, h) {
        try {
            const venueTypes = await db.venueTypeStore.getAllVenueTypes();
            return venueTypes;
          } catch (err) {
            return Boom.serverUnavailable("Database Error");
          }
        },
      },
  
  findOne: {
    auth: false,
    async handler(request) {
      try {
        const venueType = await db.venueTypeStore.getVenueTypeById(request.params.id);
        if (!venueType) {
          return Boom.notFound("No Venue Type with this id");
        }
        return venueType;
      } catch (err) {
        return Boom.serverUnavailable("No Venue Type with this id");
      }
    },
  },


  create: {
    auth: false,
    handler: async function (request, h) {
      try {
        const venueType = request.payload;
        const newVenueType = await db.venueTypeStore.addVenueType(venueType);
        if (newVenueType) {
          return h.response(newVenueType).code(201);
        }
        return Boom.badImplementation("error creating Venue Type");
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
  },

  deleteOne: {
    auth: false,
    handler: async function (request, h) {
      try {
        const venueType = await db.venueTypeStore.getVenueTypeById(request.params.id);
        if (!venueType) {
          return Boom.notFound("No Venue Type with this id");
        }
        await db.venueTypeStore.deleteVenueTypeById(venueType._id);
        return h.response().code(204);
      } catch (err) {
        return Boom.serverUnavailable("No Venue Type with this id");
      }
    },
  },

  deleteAll: {
    auth: false,
    handler: async function (request, h) {
      try {
        await db.venueTypeStore.deleteAllVenueTypes();
        return h.response().code(204);
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
  },
};