import { Context } from '../context'
export const productResolver = {
  Query: {
    getRecommended,
  },
}

async function getRecommended(parent, args, context: Context) {
  const { categoryId, limit, offset } = args
  return await context.prisma.product.findMany({
    skip: offset,
    take: limit,
    where: {
      categoryId,
      isMain: 1,
    },
  })
}
