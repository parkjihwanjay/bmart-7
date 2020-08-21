import React, { useRef } from 'react'
import './style.scss'

export type DividerProps = {
  backgroundColor?: string
  height?: number
  paddingTop?: number
  paddingBottom?: number
}

export const Divider: React.FC<DividerProps> = (props) => {
  const { backgroundColor, height, paddingTop, paddingBottom } = props
  const barElement = useRef<HTMLDivElement>()

  if (backgroundColor) barElement.current.style.backgroundColor = backgroundColor
  if (height) barElement.current.style.height = `${height}px`
  if (paddingTop) barElement.current.style.paddingTop = `${paddingTop}px`
  if (paddingBottom) barElement.current.style.paddingBottom = `${paddingBottom}px`

  return (
    <div className="divider">
      <div className="bar" ref={barElement}></div>
    </div>
  )
}
