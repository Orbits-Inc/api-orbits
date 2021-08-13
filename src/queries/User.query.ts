import { User } from "@prisma/client";
import { Context } from "src/context";

export const userQuery = {
  AllUsers: async (_: any, __: any, ctx: Context): Promise<User[]> => {
    const users = ctx.prisma.user.findMany();
    return users;
  },

  ByID: async (
    _: any,
    // id should be of 24 chars
    { id }: { id: string },
    ctx: Context
  ): Promise<User | null> => {
    const user = await ctx.prisma.user.findUnique({
      where: {
        user_id: id,
      },
    });

    return user;
  },
};
