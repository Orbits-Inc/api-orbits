import { gql } from "apollo-server";

export const Query = gql`
  type Query {
    AllUsers: [User]!
    ByID(id: String): User
    Search(query: String): [User]!
    GetByUsername(username: String): User
  }
`;

export * from "./Post";
export * from "./User";
