import React from 'react'
import { Text, Keyboard, TextInput } from 'react-native'
import { useCavy, wrap } from 'cavy'
import { emailInput, errorLabel } from '../test-ids'
import getStyles, { Props } from './styles'

const EmailInput = (props: Props) => {
  const registerTestId = useCavy()
  const inputTestId = registerTestId(emailInput)
  const errorTestId = registerTestId(errorLabel)
  const TestableText = wrap<{ style: any }>(Text)

  const styles = getStyles(props)

  const onBlur = () => {
    Keyboard.dismiss()
    props.getValue?.() === '' ? props.clearError?.() : props.validate?.()
  }

  const onChangeText = (text: string) => {
    props.clearError?.()
    props.onChangeText?.(text)
  }

  return (
    <>
      <TextInput
        onBlur={onBlur}
        ref={inputTestId}
        style={styles.emailInput}
        onChangeText={onChangeText}
        keyboardType="email-address"
        textContentType="emailAddress"
        placeholder="your_email@provider.com"
      />
      {props.error && (
        <TestableText ref={errorTestId} style={styles.errorLabel}>
          {props.error.message}
        </TestableText>
      )}
    </>
  )
}

export default EmailInput
export * from './validation'
