import { User } from "@prisma/client";
import { Context } from "src/context";

export const userQuery = {
  createUser: async (
    _: any,
    data: { data: User },
    ctx: Context
  ): Promise<User | null> => {
    await ctx.prisma.user.create({
      data: {
        ...data.data,
      },
    });

    console.log(data.data);

    const createdUser = await ctx.prisma.user.findUnique({
      where: {
        user_id: data.data.user_id,
      },
    });

    return createdUser;
  },

  AllUsers: async (_: any, __: any, ctx: Context): Promise<User[]> => {
    const users = await ctx.prisma.user.findMany();
    return users;
  },

  GetUserByID: async (
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

  SearchUsers: async (
    _: any,
    { query }: { query: string },
    ctx: Context
  ): Promise<User[] | []> => {
    const users = await ctx.prisma.user.findMany({
      where: {
        OR: [
          {
            username: {
              contains: query,
            },
          },
          {
            name: {
              contains: query,
            },
          },
        ],
      },
    });

    return users;
  },

  GetUserByUsername: async (
    _: any,
    { username }: { username: string },
    ctx: Context
  ) => {
    const user = await ctx.prisma.user.findUnique({
      where: {
        username,
      },
    });

    return user;
  },
};
