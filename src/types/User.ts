import { gql } from "apollo-server";

export const User = gql`
  type User {
    user_id: ID!
    username: String!
    name: String!
    role: String! # enum
    display_picture: String
    bio: String
    notifications: [String]! # notif
    email: String!
    posts: [Post]!
    followers: [String]!
    following: [String]!
  }
`;
