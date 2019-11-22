import React, { BaseSyntheticEvent } from 'react'
import { render } from 'src/test-utils'
import { toHaveStyle } from '@testing-library/jest-native'
import { counsellingButton } from '../../test-ids'
import CounsellingButton from '..'

beforeAll(() => {
  expect.extend({ toHaveStyle })
})

const onPress = (_: BaseSyntheticEvent<object, any, any>): void => undefined

describe('CounsellingButton component', () => {
  it('displays the product price in the title', () => {
    const { getByText } = render(
      <CounsellingButton canAfford price={137} onPress={onPress} />,
    )
    expect(getByText('Buy for $137')).toBeDefined()
  })

  it('it renders with green background if product price is lower than budget', () => {
    const { getByTestId } = render(
      <CounsellingButton canAfford price={5} onPress={onPress} />,
    )
    const buttonEl = getByTestId(counsellingButton)
    expect(buttonEl).toBeDefined()
    expect(buttonEl).toHaveStyle({ backgroundColor: '#90ee90' })
  })

  it('it renders with green background if product price is higher than budget', () => {
    const { getByTestId } = render(
      <CounsellingButton canAfford={false} price={100} onPress={onPress} />,
    )
    const buttonEl = getByTestId(counsellingButton)
    expect(buttonEl).toBeDefined()
    expect(buttonEl).toHaveStyle({ backgroundColor: '#ff3333' })
  })
})
