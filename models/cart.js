const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  userMail: {
    type: String,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
  products: [
    {
      type: String,
      require: true,
    },
  ],
  totalPrice: Number,
});

const CartModel = mongoose.model("CartModel", cartSchema, "carts");

module.exports = CartModel;
