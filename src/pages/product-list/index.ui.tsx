import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import { FlatGrid } from 'react-native-super-grid'
import { useCavy } from 'cavy'
import Product from './product'
import EmptyListItem from './empty-list-item'
import styles from './styles'
import { productsLoading, productsEmpty, productsList } from './test-ids'
import { ProductInterface } from 'src/types'

interface Props {
  products: ProductInterface[]
  loading: boolean
}

const ProductListUI = ({ products, loading }: Props) => {
  const registerTestId = useCavy()
  const listTestId = registerTestId(productsList)
  const emptyTestId = registerTestId(productsEmpty)
  const loadingTestId = registerTestId(productsLoading)

  if (loading) {
    return (
      <View style={styles.centeredContainer} testID={productsLoading}>
        <ActivityIndicator size="large" ref={loadingTestId} />
      </View>
    )
  }

  if (!products.length) {
    return (
      <View
        ref={emptyTestId}
        testID={productsEmpty}
        style={styles.centeredContainer}>
        <EmptyListItem />
      </View>
    )
  }

  return (
    <View style={styles.container} ref={listTestId}>
      <FlatGrid
        items={products}
        style={styles.gridView}
        itemContainerStyle={styles.itemContainer}
        renderItem={({ item }) => <Product product={item} />}
      />
    </View>
  )
}

export default ProductListUI

/*
  Folder structure

  - pages
    - login
    - signup
    - onboarding
    - home
    - preferences
    - goals

*/
