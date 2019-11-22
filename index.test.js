import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import { name as appName } from './app.json'
import { Tester, TestHookStore } from 'cavy'
import productsList from './__e2e__/product-list.spec'
import productDetail from './__e2e__/product-detail.spec'
import App from './App'

const testHookStore = new TestHookStore()

class AppWrapper extends Component {
  render() {
    return (
      <Tester specs={[productsList, productDetail]} store={testHookStore}>
        <App />
      </Tester>
    )
  }
}

AppRegistry.registerComponent(appName, () => AppWrapper)
