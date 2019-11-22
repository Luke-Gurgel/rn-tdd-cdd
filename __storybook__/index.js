import { AppRegistry } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import { name as appName } from '../app.json'
import { getStorybookUI, configure } from '@storybook/react-native'
import { loadStories } from './story-loader'
import './rn-addons'

configure(() => {
  loadStories()
}, module)

const StorybookUIRoot = getStorybookUI({
  secured: true,
  asyncStorage: AsyncStorage,
  shouldDisableKeyboardAvoidingView: true,
})
AppRegistry.registerComponent(appName, () => StorybookUIRoot)

export default StorybookUIRoot
