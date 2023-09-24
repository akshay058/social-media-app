const mongoose = require("mongoose");

const PostSchema = mongoose.Schema(
  {
    Input: String,
    file: String,
    LoggedUserId: String,
    type: String,
    LikedValue: String,
  },
  { timestamps: true }
);

// Increment.initialize(mongoose.connection);
// PostSchema.plugin(Increment.plugin, "post");

const Post = mongoose.model("post", PostSchema);

module.exports = { Post };
