import { StyleSheet, Platform } from 'react-native'
import { FieldError } from 'react-hook-form/dist/types'

export interface Props {
  inputRef?: any
  error?: FieldError
  validate?: () => void
  getValue?: () => string
  clearError?: () => void
  onChangeText?: (text: string) => void
}

export default function getStyles(props: Props) {
  return StyleSheet.create({
    emailInput: {
      borderRadius: 12,
      alignSelf: 'stretch',
      paddingHorizontal: 14,
      borderWidth: props.error ? 4 : 0,
      color: props.error ? '#fff' : '#333',
      borderColor: props.error ? '#ff3333' : '#fff',
      backgroundColor: props.error ? '#ff6666' : '#fff',
      paddingVertical: Platform.select({ ios: 18, android: 14 }),
    },
    errorLabel: {
      color: '#ff3333',
      marginTop: 8,
      fontSize: 16,
      marginHorizontal: 5,
      alignSelf: 'flex-start',
      fontFamily: 'Pacifico-Regular',
    },
  })
}
