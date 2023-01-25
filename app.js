const express = require("express");
const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");
const { default: mongoose } = require("mongoose");
const Event = require("./models/events");
const User = require("./models/User");
const bcrypt = require("bcryptjs");
const schema = require("./graphql/schema");
// const { graphqlUploadExpress } = require("graphql-upload");
const rootResolver = require("./graphql/resolvers");
const isAuth = require("./graphql/middleware/isAuth");
const app = express();
const cors = require("cors");
app.use("/images", express.static("images"));
const designRoute = require("./routes/design.route");
const catalogueRoute = require("./routes/catalogue.route");
const corsOpts = {
  origin: "*",

  methods: ["GET", "POST"],

  allowedHeaders: ["Content-Type"],
};

app.use(cors(corsOpts));
app.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Credentials", true);
  next();
});
app.use(express.json());

const events = [];
app.use(isAuth);
app.use(bodyParser.json());
app.use("/designs", designRoute);
app.use("/catalogue", catalogueRoute);
// app.use("/photos", express.static(path.join(__dirname, "photos")));

app.use(
  "/graphql",
  // graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }),
  graphqlHTTP({
    schema: schema,
    rootValue: rootResolver,
    graphiql: true,
  })
);

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.y5siwts.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(process.env.PORT || 4000);
    console.log("mongodb connect successfull");
  })
  .catch((err) => {
    console.log(err);
    console.log(
      `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.y5siwts.mongodb.net/?retryWrites=true&w=majority`
    );
  });
