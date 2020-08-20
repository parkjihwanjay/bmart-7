import React, { useState, useContext } from 'react'
import './style.scss'
import { StoreContext, SetStoreContext } from '@/store'
import { ProductList } from '@/components/common/ProductList'
import { GET_RECOMMENDED } from './gql'
import { useQuery } from 'react-apollo'
import {BsArrowCounterclockwise} from 'react-icons/bs'
interface IProps {
  title: string
  categoryId : number
  totalPageNum : number
}

export const RecommendedContainer: React.FC<IProps> = (props) => {
  const limit = 6
  const [pageNum, setPageNum] = useState(1)
  const offset = (pageNum-1)*limit
  const { title, categoryId, totalPageNum } = props
  const store = useContext(StoreContext)
  const favoriteList = store.favorites.map((favorite) => favorite.product)
  const { loading, error, data, fetchMore } = useQuery(GET_RECOMMENDED, {
    variables : {
      offset,
      limit,
      categoryId
    },
    fetchPolicy: "cache-and-network"
  })

  if(loading) return <p>Loading...</p>
  if(error) return <p>Error...</p>

  const productList = data.getRecommended

  function onClickHandler(e){
    setPageNum(pageNum+1)
  }

  return (
    <div className="recommended-container">
      <h2>{title}</h2>
      <ProductList column={3} productList={productList} />
      <button onClick={onClickHandler}>
        <span><BsArrowCounterclockwise className="title-icon"/>{title}?</span> 다른 상품 보기 {pageNum}/{totalPageNum}
      </button>
    </div>
  )
}
