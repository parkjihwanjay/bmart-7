import { Context } from '../context'

export const categoryResolver = {
  Query: {
    getSections,
    getMainCategories,
  },
}

async function getSections(parent, args, context: Context) {
  return await context.prisma.section.findMany({
    include: {
      mainCategories: {
        include: {
          categories: true,
        },
      },
    },
  })
}

async function getMainCategories(parent, args, context: Context) {
  return await context.prisma.mainCategory.findMany()
}
