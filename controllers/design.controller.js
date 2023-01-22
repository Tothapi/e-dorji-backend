const {
  postDesignService,
  updateDesignService,
  getDesignService,
} = require("../service/designService");

exports.fileUpload = async (req, res) => {
  try {
    const design = await postDesignService(req.title, req.file.filename);
    res.status(200).json({ status: "image uploaded", design });
  } catch (error) {
    res.status(400).json({ status: "fail", message: "image not uploaded" });
  }
};
exports.titleAdd = async (req, res) => {
  try {
    const design = await updateDesignService(
      req.body.id,
      req.body.title,
      req.body.productType,
      req.body.description
    );
    res.status(200).json({ status: "Completed", design });
  } catch (error) {
    res.status(400).json({ status: "fail", message: "title not added" });
  }
};
exports.getDesigns = async (req, res) => {
  console.log("get design calling");
  try {
    const design = await getDesignService();
    console.log(design, "all designs");
    res.status(200).json({ status: "Completed", design });
  } catch (error) {
    res.status(400).json({ status: "fail", message: "title not added" });
  }
};
