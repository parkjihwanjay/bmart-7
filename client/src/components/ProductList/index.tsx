import React, { useEffect, useRef } from 'react'
import './style.scss'
import { Product as ProductType } from '@/types'
import { Product } from '@/components/Product'

type ProductListType = {
  productList: ProductType[]
  column: number
}

export const ProductList: React.FC<ProductListType> = (props) => {
  const { productList, column } = props
  const productListElement = useRef<HTMLUListElement>()

  useEffect(() => {
    productListElement.current.style.gridTemplateColumns = `repeat(${column}, 1fr)`
  }, [])

  return (
    <ul className="product-list" ref={productListElement}>
      {productList.map((product) => (
        <Product {...product} key={product.id} />
      ))}
    </ul>
  )
}
