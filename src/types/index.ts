import { gql } from "apollo-server";

export const Query = gql`
  type Query {
    AllUsers: [User]!
    ByID(id: String): User
  }
`;

export * from "./Post";
export * from "./User";
