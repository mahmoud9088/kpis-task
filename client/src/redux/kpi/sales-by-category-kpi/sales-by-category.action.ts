


// Sales By Category Actions

import { ISalesByCategory } from "./sales-by-category.reducer"
import { FETCH_SALES_BY_CATEGORY_FAILED, FETCH_SALES_BY_CATEGORY_START, FETCH_SALES_BY_CATEGORY_SUCCESS } from "./sales-by-category.types"

export const fetchSalesByCategoryStart = () => ({
    type: FETCH_SALES_BY_CATEGORY_START,
})

export const fetchSalesByCategorySuccess = (data: ISalesByCategory[]) => ({
    type: FETCH_SALES_BY_CATEGORY_SUCCESS,
    payload: data,
})

export const fetchSalesByCategoryFailed = (error: any) => ({
    type: FETCH_SALES_BY_CATEGORY_FAILED,
    error,
})
