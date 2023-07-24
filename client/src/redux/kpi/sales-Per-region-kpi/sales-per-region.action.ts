
// Sales By Category Actions

import { ISalesPerRegion } from "./sales-per-region.reducer"
import { FETCH_SALES_PER_REGION_FAILED, FETCH_SALES_PER_REGION_START, FETCH_SALES_PER_REGION_SUCCESS } from "./sales-per-region.types"

export const fetchSalesPerRegionStart = () => ({
    type: FETCH_SALES_PER_REGION_START,
})

export const fetchSalesPerRegionSuccess = (data: ISalesPerRegion[]) => ({
    type: FETCH_SALES_PER_REGION_SUCCESS,
    payload: data,
})

export const fetchSalesPerRegionFailed = (error: any) => ({
    type: FETCH_SALES_PER_REGION_FAILED,
    error,
})




