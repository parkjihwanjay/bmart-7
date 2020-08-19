import React from 'react'
import './style.scss'
import { Product as ProductType } from '@/types'
import { IoMdHeartEmpty, IoMdHeart } from 'react-icons/io'
import { FaShoppingCart } from 'react-icons/fa'
import { GrCart } from 'react-icons/gr'
import { formatPrice } from '@/utils'

type PriceProps = {
  originPrice: number
  salePrice: number
  salePercent: number
}

/* 
functions
- 찜하기 눌렀을때, 토글링
- 장바구니 눌렀을때, 추가 or 개수 늘려주기
*/

const Price: React.FC<PriceProps> = (props) => {
  const { originPrice, salePrice, salePercent } = props

  return (
    <div className="price">
      {salePercent !== 0 ? (
        <>
          <div className="origin-price-wrapper">
            <div className="sale-percent">{formatPrice(salePercent)}%</div>
            <div className="origin-price">{formatPrice(originPrice)}원</div>
          </div>
          <div className="display-price">{formatPrice(salePrice)}원</div>
        </>
      ) : (
        <div className="display-price">{formatPrice(originPrice)}원</div>
      )}
    </div>
  )
}

const Cart: React.FC<{ id: number }> = (id) => {
  //id가 카트 안에 있는지 검사 (전역 스토어에서 찾기)
  const isInCart = false

  return (
    <div className={'cart icon-wrapper ' + (isInCart ? 'active' : '')}>
      {isInCart ? <GrCart className="icon" /> : <GrCart className="icon" />}
    </div>
  )
}

export const Product: React.FC<ProductType> = (props) => {
  const { id, title, originPrice, salePrice, salePercent, amount, imageUrls } = props
  const priceProps = { originPrice, salePrice, salePercent }

  return (
    <li className="product">
      <div className="image-wrapper">
        <img src="https://img-cf.kurly.com/shop/data/goods/1593658385217y0.jpg" alt="no image" />
        <div className="heart icon-wrapper">
          <IoMdHeartEmpty className="icon" />
          <IoMdHeart className="icon hidden" />
        </div>
      </div>
      <div className="product-wrapper">
        <div className="info-wrapper">
          <h3 className="title">{title}</h3>
          <Price {...priceProps} />
        </div>
        <Cart id={id} />
      </div>
    </li>
  )
}
