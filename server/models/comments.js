import mongoose from "mongoose";
import moment from "moment";

const CommentSchema = new mongoose.Schema({
  contents: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    default: moment().firnat("YYYY-MM-DD hh:mm:ss"),
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "post",
  },
  creator: {
    type: monggose.Schema.Types.ObjectId,
    ref: "user",
  },
});
const Comment = mongoose.model("comment", CommentSchema);

export default Comment;
