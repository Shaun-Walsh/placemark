import { db } from "../models/db.js";

export const dashboardController = {
  index: {
    handler: async function (request, h) {
      const venueTypes = await db.venueTypeStore.getAllVenueTypes();
      const viewData = {
        title: "Placemark Dashboard",
        venueTypes: venueTypes,
      };
      return h.view("dashboard-view", viewData);
    },
  },

  addVenueType: {
    handler: async function (request, h) {
      const newVenueType = {
        title: request.payload.title,
      };
      await db.venueTypeStore.addVenueType(newVenueType);
      return h.redirect("/dashboard");
    },
  },
};
