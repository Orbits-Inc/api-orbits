import { postQuery } from "./Post.query";
import { userQuery } from "./User.query";

export const query = {
  ...userQuery,
  ...postQuery,
};
