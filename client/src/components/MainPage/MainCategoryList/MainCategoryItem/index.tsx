import React from 'react'
import './style.scss'

interface IconProps {
  id: number
  url: string
}

export const MainCategoryItem: React.FC<IconProps> = (props) => {
  const { id, url } = props
  return <img className="category-item" data-id={id} src={url} alt="cat" />
}
