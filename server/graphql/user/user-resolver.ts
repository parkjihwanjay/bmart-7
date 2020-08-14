import { Context } from '../context'
import {
  UserWhereUniqueInput,
  UserWhereInput,
  UserCreateInput
} from '@prisma/client'

export const userResolver = {
  Query: {
    getUserById,
    getUsers
  },
  Mutation: {
    insertUser
  }
}

async function getUserById(
  parent,
  args: { input: UserWhereUniqueInput },
  context: Context
) {
  const { id } = { ...args.input }
  return await context.prisma.user.findOne({
    where: {
      id: id
    }
  })
}

async function getUsers(
  parent,
  args: { input: UserWhereInput },
  context: Context
) {
  const { id, userId, email, phone, address } = { ...args.input }
  return await context.prisma.user.findMany({
    where: {
      id,
      userId,
      email,
      phone,
      address
    }
  })
}

async function insertUser(
  parent,
  args: { input: UserCreateInput },
  context: Context
) {
  const { id, userId, email, phone, address } = { ...args.input }
  return await context.prisma.user.create({
    data: {
      id,
      userId,
      email,
      phone,
      address
    }
  })
}
