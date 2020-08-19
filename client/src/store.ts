import { createContext } from 'react'
import { Favorite } from '@/types'

export const StoreContext = createContext<StoreType>(undefined)
export const SetStoreContext = createContext<React.Dispatch<React.SetStateAction<StoreType>>>(
  undefined
)

export type StoreType = {
  favorites: Favorite[]
}

export const globalStore: StoreType = {
  favorites: [],
}
