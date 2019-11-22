import { createStackNavigator } from 'react-navigation-stack'
import ProductList from 'src/pages/product-list'
import ProductDetail from 'src/pages/product-detail'
import { defaultNavigationOptions } from './defaults'

export default createStackNavigator(
  {
    ProductList: {
      screen: ProductList,
      navigationOptions: {
        ...defaultNavigationOptions,
        title: 'Products',
        headerBackTitle: 'products',
      },
    },
    ProductDetail: {
      screen: ProductDetail,
      navigationOptions: ({ navigation }) => ({
        ...defaultNavigationOptions,
        title: navigation.state.params.product.title,
      }),
    },
  },
  {
    initialRouteName: 'ProductList',
  },
)
