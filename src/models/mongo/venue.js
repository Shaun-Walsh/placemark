import Mongoose from "mongoose";

const { Schema } = Mongoose;

const venueSchema = new Schema({
  title: String,
  type: String,
  contact: Number,
  location: String,
  description: String,
  venueTypeid: {
    type: Schema.Types.ObjectId,
    ref: "VenueType",
  },
});

export const Venue = Mongoose.model("Venue", venueSchema);
