const Designs = require("../models/designs");

exports.postDesignService = async (title, file) => {
  const cre = await Designs.create({ title, file });
  return cre;
};
exports.updateDesignService = async (id, title) => {
  const cre = await Designs.findById(id);
  cre.title = title;
  cre.save();

  return cre;
};
exports.getDesignService = async () => {
  const cre = await Designs.find();
  return cre;
};
