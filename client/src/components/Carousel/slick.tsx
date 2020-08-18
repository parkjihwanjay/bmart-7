import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import './slickStyle.scss'

const imgUrlArr: Array<string> = [
  'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/51d070b0-83ff-4a4f-b7e2-7d88f394a372/_2020-08-16__2.02.49.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20200817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20200817T102427Z&X-Amz-Expires=86400&X-Amz-Signature=3181afd7efa008197083d1fd728ae8f5b9446518393c3b34b453bca3be3fe296&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22_2020-08-16__2.02.49.png%22',
  'https://photo.jtbc.joins.com/news/2018/01/22/20180122172000506.jpg',
  'https://menu.mt.co.kr/moneyweek/thumb/2020/04/13/06/2020041315148091718_1.jpg',
  'https://photo.jtbc.joins.com/news/2018/01/22/20180122172000506.jpg',
  'https://menu.mt.co.kr/moneyweek/thumb/2020/04/09/06/2020040910318013214_1.jpg',
]

export const SlickCarousel: React.FC = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slideToShow: 1,
    arrowa: true,
    slideToScroll: 1,
    autoplay: true,
    className: 'slides',
  }
  return (
    <div className="slick-carousel">
      <Slider className="images" {...settings}>
        {imgUrlArr.map((url: string, idx: number) => (
          <img width="100%" src={url} alt="cat" />
        ))}
      </Slider>
    </div>
  )
}
