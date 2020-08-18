import React from 'react'
import { Login } from '@/components/Login'
import { Carousel } from '@/components/Carousel'

import { SlickCarousel } from '@/components/Carousel/slick.tsx'

export const LoginPage = () => {
  return (
    <div>
      <Carousel />
      <Login />
      <SlickCarousel />
    </div>
  )
}
