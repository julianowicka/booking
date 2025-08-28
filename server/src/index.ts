import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { typeDefs, resolvers } from './graphql/';
import { connectDatabase } from './database';
import dotenv from 'dotenv';

dotenv.config();

async function startServer() {
  const app = express();
  const port = 9000;

  const db = await connectDatabase();

  const server = new ApolloServer({ 
    typeDefs, 
    resolvers
  });

  // Start the server
  await server.start();

  // Apply middleware
  app.use('/api', express.json(), expressMiddleware(server, {
    context: async () => ({ db })
  }));

  app.listen(port);

  console.log(`[app] : http://localhost:${port}`);
}

startServer().catch(console.error);

