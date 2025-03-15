import { db } from "../models/db.js";

export const dashboardController = {
  index: {
    handler: async function (request, h) {
      const loggedInUser = request.auth.credentials;
      const venueTypes = await db.venueTypeStore.getUserVenueTypes(loggedInUser._id);
      const viewData = {
        title: "Placemark Dashboard",
        venueTypes: venueTypes,
      };
      return h.view("dashboard-view", viewData);
    },
  },

  addVenueType: {
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
};
