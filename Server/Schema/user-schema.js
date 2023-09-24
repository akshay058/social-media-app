const mongoose = require("mongoose");
// Increment = require("mongoose-auto-increment");

const UserSchema = new mongoose.Schema(
  {
    name: String,
    username: String,
    email: String,
    password: String,
    token: String,
    profile: {
      banner: String,
      dp: String,
    },
  },
  { timestamps: true }
);
// Increment.initialize(mongoose.connection);
// UserSchema.plugin(Increment.plugin, "user");

const User = mongoose.model("user", UserSchema);

module.exports = { User };
