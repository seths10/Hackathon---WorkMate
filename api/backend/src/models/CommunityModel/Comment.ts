import { model, Schema } from "mongoose";

// comment model
const commentSchema = new Schema({
  question_id: {
    type: Schema.Types.ObjectId,
    ref: "Question",
    required: true,
  },
  answer_id: {
    type: Schema.Types.ObjectId,
    ref: "Answer",
},
  content: {
    type: String,
    required: true,
  },
  author: {
    author_name: {
      type: String,
      ref: "User",
    },
    author_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
});

export default model("Comment", commentSchema);
