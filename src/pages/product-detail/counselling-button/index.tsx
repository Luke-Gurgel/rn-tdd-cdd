import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import getStyles, { Props } from './styles'
import { useCavy } from 'cavy'
import { counsellingButton } from '../test-ids'

const CounsellingButton = (props: Props) => {
  const registerTestId = useCavy()
  const testId = registerTestId(counsellingButton)
  const styles = getStyles(props)

  return (
    <TouchableOpacity
      ref={testId}
      onPress={props.onPress}
      testID={counsellingButton}
      style={styles.buttonContainer}>
      <Text style={styles.buttonText}>Buy for ${props.price}</Text>
    </TouchableOpacity>
  )
}

export default CounsellingButton
