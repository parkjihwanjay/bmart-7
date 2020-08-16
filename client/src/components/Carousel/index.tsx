import React from 'react'
import './style.scss'
import { FiArrowLeftCircle } from 'react-icons/fi'
import { FiArrowRightCircle } from 'react-icons/fi'

const imgUrlArr: Array<string> = [
  'https://cdn.pixabay.com/photo/2018/09/24/03/05/cat-3699032__480.jpg',
  'https://cdn.pixabay.com/photo/2017/08/07/18/57/dog-2606759__480.jpg',
  'https://cdn.pixabay.com/photo/2015/02/25/17/56/cat-649164__480.jpg',
  'https://cdn.pixabay.com/photo/2015/11/15/22/09/cat-1044914__480.jpg',
  'https://cdn.pixabay.com/photo/2020/07/09/17/39/puppy-5388151__480.jpg',
]

export const Carousel: React.FC = () => {
  const clickLeftBtn = (e) => {
    console.log(e.target)
  }

  const clickLRightBtn = () => {
    console.log('rr')
  }
  return (
    <div className="carousel">
      <div className="images">
        {imgUrlArr.map((url: string, idx: number) => (
          <img data-id={idx} src={url} alt="cat" />
        ))}
      </div>
      <FiArrowLeftCircle className="left-arrow-btn" size={20} onClick={clickLeftBtn} />
      <FiArrowRightCircle className="right-arrow-btn" size={20} onClick={clickLRightBtn} />
    </div>
  )
}
