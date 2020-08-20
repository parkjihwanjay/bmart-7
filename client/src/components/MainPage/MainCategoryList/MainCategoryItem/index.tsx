import React from 'react'
import './style.scss'

interface IconProps {
  id: number
  url: string
}

export const MainCategoryItem: React.FC<IconProps> = (props) => {
  const { id, url } = props
  const clickMainIcon = (e: any) => {
    // todo:클릭시 해당 페이지 이동
    console.log(e.target)
  }
  return <img className="category-item" data-id={id} src={url} alt="cat" onClick={clickMainIcon} />
}
