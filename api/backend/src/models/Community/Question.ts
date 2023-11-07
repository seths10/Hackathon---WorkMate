import mongoose from "mongoose";

const Schema = mongoose.Schema;

// question model
const questionSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  tag: [
    {
      type: String,
    },
  ],
  author_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  votes: {
    type: Number,
    default: 0,
  },
  views: {
    type: Number,
    default: 0,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Question", questionSchema);
