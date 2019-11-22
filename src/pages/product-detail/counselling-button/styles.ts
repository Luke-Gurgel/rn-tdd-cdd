import { BaseSyntheticEvent } from 'react'
import { StyleSheet } from 'react-native'

export interface Props {
  price: number
  canAfford: boolean
  onPress: (e: BaseSyntheticEvent<object, any, any>) => void
}

export default function getStyles(props: Props) {
  return StyleSheet.create({
    buttonContainer: {
      marginTop: 20,
      borderRadius: 12,
      paddingVertical: 15,
      alignItems: 'center',
      paddingHorizontal: 45,
      justifyContent: 'center',
      backgroundColor: props.canAfford ? '#90ee90' : '#ff3333',
    },
    buttonText: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
    },
  })
}
