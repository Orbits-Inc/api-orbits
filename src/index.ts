import { ApolloServer } from "apollo-server";
import { context } from "./context";

// schema
import { Query, User, Post } from "./types";

import { query } from "./queries";

const resolvers = {
  Query: query,
};

const server = new ApolloServer({
  typeDefs: [Query, User, Post],
  resolvers,
  context,
});

require("dotenv").config();

server
  .listen({ port: process.env.PORT || 4000 })
  .then(({ url }: { url: String }) => {
    console.log(`server running on ${url}`);
  });
