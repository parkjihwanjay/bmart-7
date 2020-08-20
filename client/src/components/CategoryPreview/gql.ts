import gql from 'graphql-tag'

export const GET_PRODUCTS = gql`
  query ($categoryId : Int!, $limit:Int!){
    getProducts(categoryId : $categoryId, limit:$limit) {
      id
      title
      originPrice
      salePrice
      salePercent
      amount
      mainImage
      bannerImage
    }
  }
`
