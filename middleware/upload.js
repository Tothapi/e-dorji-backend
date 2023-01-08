const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: "images/",
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

const uploader = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const supportedPDF = /png/;
    const extension = path.extname(file.originalname);

    if (supportedPDF.test(extension)) {
      cb(null, true);
    } else {
      cb(new Error("Must be a png."));
    }
  },
  limits: {
    fileSize: 500000000,
  },
});

module.exports = uploader;
