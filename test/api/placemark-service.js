import axios from "axios";

import { serviceUrl } from "../fixtures.js";

export const placemarkService = {
  placemarkUrl: serviceUrl,

  async createUser(user) {
    const res = await axios.post(`${this.placemarkUrl}/api/users`, user);
    return res.data;
  },

  async getUser(id) {
    const res = await axios.get(`${this.placemarkUrl}/api/users/${id}`);
    return res.data;
  },

  async getAllUsers() {
    const res = await axios.get(`${this.placemarkUrl}/api/users`);
    return res.data;
  },

  async deleteAllUsers() {
    const res = await axios.delete(`${this.placemarkUrl}/api/users`);
    return	res.data
},

async createVenueType(venueType) {
    const res = await axios.post(`${this.placemarkUrl}/api/venueTypes`, venueType);
    return res.data;
  },

  async deleteAllVenueTypes() {
    const response = await axios.delete(`${this.placemarkUrl}/api/venueTypes`);
    return response.data;
  },

  async deleteVenueType(id) {
    const response = await axios.delete(`${this.placemarkUrl}/api/venueTypes/${id}`);
    return response;
  },

  async getAllVenueTypes() {
    const res = await axios.get(`${this.placemarkUrl}/api/venueTypes`);
    return res.data;
  },

  async getVenueType(id) {
    const res = await axios.get(`${this.placemarkUrl}/api/venueTypes/${id}`);
    return res.data;
  },

  async getAllVenues() {
    const res = await axios.get(`${this.placemarkUrl}/api/venues`);
    return res.data;
  },

  async createVenue(id, venue) {
    const res = await axios.post(`${this.placemarkUrl}/api/venueTypes/${id}/venues`, venue);
    return res.data;
  },

  async deleteAllVenues() {
    const res = await axios.delete(`${this.placemarkUrl}/api/venues`);
    return res.data;
  },

  async getVenue(id) {
    const res = await axios.get(`${this.placemarkUrl}/api/venues/${id}`);
    return res.data;
  },

  async deleteVenue(id) {
    const res = await axios.delete(`${this.placemarkUrl}/api/venues/${id}`);
    return res.data;
  },

  async authenticate(user) {
    const response = await axios.post(`${this.placemarkUrl}/api/users/authenticate`, user);
    axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;
    return response.data;
  },

  async clearAuth() {
    axios.defaults.headers.common["Authorization"] = "";
  }

};
