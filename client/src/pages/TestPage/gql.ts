import gql from 'graphql-tag'

export const GET_PRODUCTS = gql`
  query {
    getProducts {
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
