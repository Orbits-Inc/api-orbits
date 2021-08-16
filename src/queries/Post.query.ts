import { Post } from "@prisma/client";
import { Context } from "src/context";

export const postQuery = {
  AllPosts: async (_: any, __: any, ctx: Context) => {
    const posts = await ctx.prisma.post.findMany();
    return posts;
  },

  GetPostByID: async (
    _: any,
    { id }: { id: string },
    ctx: Context
  ): Promise<Post | null> => {
    const post = await ctx.prisma.post.findUnique({
      where: {
        post_id: id,
      },
    });

    return post;
  },

  SearchPosts: async (
    _: any,
    { query }: { query: string },
    ctx: Context
  ): Promise<Post[]> => {
    const posts = ctx.prisma.post.findMany({
      where: {
        title: {
          contains: query,
        },
      },
    });

    return posts;
  },

  GetTopPosts: async (_: any, __: any, ctx: Context): Promise<Post[]> => {
    const posts = await ctx.prisma.post.findMany();
    for (let i = 0; i < posts.length; i++) {
      for (let j = 0; j < posts.length - 1; j++) {
        if (
          posts[j].comments.length + posts[j].likes.length <
          posts[j + 1].comments.length + posts[j + 1].likes.length
        ) {
          const temp = posts[j];
          posts[j] = posts[j + 1];
          posts[j + 1] = temp;
        }
      }
    }

    return posts;
  },
};
