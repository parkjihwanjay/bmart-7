import React, {useEffect, useState, useRef} from 'react'
import {GET_MAIN_CATEGORIES} from './gql'
import { useQuery } from 'react-apollo'
import {CategoryPreview} from '../CategoryPreview'
import {CategoryPreviewHeader} from '../CategoryPreviewHeader/'
import './style.scss'

export const CategoryPreviewSection: React.FC = () => {

  const { loading, error, data } = useQuery(GET_MAIN_CATEGORIES, {
    fetchPolicy: "cache-and-network"
  })

  if(loading) return <p>Loading...</p>
  if(error) return <p>Error...</p>

  const mainCategoryList = data.getMainCategories
  
  return (
    <div className='category-preview-section'>
      <CategoryPreviewHeader mainCategoryList={mainCategoryList}/>
      {mainCategoryList.map(category => {
        const {title, id} = category
        return <CategoryPreview id={`catgory-${id}`} title={title} categoryId={187} key={id}/>
      })}
    </div>
  )
}