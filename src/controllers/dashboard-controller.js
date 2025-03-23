import { db } from "../models/db.js";
import { VenueTypeSpec } from "../models/joi-schemas.js";

export const dashboardController = {
  index: {
    handler: async function (request, h) {
      const loggedInUser = request.auth.credentials;
      const venueTypes = await db.venueTypeStore.getUserVenueTypes(loggedInUser._id);
      const viewData = {
        title: "Placemark Dashboard",
        venueTypes: venueTypes,
        //exporting the user object to the view
        loggedInUser: loggedInUser
      };
      return h.view("dashboard-view", viewData);
    },
  },

  addVenueType: {
    validate: {
      payload: VenueTypeSpec,
      options: { abortEarly: false },
      failAction: function (request, h, error) {
        return h.view("dashboard-view", { title: "Add Venue Type error", errors: error.details }).takeover().code(400);
      },
    },
    handler: async function (request, h) {
      const loggedInUser = request.auth.credentials;
      const newVenueType = {
        userid: loggedInUser._id,
        title: request.payload.title,
      };
      await db.venueTypeStore.addVenueType(newVenueType);
      return h.redirect("/dashboard");
    },
  },
  
  deleteVenueType: {
    handler: async function (request, h) {
      const venueType = await db.venueTypeStore.getVenueTypeById(request.params.id);
      await db.venueTypeStore.deleteVenueTypeById(venueType._id);
      return h.redirect("/dashboard");
    },
  },

};
