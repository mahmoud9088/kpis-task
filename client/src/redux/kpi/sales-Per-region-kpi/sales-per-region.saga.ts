import { gql, ApolloQueryResult } from '@apollo/client'
import { takeEvery, takeLatest, all, call, put } from 'redux-saga/effects'
import client from '../../../utils/apolloClient';
import { fetchSalesPerRegionFailed, fetchSalesPerRegionSuccess } from './sales-per-region.action';
import { FETCH_SALES_PER_REGION_START } from './sales-per-region.types';
import { ISalesPerRegion } from './sales-per-region.reducer';


// Sales Per Region Saga

interface ISalesByRegionResponse {
    salesPerRegion: ISalesPerRegion[]
}


export function* fetchSalesPerRegionAsync() {
    try {
        const query = gql`
      query GetSalesPerRegion {
        salesPerRegion {
          _id
          count
        }
      }
    `
        const response: ApolloQueryResult<ISalesByRegionResponse> = yield call(client.query, { query })
        yield put(fetchSalesPerRegionSuccess(response.data.salesPerRegion))
    } catch (error) {
        yield put(fetchSalesPerRegionFailed(error))
    }
}

export function* onFetchFetchSalesPerRegion() {
    yield takeLatest(
        FETCH_SALES_PER_REGION_START,
        fetchSalesPerRegionAsync
    )
}

export function* salesPerRegionSaga() {
    yield all([call(onFetchFetchSalesPerRegion)])
}

