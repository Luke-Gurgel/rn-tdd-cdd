import React from 'react'
import { Keyboard } from 'react-native'
import { render, fireEvent } from 'src/test-utils'
import EmailInput from '../'

beforeAll(() => {
  Keyboard.dismiss = jest.fn()
})

describe('Email input component', () => {
  it('renders', () => {
    const { getByPlaceholderText } = render(<EmailInput />)
    expect(getByPlaceholderText('your_email@provider.com')).toBeDefined()
  })

  it('dismisses keyboard on blur', () => {
    const { getByPlaceholderText } = render(<EmailInput />)
    const inputEl = getByPlaceholderText('your_email@provider.com')
    fireEvent.focus(inputEl)
    fireEvent.blur(inputEl)
    expect(Keyboard.dismiss).toHaveBeenCalled()
  })

  it("renders 'Please enter a valid email' error message ", () => {
    const { getByText } = render(
      <EmailInput
        error={{ type: 'invalid', message: 'Please enter a valid email' }}
      />,
    )
    const errorLabelEl = getByText('Please enter a valid email')
    expect(errorLabelEl).toBeDefined()
  })

  it("renders 'Email is required' error message", () => {
    const { getByText } = render(
      <EmailInput error={{ type: 'required', message: 'Email is required' }} />,
    )
    const errorLabelEl = getByText('Email is required')
    expect(errorLabelEl).toBeDefined()
  })
})
