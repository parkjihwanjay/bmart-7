import { Context } from '../context'

export const userResolver = {
  Query: {
    getUsers: (parent, args, context: Context) => {
      return context.prisma.user.findMany()
    }
  },
  Mutation: {
    insertUser: (parent, args, context: Context) => {
      return context.prisma.user.create({ data: { email: args.email } })
    }
  }
}
