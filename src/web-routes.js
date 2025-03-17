import { accountsController } from "./controllers/accounts-controller.js";
import { dashboardController } from "./controllers/dashboard-controller.js";
import { aboutController } from "./controllers/about-controller.js";
import { venueTypeController } from "./controllers/venueType-controller.js";

export const webRoutes = [
  { method: "GET", path: "/", config: accountsController.index },
  { method: "GET", path: "/signup", config: accountsController.showSignup },
  { method: "GET", path: "/login", config: accountsController.showLogin },
  { method: "GET", path: "/logout", config: accountsController.logout },
  { method: "POST", path: "/register", config: accountsController.signup },
  { method: "POST", path: "/authenticate", config: accountsController.login },

  { method: "GET", path: "/dashboard", config: dashboardController.index },
  { method: "POST", path: "/dashboard/addVenueType", config: dashboardController.addVenueType },
  { method: "Get", path: "/dashboard/deleteVenueType/{id}", config: dashboardController.deleteVenueType },

  { method: "GET", path: "/about", config: aboutController.index },

  { method: "GET", path: "/venueType/{id}", config: venueTypeController.index },
  { method: "POST", path: "/venueType/{id}/addVenue", config: venueTypeController.addVenue },
  { method: "GET", path: "/venueType/{id}/deleteVenue/{venueid}", config: venueTypeController.deleteVenue },


];
