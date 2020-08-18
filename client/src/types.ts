export type Section = {
  id: number
  title: string
  mainCategories: MainCategory[]
}

export type MainCategory = {
  id: number
  title: string
  section: Section
  categories: Category[]
}

export type Category = {
  id: number
  title: string
  mainCategory: MainCategory
  products: Product[]
}

export type Product = {
  id: number
  title: string
  category: Category
  originPrice: number
  salePrice: number
  salePercent: number
  isMain: boolean
  hit: number
  amount: number
  imageUrls: string
}
