import { combineReducers } from 'redux'
import { revenuePerProductReducer } from './revenue-per-product-kpi/revenue-per-product.reducer'
import { salesByCategoryReducer } from './sales-by-category-kpi/sales-by-category.reducer'
import { salesPerRegionReducer } from './sales-Per-region-kpi/sales-per-region.reducer'
import { salesTrendReducer } from './sales-trend-kpi/sales-trend.reducer'


export const kpisRootReducer = combineReducers({
    revenuePerProduct: revenuePerProductReducer,
    salesByCategory: salesByCategoryReducer,
    salesPerRegion: salesPerRegionReducer,
    salesTrend: salesTrendReducer
})
