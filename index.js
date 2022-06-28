import express from "express";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";

const PORT = 3456;

const schema = buildSchema(`
    type Query {
        message: String
        messages: [String]
    }
`);

const messages = ["1", "2", "3", "4"];

const root = {
  message: () => "Hello World!",
  messages: messages,
};

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.get("/", (req, res) => {
  res.send("Root is accessed.");
});

app.listen(PORT, () => {
  console.log(`Server started at port: ${PORT}`);
});
