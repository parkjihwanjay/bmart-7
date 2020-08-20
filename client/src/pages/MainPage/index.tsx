import React from 'react'
import { SlickCarousel } from '@/components/common/Carousel'
import { MainCategoryList } from '@/components/MainPage/MainCategoryList'
import './style.scss'

export const MainPage: React.FC = () => {
  return (
    <div id="main-page">
      <SlickCarousel />
      <MainCategoryList />
    </div>
  )
}
