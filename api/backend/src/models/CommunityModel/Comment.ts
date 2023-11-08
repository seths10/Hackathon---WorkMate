import {model, Schema} from "mongoose";

// comment model
const commentSchema = new Schema({
    question_id: {
        type: Schema.Types.ObjectId,
        ref: "Question",
    },
    content: {
        type: String,
        required: true,
    },
    author_id: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    created_at: {
        type: Date,
        default: Date.now(),
    }
})


export default model('Comment', commentSchema);