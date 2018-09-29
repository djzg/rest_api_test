const mongoose = require("mongoose");
const Schema = mongoose.Schema;



// create geolocation schema
const geoSchema = new Schema({
  type: {
    type:  String,
    default: "Point"
  },
  coordinates: {
    type: [Number],
    index: "2dsphere"
  }

});


// create ninja schema model
const ninjaSchema = new Schema({
  name:{
    type: String,
    required: [true, "Polje 'Name' je obavezno"]
  },
  rank: {
    type: String,
  },
  available: {
    type: Boolean,
    default: false
  },
  geometry: geoSchema

  // add in geo location

});

const Ninja = mongoose.model("ninja", ninjaSchema);

module.exports = Ninja;
