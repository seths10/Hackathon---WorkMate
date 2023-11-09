import { model, Schema } from "mongoose";

const deskSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  facility: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  isAvailable: {
    type: Boolean,
    default: true,
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
});

export default model("Desk", deskSchema);
