import { all, call } from 'redux-saga/effects'
import { revenuePerProductSaga } from './revenue-per-product-kpi/revenue-per-product.saga'
import { salesPerRegionSaga } from './sales-Per-region-kpi/sales-per-region.saga'
import { salesByCategorySaga } from './sales-by-category-kpi/sales-by-category.saga'
import { salesTrendSaga } from './sales-trend-kpi/sales-trend.saga'


export function* kpisRootSaga() {
    yield all([
        call(revenuePerProductSaga),
        call(salesPerRegionSaga),
        call(salesByCategorySaga),
        call(salesTrendSaga),
    ])
}
