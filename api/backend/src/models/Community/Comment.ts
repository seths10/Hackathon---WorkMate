import mongoose from "mongoose";

const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content: {
        type: String,
        required: true,
    },
    author_id: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    created_by: {
        type: Date,
        default: Date.now(),
    }
})


export default mongoose.model('Comment', commentSchema);