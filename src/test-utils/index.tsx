import React from 'react'
import { render, RenderOptions } from '@testing-library/react-native'
import { Provider } from 'react-redux'
import store from 'src/store'
import { NavigationProvider } from 'react-navigation'

const AllProviders = (props: React.PropsWithChildren<any>) => {
  return (
    <Provider store={store}>
      <NavigationProvider
        value={{ dispatch: () => true, state: {}, navigate: () => {} }}>
        {props.children}
      </NavigationProvider>
    </Provider>
  )
}

const customRender = (ui: React.ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: AllProviders, ...options })

export * from '@testing-library/react-native'

// override render method
export { customRender as render }
