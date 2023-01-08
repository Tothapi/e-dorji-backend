const authResolver = require("./auth");
const eventResolver = require("./events");
const bookingResolver = require("./booking");
const addPhotoResolver = require("./design");
// const { GraphQLUpload } = require("graphql-upload");

const rootResolver = {
  // Upload: GraphQLUpload,
  ...authResolver,
  ...eventResolver,
  bookingResolver,
  addPhotoResolver,
};

module.exports = rootResolver;
