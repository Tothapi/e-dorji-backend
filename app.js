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

const rootResolver = require("./graphql/resolvers");
const isAuth = require("./graphql/middleware/isAuth");
const app = express();
const cors = require("cors");
app.use(cors());

const events = [];
app.use(isAuth);
app.use(bodyParser.json());

app.use(
  "/graphql",
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
    app.listen(4000);
    console.log("mongodb connect successfull");
  })
  .catch((err) => {
    console.log(err);
    console.log(
      `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.y5siwts.mongodb.net/?retryWrites=true&w=majority`
    );
  });
