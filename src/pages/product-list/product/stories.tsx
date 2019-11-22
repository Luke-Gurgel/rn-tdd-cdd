import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { PageContainer } from '__storybook__/decorators/containers'
import {
  StoreProvider,
  NavigationProvider,
} from '__storybook__/decorators/providers'
import { ProductInterface } from 'src/types'
import Product from './'

export const products: { [key: string]: ProductInterface } = {
  aboveBudget: { title: 'Shoes', price: 100 },
  underBudget: { title: 'Shoes', price: 10 },
  equalBudget: { title: 'Shoes', price: 20 },
  longTitle: { title: 'Electric scooter by Movio', price: 53 },
}

storiesOf('Product component', module)
  .addDecorator(StoreProvider)
  .addDecorator(NavigationProvider)
  .addDecorator(PageContainer)
  .add('above budget', () => <Product product={products.aboveBudget} />)
  .add('under budget', () => <Product product={products.underBudget} />)
  .add('equal to budget', () => <Product product={products.equalBudget} />)
  .add('long product title', () => <Product product={products.longTitle} />)
