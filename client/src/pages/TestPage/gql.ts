import gql from 'graphql-tag'

export const GET_PRODUCTS = gql`
  query {
    getProducts(input: {}) {
      id
      title
      originPrice
      salePrice
      salePercent
      amount
      mainImage
    }
  }
`
