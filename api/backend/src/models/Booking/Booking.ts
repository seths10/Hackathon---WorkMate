import { model, Schema } from "mongoose";

const bookingSchema = new Schema({
  user: {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    userName: {
      type: String,
      ref: "User"
    }
  },
  desk: {
    type: Schema.Types.ObjectId,
    ref: "Desk"
  },
  startDate: Date,
  endDate: Date,
  status: String,
});

export default model("Booking", bookingSchema);
