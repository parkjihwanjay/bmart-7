import React from 'react'
import './style.scss'
// import { MainCategory } from '@/types'

// type MainCategoryListType = {
//   mainCategoryList: MainCategory[]
// }

const categoryimgUrlList: Array<string> = [
  './mainIcons/1.jpeg',
  './mainIcons/2.jpeg',
  './mainIcons/3.jpeg',
  './mainIcons/4.jpeg',
  './mainIcons/5.jpeg',
  './mainIcons/6.jpeg',
  './mainIcons/7.jpeg',
  './mainIcons/8.jpeg',
  './mainIcons/9.jpeg',
  './mainIcons/10.jpeg',
]

export const MainCategoryList: React.FC = () => {
  return (
    <div className="main-category-section">
      <div className="category-text-wrap">
        <div className="category-time-text">배달시간 16~20분 예상</div>
        <div className="category-deadline-text">24시까지 주문 가능</div>
      </div>
      <ul className="category-wrap">
        {categoryimgUrlList.map((url: string, idx: number) => (
          <img className="category-item" data-id={idx} src={url} alt="cat" />
        ))}
      </ul>
    </div>
  )
}
