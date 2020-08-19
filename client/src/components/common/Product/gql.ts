import gql from 'graphql-tag'

export const INSERT_FAVORITES = (userId, productId) => gql`
  mutation {
    insertFavorite(input: {
      userId: ${userId}
      productId: ${productId}
    }) {
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

export const DELETE_FAVORITES = (favoriteId) => gql`
  mutation {
    deleteFavorite(id: ${favoriteId}) {
      id
    }
  }
`
