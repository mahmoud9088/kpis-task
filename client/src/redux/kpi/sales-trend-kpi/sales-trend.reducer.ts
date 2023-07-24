import { FETCH_SALES_TREND_FAILED, FETCH_SALES_TREND_START, FETCH_SALES_TREND_SUCCESS } from './sales-trend.types'

export interface ISalesTrend {
    _id: string
    sales: number
}

interface IState {
    salesTrendData: ISalesTrend[],
    salesTrendIsLoading: boolean,
    salesTrendError: string | null,
}

export const INITIAL_STATE: IState = {
    salesTrendData: [],
    salesTrendIsLoading: false,
    salesTrendError: null,
}

export const salesTrendReducer = (state: IState = INITIAL_STATE, action: { type?: string, payload?: any } = {}) => {
    const { type, payload } = action

    switch (type) {
        case FETCH_SALES_TREND_START:
            return { ...state, salesTrendIsLoading: true }
        case FETCH_SALES_TREND_SUCCESS:
            return {
                ...state,
                salesTrendData: payload,
                salesTrendIsLoading: false,
            }
        case FETCH_SALES_TREND_FAILED:
            return {
                ...state,
                salesTrendError: payload,
                salesTrendIsLoading: false,
            }

        default:
            return state
    }
}
