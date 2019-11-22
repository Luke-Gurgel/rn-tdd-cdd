import React from 'react'
import { storiesOf } from '@storybook/react-native'
import ProductListUI from './index.ui'
import { ProductInterface } from 'src/types'
import {
  StoreProvider,
  NavigationProvider,
} from '__storybook__/decorators/providers'

export const products: ProductInterface[] = [
  { title: 'Shoes', price: 100 },
  { title: 'Shoes', price: 10 },
  { title: 'Shoes', price: 20 },
  { title: 'Electric scooter by Movio', price: 53 },
]

storiesOf('Product List component', module)
  .addDecorator(StoreProvider)
  .addDecorator(NavigationProvider)
  .add('fetching products', () => <ProductListUI loading products={[]} />)
  .add('empty list', () => <ProductListUI products={[]} loading={false} />)
  .add('product list with items', () => (
    <ProductListUI products={products} loading={false} />
  ))
