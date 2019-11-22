import { Platform } from 'react-native'

export function formatProductPrice(price: number): string {
  if (Platform.OS === 'android') {
    return '$' + price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  return price.toLocaleString('en', { style: 'currency', currency: 'USD' })
}
