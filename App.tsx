import React from 'react'
import { Provider } from 'react-redux'
import store from './src/store'
import RootNavigator from './src/navigators/root'
import StorybookUI from './__storybook__'

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  )
}

export default App
// export default __DEV__ ? StorybookUI : App
