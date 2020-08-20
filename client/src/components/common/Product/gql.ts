import gql from 'graphql-tag'

export const INSERT_FAVORITES = (userId: number, productId: number) => gql`
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
        mainImage
      }
    }
  }
`

export const DELETE_FAVORITES = (favoriteId: number) => gql`
  mutation {
    deleteFavorite(id: ${favoriteId}) {
      id
    }
  }
`
