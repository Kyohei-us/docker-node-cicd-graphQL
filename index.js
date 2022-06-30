import express from "express";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";

const PORT = 3456;

const schema = buildSchema(`
    type Person {
      id: Int
      name: String
    }
    type Query {
        people(startsWith: String): [Person]
    }
`);

function getPeople(args) {
  let people = [
    { id: 1, name: "Mike" },
    { id: 2, name: "Jack" },
    { id: 3, name: "John" },
  ];
  if (args.startsWith) {
    return people.filter((p) => p.name.startsWith(args.startsWith));
  } else {
    return people;
  }
}

const root = {
  people: getPeople,
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
