import { IRevenuePerProduct } from "./revenue-per-product.reducer"
import { FETCH_REVENUE_PER_PRODUCT_FAILED, FETCH_REVENUE_PER_PRODUCT_START, FETCH_REVENUE_PER_PRODUCT_SUCCESS } from "./revenue-per-product.types"


// Revenue Per Product Kpi Actions

export const fetchRevenuePerProductStart = () => ({
    type: FETCH_REVENUE_PER_PRODUCT_START,
})

export const fetchRevenuePerProductSuccess = (data: IRevenuePerProduct[]) => ({
    type: FETCH_REVENUE_PER_PRODUCT_SUCCESS,
    payload: data,
})

export const fetchRevenuePerProductFailed = (error: any) => ({
    type: FETCH_REVENUE_PER_PRODUCT_FAILED,
    error,
})