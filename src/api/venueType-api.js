import Boom from "@hapi/boom";
import { VenueTypeSpec, IdSpec, VenueTypeArraySpec, VenueTypeSpecPlus } from "../models/joi-schemas.js";
import { db } from "../models/db.js";
import { validationError } from "./logger.js";

export const venueTypeApi = {
  find: {
     auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      try {
        const venueTypes = await db.venueTypeStore.getAllVenueTypes();
        return venueTypes;
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
    tags: ["api"],
    response: { schema: VenueTypeArraySpec, failAction: validationError },
    description: "Get all venue types",
    notes: "Returns all venue types",
  },

  findOne: {
     auth: {
      strategy: "jwt",
    },
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
    tags: ["api"],
    description: "Find a Venue Type",
    notes: "Returns a Venue Type",
    validate: { params: { id: IdSpec }, failAction: validationError },
    response: { schema: VenueTypeSpecPlus, failAction: validationError },
  },

  create: {
     auth: {
      strategy: "jwt",
    },
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
    tags: ["api"],
    description: "Create a Venue Type",
    notes: "Returns the newly created Venue Type",
    validate: { payload: VenueTypeSpec, failAction: validationError },
    response: { schema: VenueTypeSpecPlus, failAction: validationError },
  },

  deleteOne: {
     auth: {
      strategy: "jwt",
    },
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
    tags: ["api"],
    description: "Delete a Venue Type",
    validate: { params: { id: IdSpec }, failAction: validationError },
  },

  deleteAll: {
     auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      try {
        await db.venueTypeStore.deleteAllVenueTypes();
        return h.response().code(204);
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
    tags: ["api"],
    description: "Delete all Venue Type",
  },
};
