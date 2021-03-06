import mongoose from "mongoose";
import moment from "moment";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    tequired: true,
  },
  role: {
    type: String,
    rnum: ["Mainjuin", "Subjuin", "User"],
    default: "User",
  },
  register_date: {
    type: Date,
    dafaule: moment().format("YYYY-MM-DD hh:mm:ss"),
  },
  comments: [
    {
      post_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "post",
      },
      comment_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "comments",
      },
    },
  ],
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "posts",
    },
  ],
});

const User = mongoose.model("user", UserSchema);

export default User;
