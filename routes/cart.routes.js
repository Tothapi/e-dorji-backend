const express = require("express");
const { getCart, addCart } = require("../controllers/cart.controller");
const {
  fileUpload,
  getCatalogue,
  addDocuments,
} = require("../controllers/catalogue.controller");

const router = express.Router();
module.exports = router;

router.get("/cart", getCart);
router.post("/cart", addCart);
// router.get("/cart",getCart);

// router.post("/file-upload", uploader.single("image"), fileUpload);
// router.patch("/", addDocuments);
// router.get("/", getCatalogue);
