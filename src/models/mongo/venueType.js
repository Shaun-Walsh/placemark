import Mongoose from "mongoose";

const { Schema } = Mongoose;

const venueTypeSchema = new Schema({
  title: String,
  img: String,
  userid: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

export const VenueType = Mongoose.model("VenueType", venueTypeSchema);
