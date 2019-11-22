import { makeTestId } from '../make-test-id'

describe('Test id generator function', () => {
  it('returns single word param lower-cased', () => {
    expect(makeTestId('product')).toBe('product')
    expect(makeTestId('TITLE')).toBe('title')
  })

  it('formats multiple word param to kebab-case', () => {
    expect(makeTestId('product title')).toBe('product-title')
    expect(makeTestId('long product title')).toBe('long-product-title')
  })

  it('prepends an optional prefix to formatted param', () => {
    expect(makeTestId('shirt', 'product/')).toBe('product/shirt')
    expect(makeTestId('barcelona shirt', 'product/')).toBe(
      'product/barcelona-shirt',
    )
  })

  it('throws an error if param is an empty string', () => {
    try {
      makeTestId('')
      expect(true).toBe(false)
    } catch (error) {
      expect(error.message).toBe('makeTestId(): an empty string was passed in')
    }
  })
})
