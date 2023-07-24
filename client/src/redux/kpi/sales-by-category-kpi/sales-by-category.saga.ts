import { gql, ApolloQueryResult } from '@apollo/client'
import { takeEvery, takeLatest, all, call, put } from 'redux-saga/effects'
import { fetchSalesByCategoryFailed, fetchSalesByCategorySuccess } from './sales-by-category.action';
import { FETCH_SALES_BY_CATEGORY_START } from './sales-by-category.types';
import client from '../../../utils/apolloClient';
import { ISalesByCategory } from './sales-by-category.reducer';

interface ISalesByCategoryResponse {
    salesByCategory: ISalesByCategory[]
}

export function* fetchSalesByCategoryAsync() {
    const query = gql`
    query GetSalesByCategory {
      salesByCategory {
        _id
        count
      }
    }
  `
    try {
        const response: ApolloQueryResult<ISalesByCategoryResponse> = yield call(client.query, { query })
        yield put(fetchSalesByCategorySuccess(response?.data?.salesByCategory))
    } catch (error) {
        yield put(fetchSalesByCategoryFailed(error))
    }
}

export function* onFetchSalesByCategory() {
    yield takeLatest(
        FETCH_SALES_BY_CATEGORY_START,
        fetchSalesByCategoryAsync
    )
}

export function* salesByCategorySaga() {
    yield all([call(onFetchSalesByCategory)])
}














