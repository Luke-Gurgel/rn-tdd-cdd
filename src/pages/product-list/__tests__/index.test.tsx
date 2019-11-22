import React from 'react'
import 'react-native'
import ProductListUI from '../index.ui'
import { productsLoading, productsEmpty } from '../test-ids'
import { render } from 'src/test-utils'
import { products } from '../stories'

describe('ProductListUI component', () => {
  it('renders a loading component while the products are being fetched', () => {
    const { getByTestId } = render(<ProductListUI loading products={[]} />)
    expect(getByTestId(productsLoading)).toBeDefined()
  })

  it('renders a specific component when the product list is empty', () => {
    const { getByTestId } = render(
      <ProductListUI products={[]} loading={false} />,
    )
    expect(getByTestId(productsEmpty)).toBeDefined()
  })

  it('renders a grid of products if product list is not empty', () => {
    const { asJSON } = render(
      <ProductListUI products={products} loading={false} />,
    )
    expect(asJSON()).toMatchSnapshot()
  })
})
