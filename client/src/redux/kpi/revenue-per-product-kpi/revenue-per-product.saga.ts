import { gql, ApolloQueryResult } from '@apollo/client'
import { takeEvery, takeLatest, all, call, put } from 'redux-saga/effects'
import { fetchRevenuePerProductFailed, fetchRevenuePerProductSuccess } from './revenue-per-product.action';
import { FETCH_REVENUE_PER_PRODUCT_START } from './revenue-per-product.types';
import client from '../../../utils/apolloClient';

// Revenue Per Product Saga

interface IRevenuePerProduct {
    _id: string;
    totalRevenue: number;
}

interface IRevenuePerProductsResponse {
    revenuePerProducts: IRevenuePerProduct[]
}


export function* fetchRevenuePerProductAsync() {
    try {
        const query = gql`
      query GetRevenuePerProducts {
        revenuePerProducts {
          _id
          totalRevenue
        }
      }
    `
        const response: ApolloQueryResult<IRevenuePerProductsResponse> = yield call(client.query, { query })
        yield put(fetchRevenuePerProductSuccess(response?.data?.revenuePerProducts))
    } catch (error) {
        yield put(fetchRevenuePerProductFailed(error))
    }
}

export function* onFetchRevenuePerProduct() {
    yield takeLatest(
        FETCH_REVENUE_PER_PRODUCT_START,
        fetchRevenuePerProductAsync
    )
}

export function* revenuePerProductSaga() {
    yield all([call(onFetchRevenuePerProduct)])
}
