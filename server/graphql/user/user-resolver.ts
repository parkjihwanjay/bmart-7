import { Context } from '../context'
import {
  UserWhereUniqueInput,
  UserWhereInput,
  UserCreateInput,
  FavoriteWhereUniqueInput,
} from '@prisma/client'
import { ApolloError } from 'apollo-server-express'

export const userResolver = {
  Query: {
    getUserById,
    getUsers,
    getUserFavorites,
  },
  Mutation: {
    insertUser,
    insertFavorite,
    deleteFavorite,
  },
}

async function getUserById(parent, args: UserWhereUniqueInput, context: Context) {
  const id = args.id
  return await context.prisma.user.findOne({
    where: {
      id: id,
    },
  })
}

async function getUsers(parent, args: { input: UserWhereInput }, context: Context) {
  const { id, userId, email, phone, address } = { ...args.input }
  return await context.prisma.user.findMany({
    where: {
      id,
      userId,
      email,
      phone,
      address,
    },
  })
}

async function getUserFavorites(parent, args: UserWhereUniqueInput, context: Context) {
  const id = args.id
  return await context.prisma.user
    .findOne({
      where: {
        id,
      },
    })
    .favorites({
      include: {
        product: true,
      },
    })
}

async function insertUser(parent, args: { input: UserCreateInput }, context: Context) {
  const { id, userId, email, phone, address } = { ...args.input }
  return await context.prisma.user.create({
    data: {
      id,
      userId,
      email,
      phone,
      address,
    },
  })
}

async function insertFavorite(parent, args: { input: FavoriteWhereUniqueInput }, context: Context) {
  const { userId, productId } = { ...args.input }

  const isExist =
    (await context.prisma.favorite.count({
      where: {
        productId,
        userId,
      },
    })) > 0

  if (isExist) {
    throw new ApolloError('Already Exist Favorite', 'DUPLICATE')
  }

  return await context.prisma.favorite.create({
    data: {
      product: {
        connect: {
          id: productId,
        },
      },
      user: {
        connect: {
          id: userId,
        },
      },
    },
    include: {
      product: true,
    },
  })
}

async function deleteFavorite(parent, args: FavoriteWhereUniqueInput, context: Context) {
  const id = args.id
  return await context.prisma.favorite.delete({
    where: {
      id,
    },
  })
}
