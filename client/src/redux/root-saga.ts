import { all, call } from 'redux-saga/effects'
import { kpisRootSaga } from './kpi/kpis-root-saga'

export function* rootSaga() {
  yield all([
    call(kpisRootSaga),

  ])
}
