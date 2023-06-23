const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const uniqueValidator = require("mongoose-unique-validator");

const userSchema = new Schema({
  name: { type: String, required: true }, // name is a required string
  email: { type: String, required: true, unique: true }, // email is a required string and must be unique
  password: { type: String, required: true, minlength: 6 }, // password is a required string and must be at least 6 characters long
  image: { type: String, required: true }, // image url is a string pointing to the image in the file system
  // places: [{ type: mongoose.Types.ObjectId, required: true, ref: "Place" }], // ref is a special property that tells mongoose which other model this id refers to
  places: [{ type: String, required: true }],
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);
