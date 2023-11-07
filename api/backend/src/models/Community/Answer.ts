import mongoose from "mongoose";

const Schema = mongoose.Schema;

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
    typ: Schema.Types.ObjectId,
    ref: "User",
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
