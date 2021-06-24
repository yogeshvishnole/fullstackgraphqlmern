import { gql } from 'apollo-server-express';

const typedefs = gql`
  type Query {
    posts: [Post!]!
  }

  type Post {
    id: ID!
    title: String!
    description: String!
  }
`;

export { typedefs as default };
