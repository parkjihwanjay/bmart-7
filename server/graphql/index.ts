import { makeExecutableSchema } from 'graphql-tools'
import { mergeResolvers } from '@graphql-tools/merge'
import { fileLoader, mergeTypes } from 'merge-graphql-schemas'
import path from 'path'
import { userResolver } from './user/user-resolver'
import { categoryResolver } from './category/category-resolver'
import { productResolver } from './product/product-resolver'

const allTypes = fileLoader(path.join(__dirname, '/**/*.graphql'))
const resolvers = mergeResolvers([userResolver, categoryResolver, productResolver])

export const schema = makeExecutableSchema({
  resolvers,
  typeDefs: mergeTypes(allTypes),
})
