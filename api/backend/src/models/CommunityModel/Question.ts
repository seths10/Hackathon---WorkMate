import { model, Schema } from "mongoose";

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
  tags: [
    {
      type: String,
    },
  ],
  author: {
    author_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    author_name: {
      type: String,
      ref: "User",
    },
  },
  total_answers: {
    type: Number,
    default: 0,
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
  views: {
    type: Number,
    default: 0,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

export default model("Question", questionSchema);
