import React from 'react'
import { storiesOf } from '@storybook/react-native'
import ProductDetail from '.'

storiesOf('Product detail component', module).add('default appearance', () => (
  <ProductDetail />
))
