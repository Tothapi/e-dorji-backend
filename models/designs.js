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
  price: {
    type: Number,
    require: false,
    default: 100,
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
