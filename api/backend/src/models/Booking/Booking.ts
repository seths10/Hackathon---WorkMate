import { model, Schema } from "mongoose";

enum BookingStatus {
  booked,
  canceled
}

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
  status: BookingStatus
});

export default model("Desk", bookingSchema);
