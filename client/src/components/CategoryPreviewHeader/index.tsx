import React, { useState, useRef, useEffect } from 'react'
import './style.scss'

interface IProps {
  mainCategoryList: []
}

export const CategoryPreviewHeader: React.FC<IProps> = (props) => {
  const { mainCategoryList } = props
  const headerRef: {
    current: HTMLDivElement
  } = useRef()
  const [categoryId, setCategoryId] = useState(17)
  const [index, setIndex] = useState(0)

  const onClickHandler = ({ e, id, idx }) => {
    const $header = headerRef.current
    $header.scrollLeft = e.target.offsetLeft - $header.offsetWidth / 2 + e.target.offsetWidth / 2
    setCategoryId(id)
    setIndex(idx)
  }
  return (
    <div className="category-header sticky" ref={headerRef}>
      {mainCategoryList.map((category, idx) => {
        const { title, id } = category
        return id === categoryId ? (
          <a
            className="active"
            data-category={id}
            href={`#catgory-${id}`}
            key={id}
            onClick={(e) => onClickHandler({ e, id, idx })}
          >
            {title}
          </a>
        ) : (
          <a
            href={`#catgory-${id}`}
            data-category={id}
            key={id}
            onClick={(e) => {
              onClickHandler({ e, id, idx })
            }}
          >
            {title}
          </a>
        )
      })}
    </div>
  )
}
