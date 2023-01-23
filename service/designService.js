const Designs = require("../models/designs");

exports.postDesignService = async (title, file) => {
  const cre = await Designs.create({ title, file });
  return cre;
};
exports.updateDesignService = async (
  id,
  title,
  productType,
  description,
  price
) => {
  const cre = await Designs.findById(id);
  cre.title = title;
  cre.productType = productType;
  cre.description = description;
  cre.price = price;
  cre.save();

  return cre;
};
exports.getDesignService = async () => {
  const cre = await Designs.find();
  return cre;
};
exports.getSpecificDesignService = async (id) => {
  const cre = await Designs.findById(id);
  return cre;
};
