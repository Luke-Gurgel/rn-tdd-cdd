import React from 'react'
import { View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingVertical: 20,
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
  },
})

export const PageContainer = (story: Function) => (
  <View style={styles.page}>{story()}</View>
)
