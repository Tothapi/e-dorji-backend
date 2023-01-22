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
  description: {
    type: String,
    require: false,
  },
  productType: {
    type: String,
    enum: [
      "men wears",
      "female wears",
      "shirt",
      "pant",
      "school dress male",
      "school dress female",
      "others",
    ],
    default: "others",
  },
});
module.exports = mongoose.model("Design", designSchema);
