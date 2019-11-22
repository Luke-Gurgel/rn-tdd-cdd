import { formatProductPrice } from '../helpers'

describe('Currency formatter helper for Android', () => {
  it('prepends the string with a $ sign', () => {
    const actual = formatProductPrice(20)
    expect(actual.startsWith('$')).toBeTruthy()
  })

  it('correctly formats 1 digit value', () => {
    const actual = formatProductPrice(5)
    expect(actual).toBe('$5.00')
  })

  it('correctly formats 2 digit value', () => {
    const actual = formatProductPrice(15)
    expect(actual).toBe('$15.00')
  })

  it('correctly formats 3 digit value', () => {
    const actual = formatProductPrice(150)
    expect(actual).toBe('$150.00')
  })

  it('correctly formats 1 digit value with decimals', () => {
    const actual = formatProductPrice(5.45)
    expect(actual).toBe('$5.45')
  })

  it('correctly formats 2 digit value with decimals', () => {
    const actual = formatProductPrice(20.67)
    expect(actual).toBe('$20.67')
  })

  it('correctly formats 3 digit value with decimals', () => {
    const actual = formatProductPrice(150.23)
    expect(actual).toBe('$150.23')
  })
})
