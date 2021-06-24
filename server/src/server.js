import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';
import { ApolloServer } from 'apollo-server-express';
import path from 'path';
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';
import { loadFilesSync } from '@graphql-tools/load-files';

const typeDefs = mergeTypeDefs(
  loadFilesSync(path.join(__dirname, './typedefs')),
);
const resolvers = mergeResolvers(
  loadFilesSync(path.join(__dirname, './resolvers')),
);

const app = express();

const db = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log('DB connected');
  } catch (err) {
    console.log('DB connection error', err);
  }
};
db();

const port = process.env.PORT || 9001;

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app });

app.listen(port, () => {
  console.log(`[App]: Listening on port ${port}`);
});
