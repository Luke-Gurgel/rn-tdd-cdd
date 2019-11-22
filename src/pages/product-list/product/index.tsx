import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { useSelector } from 'react-redux'
import { useNavigation } from 'react-navigation-hooks'
import { ProductInterface } from 'src/types'
import { RootState } from 'src/store/root-state'
import { formatProductPrice } from './helpers'
import { makeTestId } from 'src/utils/make-test-id'
import { useCavy } from 'cavy'
import styles from './styles'

interface Props {
  product: ProductInterface
}

const Product = ({ product }: Props) => {
  const registerTestId = useCavy()
  const testId = registerTestId(
    makeTestId(product.title, 'product-list/product/'),
  )

  const { navigate } = useNavigation()
  const budget = useSelector((state: RootState) => state.budget)

  const formattedPrice = formatProductPrice(product.price)
  const message = product.price > budget ? 'too expensive' : 'within reach!'

  const onPress = () => navigate('ProductDetail', { product })

  return (
    <TouchableOpacity
      ref={testId}
      onPress={onPress}
      activeOpacity={0.7}
      style={styles.container}>
      <Text ellipsizeMode="tail" numberOfLines={1} style={styles.productTitle}>
        {product.title}
      </Text>
      <Text style={styles.productPrice}>{formattedPrice}</Text>
      <Text style={styles.message}>{message}</Text>
    </TouchableOpacity>
  )
}

export default Product
