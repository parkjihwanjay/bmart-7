import React, { useState, useRef, useEffect } from 'react'
import './style.scss'
import { FiArrowLeftCircle } from 'react-icons/fi'
import { FiArrowRightCircle } from 'react-icons/fi'

const imgUrlArr: Array<string> = [
  'https://lh3.googleusercontent.com/proxy/uamYJBhUo06Ke0OeQS3chx6_oz61FGl0wQwleDmXJcjieEJOQYyis3fIXoR85cke8pXuvXBCcw3QUKVBcVozV7bK8Wlm_0SIwNLbOMOeDwjCx0m1aP-byq3OCgOmvL2dotpTajJNs5CExyEzyMNHr6BSAm7BwdbKqJgdIIH3jA6xKsIh8GuLRqLk_DUV8O6CQAfQsYr0hU0n0KBAP5sAYsszVrsjqUHpRmcwO74Ze2vL0Jr5tLtuAsPPs35eIB6JycwbFdtckfKQyhB-fPRPDItAPW6Q28NKEHutGEuV3l-JN4xSckwI5pE9eT7cfk233U6mwGXW3_dZMjGdvAilIKVDYsYhIMNc-Sy2WhdfqOoaxPL_pU0DUCa2eZbtrJ6YuEmwGA',
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
    slideRef.current.style.transition = 'all 0.5s ease-in-out'
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`
  }, [currentSlide])

  setInterval(() => {
    clickLRightBtn()
    if (currentSlide === imgUrlArr.length + 1) {
      setCurrentSlide(0)
    } else {
      setCurrentSlide(currentSlide + 1)
    }
    // todo: 5가되면 0으로 돌아가게
  }, 2000)

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
      <FiArrowLeftCircle className="left-arrow-btn" onClick={clickLeftBtn} />
      <FiArrowRightCircle className="right-arrow-btn" onClick={clickLRightBtn} />
    </div>
  )
}

// todo : 시간고려, 마지막에서 바로 첫슬라이드 넘어가기 고려
