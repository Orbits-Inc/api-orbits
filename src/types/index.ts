import { gql } from "apollo-server";

export const Query = gql`
  type Query {
    # User
    AllUsers: [User]!
    GetUserByID(id: String): User
    SearchUsers(query: String): [User]!
    GetUserByUsername(username: String): User

    # Post
    AllPosts: [Post]!
    GetPostByID(id: String): Post
    SearchPosts(query: String): [Post]!
  }
`;

export * from "./Post";
export * from "./User";
