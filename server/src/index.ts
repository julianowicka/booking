import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { typeDefs, resolvers } from './graphql/';

async function startServer() {
  const app = express();
  const port = 9000;

  const server = new ApolloServer({ typeDefs, resolvers });

  // Start the server
  await server.start();

  // Apply middleware
  app.use('/api', express.json(), expressMiddleware(server));

  app.listen(port);

  console.log(`[app] : http://localhost:${port}`);
}

startServer().catch(console.error);

