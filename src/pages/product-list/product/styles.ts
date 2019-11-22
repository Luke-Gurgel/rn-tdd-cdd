import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    width: 140,
    borderRadius: 6,
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  productTitle: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  productPrice: {
    marginVertical: 4,
  },
  message: {
    fontStyle: 'italic',
    color: '#666',
  },
})
