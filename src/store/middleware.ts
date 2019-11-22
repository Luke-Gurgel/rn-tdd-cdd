import {
  Epic,
  ofType,
  combineEpics,
  createEpicMiddleware,
} from 'redux-observable'
import { mergeMap, catchError, map } from 'rxjs/operators'
import { of } from 'rxjs'

const fetchProductsEpic: Epic = action$ =>
  action$.pipe(
    ofType('fetch_products'),
    mergeMap(() => fetch('http://www.mocky.io/v2/5dd307cc3300002a007a3fcd')),
    mergeMap((res: any) => res.json()),
    map((res: any) => ({
      type: 'fetch_products_success',
      payload: res.products,
    })),
    catchError(() => of({ type: 'fetch_products_error' })),
  )

export const rootEpic = combineEpics(fetchProductsEpic)
export const epicMiddleware = createEpicMiddleware()
