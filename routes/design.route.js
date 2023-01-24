const uploader = require("../middleware/upload");
const express = require("express");
const {
  fileUpload,
  titleAdd,
  getDesigns,
  getSingleDesign,
  deleteSingleDesign,
} = require("../controllers/design.controller");

const router = express.Router();
module.exports = router;

router.post("/file-upload", uploader.single("image"), fileUpload);
router.patch("/", titleAdd);
router.get("/", getDesigns);
router.get("/:id", getSingleDesign);
router.delete("/:id", deleteSingleDesign);
