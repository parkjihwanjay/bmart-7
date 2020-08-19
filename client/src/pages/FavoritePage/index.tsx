import React, { useEffect, useState, useContext } from 'react'
import { client } from '@/ApolloClient'
import { ProductList } from '@/components/ProductList'
import './style.scss'
import { GET_FAVORITES } from './gql'
import { StoreContext, SetStoreContext } from '@/store'

const COLUMN_NUM = 2

export const FavoritePage = () => {
  const store = useContext(StoreContext)
  const setStore = useContext(SetStoreContext)
  const productList = store.favorites.map((favorite) => favorite.product)

  useEffect(() => {
    const fetchFavorites = async () => {
      const {
        data: { getUserFavorites },
      } = await client.query({ query: GET_FAVORITES(5) })

      const newStore = { ...store }
      newStore.favorites = getUserFavorites

      setStore(newStore)
    }
    fetchFavorites()
  }, [])

  return (
    <div id="favorite-page">
      <ProductList productList={productList} column={COLUMN_NUM} />
    </div>
  )
}
