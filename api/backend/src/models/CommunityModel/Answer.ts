import { model, Schema } from "mongoose";

// answer model
const answerSchema = new Schema({
  content: {
    type: String,
    required: true,
  },
  question_id: {
    type: Schema.Types.ObjectId,
    ref: "Question",
  },
  author: {
    author_name: {
      type: String,
      ref: "User",
    },
    author_id: { type: Schema.Types.ObjectId, ref: "User" },
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
  votes: {
    type: Number,
    default: 0,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

export default model("Answer", answerSchema);
