const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const designSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  file: {
    type: String,
    require: true,
  },
});
module.exports = mongoose.model("Design", designSchema);
