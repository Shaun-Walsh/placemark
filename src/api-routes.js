import { userApi } from "./api/user-api.js";
import { venueTypeApi } from "./api/venueType-api.js";
import { venueApi } from "./api/venue-api.js";

export const apiRoutes = [
  { method: "GET", path: "/api/users", config: userApi.find },
  { method: "POST", path: "/api/users", config: userApi.create },
  { method: "DELETE", path: "/api/users", config: userApi.deleteAll },
  { method: "GET", path: "/api/users/{id}", config: userApi.findOne },

  { method: "POST", path: "/api/venueTypes", config: venueTypeApi.create },
  { method: "DELETE", path: "/api/venueTypes", config: venueTypeApi.deleteAll },
  { method: "GET", path: "/api/venueTypes", config: venueTypeApi.find },
  { method: "GET", path: "/api/venueTypes/{id}", config: venueTypeApi.findOne },
  { method: "DELETE", path: "/api/venueTypes/{id}", config: venueTypeApi.deleteOne },

  { method: "GET", path: "/api/venues", config: venueApi.find },
  { method: "GET", path: "/api/venues/{id}", config: venueApi.findOne },
  { method: "POST", path: "/api/venueTypes/{id}/venues", config: venueApi.create },
  { method: "DELETE", path: "/api/venues", config: venueApi.deleteAll },
  { method: "DELETE", path: "/api/venues/{id}", config: venueApi.deleteOne },

  { method: "POST", path: "/api/users/authenticate", config: userApi.authenticate },


];
