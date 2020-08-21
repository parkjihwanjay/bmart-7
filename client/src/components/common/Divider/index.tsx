import React from 'react'
import './style.scss'

export type DividerProps = {
  color?: string
}

export const Divider: React.FC<DividerProps> = (props) => {
  return <div className="divider"></div>
}
