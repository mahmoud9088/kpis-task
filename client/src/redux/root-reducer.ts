import { combineReducers } from 'redux'
import { kpisRootReducer } from './kpi/kpis-root-reducer'

export const rootReducer = combineReducers({
  kpis: kpisRootReducer,
})
