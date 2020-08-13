import { Context } from '../context'

export const userResolver = {
  Query: {
    getOneUser: async (parent, args, context: Context) => {
      return await context.prisma.user.findOne({
        where: args.input
      })
    },
    getUsers: async (parent, args, context: Context) => {
      return await context.prisma.user.findMany({
        where: args.input
      })
    }
  },
  Mutation: {
    insertUser: async (parent, args, context: Context) => {
      return await context.prisma.user.create({
        data: args.input
      })
    }
  }
}
