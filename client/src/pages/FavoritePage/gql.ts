import gql from 'graphql-tag'

export const GET_FAVORITES = (userId) => gql`
  query {
    getUserFavorites(id: ${userId}) {
      id
      product {
        id
        title
        originPrice
        salePrice
        salePercent
        amount
        imageUrls
      }
    }
  }
`
