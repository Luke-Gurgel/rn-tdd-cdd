import { ProductInterface } from 'src/types'

export interface ProductsState {
  loading: boolean
  list: ProductInterface[]
}

export interface RootState {
  budget: number
  products: ProductsState
}

export const rootState: RootState = {
  budget: 20,
  products: {
    loading: true,
    list: [],
  },
}
