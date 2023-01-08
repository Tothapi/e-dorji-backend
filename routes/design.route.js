const uploader = require("../middleware/upload");
const express = require("express");
const {
  fileUpload,
  titleAdd,
  getDesigns,
} = require("../controllers/design.controller");

const router = express.Router();
module.exports = router;

router.post("/file-upload", uploader.single("image"), fileUpload);
router.patch("/", titleAdd);
router.get("/", getDesigns);
