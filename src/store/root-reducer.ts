import { combineReducers } from 'redux'
import { rootState, ProductsState } from './root-state'

interface Action {
  type: string
  payload?: any
}

function budgetReducer(state = rootState.budget): number {
  return state
}

function productsReducer(
  state = rootState.products,
  action: Action,
): ProductsState {
  switch (action.type) {
    case 'fetch_products_error':
      return {
        ...state,
        loading: false,
      }
    case 'fetch_products_success':
      return {
        ...state,
        loading: false,
        list: action.payload,
      }
    default:
      return state
  }
}

export const rootReducer = combineReducers({
  budget: budgetReducer,
  products: productsReducer,
})
