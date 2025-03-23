import { db } from "../models/db.js";

export const adminController = {
  index: {
    auth: false,
    handler: async function (request, h) {
      const users = await db.userStore.getAllUsers();
      const venueTypesTotal = await db.venueTypeStore.totalVenueTypes();
      const venuesTotal = await db.venueTypeStore.totalVenues();
      const usersTotal = await db.userStore.totalUsers();
      const viewData = {
        title: "Admin Panel",
        users: users,
        venueTypesTotal: venueTypesTotal,
        venuesTotal: venuesTotal,
        usersTotal: usersTotal,
      };
      return h.view("admin-view", viewData);
    },
  },

  deleteUser: {
    handler: async function (request, h) {
      await db.userStore.deleteUserById(request.params.id);
      return h.redirect("/admin");
    },
  },
};
