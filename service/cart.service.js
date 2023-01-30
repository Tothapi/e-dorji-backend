const CartModel = require("../models/cart");

exports.AddCartService = async (userMail, address, products, totalPrice) => {
  console.log({ userMail, address, products, totalPrice });
  const cre = await CartModel.create({
    userMail,
    address,
    products,
    totalPrice,
  });
  return cre;
};
exports.getCartService = async () => {
  const cre = await CartModel.find();
  return cre;
};
