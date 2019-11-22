import { createStore, applyMiddleware, compose } from 'redux'
import { rootReducer } from './root-reducer'
import { rootState } from './root-state'
import { epicMiddleware, rootEpic } from './middleware'

global.window = global
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export function configureStore() {
  const store = createStore(
    rootReducer,
    rootState,
    composeEnhancers(applyMiddleware(epicMiddleware)),
  )

  epicMiddleware.run(rootEpic)

  return store
}
