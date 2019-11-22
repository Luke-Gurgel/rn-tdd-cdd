import React from 'react'
import 'react-native'
import { render } from 'src/test-utils'
import Product from '../'
import { ProductInterface } from 'src/types'

describe('Product component', () => {
  it('renders product title', () => {
    const product: ProductInterface = { title: 'Shoes', price: 20 }
    const { getByText } = render(<Product product={product} />)
    expect(getByText('Shoes')).toBeDefined()
  })

  it('renders product price formatted as USD', () => {
    const product: ProductInterface = { title: 'Shoes', price: 20 }
    const { getByText } = render(<Product product={product} />)
    expect(getByText('$20.00')).toBeDefined()
  })

  it("renders message 'too expensive' if product price is above budget", () => {
    const product: ProductInterface = { title: 'Shoes', price: 100 }
    const { getByText } = render(<Product product={product} />)
    expect(getByText('too expensive')).toBeDefined()
  })

  it("renders message 'within reach!' if product price is under budget", () => {
    const product: ProductInterface = { title: 'Shoes', price: 10 }
    const { getByText } = render(<Product product={product} />)
    expect(getByText('within reach!')).toBeDefined()
  })

  it("renders message 'within reach!' if product price equals budget", () => {
    const product: ProductInterface = { title: 'Shoes', price: 20 }
    const { getByText } = render(<Product product={product} />)
    expect(getByText('within reach!')).toBeDefined()
  })
})
