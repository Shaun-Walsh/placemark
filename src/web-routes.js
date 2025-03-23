import { accountsController } from "./controllers/accounts-controller.js";
import { dashboardController } from "./controllers/dashboard-controller.js";
import { aboutController } from "./controllers/about-controller.js";
import { venueTypeController } from "./controllers/venueType-controller.js";
import { adminController } from "./controllers/admin-controller.js";

export const webRoutes = [
  { method: "GET", path: "/", config: accountsController.index },
  { method: "GET", path: "/signup", config: accountsController.showSignup },
  { method: "GET", path: "/login", config: accountsController.showLogin },
  { method: "GET", path: "/logout", config: accountsController.logout },
  { method: "POST", path: "/register", config: accountsController.signup },
  { method: "POST", path: "/authenticate", config: accountsController.login },
  // route to show profile
  { method: "GET", path: "/profile", config: accountsController.profile },
  // route to update profile
  { method: "POST", path: "/profile", config: accountsController.update },

  { method: "GET", path: "/dashboard", config: dashboardController.index },
  { method: "POST", path: "/dashboard/addVenueType", config: dashboardController.addVenueType },
  { method: "Get", path: "/dashboard/deleteVenueType/{id}", config: dashboardController.deleteVenueType },

  { method: "GET", path: "/about", config: aboutController.index },


  { method: "GET", path: "/venueType/{id}", config: venueTypeController.index },
  { method: "POST", path: "/venueType/{id}/addVenue", config: venueTypeController.addVenue },
  { method: "GET", path: "/venueType/{id}/deleteVenue/{venueid}", config: venueTypeController.deleteVenue },
  { method: "POST", path: "/venueType/{id}/uploadimage", config: venueTypeController.uploadImage },
  // route to update venue

  { method: "POST", path: "/venuetype/{id}/updateVenue", config: venueTypeController.updateVenue },	


  { method: "GET", path: "/{param*}", handler: { directory: { path: "./public" } }, options: { auth: false } },

  { method: "GET", path: "/admin", config: adminController.index },
  { method: "GET", path: "/admin/deleteUser/{id}", config: adminController.deleteUser },


];
