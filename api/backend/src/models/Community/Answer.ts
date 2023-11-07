import mongoose from "mongoose";

const Schema = mongoose.Schema;

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
  author_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  comment_id: {
    type: Schema.Types.ObjectId,
    ref: "Comment"
  },
  votes: {
    type: Number,
    default: 0,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Answer", answerSchema);
