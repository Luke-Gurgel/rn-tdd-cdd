import React from 'react'
import { View, Alert } from 'react-native'
import { useCavy } from 'cavy'
import useForm from 'react-hook-form'
import EmailInput, { emailInputValidation } from './email-input'
import CounsellingButton from './counselling-button'
import { productDetail } from './test-ids'
import styles from './styles'

interface FormData {
  email: string
}

const ProductDetail = () => {
  const registerTestId = useCavy()
  const testId = registerTestId(productDetail)

  const form = useForm<FormData>({ defaultValues: { email: '' } })

  const emailInputRef = form.register({ name: 'email' }, emailInputValidation)
  const onEmailInputTextChange = (text: string) => form.setValue('email', text)
  const validateEmailInput = () => form.triggerValidation({ name: 'email' })

  const onSubmitButtonPress = async () => {
    const isFormValid = await form.triggerValidation()

    if (!isFormValid) return Alert.alert('Form is invalid!!!')

    form.handleSubmit(data => console.log(data))
  }

  return (
    <View style={styles.page} ref={testId}>
      <EmailInput
        inputRef={emailInputRef}
        error={form.errors.email}
        validate={validateEmailInput}
        onChangeText={onEmailInputTextChange}
        getValue={() => form.getValues().email}
        clearError={() => form.clearError('email')}
      />
      <CounsellingButton canAfford price={20} onPress={onSubmitButtonPress} />
    </View>
  )
}

export default ProductDetail
