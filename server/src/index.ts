import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { typeDefs } from "./graphql/typeDefs";
import { resolvers } from "./graphql/resolvers";
import { connectDatabase } from "./database";

const mount = async () => {
  const db = await connectDatabase();
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  const app = express();

  await server.start();

  app.use(express.json());
  app.use("/api", expressMiddleware(server, {
    context: async () => ({ db })
  }));

  app.listen(9000);
  console.log(`🚀 Server ready at http://localhost:9000`);
  console.log(`📊 GraphQL Playground available at http://localhost:9000/api`);
};

mount().catch(console.error);

