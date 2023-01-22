const {
  postCatalogueService,
  getCatalogueService,
  updateCatalogueService,
} = require("../service/catalogueService");

exports.fileUpload = async (req, res) => {
  console.log(
    "data from uploader",
    req?.title,
    req?.file?.filename,
    req?.productType
  );
  try {
    const catalogue = await postCatalogueService(
      req?.title,
      req?.file?.filename,
      req?.productType
    );
    res.status(200).json({ status: "catalogue uploaded", catalogue });
  } catch (error) {
    res.status(400).json({ status: "fail", message: "catalogue not uploaded" });
  }
};
exports.addDocuments = async (req, res) => {
  console.log(
    req.body.id,
    req.body.title,
    req.body.productType,
    "add documents"
  );
  try {
    const design = await updateCatalogueService(
      req.body.id,
      req.body.title,
      req.body.productType
    );
    res.status(200).json({ status: "Completed", design });
  } catch (error) {
    res.status(400).json({ status: "fail", message: "title not added" });
  }
};
exports.getCatalogue = async (req, res) => {
  console.log("get design calling");
  try {
    const catalogue = await getCatalogueService();
    console.log(catalogue, "all catalogues");
    res.status(200).json({ status: "Completed", catalogue });
  } catch (error) {
    res.status(400).json({ status: "fail", message: "catalogue not added" });
  }
};
