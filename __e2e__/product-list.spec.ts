import { TestScope } from 'cavy'
import {
  product,
  productsList,
  productsLoading,
} from '../src/pages/product-list/test-ids'
import { productDetail } from 'src/pages/product-detail/test-ids'

export default function(spec: TestScope) {
  spec.describe('Product list screen', () => {
    spec.it(
      'renders loading indicator while products are being fetched',
      async () => {
        await spec.exists(productsLoading)
      },
    )

    spec.it('renders products within 2s', async () => {
      await spec.exists(productsList)
      await spec.exists(product + 'hat')
      await spec.exists(product + 'game')
      await spec.exists(product + 'shoes')
      await spec.exists(product + 'soccer-ball')
      await spec.exists(product + 'barcelona-shirt')
    })

    spec.it('transitions to detail screen on product click', async () => {
      await spec.pause(2000)
      await spec.press(product + 'hat')
      await spec.exists(productDetail)
    })
  })
}
