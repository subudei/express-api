const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const placeSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true }, // image url is a string pointing to the image in the file system
  address: { type: String, required: true },
  location: {
    lat: { type: Number, required: true }, // latitude
    lng: { type: Number, required: true }, // longitude
  },
  creator: { type: String, required: true }, // for now, we will use the user's name as the creator
  /*
  creator: { type: mongoose.Types.ObjectId, required: true, ref: "User" }, // ref is a special property that tells mongoose which other model this id refers to
  */
});

// 1st argument is the name of the model, 2nd argument is the schema we want to use for that model
module.exports = mongoose.model("Place", placeSchema); // mongoose.model() returns a constructor function, we can use this constructor function to create new objects based on the schema we defined, we can also use this constructor function to create new documents in the database, collection will be named "places" (mongoose will lowercase the model name and add an "s" at the end)
