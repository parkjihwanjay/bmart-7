import React, { useState, useRef, useEffect } from 'react'
import './style.scss'
import { FiArrowLeftCircle } from 'react-icons/fi'
import { FiArrowRightCircle } from 'react-icons/fi'

const imgUrlArr: Array<string> = [
  'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/51d070b0-83ff-4a4f-b7e2-7d88f394a372/_2020-08-16__2.02.49.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20200817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20200817T102427Z&X-Amz-Expires=86400&X-Amz-Signature=3181afd7efa008197083d1fd728ae8f5b9446518393c3b34b453bca3be3fe296&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22_2020-08-16__2.02.49.png%22',
  'https://photo.jtbc.joins.com/news/2018/01/22/20180122172000506.jpg',
  'https://menu.mt.co.kr/moneyweek/thumb/2020/04/13/06/2020041315148091718_1.jpg',
  'https://photo.jtbc.joins.com/news/2018/01/22/20180122172000506.jpg',
  'https://menu.mt.co.kr/moneyweek/thumb/2020/04/09/06/2020040910318013214_1.jpg',
]

export const Carousel: React.FC = () => {
  const totalSlides = imgUrlArr.length - 1
  const [currentSlide, setCurrentSlide] = useState(0)
  const slideRef = useRef(null)

  const clickLRightBtn = () => {
    if (currentSlide >= totalSlides) {
      setCurrentSlide(0)
    } else {
      setCurrentSlide(currentSlide + 1)
    }
  }

  const clickLeftBtn = () => {
    if (currentSlide === 0) {
      setCurrentSlide(totalSlides)
    } else {
      setCurrentSlide(currentSlide - 1)
    }
  }

  useEffect(() => {
    if (currentSlide === imgUrlArr.length - 1) {
      console.log('ss')
      // setCurrentSlide(1)
      // slideRef.current.style.transition = 'all 0.5s ease-in-out'
      // slideRef.current.style.transform = `translateX(-100%)`
    }
    slideRef.current.style.transition = 'all 0.5s ease-in-out'
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`
  }, [currentSlide])

  // setInterval(() => {
  //   // clickLRightBtn()
  //   setCurrentSlide(currentSlide + 1)
  //   console.log('ee')
  // }, 2000)

  return (
    <div className="carousel">
      <div className="images" ref={slideRef}>
        {imgUrlArr.map((url: string, idx: number) => (
          <img data-id={idx} src={url} alt="cat" />
        ))}
      </div>
      <div className="cur-number">
        {currentSlide + 1}/{imgUrlArr.length}
      </div>
      <FiArrowLeftCircle className="left-arrow-btn" size={20} onClick={clickLeftBtn} />
      <FiArrowRightCircle className="right-arrow-btn" size={20} onClick={clickLRightBtn} />
    </div>
  )
}

// todo : 시간고려, 마지막에서 바로 첫슬라이드 넘어가기 고려
