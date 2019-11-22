import React from 'react'
import { Text } from 'react-native'
import styles from './styles'

const EmptyListItem = () => {
  return (
    <>
      <Text style={styles.icon}>🤷‍♂️</Text>
      <Text style={styles.message}>No products to be displayed</Text>
    </>
  )
}

export default EmptyListItem
