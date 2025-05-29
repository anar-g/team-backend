const express = require("express");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./user/schema");

function createApp() {
  const app = express();
  app.use(cors());
  app.use(express.json());

  app.use(
    "/user",
    graphqlHTTP({
      schema,
      graphiql: true,
    })
  );

  app.get("/", (req, res) => {
    res.send("GraphQL Server Running. Go to /graphql");
  });

  return app;
}

module.exports = createApp;
