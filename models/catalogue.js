const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const catalogueSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  file: {
    type: String,
    require: true,
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
module.exports = mongoose.model("Catalogue", catalogueSchema);
