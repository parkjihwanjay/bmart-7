import React, { useEffect, useState } from 'react'
import { ProductList } from '@/components/common/ProductList'
import { client } from '@/ApolloClient'
import { GET_PRODUCTS } from './gql'

export const TestPage: React.FC = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const {
        data: { getProducts },
      } = await client.query({ query: GET_PRODUCTS })

      setProducts(getProducts.slice(0, 30))
    }
    fetchProducts()
  }, [])

  return (
    <div className="test-page">
      <ProductList productList={products} column={3}></ProductList>
    </div>
  )
}
