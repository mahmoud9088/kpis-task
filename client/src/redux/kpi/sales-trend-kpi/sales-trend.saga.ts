import { gql, ApolloQueryResult } from '@apollo/client'

import { takeEvery, takeLatest, all, call, put } from 'redux-saga/effects'
// import { ISalesTrend } from './sales-trend.reducer'
import { fetchSalesTrendFailed, fetchSalesTrendSuccess } from './sales-trend.action'
import client from '../../../utils/apolloClient'
import { FETCH_SALES_TREND_START } from './sales-trend.types'
import { ISalesTrend } from './sales-trend.reducer'

// Sales Trend Saga

interface ISalesTrendResponse {
    salesTrend: ISalesTrend[]
}

export function* fetchSalesTrendAsync() {
    const query = gql`
    query GetSalesTrend {
      salesTrend {
        _id
        sales
      }
    }
  `
    try {
        const response: ApolloQueryResult<ISalesTrendResponse> = yield call(client.query, { query })
        yield put(fetchSalesTrendSuccess(response?.data?.salesTrend))
    } catch (error) {
        yield put(fetchSalesTrendFailed(error as Error))
    }
}

export function* onFetchSalesTrend() {
    yield takeLatest(
        FETCH_SALES_TREND_START,
        fetchSalesTrendAsync
    )
}

export function* salesTrendSaga() {
    yield all([call(onFetchSalesTrend)])
}
