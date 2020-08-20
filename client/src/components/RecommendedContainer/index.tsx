import React, { useEffect, useState, useContext } from 'react'
import './style.scss'
import { StoreContext, SetStoreContext } from '@/store'
import {Product} from '@/types'

interface IProps{
    title : string
}

export const RecommendedContainer: React.FC<IProps> = (props) => {
    const { title } = props

    const store = useContext(StoreContext)
    const productList = store.favorites.map((favorite) => favorite.product)

    useEffect(() => {
        // 상품 6개를 가져오는 로직 추가
    }, [])

    return (
        <div className='recommended-container'>
            <h2>{title}</h2>
            {/* <ProductList column={3} productList={productList} /> */}
            <input type="button" value="지금 머 먹지?"/>
        </div>
    )
}