import React from 'react'
import { Provider } from 'react-redux'
import store from '../../src/store'
import { NavigationProvider as NavProvider } from 'react-navigation'

export const StoreProvider = (story: Function) => (
  <Provider store={store}>{story()}</Provider>
)

export const NavigationProvider = (story: Function) => (
  <NavProvider value={{ dispatch: () => true, state: {}, navigate: () => {} }}>
    {story()}
  </NavProvider>
)
