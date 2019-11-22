import { Component } from 'react'
import { TextInputProps, TouchableOpacityProps } from 'react-native'
import { TestScope } from 'cavy'
import { product } from '../src/pages/product-list/test-ids'
import { nativeSyntheticEvent, gestureResponderEvent } from './fixtures'
import {
  emailInput,
  errorLabel,
  counsellingButton,
} from '../src/pages/product-detail/test-ids'

export default function(spec: TestScope) {
  spec.describe('Product detail screen', () => {
    spec.it(
      'renders error label on blur if invalid email is entered',
      async () => {
        await performNavigation(spec)
        await enterInvalidEmail(spec)
      },
    )

    spec.it(
      'does not render error label on blur if input is empty',
      async () => {
        await performNavigation(spec)
        const input = (await spec.findComponent(emailInput)) as Component<
          TextInputProps
        >
        input.props.onFocus?.(nativeSyntheticEvent)
        input.props.onBlur?.(nativeSyntheticEvent)
        await spec.notExists(errorLabel)
      },
    )

    spec.it('hides error label if user starts typing again', async () => {
      await performNavigation(spec)
      await enterInvalidEmail(spec)
      await spec.fillIn(emailInput, 'a')
      await spec.notExists(errorLabel)
    })

    spec.it(
      'hides error label after invalid email is entered and input is focused again and emptied out',
      async () => {
        await performNavigation(spec)
        await enterInvalidEmail(spec)
        const input = (await spec.findComponent(emailInput)) as Component<
          TextInputProps
        >
        await spec.fillIn(emailInput, '')
        input.props.onBlur?.(nativeSyntheticEvent)
        await spec.notExists(errorLabel)
      },
    )

    spec.it(
      'renders an error label on submitButtonPress if input is empty',
      async () => {
        await performNavigation(spec)

        const btn = (await spec.findComponent(counsellingButton)) as Component<
          TouchableOpacityProps
        >

        btn.props.onPress?.(gestureResponderEvent)
        await spec.containsText(errorLabel, 'Email is required')
      },
    )
  })
}

const performNavigation = async (spec: TestScope) => {
  await spec.pause(2000) // wait for fetch call
  await spec.press(product + 'hat')
}

const enterInvalidEmail = async (spec: TestScope) => {
  const input = (await spec.findComponent(emailInput)) as Component<
    TextInputProps
  >
  await spec.fillIn(emailInput, 'invalid_email')
  input.props.onBlur?.(nativeSyntheticEvent)
  await spec.containsText(errorLabel, 'Please enter a valid email')
}
