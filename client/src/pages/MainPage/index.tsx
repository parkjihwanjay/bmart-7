import React from 'react'
import { SlickCarousel } from '@/components/common/Carousel'
import { MainCategoryList } from '@/components/MainPage/MainCategoryList'
import { RecommendedContainer } from '@/components/RecommendedContainer'
import './style.scss'
import { PreviewContainer } from '@/components/MainPage/PreviewContainer'

export const MainPage: React.FC = () => {
  return (
    <div id="main-page">
      <SlickCarousel />
      <MainCategoryList />
      <PreviewContainer />
      <RecommendedContainer title="지금 머먹지" categoryId={187} totalPageNum={3} />
      <RecommendedContainer title="지금 필요한 생필품!" categoryId={187} totalPageNum={3} />
    </div>
  )
}
