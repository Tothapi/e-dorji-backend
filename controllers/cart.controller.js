const { AddCartService, getCartService } = require("../service/cart.service");

exports.addCart = async (req, res) => {
  console.log(req.body, "request");
  try {
    const cart = await AddCartService(
      req.body.userMail,
      req.body.address,
      req.body.products,
      req.body.totalPrice
    );
    res.status(201).json({ status: "Completed", cart });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "something went wrong please try again",
    });
  }
};
exports.getCart = async (req, res) => {
  try {
    const carts = await getCartService();
    res.status(200).json({ status: "Completed", carts });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "something went wrong please try again",
    });
  }
};
