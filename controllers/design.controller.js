const {
  postDesignService,
  updateDesignService,
  getDesignService,
  getSpecificDesignService,
  deleteSpecificDesignService,
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
      req.body.description,
      req.body.price
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
exports.getSingleDesign = async (req, res) => {
  console.log("get design calling");
  try {
    const { id } = req.params;
    console.log("get design calling", id, "id");
    const design = await getSpecificDesignService(id);
    console.log(design, "all designs");
    res.status(200).json({ status: "Completed", design });
  } catch (error) {
    res.status(400).json({ status: "fail", message: "title not added" });
  }
};
exports.deleteSingleDesign = async (req, res) => {
  try {
    const { id } = req.params;
    const design = await deleteSpecificDesignService(id);
    console.log(design, "all designs");
    res.status(200).json({ status: "Completed", design });
  } catch (error) {
    res.status(400).json({ status: "fail", message: "title not added" });
  }
};
