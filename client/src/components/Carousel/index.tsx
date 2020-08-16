import React from 'react'
import './style.scss'

const imgUrlArr: any = [
  'https://cdn.pixabay.com/photo/2018/09/24/03/05/cat-3699032__480.jpg',
  'https://cdn.pixabay.com/photo/2017/08/07/18/57/dog-2606759__480.jpg',
  'https://cdn.pixabay.com/photo/2015/02/25/17/56/cat-649164__480.jpg',
  'https://cdn.pixabay.com/photo/2015/11/15/22/09/cat-1044914__480.jpg',
  'https://cdn.pixabay.com/photo/2020/07/09/17/39/puppy-5388151__480.jpg',
]

export const Carousel: React.FC = () => {
  console.log(imgUrlArr, 'saas')

  return (
    <div className="carousel">
      <img alt="cat" src={imgUrlArr[0]} />
    </div>
  )
}
