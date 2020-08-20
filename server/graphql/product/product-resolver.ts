import { Context } from '../context'
import { ProductWhereUniqueInput, ProductOrderByInput } from '@prisma/client'

export const productResolver = {
  Query: {
    getProduct,
    getProducts,
    getRecommended,
  },
}

async function getProduct(parent, args: ProductWhereUniqueInput, context: Context) {
  const { id } = args
  return await context.prisma.product.findOne({
    where: {
      id,
    },
  })
}

type ProductFilterInput = {
  categoryId?: number
  mainCategoryId?: number
  sectionId?: number
  sortBy?: string
  isAscending?: boolean
  take: number
}

async function getProducts(parent, args: { input: ProductFilterInput }, context: Context) {
  const { categoryId, mainCategoryId, sectionId, sortBy, isAscending, take } = args.input

  const sortCondition: ProductOrderByInput = {}
  if (sortBy) sortCondition[sortBy] = isAscending ? 'asc' : 'desc'

  let productList = []
  if (categoryId) {
    const category = await context.prisma.category.findOne({
      where: {
        id: categoryId,
      },
      include: {
        products: {
          orderBy: sortCondition,
          take,
        },
      },
    })
    productList = category.products
    console.log(productList.length)
  } else if (mainCategoryId) {
    const mainCategory = await context.prisma.mainCategory.findOne({
      where: {
        id: mainCategoryId,
      },
      include: {
        categories: {
          include: {
            products: {
              orderBy: sortCondition,
              take,
            },
          },
        },
      },
    })

    mainCategory.categories.forEach((category) => {
      productList = [...productList, ...category.products]
    })
  } else if (sectionId) {
    const section = await context.prisma.section.findOne({
      where: {
        id: sectionId,
      },
      include: {
        mainCategories: {
          include: {
            categories: {
              include: {
                products: {
                  orderBy: sortCondition,
                  take,
                },
              },
            },
          },
        },
      },
    })

    section.mainCategories.forEach((mainCategory) => {
      mainCategory.categories.forEach((category) => {
        productList = [...productList, ...category.products]
      })
    })
  } else {
    productList = await context.prisma.product.findMany({
      orderBy: sortCondition,
      take,
    })
  }

  return productList
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
