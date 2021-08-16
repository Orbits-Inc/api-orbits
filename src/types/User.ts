import { gql } from "apollo-server";

export const User = gql`
  type User {
    user_id: ID!
    username: String!
    name: String!
    display_picture: String
    bio: String
    email: String!
    posts: [String]!
    followers: [String]!
    following: [String]!
  }

  input UserParams {
    user_id: ID!
    username: String!
    name: String!
    display_picture: String
    bio: String
    email: String!
  }
`;
