const Catalogue = require("../models/catalogue");

exports.postCatalogueService = async (title, file, productType) => {
  const cre = await Catalogue.create({ title, file, productType });
  return cre;
};
exports.updateCatalogueService = async (id, title, productType) => {
  const cre = await Catalogue.findById(id);
  cre.title = title;
  cre.productType = productType;
  cre.save();

  return cre;
};
exports.getCatalogueService = async () => {
  const cre = await Catalogue.find();
  return cre;
};
