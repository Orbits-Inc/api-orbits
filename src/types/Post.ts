import { gql } from "apollo-server";

export const Post = gql`
  type Post {
    post_id: ID!
    title: String!
    description: String!
    image: String
    content: String!
    read_time: Int!
    date: String! # date
    tags: [String]
    likes: [User]
    comments: [String]
    author: User
  }
`;
