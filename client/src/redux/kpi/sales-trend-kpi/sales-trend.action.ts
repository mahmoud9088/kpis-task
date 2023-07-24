import { ISalesTrend } from "./sales-trend.reducer"
import { FETCH_SALES_TREND_FAILED, FETCH_SALES_TREND_START, FETCH_SALES_TREND_SUCCESS } from "./sales-trend.types"



export const fetchSalesTrendStart = () => ({
    type: FETCH_SALES_TREND_START,
})

export const fetchSalesTrendSuccess = (data: ISalesTrend[]) => ({
    type: FETCH_SALES_TREND_SUCCESS,
    payload: data,
})

export const fetchSalesTrendFailed = (error: any) => ({
    type: FETCH_SALES_TREND_FAILED,
    error,
})
