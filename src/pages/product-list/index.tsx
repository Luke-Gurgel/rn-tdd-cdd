import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from 'src/store/root-state'
import ProductListUI from './index.ui'

const ProductList = () => {
  const { list, loading } = useSelector((state: RootState) => state.products)
  const dispatch = useDispatch()

  useEffect(() => {
    if (loading) dispatch({ type: 'fetch_products' })
  }, [dispatch, loading])

  return <ProductListUI products={list} loading={loading} />
}

export default ProductList
