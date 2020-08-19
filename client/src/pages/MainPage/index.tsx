import React from 'react'
import { SlickCarousel } from '@/components/Carousel/index.tsx'
import './style.scss'

export const MainPage: React.FC = () => {
  return (
    <div id="main-page">
      <SlickCarousel />
    </div>
  )
}
